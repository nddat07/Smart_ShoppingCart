// ===== CẤU HÌNH =====
const CAU_HINH = {
    soTinBanDau: 5,
    soTinThem: 3
};

// ===== LẤY PHẦN TỬ =====
const btnXemThem = document.getElementById('btnViewMore');
const btnThuGon  = document.getElementById('btnCollapse');
const khuVucNut  = document.getElementById('actionButtons');
const newsList   = document.getElementById('newsList');

let soTinHienThi = CAU_HINH.soTinBanDau;

// Lấy danh sách tin (dạng mảng để dễ xử lý)
const layTatCaTin = () => [...newsList.querySelectorAll('.list-item')];

// ===== CẬP NHẬT HIỂN THỊ =====
function capNhatHienThi() {
    let soTinDaHien = 0;

    layTatCaTin().forEach(tin => {
        if (tin.dataset.hidden === 'true') {
            tin.style.display = 'none';
            return;
        }
        soTinDaHien++;
        tin.style.display = (soTinDaHien <= soTinHienThi) ? 'flex' : 'none';
    });

    const daHienHet = soTinDaHien <= soTinHienThi;

    // Nút Xem Thêm / Thu Gọn
    btnXemThem.style.display = daHienHet ? 'none' : 'block';
    btnThuGon.style.display  = (soTinHienThi > CAU_HINH.soTinBanDau) ? 'block' : 'none';

    // Thông báo "Không còn tin"
    const thongBaoCu = document.querySelector('.no-more-news');
    if (daHienHet && soTinDaHien > 0) {
        if (!thongBaoCu) {
            const msg = document.createElement('div');
            msg.className = 'no-more-news';
            msg.textContent = 'Không còn tin tức nào khác';
            khuVucNut.parentNode.insertBefore(msg, khuVucNut);
        }
    } else if (thongBaoCu) {
        thongBaoCu.remove();
    }
}

// ===== LỌC TIN =====
function filterNews(cat, btn) {
    // Đổi trạng thái nút
    document.querySelectorAll('.filter-btn').forEach(n => n.classList.remove('active'));
    btn.classList.add('active');

    // Reset số tin hiển thị
    soTinHienThi = CAU_HINH.soTinBanDau;

    // Gán data-hidden cho từng tin
    layTatCaTin().forEach(tin => {
        const danhMuc  = tin.dataset.cat;
        const laTinTop = tin.dataset.top === 'true';

        if (cat === 'all') {
            tin.dataset.hidden = laTinTop ? 'true' : 'false';
        } else {
            tin.dataset.hidden = (danhMuc === cat) ? 'false' : 'true';
        }
    });

    capNhatHienThi();
}

// ===== SỰ KIỆN NÚT =====
btnXemThem.addEventListener('click', () => {
    soTinHienThi = Math.min(soTinHienThi + CAU_HINH.soTinThem, layTatCaTin().length);
    capNhatHienThi();
});

btnThuGon.addEventListener('click', () => {
    soTinHienThi = Math.max(soTinHienThi - CAU_HINH.soTinThem, CAU_HINH.soTinBanDau);
    capNhatHienThi();
});

// ===== KHỞI TẠO =====
filterNews('all', document.querySelector('.filter-btn.active'));