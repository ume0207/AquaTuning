const roomData = {
  welcome: {
    title: "1.0 はじめに",
    description: "まずはこちらをご覧ください。Aqua Tuningのご案内です。",
    icon: "i-user",
    pinned: ["最初にご確認ください", "プロフィール設定と通知についてご案内しています。"],
    messages: [
      {
        avatar: "AT",
        tone: "aqua",
        author: "Aqua Tuning運営",
        time: "10:00",
        text: "【最初にしていただきたいこと】\n1. プロフィールのお名前とアイコンを設定\n2. 通知を受け取りたいトークを確認\n3. 『3.1 自己紹介』で、ひとことご挨拶\n\n迷ったときは『1.2 よくあるご質問』をご覧ください。",
        link: "https://aquatuning-academy.com/",
        linkLabel: "Aqua Tuning 公式サイト",
        preview: {
          title: "Aqua Tuning",
          text: "水のように、しなやかに。Aqua Tuningの考え方をご紹介します。"
        },
        reactions: [{ label: "♡", count: 12 }, { label: "確認", count: 8 }]
      },
      {
        avatar: "美咲",
        tone: "rose",
        author: "美咲",
        time: "10:18",
        text: "よろしくお願いします。まずは今日から、少しずつ試してみます。",
        plain: true,
        reactions: [{ label: "♡", count: 4 }]
      }
    ]
  },
  notice: {
    title: "1.1 運営からのお知らせ",
    description: "更新情報や大切なご案内をお届けします。",
    icon: "i-megaphone",
    readOnly: true,
    pinned: ["お知らせ専用トークです", "投稿はAqua Tuning運営のみ行います。"],
    messages: [
      {
        avatar: "AT",
        tone: "aqua",
        author: "Aqua Tuning運営",
        time: "09:30",
        text: "新しいコンテンツ『朝の3分チューニング』を追加しました。\nコンテンツ内の「日々のセルフケア」からご覧いただけます。",
        reactions: [{ label: "♡", count: 16 }, { label: "見ました", count: 9 }]
      }
    ]
  },
  faq: {
    title: "1.2 よくあるご質問",
    description: "ご利用方法について、よくいただく質問をまとめています。",
    icon: "i-users",
    pinned: ["質問の前にご確認ください", "同じ内容がないか、上部の検索もお使いいただけます。"],
    messages: [
      {
        avatar: "AT",
        tone: "aqua",
        author: "Aqua Tuning運営",
        time: "11:05",
        text: "Q. どこから始めればよいですか？\nA. 決まった順番はありません。最初は『0. Aqua Tuningのご案内』をご覧いただき、その日の気分に合う内容からお試しください。",
        reactions: [{ label: "参考になった", count: 11 }]
      }
    ]
  },
  questions: {
    title: "2.1 なんでも質問ルーム",
    description: "Aqua Tuningについて気軽に質問できる場所です。",
    icon: "i-users",
    pinned: ["どんな小さなことでも大丈夫です", "状況が伝わるよう、試した内容も添えてください。"],
    messages: [
      {
        avatar: "彩",
        tone: "lavender",
        author: "彩",
        time: "08:42",
        text: "夜に行う場合、時間はどれくらいが目安でしょうか？",
        plain: true
      },
      {
        avatar: "AT",
        tone: "aqua",
        author: "Aqua Tuning運営",
        time: "09:12",
        text: "最初は3分ほどで十分です。心地よく続けられる長さを大切にしてください。",
        reactions: [{ label: "♡", count: 7 }]
      }
    ]
  },
  practice: {
    title: "2.2 実践シェア",
    description: "試して感じたことや小さな変化を共有しましょう。",
    icon: "i-users",
    pinned: ["正解のないシェアルームです", "できたことも、難しかったことも、そのままお聞かせください。"],
    messages: [
      {
        avatar: "由佳",
        tone: "rose",
        author: "由佳",
        time: "07:58",
        text: "今朝は呼吸がいつもより深く入る感じがしました。短い時間でも、終わったあとの静けさが心地よかったです。",
        plain: true,
        reactions: [{ label: "♡", count: 14 }, { label: "わかります", count: 3 }]
      }
    ]
  },
  voice: {
    title: "2.3 受講生の声",
    description: "Aqua Tuningを続けて感じた変化を読むことができます。",
    icon: "i-users",
    readOnly: true,
    pinned: ["皆さまから届いた体験談", "掲載内容はご本人の了承をいただいています。"],
    messages: [
      {
        avatar: "沙織",
        tone: "lavender",
        author: "沙織",
        time: "12:24",
        text: "自分のために立ち止まる時間ができました。以前よりも、疲れていることに早く気づけるようになったと思います。",
        plain: true,
        reactions: [{ label: "♡", count: 22 }]
      }
    ]
  },
  profile: {
    title: "3.1 自己紹介",
    description: "最初のご挨拶をするトークです。",
    icon: "i-user",
    pinned: ["自己紹介フォーマット", "お名前・参加のきっかけ・楽しみにしていることをお書きください。"],
    messages: [
      {
        avatar: "奈々",
        tone: "rose",
        author: "奈々",
        time: "18:02",
        text: "はじめまして、奈々です。忙しい日にも自分を整える習慣をつくりたくて参加しました。よろしくお願いします。",
        plain: true,
        reactions: [{ label: "♡", count: 9 }]
      }
    ]
  },
  daily: {
    title: "3.2 今日のセルフケア",
    description: "今日できた小さなセルフケアを残す場所です。",
    icon: "i-users",
    pinned: ["ひとことだけでも大丈夫です", "毎日でなくても、ご自身のペースでご参加ください。"],
    messages: [
      {
        avatar: "恵",
        tone: "aqua",
        author: "恵",
        time: "21:10",
        text: "眠る前に『夜のリセット』を3分だけ。肩まわりがふっと軽くなりました。",
        plain: true,
        reactions: [{ label: "♡", count: 6 }]
      }
    ]
  },
  event: {
    title: "3.3 イベント・交流",
    description: "イベントのお知らせと参加者同士の交流ルームです。",
    icon: "i-users",
    pinned: ["次回のオンライン交流会", "詳細は決まり次第、このトークでお知らせします。"],
    messages: [
      {
        avatar: "AT",
        tone: "aqua",
        author: "Aqua Tuning運営",
        time: "15:00",
        text: "今月のオンライン交流会は、日々の取り入れ方をテーマに開催します。参加方法は後日ご案内します。",
        reactions: [{ label: "参加したい", count: 13 }]
      }
    ]
  }
};

