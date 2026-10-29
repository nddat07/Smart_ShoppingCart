const listBox = document.getElementById("product-list");

// category = "all" thì hiện tất cả, ngược lại chỉ hiện đúng danh mục
function renderList(category = "all") {
  const items = getProducts().filter(p => category === "all" || p.category === category);

  if (items.length === 0) {
    listBox.innerHTML = '<p class="list-empty">Chưa có sản phẩm trong danh mục này.</p>';
    return;
  }

  listBox.innerHTML = items.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-thumb">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="the-sp">
        <h4 class="ten-sp">${p.name}</h4>
        ${p.hideDescInList ? "" : `<p class="thong-tin-sp">${p.description}</p>`}
        <p class="gia-sp">${formatPrice(p.price)}</p>
        <button class="btn-add" data-id="${p.id}">Thêm vào giỏ</button>
      </div>
    </div>
  `).join("");
}

// Tô đậm mục danh mục đang chọn (thêm class "active")
function setActiveCategory(category) {
  document.querySelectorAll("[data-category]").forEach(el => {
    el.classList.toggle("active", el.dataset.category === category);
  });
}

function showCategory(category) {
  renderList(category);
  setActiveCategory(category);
}

// Bấm vào thẻ sản phẩm thì sang trang chi tiết (trừ nút "Thêm vào giỏ")
listBox.addEventListener("click", e => {
  if (e.target.closest(".btn-add")) return;
  const card = e.target.closest(".product-card");
  if (card) location.href = PRODUCT_PAGE + "?id=" + card.dataset.id;
});

// Bấm vào mục danh mục ở sidebar (hoặc nút "Tất cả"): phần tử nào có data-category
document.addEventListener("click", e => {
  const item = e.target.closest("[data-category]");
  if (!item) return;
  e.preventDefault();               // không cho thẻ <a href="#"> nhảy trang
  showCategory(item.dataset.category);
});

bindAddToCart(listBox);

// Khi mở trang: hiện theo ?category=... trên URL, không có thì hiện tất cả
showCategory(new URLSearchParams(location.search).get("category") || "all");