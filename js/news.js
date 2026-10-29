// ==================================================
// 1. CẤU HÌNH
// ==================================================
const CAU_HINH = {
    soTinBanDau: 5,
    soTinThem: 3,
    soTinNoiBat: 3
};

// ==================================================
// 2. LẤY PHẦN TỬ HTML
// ==================================================
const newsList = document.getElementById("newsList");
const topNews = document.getElementById("topNews");
const btnXemThem = document.getElementById("btnViewMore");
const btnThuGon = document.getElementById("btnCollapse");
const khuVucNut = document.getElementById("actionButtons");

let soTinHienThi = CAU_HINH.soTinBanDau;
let danhMucHienTai = "all";

// Danh sách tin sau khi đọc dữ liệu
let danhSachTin = [];

// ==================================================
// 3. ĐỌC DỮ LIỆU TIN TỨC
// ==================================================
function layTatCaTin() {
    const cacKhoaThu = [
        "smart_cart_news",
        "news",
        "newsData",
        "news-data",
        "newsList",
        "danhSachTin",
        "allNews"
    ];

    for (const khoa of cacKhoaThu) {
        try {
            const duLieu = localStorage.getItem(khoa);

            if (!duLieu) continue;

            const parsed = JSON.parse(duLieu);

            if (Array.isArray(parsed)) {
                return parsed;
            }

            if (parsed && typeof parsed === "object") {
                for (const tenThuocTinh of [
                    "news",
                    "newsData",
                    "newsList",
                    "danhSachTin",
                    "items"
                ]) {
                    if (Array.isArray(parsed[tenThuocTinh])) {
                        return parsed[tenThuocTinh];
                    }
                }
            }
        } catch (error) {
            console.warn("Không đọc được localStorage:", khoa, error);
        }
    }

    console.warn("Không tìm thấy dữ liệu tin tức trong localStorage.");
    return [];
}

// ==================================================
// 4. CHUẨN HÓA DỮ LIỆU BÀI VIẾT
// ==================================================
function chuanHoaTin(tin) {
    return {
        id: tin.id ?? tin.newsId,
        title: tin.title ?? tin.tieuDe ?? "Chưa có tiêu đề",
        image: tin.image ?? tin.img ?? tin.anh ?? "",
        description:
            tin.description ??
            tin.desc ??
            tin.moTa ??
            tin.tomTat ??
            "",
        date: tin.date ?? tin.ngayDang ?? "",
        category:
            tin.category ??
            tin.cat ??
            tin.danhMuc ??
            "thongtin"
    };
}

// ==================================================
// 5. TẠO ĐƯỜNG DẪN CHI TIẾT
// ==================================================
function taoLinkChiTiet(id) {
    return `news-detail.html?id=${encodeURIComponent(id)}`;
}

// ==================================================
// 6. TẠO THẺ TIN NỔI BẬT
// ==================================================
function taoTinNoiBat(tin) {
    const link = document.createElement("a");
    link.className = "card";
    link.href = taoLinkChiTiet(tin.id);

    const khungAnh = document.createElement("div");
    khungAnh.className = "card-img-wrap";

    const anh = document.createElement("img");
    anh.className = "card-img";
    anh.src = tin.image;
    anh.alt = tin.title;
    anh.loading = "lazy";

    const noiDung = document.createElement("div");
    noiDung.className = "card-content";

    const tieuDe = document.createElement("h3");
    tieuDe.className = "card-title";
    tieuDe.textContent = tin.title;

    const moTa = document.createElement("p");
    moTa.className = "card-desc";
    moTa.textContent = tin.description;

    const ngay = document.createElement("span");
    ngay.className = "card-date";
    ngay.textContent = tin.date;

    khungAnh.appendChild(anh);
    noiDung.append(tieuDe, moTa, ngay);
    link.append(khungAnh, noiDung);

    return link;
}

// ==================================================
// 7. TẠO THẺ TIN TRONG DANH SÁCH
// ==================================================
function taoTheTin(tin) {
    const link = document.createElement("a");
    link.className = "list-item";
    link.href = taoLinkChiTiet(tin.id);
    link.dataset.cat = tin.category;

    const anh = document.createElement("img");
    anh.className = "list-item-img";
    anh.src = tin.image;
    anh.alt = tin.title;
    anh.loading = "lazy";

    const noiDung = document.createElement("div");
    noiDung.className = "list-item-content";

    const tieuDe = document.createElement("h3");
    tieuDe.className = "list-item-title";
    tieuDe.textContent = tin.title;

    const moTa = document.createElement("p");
    moTa.className = "list-item-desc";
    moTa.textContent = tin.description;

    const footer = document.createElement("div");
    footer.className = "list-item-footer";

    const ngay = document.createElement("span");
    ngay.className = "list-item-date";
    ngay.textContent = tin.date;

    const xemThem = document.createElement("span");
    xemThem.className = "list-item-tag";
    xemThem.textContent = "Xem thêm";

    footer.append(ngay, xemThem);
    noiDung.append(tieuDe, moTa, footer);
    link.append(anh, noiDung);

    return link;
}

