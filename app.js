const views = ["talk", "contents", "overview"];
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function switchView(view) {
  if (!views.includes(view)) return;
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view && (button.classList.contains("tab") || button.classList.contains("side-link")));
    if (button.classList.contains("tab")) button.setAttribute("aria-selected", String(button.dataset.view === view));
  });
  views.forEach((name) => {
    const panel = document.querySelector(`#view-${name}`);
    const isCurrent = name === view;
    panel.hidden = !isCurrent;
    panel.classList.toggle("active", isCurrent);
  });
  document.querySelector(".sidebar")?.classList.remove("open");
}

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
document.querySelectorAll("[data-toast]").forEach((button) => button.addEventListener("click", () => showToast(button.dataset.toast)));

document.querySelector(".dismiss-button")?.addEventListener("click", (event) => {
  event.currentTarget.closest(".notice-card").remove();
  showToast("お知らせを閉じました");
});

document.querySelectorAll("[data-reaction]").forEach((button) => button.addEventListener("click", () => {
  const count = button.querySelector("span");
  button.classList.toggle("liked");
  count.textContent = Number(count.textContent) + (button.classList.contains("liked") ? 1 : -1);
}));

document.querySelector("#post-button")?.addEventListener("click", () => {
  const input = document.querySelector("#post-input");
  const text = input.value.trim();
  if (!text) return showToast("投稿内容を入力してください");
  const post = document.createElement("article");
  post.className = "post-card";
  post.innerHTML = `<div class="post-head"><div class="avatar avatar-user">上</div><div><p class="post-author">上萩 環 <span class="member-tag">受講生</span></p><p class="post-time">たった今</p></div><button class="more-button" aria-label="投稿メニュー">•••</button></div><p class="post-body"></p><div class="post-footer"><button class="reaction-button" data-reaction>♡ <span>0</span></button><button class="comment-button">◌ コメント</button></div>`;
  post.querySelector(".post-body").textContent = text;
  post.querySelector("[data-reaction]").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const count = button.querySelector("span");
    button.classList.toggle("liked");
    count.textContent = Number(count.textContent) + (button.classList.contains("liked") ? 1 : -1);
  });
  document.querySelector("#feed").prepend(post);
  input.value = "";
  showToast("トークに投稿しました");
});

document.querySelector(".mobile-menu")?.addEventListener("click", () => document.querySelector(".sidebar")?.classList.toggle("open"));
