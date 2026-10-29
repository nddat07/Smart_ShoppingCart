const cartBox = document.getElementById("cart-list");
const summaryBox = document.getElementById("cart-summary");
const totalBox = document.getElementById("cart-total");

function renderCart() {
  const cart = getCart();
  const products = getProducts();

  if (cart.length === 0) {
    cartBox.innerHTML = '<p class="cart-empty">Giỏ hàng đang trống. <a href="index.html">Tiếp tục mua sắm</a></p>';
    summaryBox.style.display = "none";
    updateCartBadge();
    return;
  }

  summaryBox.style.display = "";
  cartBox.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    return `
      <div class="cart-item" data-id="${p.id}">
        <a href="${PRODUCT_PAGE}?id=${p.id}"><img src="${p.image}" alt="${p.name}"></a>
        <div class="cart-info">
          <a class="cart-name" href="${PRODUCT_PAGE}?id=${p.id}">${p.name}</a>
          <span class="cart-price">${formatPrice(p.price)}</span>
        </div>
        <div class="cart-qty">
          <button data-action="dec" data-id="${p.id}" aria-label="Giảm">−</button>
          <input class="cart-qty-input" type="number" min="1" max="${MAX_QTY}" value="${item.qty}" data-id="${p.id}">
          <button data-action="inc" data-id="${p.id}" aria-label="Tăng">+</button>
        </div>
        <strong class="cart-line">${formatPrice(p.price * item.qty)}</strong>
        <button class="cart-remove" data-action="remove" data-id="${p.id}" aria-label="Xóa">✕</button>
      </div>`;
  }).join("");

  totalBox.textContent = formatPrice(cartTotal());
  updateCartBadge();
}

// Bấm nút +, −, xóa
cartBox.addEventListener("click", e => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const item = getCart().find(i => i.id === id);
  if (!item) return;

  if (btn.dataset.action === "inc") setQty(id, item.qty + 1);
  if (btn.dataset.action === "dec") setQty(id, item.qty - 1);   // tối thiểu là 1
  if (btn.dataset.action === "remove") removeFromCart(id);
  renderCart();
});

// Gõ trực tiếp số lượng vào ô
cartBox.addEventListener("change", e => {
  if (!e.target.classList.contains("cart-qty-input")) return;
  setQty(Number(e.target.dataset.id), Number(e.target.value));
  renderCart();
});

// Xóa toàn bộ giỏ
document.getElementById("cart-clear").addEventListener("click", () => {
  if (confirm("Xóa tất cả sản phẩm trong giỏ hàng?")) {
    clearCart();
    renderCart();
  }
});

renderCart();