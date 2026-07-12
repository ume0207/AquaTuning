const toast = document.querySelector("#toast");
const sidebar = document.querySelector("#sidebar");
const drawerScrim = document.querySelector("#drawer-scrim");
let toastTimer;
let currentCategory = new URLSearchParams(window.location.search).get("tab") || "talk";
const categories = ["talk", "contents", "overview"];

const threads = {
  welcome: { title: "はじめに", description: "Aqua Tuning Talkへようこそ", label: "WELCOME", posts: [{ author: "水野 講師", role: "講師", avatar: "水", avatarClass: "avatar-instructor", time: "昨日", body: "Aqua Tuning Talkへようこそ。ここでは、気づきや質問をスレッドごとにシェアできます。まずは気になるスレッドを選んで、ゆっくり参加してみてください。", quote: "心地よく学べる場を、みんなでつくっていきましょう。" }] },
  about: { title: "Aqua Tuningについて", description: "メソッドや道具について話すスレッド", label: "ABOUT", posts: [{ author: "水野 講師", role: "講師", avatar: "水", avatarClass: "avatar-instructor", time: "2日前", body: "Aqua Tuningについて知りたいこと、感じたことを自由に書いてください。道具のこと、音や振動のこと、日常での取り入れ方など、どんな内容でも大丈夫です。" }] },
  questions: { title: "質問・相談", description: "わからないことを気軽に質問できます", label: "QUESTIONS", posts: [{ author: "田村 里奈", role: "受講生", avatar: "田", avatarClass: "avatar-tamura", time: "3時間前", body: "みなさんに質問です。自宅で使うときの音の大きさや時間の目安があれば教えてください。" }, { author: "水野 講師", role: "講師", avatar: "水", avatarClass: "avatar-instructor", time: "1時間前", body: "ご質問ありがとうございます。まずは無理のない音量で、30秒ほどから始めてみてください。心地よさを基準に調整しましょう。" }] },
  practice: { title: "実践シェア", description: "日々の気づきや実践をシェアする場所", label: "PRACTICE", posts: [{ author: "田村 里奈", role: "受講生", avatar: "田", avatarClass: "avatar-tamura", time: "2時間前", body: "今日は朝の支度前に短い時間だけ実践しました。呼吸に意識を向けるきっかけになってよかったです。" }] },
  voice: { title: "受講生の声", description: "感じたこと、変化、うれしかったこと", label: "VOICE", posts: [{ author: "佐藤 美香", role: "受講生", avatar: "佐", avatarClass: "avatar-user", time: "昨日", body: "続けていると、自分の状態を立ち止まって感じる時間が増えました。小さな変化をシェアします。" }] },
  news: { title: "お知らせ", description: "運営からの最新情報", label: "NEWS", posts: [{ author: "Aqua Tuning 運営", role: "運営", avatar: "A", avatarClass: "avatar-instructor", time: "2日前", body: "Talkをオープンしました。今後のお知らせはこのスレッドに投稿します。" }] },
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function closeDrawer() {
  sidebar.classList.remove("open");
  drawerScrim.hidden = true;
}

function openDrawer() {
  sidebar.classList.add("open");
  drawerScrim.hidden = false;
}

function closePopovers() {
  document.querySelectorAll(".profile-popover, .notification-popover").forEach((popover) => { popover.hidden = true; });
}

function setCategory(category, updateUrl = true) {
  if (!categories.includes(category)) category = "talk";
  currentCategory = category;
  document.querySelectorAll("[data-category]").forEach((button) => {
    const selected = button.dataset.category === category;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
  document.querySelectorAll("[data-category-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.categoryPanel !== category;
  });
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", category);
    url.searchParams.delete("thread");
    window.history.replaceState({}, "", url);
  }
}

function getSavedPosts(threadId) {
  return JSON.parse(localStorage.getItem(`aqua-thread-posts-${threadId}`) || "[]");
}

function renderPost(post) {
  const card = document.createElement("article");
  card.className = "post-card";
  const tag = post.role === "講師" ? "instructor-tag" : "member-tag";
  card.innerHTML = `<div class="post-head"><div class="avatar ${post.avatarClass}"></div><div><p class="post-author"></p><p class="post-time"></p></div><button class="more-button" aria-label="投稿メニュー">•••</button></div><p class="post-body"></p>${post.quote ? `<div class="post-quote"><span>“</span><div><strong>メッセージ</strong><p></p></div></div>` : ""}<div class="post-footer"><button class="reaction-button" data-reaction>♡ <span>${post.reactions || 0}</span></button><button class="comment-button">◌ コメント</button></div>`;
  card.querySelector(".avatar").textContent = post.avatar;
  card.querySelector(".post-author").innerHTML = `${post.author} <span class="${tag}">${post.role}</span>`;
  card.querySelector(".post-time").textContent = post.time;
  card.querySelector(".post-body").textContent = post.body;
  if (post.quote) card.querySelector(".post-quote p").textContent = post.quote;
  card.querySelector("[data-reaction]").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const count = button.querySelector("span");
    button.classList.toggle("liked");
    count.textContent = Number(count.textContent) + (button.classList.contains("liked") ? 1 : -1);
  });
  return card;
}

