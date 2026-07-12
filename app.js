const toast = document.querySelector("#toast");
let toastTimer;
const categories = ["talk", "contents", "intro"];
let currentCategory = new URLSearchParams(window.location.search).get("tab") || "talk";

const threads = {
  welcome: { title: "はじめに", description: "Aqua Tuning Talkへようこそ", label: "WELCOME", posts: [{ author: "水野 講師", role: "講師", avatar: "水", avatarClass: "avatar-instructor", time: "昨日", body: "Aqua Tuning Talkへようこそ。ここでは、気づきや質問をスレッドごとにシェアできます。まずは気になるスレッドを選んで、ゆっくり参加してみてください。", quote: "心地よく学べる場を、みんなでつくっていきましょう。" }] },
  about: { title: "Aqua Tuningについて", description: "メソッドや道具について話すスレッド", label: "ABOUT", posts: [{ author: "水野 講師", role: "講師", avatar: "水", avatarClass: "avatar-instructor", time: "2日前", body: "Aqua Tuningについて知りたいこと、感じたことを自由に書いてください。道具のこと、音や振動のこと、日常での取り入れ方など、どんな内容でも大丈夫です。" }] },
  questions: { title: "質問・相談", description: "わからないことを気軽に質問できます", label: "QUESTIONS", posts: [{ author: "田村 里奈", role: "受講生", avatar: "田", avatarClass: "avatar-tamura", time: "3時間前", body: "みなさんに質問です。自宅で使うときの音の大きさや時間の目安があれば教えてください。" }, { author: "水野 講師", role: "講師", avatar: "水", avatarClass: "avatar-instructor", time: "1時間前", body: "ご質問ありがとうございます。まずは無理のない音量で、30秒ほどから始めてみてください。心地よさを基準に調整しましょう。" }] },
  practice: { title: "実践シェア", description: "日々の気づきや実践をシェアする場所", label: "PRACTICE", posts: [{ author: "田村 里奈", role: "受講生", avatar: "田", avatarClass: "avatar-tamura", time: "2時間前", body: "今日は朝の支度前に短い時間だけ実践しました。呼吸に意識を向けるきっかけになってよかったです。" }] },
  voice: { title: "受講生の声", description: "感じたこと、変化、うれしかったこと", label: "VOICE", posts: [{ author: "佐藤 美香", role: "受講生", avatar: "佐", avatarClass: "avatar-user", time: "昨日", body: "続けていると、自分の状態を立ち止まって感じる時間が増えました。小さな変化をシェアします。" }] },
  news: { title: "お知らせ", description: "運営からの最新情報", label: "NEWS", posts: [{ author: "Aqua Tuning 運営", role: "運営", avatar: "A", avatarClass: "avatar-instructor", time: "2日前", body: "Talkをオープンしました。今後のお知らせはこのスレッドに投稿します。" }] },
};

function showToast(message) { toast.textContent = message; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2300); }
function savedPosts(id) { return JSON.parse(localStorage.getItem(`aqua-thread-posts-${id}`) || "[]"); }

function setCategory(category, updateUrl = true) {
  if (!categories.includes(category)) category = "talk";
  currentCategory = category;
  document.querySelectorAll("[data-category]").forEach((button) => {
    const active = button.dataset.category === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-category-panel]").forEach((panel) => { panel.hidden = panel.dataset.categoryPanel !== category; });
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", category);
    url.searchParams.delete("thread");
    window.history.replaceState({}, "", url);
  }
}

function renderPost(post) {
  const card = document.createElement("article");
  card.className = "post-card";
  const tagClass = post.role === "講師" || post.role === "運営" ? "instructor-tag" : "member-tag";
  card.innerHTML = `<div class="post-head"><div class="user-icon ${post.avatarClass}"></div><div><p class="post-author"></p><p class="post-time"></p></div><button class="more-button" aria-label="投稿メニュー">•••</button></div><p class="post-body"></p>${post.quote ? `<div class="post-quote"><span>“</span><div><strong>メッセージ</strong><p></p></div></div>` : ""}<div class="post-footer"><button class="reaction-button" data-reaction>♡ <span>${post.reactions || 0}</span></button><button class="comment-button">◌ コメント</button></div>`;
  card.querySelector(".user-icon").textContent = post.avatar;
  card.querySelector(".post-author").innerHTML = `${post.author} <span class="${tagClass}">${post.role}</span>`;
  card.querySelector(".post-time").textContent = post.time;
  card.querySelector(".post-body").textContent = post.body;
  if (post.quote) card.querySelector(".post-quote p").textContent = post.quote;
  card.querySelector("[data-reaction]").addEventListener("click", (event) => {
    const button = event.currentTarget; const count = button.querySelector("span");
    button.classList.toggle("liked"); count.textContent = Number(count.textContent) + (button.classList.contains("liked") ? 1 : -1);
  });
  return card;
}

function openThread(id, updateUrl = true) {
  const thread = threads[id] || threads.welcome;
  document.querySelectorAll("[data-category-panel]").forEach((panel) => { panel.hidden = true; });
  document.querySelector("#thread-detail").hidden = false;
  document.querySelector("#thread-label").textContent = thread.label;
  document.querySelector("#thread-title").textContent = thread.title;
  document.querySelector("#thread-description").textContent = thread.description;
  const posts = document.querySelector("#thread-posts");
  posts.replaceChildren(...[...thread.posts, ...savedPosts(id)].map(renderPost));
  if (updateUrl) { const url = new URL(window.location.href); url.searchParams.set("thread", id); url.searchParams.set("tab", currentCategory); window.history.replaceState({}, "", url); }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCategory() {
  document.querySelector("#thread-detail").hidden = true;
  setCategory(currentCategory, true);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => { document.querySelector("#thread-detail").hidden = true; setCategory(button.dataset.category); }));
document.querySelectorAll("[data-thread]").forEach((button) => button.addEventListener("click", () => openThread(button.dataset.thread)));
document.querySelector("#thread-back")?.addEventListener("click", showCategory);
document.querySelectorAll("[data-toast]").forEach((button) => button.addEventListener("click", () => showToast(button.dataset.toast)));

document.querySelector("#thread-post-button")?.addEventListener("click", () => {
  const input = document.querySelector("#thread-input");
  const id = new URLSearchParams(window.location.search).get("thread") || "welcome";
  const text = input.value.trim();
  if (!text) return showToast("投稿内容を入力してください");
  const posts = savedPosts(id); posts.push({ author: "上萩 環", role: "受講生", avatar: "上", avatarClass: "user-icon", time: "たった今", body: text });
  localStorage.setItem(`aqua-thread-posts-${id}`, JSON.stringify(posts)); input.value = ""; openThread(id, false); showToast("スレッドに投稿しました");
});

const requestedTab = new URLSearchParams(window.location.search).get("tab");
currentCategory = requestedTab === "overview" ? "intro" : requestedTab;
setCategory(currentCategory, false);
const requestedThread = new URLSearchParams(window.location.search).get("thread");
if (requestedThread && threads[requestedThread]) openThread(requestedThread, false);
