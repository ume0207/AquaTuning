const views = ["talk", "contents", "overview"];
const toast = document.querySelector("#toast");
const postStorageKey = "aquatuning-posts-v1";
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function switchView(view, updateUrl = true) {
  if (!views.includes(view)) return;
  document.querySelectorAll("[data-view]").forEach((button) => {
    const selected = button.dataset.view === view;
    button.classList.toggle("active", selected && (button.classList.contains("tab") || button.classList.contains("side-link")));
    if (button.classList.contains("tab")) button.setAttribute("aria-selected", String(selected));
  });
  views.forEach((name) => {
    const panel = document.querySelector(`#view-${name}`);
    const isCurrent = name === view;
    panel.hidden = !isCurrent;
    panel.classList.toggle("active", isCurrent);
  });
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", view);
    window.history.replaceState({}, "", url);
  }
  document.querySelector(".sidebar")?.classList.remove("open");
}

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
document.querySelectorAll("[data-toast]").forEach((button) => button.addEventListener("click", () => showToast(button.dataset.toast)));

document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  const filter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach((chip) => chip.classList.toggle("active", chip === button));
  document.querySelectorAll(".lesson-card[data-type]").forEach((lesson) => {
    lesson.hidden = filter !== "all" && lesson.dataset.type !== filter;
  });
}));

function closePopovers() {
  document.querySelectorAll(".profile-popover, .notification-popover").forEach((popover) => { popover.hidden = true; });
}

document.querySelector("#profile-button")?.addEventListener("click", (event) => {
  event.stopPropagation();
  const popover = document.querySelector("#profile-popover");
  const wasHidden = popover.hidden;
  closePopovers();
  popover.hidden = !wasHidden;
});

document.querySelector("#notification-button")?.addEventListener("click", (event) => {
  event.stopPropagation();
  const popover = document.querySelector("#notification-popover");
  const wasHidden = popover.hidden;
  closePopovers();
  popover.hidden = !wasHidden;
});

document.addEventListener("click", closePopovers);

document.querySelector(".dismiss-button")?.addEventListener("click", (event) => {
  event.currentTarget.closest(".notice-card").remove();
  showToast("お知らせを閉じました");
});

function bindReaction(button) {
  button.addEventListener("click", () => {
    const count = button.querySelector("span");
    button.classList.toggle("liked");
    count.textContent = Number(count.textContent) + (button.classList.contains("liked") ? 1 : -1);
  });
}

document.querySelectorAll("[data-reaction]").forEach(bindReaction);

function buildPost(text, time = "たった今") {
  const post = document.createElement("article");
  post.className = "post-card local-post";
  post.innerHTML = `<div class="post-head"><div class="avatar avatar-user">上</div><div><p class="post-author">上萩 環 <span class="member-tag">受講生</span></p><p class="post-time"></p></div><button class="more-button" aria-label="投稿メニュー">•••</button></div><p class="post-body"></p><div class="post-footer"><button class="reaction-button" data-reaction>♡ <span>0</span></button><button class="comment-button">◌ コメント</button></div>`;
  post.querySelector(".post-time").textContent = time;
  post.querySelector(".post-body").textContent = text;
  bindReaction(post.querySelector("[data-reaction]"));
  return post;
}

document.querySelector("#post-button")?.addEventListener("click", () => {
  const input = document.querySelector("#post-input");
  const text = input.value.trim();
  if (!text) return showToast("投稿内容を入力してください");
  document.querySelector("#feed").prepend(buildPost(text));
  const savedPosts = JSON.parse(localStorage.getItem(postStorageKey) || "[]");
  savedPosts.unshift({ text, time: "たった今" });
  localStorage.setItem(postStorageKey, JSON.stringify(savedPosts.slice(0, 20)));
  input.value = "";
  showToast("トークに投稿しました");
});

function restorePosts() {
  const savedPosts = JSON.parse(localStorage.getItem(postStorageKey) || "[]");
  savedPosts.reverse().forEach(({ text, time }) => document.querySelector("#feed").append(buildPost(text, time)));
}

function restoreLessons() {
  const completed = JSON.parse(localStorage.getItem("aquatuning-completed-lessons") || "[1, 2]");
  document.querySelectorAll("[data-lesson]").forEach((lesson) => {
    if (completed.includes(Number(lesson.dataset.lesson))) lesson.classList.add("done-locally");
  });
}

document.querySelectorAll("[data-lesson]").forEach((lesson) => lesson.addEventListener("dblclick", () => {
  const id = Number(lesson.dataset.lesson);
  const completed = JSON.parse(localStorage.getItem("aquatuning-completed-lessons") || "[1, 2]");
  if (!completed.includes(id)) completed.push(id);
  localStorage.setItem("aquatuning-completed-lessons", JSON.stringify(completed));
  lesson.classList.add("done-locally");
  showToast(`Lesson ${String(id).padStart(2, "0")}を完了にしました`);
}));

document.querySelector(".mobile-menu")?.addEventListener("click", () => document.querySelector(".sidebar")?.classList.toggle("open"));

const requestedTab = new URLSearchParams(window.location.search).get("tab");
switchView(views.includes(requestedTab) ? requestedTab : "talk", false);
restorePosts();
restoreLessons();