const contentData = {
  guide: {
    title: "0. Aqua Tuningのご案内",
    description: "最初にご覧いただきたいご案内と、基本の使い方をまとめています。",
    items: [
      { title: "【最初に見る】Aqua Tuningへようこそ", duration: "03分26秒", type: "video", thumb: "Welcome", tone: "aqua", progress: 100 },
      { title: "このコミュニティの使い方", duration: "08分12秒", type: "video", thumb: "How to use", tone: "rose", progress: 35 },
      { title: "トークとコンテンツの歩き方", duration: "記事", type: "article", thumb: "Guide", tone: "neutral", progress: 0 },
      { title: "プロフィール・通知の設定", duration: "資料", type: "article", thumb: "Settings", tone: "lavender", progress: 0 },
      { title: "よくあるご質問", duration: "記事", type: "article", thumb: "FAQ", tone: "aqua", progress: 0 }
    ]
  },
  basic: {
    title: "1. 基本の使い方",
    description: "Aqua Tuningを心地よく始めるための基本を、順番にご紹介します。",
    items: [
      { title: "Aqua Tuningの考え方", duration: "06分40秒", type: "video", thumb: "Philosophy", tone: "aqua", progress: 15 },
      { title: "始める前に整えること", duration: "05分18秒", type: "video", thumb: "Before", tone: "rose", progress: 0 },
      { title: "音と振動を受け取る感覚", duration: "09分02秒", type: "video", thumb: "Sound", tone: "lavender", progress: 0 },
      { title: "無理なく続けるためのヒント", duration: "記事", type: "article", thumb: "Tips", tone: "neutral", progress: 0 }
    ]
  },
  care: {
    title: "2. 日々のセルフケア",
    description: "朝・昼・夜。暮らしのリズムに合わせて選べる実践コンテンツです。",
    items: [
      { title: "朝の3分チューニング", duration: "03分08秒", type: "video", thumb: "Morning", tone: "aqua", progress: 0 },
      { title: "仕事の合間のリセット", duration: "04分35秒", type: "video", thumb: "Reset", tone: "lavender", progress: 0 },
      { title: "眠る前の静かな呼吸", duration: "07分10秒", type: "video", thumb: "Night", tone: "rose", progress: 0 },
      { title: "今日の感覚を記録する", duration: "ワークシート", type: "article", thumb: "Journal", tone: "neutral", progress: 0 }
    ]
  },
  salon: {
    title: "3. サロンでの活用",
    description: "お客様へのご案内や、空間づくりに取り入れる際のポイントです。",
    items: [
      { title: "セッション前の準備", duration: "08分20秒", type: "video", thumb: "Prepare", tone: "aqua", progress: 0 },
      { title: "安心感のあるご案内方法", duration: "記事", type: "article", thumb: "Welcome", tone: "rose", progress: 0 },
      { title: "実践後の声かけと記録", duration: "06分45秒", type: "video", thumb: "Aftercare", tone: "lavender", progress: 0 }
    ]
  },
  faq: {
    title: "4. 質問・FAQ",
    description: "つまずきやすいポイントと、よくいただくご質問への回答です。",
    items: [
      { title: "最初はどの内容から見ればよいですか？", duration: "記事", type: "article", thumb: "Start", tone: "aqua", progress: 0 },
      { title: "おすすめの実践時間はありますか？", duration: "記事", type: "article", thumb: "Timing", tone: "rose", progress: 0 },
      { title: "うまく感覚をつかめないときは？", duration: "05分12秒", type: "video", thumb: "Feeling", tone: "lavender", progress: 0 },
      { title: "運営へのお問い合わせ方法", duration: "記事", type: "article", thumb: "Contact", tone: "neutral", progress: 0 }
    ]
  }
};

