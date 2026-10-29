
(() => {
    "use strict";

    const NEWS_KEY = "smart_cart_news";
    let danhSachTin = [];

    // Đọc dữ liệu tin tức từ LocalStorage
    function docDuLieuTinTuc() {
        try {
            const duLieu = localStorage.getItem(NEWS_KEY);
            const danhSach = duLieu ? JSON.parse(duLieu) : [];

            return Array.isArray(danhSach) ? danhSach : [];
        } catch (error) {
            console.error("Lỗi đọc dữ liệu tin tức:", error);
            return [];
        }
    }

    // Tìm bài viết theo ID
    function layTinTheoId(id) {
        return danhSachTin.find(
            tin => String(tin.id) === String(id)
        );
    }

    // Lấy phần tử HTML theo ID
    function layPhanTu(id) {
        return document.getElementById(id);
    }

    // Hiển thị thông báo khi không có bài viết
    function hienThiThongBao(tieuDe, noiDung) {
        const title = layPhanTu("news-title");
        const date = layPhanTu("news-date");
        const image = layPhanTu("news-image");
        const description = layPhanTu("news-description");
        const content = layPhanTu("news-content");

        if (title) title.textContent = tieuDe;
        if (date) date.textContent = "";
        if (image) {
            image.removeAttribute("src");
            image.hidden = true;
        }
        if (description) description.textContent = "";
        if (content) content.textContent = noiDung;

        document.title = tieuDe + " - Smart Shopping Cart";
    }

    // Chuyển ngày DD/MM/YYYY thành timestamp để sắp xếp
    function chuyenNgay(ngay) {
        if (!ngay) return 0;

        const ketQua = String(ngay).match(
            /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
        );

        if (!ketQua) return 0;

        const [, ngayDang, thangDang, namDang] = ketQua;

        return new Date(
            Number(namDang),
            Number(thangDang) - 1,
            Number(ngayDang)
        ).getTime();
    }

    // Tạo danh sách tin bên phải - KHÔNG CÓ ẢNH
    function capNhatSidebar(idDangXem) {
        const sidebar = layPhanTu("sidebar-list");
        if (!sidebar) return;

        sidebar.replaceChildren();

        const tinKhac = danhSachTin
            .filter(tin => String(tin.id) !== String(idDangXem))
            .sort(
                (a, b) => chuyenNgay(b.date) - chuyenNgay(a.date)
            )
            .slice(0, 5);

        if (tinKhac.length === 0) {
            const thongBao = document.createElement("p");
            thongBao.textContent = "Chưa có tin tức khác.";
            sidebar.appendChild(thongBao);
            return;
        }

        tinKhac.forEach(tin => {
            const link = document.createElement("a");

            link.className = "sidebar-item";
            link.href =
                "news-detail.html?id=" +
                encodeURIComponent(tin.id);

            // Chỉ hiển thị tiêu đề, không tạo thẻ ảnh
            const tieuDe = document.createElement("span");
            tieuDe.textContent =
                tin.title || "Chưa có tiêu đề";

            link.appendChild(tieuDe);
            sidebar.appendChild(link);
        });
    }

    // Hiển thị nội dung bài viết
    function hienThiBaiViet(id) {
        const tin = layTinTheoId(id);

        if (!tin) {
            hienThiThongBao(
                "Không tìm thấy bài viết",
                "Bài viết không tồn tại hoặc đã bị xóa. Vui lòng quay lại trang tin tức."
            );

            const sidebar = layPhanTu("sidebar-list");
            if (sidebar) sidebar.replaceChildren();

            return;
        }

        const title = layPhanTu("news-title");
        const date = layPhanTu("news-date");
        const image = layPhanTu("news-image");
        const description = layPhanTu("news-description");
        const content = layPhanTu("news-content");

        if (title) {
            title.textContent = tin.title || "Chưa có tiêu đề";
        }

        if (date) {
            date.textContent = tin.date || "";
        }

        // Ảnh chính của bài viết vẫn được giữ
        if (image) {
            image.hidden = false;
            image.alt = tin.title || "Ảnh bài viết";

            if (tin.image) {
                image.src = tin.image;
                image.onerror = () => {
                    image.hidden = true;
                };
            } else {
                image.removeAttribute("src");
                image.hidden = true;
            }
        }

        if (description) {
            description.textContent = tin.description || "";
        }

        if (content) {
            content.innerHTML =
                tin.content || "<p>Nội dung đang được cập nhật.</p>";
        }

        document.title =
            (tin.title || "Tin tức") + " - Smart Shopping Cart";

        capNhatSidebar(tin.id);
    }

    // Lấy ID bài viết trên URL
    function layIdTrenUrl() {
        return new URLSearchParams(
            window.location.search
        ).get("id");
    }

    // Khởi tạo trang chi tiết
    function khoiTao() {
        danhSachTin = docDuLieuTinTuc();

        if (danhSachTin.length === 0) {
            hienThiThongBao(
                "Chưa có dữ liệu tin tức",
                "Không tìm thấy dữ liệu tin tức. Vui lòng kiểm tra news-storage.js."
            );
            return;
        }

        hienThiBaiViet(layIdTrenUrl());

        // Chuyển bài từ sidebar mà không tải lại trang
        document.addEventListener("click", function (event) {
            const link = event.target.closest("#sidebar-list a");

            if (!link) return;

            // Giữ nguyên hành vi mở tab mới hoặc các phím bổ trợ
            if (
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey ||
                event.altKey ||
                event.button !== 0
            ) {
                return;
            }

            const url = new URL(link.href, window.location.href);

            if (
                url.origin !== window.location.origin ||
                url.pathname !== window.location.pathname
            ) {
                return;
            }

            const idMoi = url.searchParams.get("id");

            if (!layTinTheoId(idMoi)) return;

            event.preventDefault();

            history.pushState(
                { id: idMoi },
                "",
                url.pathname + url.search + url.hash
            );

            hienThiBaiViet(idMoi);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        // Xử lý nút Back/Forward của trình duyệt
        window.addEventListener("popstate", function () {
            danhSachTin = docDuLieuTinTuc();
            hienThiBaiViet(layIdTrenUrl());
        });

        // Cập nhật nếu dữ liệu thay đổi ở tab khác
        window.addEventListener("storage", function (event) {
            if (event.key !== NEWS_KEY) return;

            danhSachTin = docDuLieuTinTuc();
            hienThiBaiViet(layIdTrenUrl());
        });
    }

    // Đảm bảo HTML đã sẵn sàng trước khi chạy
    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            khoiTao,
            { once: true }
        );
    } else {
        khoiTao();
    }
})();