// ==================================================
// 8. HIỂN THỊ TIN NỔI BẬT VÀ DANH SÁCH
// ==================================================
function hienThiTinTuc() {
    if (!newsList || !topNews) {
        console.error(
            "Không tìm thấy #newsList hoặc #topNews trong news.html"
        );
        return;
    }

    danhSachTin = layTatCaTin().map(chuanHoaTin);

    // Bỏ bài không có ID
    danhSachTin = danhSachTin.filter(
        tin => tin.id !== undefined && tin.id !== null
    );

    // Sắp xếp ngày mới nhất lên trước nếu ngày có dạng DD/MM/YYYY
    danhSachTin.sort((a, b) => {
        function doiNgay(ngay) {
            const match = String(ngay).match(
                /^(\d{2})\/(\d{2})\/(\d{4})$/
            );

            if (!match) return 0;

            return new Date(
                Number(match[3]),
                Number(match[2]) - 1,
                Number(match[1])
            ).getTime();
        }

        return doiNgay(b.date) - doiNgay(a.date);
    });

    // 3 tin nổi bật đầu tiên
    topNews.replaceChildren();

    danhSachTin
        .slice(0, CAU_HINH.soTinNoiBat)
        .forEach(tin => {
            topNews.appendChild(taoTinNoiBat(tin));
        });

    // Danh sách đầy đủ
    newsList.replaceChildren();

    danhSachTin.forEach(tin => {
        newsList.appendChild(taoTheTin(tin));
    });

    soTinHienThi = CAU_HINH.soTinBanDau;
    capNhatHienThi();
}

// ==================================================
// 9. CẬP NHẬT HIỂN THỊ
// ==================================================
function capNhatHienThi() {
    if (!newsList) return;

    const cacTin = [...newsList.querySelectorAll(".list-item")];
    let soTinHopLe = 0;

    cacTin.forEach(tin => {
        const dungDanhMuc =
            danhMucHienTai === "all" ||
            tin.dataset.cat === danhMucHienTai;

        if (!dungDanhMuc) {
            tin.style.display = "none";
            return;
        }

        soTinHopLe++;

        tin.style.display =
            soTinHopLe <= soTinHienThi ? "flex" : "none";
    });

    const daHienHet = soTinHopLe <= soTinHienThi;

    if (btnXemThem) {
        btnXemThem.style.display =
            daHienHet ? "none" : "block";
    }

    if (btnThuGon) {
        btnThuGon.style.display =
            soTinHienThi > CAU_HINH.soTinBanDau
                ? "block"
                : "none";
    }

    // Thông báo
    let thongBao = document.querySelector(".no-more-news");

    if (soTinHopLe === 0) {
        if (!thongBao) {
            thongBao = document.createElement("div");
            thongBao.className = "no-more-news";
            thongBao.textContent = "Không có tin tức trong danh mục này.";
            newsList.after(thongBao);
        }
    } else if (daHienHet) {
        if (!thongBao) {
            thongBao = document.createElement("div");
            thongBao.className = "no-more-news";
            thongBao.textContent = "Đã hiển thị hết tin tức.";
            khuVucNut?.before(thongBao);
        }
    } else {
        thongBao?.remove();
    }
}

// ==================================================
// 10. LỌC DANH MỤC
// ==================================================
function filterNews(cat, btn) {
    danhMucHienTai = cat;
    soTinHienThi = CAU_HINH.soTinBanDau;

    document.querySelectorAll(".filter-btn").forEach(nut => {
        nut.classList.remove("active");
    });

    btn?.classList.add("active");

    capNhatHienThi();
}

// ==================================================
// 11. XEM THÊM / THU GỌN
// ==================================================
btnXemThem?.addEventListener("click", () => {
    soTinHienThi = Math.min(
        soTinHienThi + CAU_HINH.soTinThem,
        danhSachTin.length
    );

    capNhatHienThi();
});

btnThuGon?.addEventListener("click", () => {
    soTinHienThi = CAU_HINH.soTinBanDau;
    capNhatHienThi();

    newsList?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// ==================================================
// 12. KHỞI TẠO
// ==================================================
document.addEventListener("DOMContentLoaded", () => {
    hienThiTinTuc();

    const nutTatCa = document.querySelector(
        '.filter-btn[onclick*="all"]'
    );

    filterNews("all", nutTatCa);
});