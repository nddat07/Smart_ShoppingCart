document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll(".category-list a");
  const productCards = document.querySelectorAll(".product-card");
  const btnShowAll = document.getElementById("btn-show-all");

  // Bảng ánh xạ chính xác từ class trong thẻ <i> sang id của product-card
  const categoryMapping = {
    "thoi-trang-nam": "thoi-trang-nam",
    "thoi-trang-nu": "thoi-trang-nu",
    "dien-thoai-phu-kien": "dienthoai-phukien",
    "laptop-maytinh": "laptop-pc",
    "dong-ho": "dong-ho",
    "giay-dep-nam": "giay-nam",
    "giay-dep-nu": "giay-nu",
    "gia-dung": "gia-dung",
    "xe": "xe",
    "toy": "toy",
    "sach": "sach",
    "phu-kien-trang-suc": "phukien-trangsuc",
    "cosplay": "cosplay"
  };

  // Hàm hiển thị toàn bộ sản phẩm và xóa trạng thái active
  const showAllProducts = () => {
    categoryLinks.forEach((item) => item.classList.remove("active"));
    productCards.forEach((card) => {
      card.style.display = "flex";
    });
  };

  // 1. Xử lý khi bấm nút "Tất cả" ở góc phải
  if (btnShowAll) {
    btnShowAll.addEventListener("click", showAllProducts);
  }

  // 2. Xử lý khi bấm vào các danh mục ở sidebar
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Ngăn chuyển trang

      const icon = link.querySelector("i");
      if (!icon) return;

      // Lấy class của thẻ <i> để tra cứu trong bảng ánh xạ
      const iconClass = icon.className.trim();
      const targetId = categoryMapping[iconClass];
      if (!targetId) return;

      const isActive = link.classList.contains("active");

      // Gỡ active của tất cả các mục
      categoryLinks.forEach((item) => item.classList.remove("active"));

      if (isActive) {
        // Bấm lần thứ 2 vào cùng một danh mục -> Hiện toàn bộ sản phẩm
        showAllProducts();
      } else {
        // Bấm lần đầu -> Bật active và lọc theo đúng ID sản phẩm
        link.classList.add("active");
        productCards.forEach((card) => {
          if (card.id === targetId) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      }
    });
  });
});