function openThread(threadId, updateUrl = true) {
  const thread = threads[threadId] || threads.welcome;
  document.querySelectorAll("[data-category-panel]").forEach((panel) => { panel.hidden = true; });
  document.querySelector("#thread-detail").hidden = false;
  document.querySelector("#thread-label").textContent = thread.label;
  document.querySelector("#thread-title").textContent = thread.title;
  document.querySelector("#thread-description").textContent = thread.description;
  const posts = document.querySelector("#thread-posts");
  posts.replaceChildren(...[...thread.posts, ...getSavedPosts(threadId)].map(renderPost));
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("thread", threadId);
    window.history.replaceState({}, "", url);
  }
  closeDrawer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showThreadList(updateUrl = true) {
  document.querySelector("#thread-detail").hidden = true;
  setCategory(currentCategory, false);
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", currentCategory);
    url.searchParams.delete("thread");
    window.history.replaceState({}, "", url);
  }
  closeDrawer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => {
  showThreadList(false);
  setCategory(button.dataset.category);
}));
document.querySelectorAll("[data-thread]").forEach((button) => button.addEventListener("click", () => openThread(button.dataset.thread)));
document.querySelectorAll("[data-thread-list]").forEach((button) => button.addEventListener("click", showThreadList));
document.querySelector("#thread-back").addEventListener("click", () => showThreadList());
document.querySelector("#mobile-menu").addEventListener("click", openDrawer);
drawerScrim.addEventListener("click", closeDrawer);

document.querySelector("#profile-button").addEventListener("click", (event) => {
  event.stopPropagation();
  const popover = document.querySelector("#profile-popover");
  const wasHidden = popover.hidden;
  closePopovers();
  popover.hidden = !wasHidden;
});
document.querySelector("#notification-button").addEventListener("click", (event) => {
  event.stopPropagation();
  const popover = document.querySelector("#notification-popover");
  const wasHidden = popover.hidden;
  closePopovers();
  popover.hidden = !wasHidden;
});
document.addEventListener("click", closePopovers);
document.querySelectorAll("[data-toast]").forEach((button) => button.addEventListener("click", () => showToast(button.dataset.toast)));

document.querySelector("#thread-post-button").addEventListener("click", () => {
  const input = document.querySelector("#thread-input");
  const threadId = new URLSearchParams(window.location.search).get("thread") || "welcome";
  const text = input.value.trim();
  if (!text) return showToast("投稿内容を入力してください");
  const saved = getSavedPosts(threadId);
  saved.push({ author: "上萩 環", role: "受講生", avatar: "上", avatarClass: "avatar-user", time: "たった今", body: text });
  localStorage.setItem(`aqua-thread-posts-${threadId}`, JSON.stringify(saved));
  input.value = "";
  openThread(threadId, false);
  showToast("スレッドに投稿しました");
});

const initialThread = new URLSearchParams(window.location.search).get("thread");
setCategory(currentCategory, false);
if (initialThread && threads[initialThread]) openThread(initialThread, false);
