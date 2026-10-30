// Tăng số này mỗi khi bạn sửa mảng PRODUCTS để trình duyệt tự nạp lại dữ liệu mới
const DATA_VERSION = 12;

// Đường dẫn tới trang chi tiết sản phẩm. Đổi cho đúng với TÊN FILE THẬT của bạn.
// (list.js, search.js, cart.js đều dùng chung hằng này)
const PRODUCT_PAGE = "../pages/products-informations.html";

const PRODUCTS = [
  {
    id: 1,
    category: "gia-dung",
    name: "Bình siêu tốc thủy tinh 1,7L Smartcook ICS-3859",
    price: 439000,
    image: "../assets/images/gia-dung-03.png",
    description: "Bình đun siêu tốc có dung tích 1.7 lít đáp ứng nhu cầu sử dụng. Công suất 1850W đun sôi nhanh chóng, tiết kiệm điện năng. Ruột ấm được làm bằng chất liệu thủy tinh an toàn khi dùng. Tự động ngắt khi nước sôi cho bạn an tâm sử dụng. Đế xoay 360 độ linh hoạt cho bạn dễ dàng đặt để."
  },

  {
    id: 2,
    category: "thoi-trang-nu",
    name: "Áo khoác hoodie Người Nhện Spiderman có mũ hoạ tiết thêu xù nổi BattleKid",
    price: 795000,
    image: "../assets/images/quan-ao-nu-03.webp",
    description: "- Áo hoodie nhện hoạ tiết full thêu xù nổi nỉ chân cua BattleKid hàng cao cấp chuẩn hãng 4 màu. - Chất liệu : Nỉ chân cua. - Hoạ tiết : Thêu Xù. Sản phẩm có nhiều màu, các bạn ntin shop tư vấn size, màu sắc spham nha"
  },

  {
    id: 3,
    category: "thoi-trang-nam",
    name: "Áo Polo Nam Regular Basic MPO 1351",
    price: 299000,
    image: "../assets/images/quan-ao-nam-01.webp",
    description: "Áo polo nam thiết kế lịch lãm, chất liệu thoáng mát, thấm hút mồ hôi tốt, dễ dàng phối đồ cho các hoạt động hàng ngày."
  },

  {
    id: 4,
    category: "thoi-trang-nu",
    name: "Áo sơ mi nữ oversize",
    price: 56000,
    image: "../assets/images/quan-ao-nu-02.png",
    description: "Áo sơ mi nữ oversize chất đũi xốp dày đẹp co giãn 4 chiều mềm và mát thấm hút mồ hôi được thiết kế theo phong cách hàn quốc trẻ trung năng động thích hợp mặc hàng ngày, mặc đi chơi, đi dạo phố."
  },

  {
    id: 5,
    category: "thoi-trang-nu",
    name: "Áo thun nữ borip PAPKA 3032 sọc xanh biển cổ thuyền",
    price: 249000,
    image: "../assets/images/quan-ao-nu-01.webp",
    description: "Chất liệu borip co giãn tốt, thiết kế cổ thuyền sọc xanh biển trẻ trung, năng động, ôm dáng tôn lên nét đẹp thanh lịch."
  },

  {
    id: 6,
    category: "dong-ho",
    name: "Apple Watch Series 12 42mm (5G) Viền Titan Dây Thép",
    price: 22490000,
    image: "../assets/images/dong-ho-03.jpg",
    description: "Màn hình Retina OLED LTPO3 luôn bật, tần số quét 1Hz. Nghe gọi qua eSim. Tiện ích sức khoẻ toàn diện, GPS tích hợp, thời lượng pin lên đến 24 giờ."
  },

  {
    id: 7,
    category: "phukien-trangsuc",
    name: "Bộ Bông Tai Hình Vuông Hợp Kim Âu Mỹ Mới, 6 Đôi Trang Sức Ngọc Trai Cổ Điển 2025",
    price: 30100,
    image: "../assets/images/trang-suc-phu-kien-03.webp",
    description: "Kiểu dáng: Hình vuông và hình tròn. Hoàn thiện: Mạ vàng/bạc cao cấp. Đế: Cơ chế bản lề an toàn, dễ phối đồ."
  },

  {
    id: 8,
    category: "gia-dung",
    name: "Chảo chống dính ceramic Elmich Core Olive EL5984OV",
    price: 395000,
    image: "../assets/images/gia-dung-02.png",
    description: "Chống dính vượt trội gấp 10 lần ceramic thế hệ đầu. Bền bỉ theo thời gian sử dụng thực tế. Bắt từ nhanh, tương thích với mọi loại bếp và lòng chảo sâu tiện lợi."
  },

  {
    id: 9,
    category: "cosplay",
    name: "Quần áo triều đại nhà Minh Jinyiwei Bộ đồ cá bay của nam giới",
    price: 286051,
    image: "../assets/images/cosplay-02.webp",
    description: "Trang phục cổ trang phong cách triều đại nhà Minh dành cho nam giới, thiết kế tỉ mỉ phục vụ biểu diễn nghệ thuật và quay phim."
  },

  {
    id: 10,
    category: "toy",
    name: "Đồ Chơi Saga Khủng Long Cryolophosaurus Có Âm Thanh JURASSIC WORLD",
    price: 1209000,
    image: "../assets/images/toy-02.webp",
    description: "Tích hợp âm thanh, hiệu ứng ánh sáng cùng chuyển động tấn công mạnh mẽ. Chiều dài khoảng 30 cm, khớp cử động linh hoạt, thích hợp cho trẻ từ 4 tuổi trở lên."
  },

  {
    id: 11,
    category: "gia-dung",
    name: "Bộ Nồi Michelangelo Euroshine 6 Món Thép Không Gỉ 18/10, Đáy Từ 3 Lớp",
    price: 3925329,
    image: "../assets/images/gia-dung-01.webp",
    description: "Chất liệu thép không gỉ 18/10 bền bỉ, chống ăn mòn vượt trội. Thiết kế đánh bóng gương sang trọng, quai cầm chắc chắn, có vạch chia dung tích tiện lợi."
  },

  {
    id: 12,
    category: "cosplay",
    name: "Trang phục pháp sư HKD004",
    price: 530000,
    image: "../assets/images/cosplay-01.webp",
    description: "Sản phẩm trọn gói bao gồm: Áo + Mũ + Phất trần, phục vụ nhu cầu hóa trang, biểu diễn chuyên nghiệp."
  },

  {
    id: 13,
    category: "giay-nam",
    name: "Giày thể thao nam Fashion chất da siêu mềm hàng QC cao cấp mã H218",
    price: 145000,
    image: "../assets/images/giay-dep-nam-01.webp",
    description: "Chất liệu da mềm êm ái, đế cao su non chống trơn trượt an toàn. Kiểu dáng trẻ trung, năng động, phù hợp đi làm và đi chơi (Size 36-40)."
  },

  {
    id: 14,
    category: "giay-nam",
    name: "Giày Superstar (SUPERSTAR ORIGINALS)",
    price: 2600000,
    image: "../assets/images/giay-dep-nam-02.jpg",
    description: "Thiết kế da kinh điển với biểu tượng 3 Sọc răng cưa và mũi giày kiểu vỏ sò đặc trưng, phong cách thể thao và streetwear năng động."
  },

  {
    id: 15,
    category: "sach",
    name: "Hồ Điệp và Kình Ngư – Tuế Kiến",
    price: 154200,
    image: "../assets/images/sach-01.webp",
    description: "Tiểu thuyết cảm động viết về tình yêu, sự hy sinh và những ước mơ tuổi trẻ, mang lại nhiều cung bậc cảm xúc sâu lắng cho độc giả."
  },

  {
    id: 16,
    category: "laptop-pc",
    name: "Laptop Colorful Evol X15 XS",
    price: 26990000,
    image: "../assets/images/laptop-01.jpg",
    description: "Màn hình 15.6\" FHD 144Hz mượt mà. Sức mạnh từ Intel Core i5-12450H, RAM 16GB, card rời RTX 3050 4GB và SSD 512GB chiến tốt game và đồ họa."
  },

  {
    id: 17,
    category: "toy",
    name: "Đồ Chơi Lắp Ráp Tháp Avengers Mới Trong Avengers: Doomsday LEGO 76352",
    price: 4029000,
    image: "../assets/images/toy-01.webp",
    description: "Mô hình New Avengers Tower gồm 954 mảnh ghép, chiều cao hơn 34 cm. Bao gồm các nhân vật Doctor Doom, Yelena, Red Guardian, Bucky Barnes, Human Torch và Sentry."
  },

  {
    id: 18,
    category: "sach",
    name: "Mắt biếc – Nguyễn Nhật Ánh",
    price: 73000,
    image: "../assets/images/sach-02.jpg",
    description: "Một trong những tác phẩm hay nhất của nhà văn Nguyễn Nhật Ánh với câu chuyện tình yêu trong sáng, đượm buồn và đầy hoài niệm."
  },

  {
    id: 19,
    category: "phukien-trangsuc",
    name: "Kính Chống Ánh Sáng Xanh Gọng Oval Thời Trang",
    price: 17350,
    image: "../assets/images/trang-suc-phu-kien-02.webp",
    description: "Giảm mỏi mắt khi dùng thiết bị điện tử, chống tia UV400, trọng lượng nhẹ chỉ 19g, thiết kế gọng oval thời trang phù hợp cho học sinh, sinh viên và nhân viên văn phòng."
  },

  {
    id: 20,
    category: "gia-dung",
    name: "Máy Hút Bụi Cầm Tay Không Dây 25000Pa 120W, Lực Hút Mạnh Bộ Lọc HEPA",
    price: 17350,
    image: "../assets/images/gia-dung-04.webp",
    description: "Lực hút 25000Pa cực mạnh, bộ lọc HEPA lọc sạch bụi bẩn, tích hợp 6 đầu hút tiện lợi vệ sinh sạch sẽ mọi ngóc ngách từ ô tô, bàn phím đến sofa."
  },

  {
    id: 21,
    category: "xe",
    name: "Mitsubishi pajero sport Gas. 4×4 AT – STD",
    price: 1230000000,
    image: "../assets/images/xe-04.png",
    description: "Thiết kế Dynamic Shield hiện đại, động cơ phun xăng đa điểm 3.0L, nội thất 7 chỗ bọc da cao cấp cùng nhiều tính năng an toàn tiên tiến."
  },

  {
    id: 22,
    category: "thoi-trang-nam",
    name: "SET BỘ SƠ MI NAM TAY NGẮN VÂN ĐÔI KÈM QUẦN DÀI ỐNG RỘNG GLOX",
    price: 278000,
    image: "../assets/images/quan-ao-nam-02.webp",
    description: "Chất liệu vải vân đôi mềm mại, co giãn nhẹ. Thiết kế áo sơ mi tay ngắn kết hợp quần dài ống rộng phong cách Hàn Quốc trẻ trung, lịch lãm."
  },

  {
    id: 23,
    category: "dong-ho",
    name: "SamSung Galaxy Watch 7 (LTE, 44mm)",
    price: 8489880,
    image: "../assets/images/dong-ho-02.jpg",
    description: "Vi xử lý 3nm mới, định vị GPS kép chính xác, cảm biến sinh học BioActive thế hệ mới tích hợp Galaxy AI theo dõi sức khỏe và giấc ngủ toàn diện."
  },

  {
    id: 24,
    category: "xe",
    name: "VinFast VF-3",
    price: 285000000,
    image: "../assets/images/xe-01.jpg",
    description: "Mẫu ô tô điện đô thị nhỏ gọn, thiết kế cá tính, hiện đại và linh hoạt, mang đến giải pháp di chuyển thông minh và thân thiện với môi trường."
  },

  {
    id: 25,
    category: "laptop-pc",
    name: "Laptop ASUS Vivobook S14 S5406SA-PP168WS",
    price: 28990000,
    image: "../assets/images/laptop-02.jpg",
    description: "Chip Intel Core Ultra 5 kết hợp AI NPU, RAM 16GB, SSD 512GB, màn hình OLED 14 inch 120Hz rực rỡ, vỏ nhôm mỏng nhẹ chỉ 1.3kg."
  },

  {
    id: 26,
    category: "xe",
    name: "Honda Winner R 2026",
    price: 50760000,
    image: "../assets/images/xe-03.png",
    description: "Phân khối 149,2 CC | Công suất 11,5 kW | Momen xoắn 13,5 Nm | Tiêu thụ 2,59 lít/100km."
  },

  {
    id: 27,
    category: "xe",
    name: "Yamaha Exciter 155 VVA 2026",
    price: 60900000,
    image: "../assets/images/xe-02.png",
    description: "Phân khối 155,1 CC | Công suất 13,6 kW | Momen xoắn 14,4 Nm | Tiêu thụ 2,07 lít/100km."
  }
];