const primaryTabs = [...document.querySelectorAll(".primary-tab")];
const panels = [...document.querySelectorAll(".main-panel")];
const themeButtons = [...document.querySelectorAll(".theme-button")];
const themeColorMeta = document.getElementById("themeColor");
const brandHomeLink = document.querySelector(".brand");
const talkShell = document.getElementById("talkShell");
const roomRows = [...document.querySelectorAll(".room-row")];
const chatTitle = document.getElementById("chatTitle");
const chatDescription = document.getElementById("chatDescription");
const pinnedMessage = document.getElementById("pinnedMessage");
const messageStream = document.getElementById("messageStream");
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const sendButton = messageForm.querySelector(".send-button");
const lessonList = document.getElementById("lessonList");
const contentTitle = document.getElementById("contentTitle");
const contentDescription = document.getElementById("contentDescription");
const contentShell = document.querySelector(".content-shell");
const contentToggle = document.getElementById("contentSectionToggle");
const mobileSectionLabel = document.getElementById("mobileSectionLabel");
const toast = document.getElementById("toast");

let activeTab = "talk";
let activeRoom = "welcome";
let activeSection = "guide";
let activeTheme = "blue";
let toastTimer;

const themeColors = {
  blue: "#f3f8fe",
  mint: "#f3f9f7",
  underwater: "#052f3b"
};

function makeIcon(id, className = "icon") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", className);
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", `#${id}`);
  svg.append(use);
  return svg;
}

