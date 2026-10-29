// Gợi ý sản phẩm khi gõ vào thanh tìm kiếm trên header.
// Cần nạp SAU storage.js (để dùng getProducts và formatPrice).
(function () {
  // PRODUCT_PAGE (đường dẫn trang chi tiết) được khai báo trong storage.js
  const MAX_RESULTS = 6;

  // Tên danh mục để gõ "đồng hồ", "sách", "giày"... cũng ra sản phẩm thuộc danh mục đó
  const CATEGORY_NAMES = {
    "thoi-trang-nam": "Thời trang nam",
    "thoi-trang-nu": "Thời trang nữ",
    "dienthoai-phukien": "Điện thoại & phụ kiện",
    "laptop-pc": "Laptop, máy tính",
    "dong-ho": "Đồng hồ",
    "giay-nam": "Giày dép nam",
    "giay-nu": "Giày dép nữ",
    "gia-dung": "Thiết bị gia dụng",
    "xe": "Ô tô, xe máy, xe đạp",
    "toy": "Toy",
    "sach": "Sách",
    "phukien-trangsuc": "Phụ kiện & trang sức",
    "cosplay": "Cosplay"
  };

  const input = document.getElementById("search-input");
  const box = document.getElementById("search-suggest");
  if (!input || !box) return;

  let results = [];
  let active = -1; // vị trí gợi ý đang được chọn bằng bàn phím

  // Bỏ dấu tiếng Việt và chuyển về chữ thường: "Bình siêu tốc" -> "binh sieu toc"
  function normalize(str) {
    return String(str)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .trim();
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  // Tách chuỗi thành các từ đã bỏ dấu
  function tokens(str) {
    return normalize(str).split(/[\s()\/&–—-]+/).filter(Boolean);
  }

  // Mỗi từ người dùng gõ phải là phần đầu của một từ nào đó trong văn bản
  // ("ao" khớp "Áo" nhưng không khớp "Chảo")
  function matches(words, textTokens) {
    return words.every(w => textTokens.some(t => t.startsWith(w)));
  }

  function findProducts(query) {
    const words = tokens(query);
    if (words.length === 0) return [];

    const found = [];
    getProducts().forEach(p => {
      const nameTokens = tokens(p.name);
      if (matches(words, nameTokens)) {
        // khớp tên: ưu tiên cao, từ khóa xuất hiện càng sớm càng lên đầu
        found.push({ p: p, score: 0, pos: nameTokens.findIndex(t => t.startsWith(words[0])) });
      } else if (matches(words, nameTokens.concat(tokens(CATEGORY_NAMES[p.category] || "")))) {
        found.push({ p: p, score: 1, pos: 0 });   // khớp theo danh mục
      }
    });

    return found
      .sort((a, b) => a.score - b.score || a.pos - b.pos)
      .slice(0, MAX_RESULTS)
      .map(x => x.p);
  }

  function hide() {
    box.hidden = true;
    active = -1;
  }

  function render() {
    const query = input.value;
    if (!normalize(query)) { hide(); return; }

    results = findProducts(query);
    active = -1;

    if (results.length === 0) {
      box.innerHTML = '<div class="suggest-empty">Không tìm thấy sản phẩm phù hợp</div>';
    } else {
      box.innerHTML = results.map(p => `
        <a class="suggest-item" href="${PRODUCT_PAGE}?id=${p.id}">
          <img src="${escapeHtml(p.image)}" alt="">
          <span class="suggest-name">${escapeHtml(p.name)}</span>
          <span class="suggest-price">${formatPrice(p.price)}</span>
        </a>`).join("");
    }
    box.hidden = false;
  }

  function setActive(index) {
    const els = box.querySelectorAll(".suggest-item");
    if (els.length === 0) return;
    active = (index + els.length) % els.length; // đi vòng tròn
    els.forEach((el, i) => el.classList.toggle("active", i === active));
    els[active].scrollIntoView({ block: "nearest" });
  }

  input.addEventListener("input", render);
  input.addEventListener("focus", render);

  input.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
    else if (e.key === "Enter") {
      // Có mục đang chọn thì vào đó, nếu không thì vào kết quả đầu tiên
      const target = results[active >= 0 ? active : 0];
      if (target) location.href = PRODUCT_PAGE + "?id=" + target.id;
    }
    else if (e.key === "Escape") { hide(); }
  });

  // Bấm ra ngoài thanh tìm kiếm thì đóng gợi ý
  document.addEventListener("click", e => {
    if (!e.target.closest(".header__center")) hide();
  });
})();