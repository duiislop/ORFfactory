/* =====================================
   Creative Works Data
   ここに作品を追加するだけで表示されます
===================================== */
const works = [
  {
    id: 1,
    title: "星間漂流",
    category: "SF",
    description: "宇宙船が未知領域を彷徨うSF物語。",
    detail: "人類が到達できない領域で起こる哲学的SFストーリー。",
    thumbnail: "https://source.unsplash.com/400x300/?space"
  },
  {
    id: 2,
    title: "雨の日の約束",
    category: "恋愛",
    description: "雨から始まる恋愛短編。",
    detail: "偶然の再会から始まる静かな恋の物語。",
    thumbnail: "https://source.unsplash.com/400x300/?rain"
  },
  {
    id: 3,
    title: "未来都市アイデア",
    category: "アイデア",
    description: "未来都市の設定メモ。",
    detail: "AIと共存する都市構造のアイデア集。",
    thumbnail: "https://source.unsplash.com/400x300/?cyberpunk"
  }
];

const grid = document.getElementById("worksGrid");
const filter = document.getElementById("categoryFilter");

/* =====================================
   Card Rendering
===================================== */
function renderWorks(list) {
  grid.innerHTML = "";

  list.forEach(work => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${work.thumbnail}" alt="${work.title}">
      <div class="card-content">
        <h3>${work.title}</h3>
        <p class="category">${work.category}</p>
        <p>${work.description}</p>
      </div>
    `;

    card.addEventListener("click", () => openDetail(work));
    grid.appendChild(card);
  });
}

/* =====================================
   Detail Modal
===================================== */
const modal = document.createElement("div");
modal.className = "modal";

modal.innerHTML = `
  <div class="modal-content">
    <span class="close-btn">×</span>
    <div id="modalBody"></div>
  </div>
`;

document.body.appendChild(modal);

const modalBody = modal.querySelector("#modalBody");
const closeBtn = modal.querySelector(".close-btn");

function openDetail(work) {
  modalBody.innerHTML = `
    <h2>${work.title}</h2>
    <p><strong>カテゴリ:</strong> ${work.category}</p>
    <p>${work.detail}</p>
  `;

  modal.classList.add("active");
}
renderWorks(works);