function updateUrl(changes, mode = "push") {
  const url = new URL(window.location.href);
  Object.entries(changes).forEach(([key, value]) => {
    if (value === null || value === undefined || value === "") url.searchParams.delete(key);
    else url.searchParams.set(key, value);
  });
  window.history[mode === "replace" ? "replaceState" : "pushState"]({}, "", url);
}

function setTheme(themeName, { updateHistory = true, announce = false } = {}) {
  const validTheme = ["blue", "mint", "underwater"].includes(themeName) ? themeName : "blue";
  activeTheme = validTheme;
  document.body.dataset.theme = validTheme;
  themeColorMeta.setAttribute("content", themeColors[validTheme]);
  brandHomeLink.href = `?tab=talk&theme=${validTheme}`;

  themeButtons.forEach((button) => {
    const selected = button.dataset.themeValue === validTheme;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  if (updateHistory) updateUrl({ theme: validTheme });
  if (announce) {
    const labels = { blue: "クリアブルー", mint: "ミントブルー", underwater: "アンダーウォーター" };
    showToast(`${labels[validTheme]}のUIに切り替えました。`);
  }
}

function setTab(tabName, { updateHistory = true } = {}) {
  const validTab = ["talk", "content", "intro"].includes(tabName) ? tabName : "talk";
  activeTab = validTab;

  primaryTabs.forEach((tab) => {
    const selected = tab.dataset.tab === validTab;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
  });

  panels.forEach((panel) => {
    const selected = panel.dataset.panel === validTab;
    panel.hidden = !selected;
    panel.classList.toggle("is-active", selected);
  });

  if (updateHistory) updateUrl({ tab: validTab });
}

function messageElement(message) {
  const group = document.createElement("article");
  group.className = "message-group";

  const avatar = document.createElement("div");
  avatar.className = `message-avatar${message.tone === "rose" ? " is-rose" : message.tone === "lavender" ? " is-lavender" : ""}`;
  avatar.textContent = message.avatar;
  avatar.setAttribute("aria-hidden", "true");

  const content = document.createElement("div");
  content.className = "message-content";

  const meta = document.createElement("div");
  meta.className = "message-meta";
  const author = document.createElement("strong");
  author.textContent = message.author;
  const time = document.createElement("time");
  time.textContent = message.time;
  meta.append(author, time);

  const body = document.createElement("div");
  body.className = `message-body${message.plain ? " is-plain" : ""}`;
  body.textContent = message.text;

  if (message.link) {
    body.append(document.createElement("br"));
    const link = document.createElement("a");
    link.href = message.link;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = message.linkLabel || message.link;
    body.append(link);
  }

  if (message.preview) {
    const preview = document.createElement("div");
    preview.className = "link-preview";
    const previewMark = document.createElement("div");
    previewMark.className = "link-preview-mark";
    previewMark.textContent = "Aqua";
    const previewText = document.createElement("p");
    const previewTitle = document.createElement("strong");
    previewTitle.textContent = message.preview.title;
    previewText.append(previewTitle, document.createTextNode(message.preview.text));
    preview.append(previewMark, previewText);
    body.append(preview);
  }

  content.append(meta, body);

  if (message.reactions?.length) {
    const reactions = document.createElement("div");
    reactions.className = "message-reactions";
    message.reactions.forEach((reaction) => {
      const button = document.createElement("button");
      button.className = "reaction-button";
      button.type = "button";
      button.dataset.count = String(reaction.count);
      button.dataset.label = reaction.label;
      button.textContent = `${reaction.label} ${reaction.count}`;
      reactions.append(button);
    });
    content.append(reactions);
  }

  group.append(avatar, content);
  return group;
}

function renderMessages(room) {
  messageStream.replaceChildren();
  const date = document.createElement("div");
  date.className = "date-divider";
  const dateLabel = document.createElement("span");
  dateLabel.textContent = "7/13 (月)";
  date.append(dateLabel);
  messageStream.append(date);
  room.messages.forEach((message) => messageStream.append(messageElement(message)));
  requestAnimationFrame(() => {
    messageStream.scrollTop = 0;
  });
}

function setRoom(roomId, { updateHistory = true, openMobile = true } = {}) {
  if (!roomData[roomId]) return;
  activeRoom = roomId;
  const room = roomData[roomId];

  roomRows.forEach((row) => row.classList.toggle("is-selected", row.dataset.room === roomId));
  chatTitle.textContent = room.title;
  chatDescription.textContent = room.description;
  const chatIcon = document.querySelector(".chat-room-icon use");
  chatIcon?.setAttribute("href", `#${room.icon}`);

  pinnedMessage.querySelector("strong").textContent = room.pinned[0];
  pinnedMessage.querySelector("span").textContent = room.pinned[1];
  renderMessages(room);

  messageInput.disabled = Boolean(room.readOnly);
  sendButton.disabled = Boolean(room.readOnly);
  messageForm.classList.toggle("is-readonly", Boolean(room.readOnly));
  messageInput.placeholder = room.readOnly ? "このトークには投稿できません" : "メッセージを入力…";

  if (openMobile) talkShell.classList.add("is-room-open");
  if (updateHistory) updateUrl({ tab: "talk", room: roomId });
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function renderLessons(sectionId) {
  const section = contentData[sectionId];
  if (!section) return;
  activeSection = sectionId;
  contentTitle.textContent = section.title;
  contentDescription.textContent = section.description;
  mobileSectionLabel.textContent = section.title;
  lessonList.replaceChildren();

  section.items.forEach((item, index) => {
    const row = document.createElement("li");
    row.className = "lesson-row";
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.setAttribute("aria-label", `${item.title}を開く`);

    const number = document.createElement("div");
    number.className = "lesson-index";

    const thumb = document.createElement("div");
    thumb.className = `lesson-thumbnail${item.tone === "rose" ? " is-rose" : item.tone === "lavender" ? " is-lavender" : item.tone === "neutral" ? " is-neutral" : ""}`;
    const thumbNumber = document.createElement("span");
    thumbNumber.className = "thumb-number";
    thumbNumber.textContent = String(index + 1).padStart(2, "0");
    const thumbTitle = document.createElement("span");
    thumbTitle.className = "thumb-title";
    thumbTitle.textContent = item.thumb;
    thumb.append(thumbNumber, thumbTitle);

    const info = document.createElement("div");
    info.className = "lesson-info";
    const mainLine = document.createElement("div");
    mainLine.className = "lesson-main-line";
    const typeIcon = document.createElement("span");
    typeIcon.className = "lesson-type-icon";
    typeIcon.append(makeIcon(item.type === "video" ? "i-play" : "i-file"));
    const title = document.createElement("h2");
    title.className = "lesson-title";
    title.textContent = item.title;
    mainLine.append(typeIcon, title);
    const duration = document.createElement("p");
    duration.className = "lesson-duration";
    duration.textContent = item.duration;
    const progressLabel = document.createElement("span");
    progressLabel.className = "progress-label";
    progressLabel.textContent = `${item.progress}%`;
    const progress = document.createElement("div");
    progress.className = "progress-track";
    progress.setAttribute("aria-label", `進捗 ${item.progress}%`);
    const fill = document.createElement("span");
    fill.className = "progress-fill";
    fill.style.setProperty("--progress", `${item.progress}%`);
    progress.append(fill);
    info.append(mainLine, duration, progressLabel, progress);

    const openLesson = () => showToast(`「${item.title}」を選択しました。`);
    row.addEventListener("click", openLesson);
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLesson();
      }
    });

    row.append(number, thumb, info);
    lessonList.append(row);
  });
}