// Nạp dữ liệu vào localStorage khi chưa có hoặc khi DATA_VERSION thay đổi
function initProducts() {
  try {
    const saved = Number(localStorage.getItem("productsVersion"));
    if (!localStorage.getItem("products") || saved !== DATA_VERSION) {
      localStorage.setItem("products", JSON.stringify(PRODUCTS));
      localStorage.setItem("productsVersion", String(DATA_VERSION));
    }
  } catch (e) {
    console.error("Không ghi được localStorage:", e);
  }
}

function getProducts() {
  try {
    return JSON.parse(localStorage.getItem("products")) || PRODUCTS;
  } catch (e) {
    return PRODUCTS;
  }
}

function saveProducts(list) {
  localStorage.setItem("products", JSON.stringify(list));
}

function formatPrice(n) {
  return n.toLocaleString("vi-VN") + "đ";
}

initProducts();


// ===================== GIỎ HÀNG =====================
// Giỏ hàng chỉ lưu id và số lượng. Giá luôn lấy lại từ danh sách sản phẩm
// nên nếu bạn sửa giá trong PRODUCTS thì giỏ hàng tự cập nhật theo.
const CART_KEY = "cart";
const MAX_QTY = 99;

function getCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const ids = getProducts().map(p => p.id);
    // bỏ các dòng lỗi hoặc sản phẩm không còn tồn tại
    return raw
      .map(i => ({ id: Number(i.id), qty: Number(i.qty ?? i.quantity) }))
      .filter(i => ids.includes(i.id) && i.qty >= 1);
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = Math.min(MAX_QTY, item.qty + qty);
  } else {
    cart.push({ id: id, qty: Math.min(MAX_QTY, qty) });
  }
  saveCart(cart);
}

