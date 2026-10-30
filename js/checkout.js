const contentBox = document.getElementById("checkout-content");
const emptyBox = document.getElementById("checkout-empty");
const successBox = document.getElementById("checkout-success");
const itemsBox = document.getElementById("co-items");
const totalBox = document.getElementById("co-total");
const form = document.getElementById("checkout-form");

const nameInput = document.getElementById("co-name");
const phoneInput = document.getElementById("co-phone");
const addressInput = document.getElementById("co-address");

// ---- validators ----
function validateName(v) {
  return v.trim().length >= 2 ? "" : "Vui lòng nhập họ và tên (ít nhất 2 ký tự).";
}
function validatePhone(v) {
  const phone = v.replace(/[\s.\-]/g, "");
  return /^(0|\+84)[35789]\d{8}$/.test(phone) ? "" : "Số điện thoại không hợp lệ (ví dụ: 0912345678).";
}
function validateAddress(v) {
  return v.trim().length >= 10 ? "" : "Vui lòng nhập địa chỉ đầy đủ (số nhà, đường, phường/xã, tỉnh/thành).";
}
// ---- end validators ----

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

// Danh sách sản phẩm cần xác nhận
function renderSummary() {
  const products = getProducts();
  itemsBox.innerHTML = getCart().map(item => {
    const p = products.find(x => x.id === item.id);
    return `
      <div class="co-item">
        <img src="${escapeHtml(p.image)}" alt="">
        <div class="co-info">
          <span class="co-name">${escapeHtml(p.name)}</span>
          <span class="co-qty">${formatPrice(p.price)} × ${item.qty}</span>
        </div>
        <strong>${formatPrice(p.price * item.qty)}</strong>
      </div>`;
  }).join("");
  totalBox.textContent = formatPrice(cartTotal());
}

function showEmpty() {
  contentBox.hidden = true;
  successBox.hidden = true;
  emptyBox.hidden = false;
}

function showSuccess(order) {
  contentBox.hidden = true;
  emptyBox.hidden = true;
  successBox.hidden = false;

  successBox.innerHTML = `
    <div class="co-ok">✓</div>
    <h3>Đặt hàng thành công!</h3>
    <p>Mã đơn hàng: <strong>${order.id}</strong></p>
    <div class="co-detail">
      <p><strong>Người nhận:</strong> ${escapeHtml(order.customer.name)}<br>
         <strong>Số điện thoại:</strong> ${escapeHtml(order.customer.phone)}<br>
         <strong>Địa chỉ:</strong> ${escapeHtml(order.customer.address)}</p>
      ${order.items.map(i => `
        <div class="co-item">
          <img src="${escapeHtml(i.image)}" alt="">
          <div class="co-info">
            <span class="co-name">${escapeHtml(i.name)}</span>
            <span class="co-qty">${formatPrice(i.price)} × ${i.qty}</span>
          </div>
          <strong>${formatPrice(i.price * i.qty)}</strong>
        </div>`).join("")}
      <div class="co-total"><span>Tổng thanh toán</span><strong>${formatPrice(order.total)}</strong></div>
    </div>
    <a class="co-link" href="index.html">Tiếp tục mua sắm</a>`;
  window.scrollTo(0, 0);
}

// Kiểm tra từng ô; ô nào sai thì hiện lỗi đỏ ngay dưới ô đó
const rules = [
  { input: nameInput, error: document.getElementById("err-name"), check: validateName },
  { input: phoneInput, error: document.getElementById("err-phone"), check: validatePhone },
  { input: addressInput, error: document.getElementById("err-address"), check: validateAddress }
];

rules.forEach(r => {
  r.input.addEventListener("input", () => {   // gõ lại thì xóa lỗi
    r.error.textContent = "";
    r.input.classList.remove("invalid");
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();

  let firstInvalid = null;
  rules.forEach(r => {
    const msg = r.check(r.input.value);
    r.error.textContent = msg;
    r.input.classList.toggle("invalid", msg !== "");
    if (msg && !firstInvalid) firstInvalid = r.input;
  });
  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  const order = createOrder({
    name: nameInput.value.trim(),
    phone: phoneInput.value.replace(/\s+/g, " ").trim(),
    address: addressInput.value.trim()
  });

  if (order) showSuccess(order);
  else showEmpty();
});

// Mở trang: giỏ trống thì báo, ngược lại hiện danh sách xác nhận
if (getCart().length === 0) {
  showEmpty();
} else {
  renderSummary();
}