function setSection(sectionId) {
  if (!contentData[sectionId]) return;
  document.querySelectorAll(".section-row").forEach((row) => row.classList.toggle("is-selected", row.dataset.section === sectionId));
  renderLessons(sectionId);
  contentShell.classList.remove("is-sidebar-open");
  contentToggle.setAttribute("aria-expanded", "false");
}

primaryTabs.forEach((tab) => tab.addEventListener("click", () => setTab(tab.dataset.tab)));

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeValue, { announce: true }));
});

roomRows.forEach((row) => {
  row.addEventListener("click", () => {
    row.querySelector(".unread-dot")?.remove();
    setRoom(row.dataset.room);
  });
});

document.getElementById("roomBack").addEventListener("click", () => {
  talkShell.classList.remove("is-room-open");
  updateUrl({ room: null });
});

document.querySelectorAll(".category-heading").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.closest(".room-category");
    const collapsed = category.classList.toggle("is-collapsed");
    button.setAttribute("aria-expanded", String(!collapsed));
  });
});

document.getElementById("roomSearch").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLocaleLowerCase("ja");
  document.querySelectorAll(".room-category").forEach((category) => {
    const rows = [...category.querySelectorAll(".room-row")];
    rows.forEach((row) => {
      row.hidden = Boolean(query) && !row.textContent.toLocaleLowerCase("ja").includes(query);
    });
    category.hidden = rows.every((row) => row.hidden);
  });
});