function setQty(id, qty) {
  qty = Math.max(1, Math.min(MAX_QTY, Math.floor(qty) || 1));
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = qty;
    saveCart(cart);
  }
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
}

function clearCart() {
  saveCart([]);
}

// Tổng số lượng sản phẩm trong giỏ
function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

// Tổng tiền = tổng (giá x số lượng) của từng dòng
function cartTotal() {
  const products = getProducts();
  return getCart().reduce((sum, i) => {
    const p = products.find(x => x.id === i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
}

// Cập nhật số lượng trên mọi badge giỏ hàng (class="cart-badge") và thẻ id="cart-count"
function updateCartBadge() {
  const count = cartCount();
  document.querySelectorAll(".cart-badge").forEach(el => {
    el.textContent = count > 99 ? "99+" : count;
    el.hidden = count === 0;          // giỏ trống thì ẩn chấm đỏ
  });
  const el = document.getElementById("cart-count");
  if (el) el.textContent = count;
}

// Gắn sự kiện cho các nút "Thêm vào giỏ" nằm trong một khung (container)
function bindAddToCart(container) {
  container.addEventListener("click", e => {
    const btn = e.target.closest(".btn-add");
    if (!btn || !btn.dataset.id) return;
    addToCart(Number(btn.dataset.id));
    const label = btn.dataset.label || btn.textContent;
    btn.dataset.label = label;
    btn.textContent = "Đã thêm ✓";
    setTimeout(() => { btn.textContent = label; }, 1000);
  });
}

updateCartBadge();
document.addEventListener("DOMContentLoaded", updateCartBadge);
// Đồng bộ khi giỏ hàng thay đổi ở tab khác
window.addEventListener("storage", e => { if (e.key === CART_KEY) updateCartBadge(); });


// ===================== ĐƠN HÀNG =====================
// Đơn hàng lưu trong localStorage (key "orders"). Mỗi đơn lưu "ảnh chụp" tên, giá, số lượng
// tại thời điểm đặt, nên sau này đổi giá sản phẩm thì đơn cũ không bị đổi theo.
const ORDERS_KEY = "orders";

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

// Tạo đơn từ giỏ hàng hiện tại, lưu lại rồi xóa giỏ hàng. Giỏ trống thì trả về null.
function createOrder(customer) {
  const products = getProducts();
  const items = getCart().map(i => {
    const p = products.find(x => x.id === i.id);
    return { id: p.id, name: p.name, price: p.price, image: p.image, qty: i.qty };
  });
  if (items.length === 0) return null;

  const order = {
    id: "DH" + Date.now(),
    createdAt: new Date().toISOString(),
    customer: customer,   // { name, phone, address }
    items: items,
    total: items.reduce((sum, i) => sum + i.price * i.qty, 0)
  };

  const orders = getOrders();
  orders.push(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  clearCart();
  return order;
}