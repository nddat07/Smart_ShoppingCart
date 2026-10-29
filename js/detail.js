const box = document.getElementById("product-detail");
const id = Number(new URLSearchParams(location.search).get("id"));
const p = getProducts().find(item => item.id === id);

if (p) {
  document.title = p.name;

  box.innerHTML = `
    <div class="detail-img">
      <img src="${p.image}" alt="${p.name}">
    </div>

    <div class="detail-info">
      <h1 class="ten-sp">${p.name}</h1>


      <div class="detail-row">
        <span class="detail-label">Vận chuyển</span>
        <div>
          <p>🚚 Phí vận chuyển tính khi đặt hàng</p>
          <p class="sub-text">Dự kiến giao hàng: 2–5 ngày</p>
        </div>
      </div>

      <div class="detail-row">
        <span class="detail-label">Mẫu mã</span>
        <div class="variant-options">
          <button type="button" class="variant-btn active"
            data-variant="Mặc định">
            Mặc định
          </button>
        </div>
      </div>

      <div class="detail-row">
        <span class="detail-label">Số lượng</span>
        <div class="quantity-control">
          <button type="button" id="qty-minus">−</button>
          <input id="quantity" type="number"
            value="1" min="1" max="99">
          <button type="button" id="qty-plus">+</button>
        </div>
      </div>

      <div class="detail-total">
        <span>Tạm tính</span>
        <strong id="total-price">${formatPrice(p.price)}</strong>
      </div>

      <div class="detail-actions">
        <button type="button" class="btn-add" id="add-to-cart">
          <i class="fa-solid fa-cart-shopping"></i>
          Thêm vào giỏ hàng
        </button>
      </div>

      <div class="product-description">
        <h3>Mô tả sản phẩm</h3>
        <p class="mo-ta">${p.description || "Chưa có mô tả."}</p>
      </div>
    </div>
  `;

  // Số lượng
  const quantityInput = document.getElementById("quantity");
  const totalPrice = document.getElementById("total-price");

  function updateTotal() {
    let quantity = Number.parseInt(quantityInput.value, 10);

    if (!Number.isFinite(quantity)) quantity = 1;

    quantity = Math.max(1, Math.min(99, quantity));
    quantityInput.value = quantity;
    totalPrice.textContent = formatPrice(p.price * quantity);
  }

  document.getElementById("qty-minus").addEventListener("click", () => {
    quantityInput.value = Number(quantityInput.value) - 1;
    updateTotal();
  });

  document.getElementById("qty-plus").addEventListener("click", () => {
    quantityInput.value = Number(quantityInput.value) + 1;
    updateTotal();
  });

  quantityInput.addEventListener("change", updateTotal);

  // Chọn mẫu mã
  let selectedVariant = "Mặc định";

  box.querySelectorAll(".variant-btn").forEach(button => {
    button.addEventListener("click", () => {
      box.querySelectorAll(".variant-btn").forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      selectedVariant = button.dataset.variant;
    });
  });

  // Thêm vào giỏ hàng
  // Dùng addToCart() trong storage.js để giỏ hàng, trang giỏ và chấm đỏ cùng cập nhật
  document.getElementById("add-to-cart").addEventListener("click", () => {
    updateTotal(); // chốt lại số lượng đang hiển thị trong ô
    const quantity = Number(quantityInput.value);

    addToCart(p.id, quantity);

    // Thêm xong thì đưa số lượng về 1 và cập nhật lại tạm tính
    quantityInput.value = 1;
    updateTotal();

    alert("Đã thêm " + quantity + " sản phẩm vào giỏ hàng!");
  });
} else {
  box.innerHTML = '<p>Không tìm thấy sản phẩm. <a href="../pages/products.html">Quay lại cửa hàng</a></p>';
}