document.querySelectorAll(".talk-subtab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".talk-subtab").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    showToast(`${button.getAttribute("aria-label")}を表示しています。`);
  });
});

messageStream.addEventListener("click", (event) => {
  const button = event.target.closest(".reaction-button");
  if (!button) return;
  const reacted = button.classList.toggle("is-reacted");
  const baseCount = Number(button.dataset.count);
  button.textContent = `${button.dataset.label} ${reacted ? baseCount + 1 : baseCount}`;
});

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = messageInput.value.trim();
  if (!value || roomData[activeRoom].readOnly) return;
  const now = new Date();
  roomData[activeRoom].messages.push({
    avatar: "私",
    tone: "rose",
    author: "あなた",
    time: now.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }),
    text: value,
    plain: true
  });
  renderMessages(roomData[activeRoom]);
  messageInput.value = "";
  requestAnimationFrame(() => {
    messageStream.scrollTop = messageStream.scrollHeight;
  });
});

document.querySelectorAll(".section-row").forEach((row) => row.addEventListener("click", () => setSection(row.dataset.section)));

contentToggle.addEventListener("click", () => {
  const open = contentShell.classList.toggle("is-sidebar-open");
  contentToggle.setAttribute("aria-expanded", String(open));
});

document.addEventListener("click", (event) => {
  const toastTrigger = event.target.closest("[data-toast]");
  if (toastTrigger) showToast(toastTrigger.dataset.toast);

  const tabJump = event.target.closest("[data-tab-jump]");
  if (tabJump) setTab(tabJump.dataset.tabJump);
});

window.addEventListener("popstate", () => {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get("tab") || "talk";
  setTheme(params.get("theme") || "blue", { updateHistory: false });
  setTab(tab, { updateHistory: false });
  const room = params.get("room");
  if (room && roomData[room]) setRoom(room, { updateHistory: false, openMobile: true });
  else talkShell.classList.remove("is-room-open");
});

function initialise() {
  const params = new URLSearchParams(window.location.search);
  const requestedTab = params.get("tab");
  const requestedTheme = params.get("theme");
  const legacyTabs = { contents: "content", overview: "intro" };
  const tab = legacyTabs[requestedTab] || requestedTab || "talk";
  const room = params.get("room");

  setTheme(requestedTheme || "blue", { updateHistory: false });
  setTab(tab, { updateHistory: false });
  setRoom(roomData[room] ? room : "welcome", {
    updateHistory: false,
    openMobile: Boolean(roomData[room])
  });
  renderLessons(activeSection);

  if (!requestedTab || legacyTabs[requestedTab] || !requestedTheme) {
    updateUrl({ tab: activeTab, theme: activeTheme }, "replace");
  }
}

initialise();
