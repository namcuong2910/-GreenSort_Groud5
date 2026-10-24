/**
 * GreenSort - Hệ thống phân loại & điều phối thu gom thông minh
 * Tệp JavaScript: Quản lý Xác Thực & Phân Quyền Vai Trò (kiem-tra-quyen.js)
 * 
 * Học phần: CSE122 - Phát triển ứng dụng Web cơ bản
 * Khoa Công nghệ thông tin - Đại học Thủy Lợi (TLU)
 * Nhóm sinh viên thực hiện: BTL-05
 * 
 * 4 Vai trò người dùng trong hệ thống:
 *   1. resident (Người dân)
 *   2. collector (Thu gom viên)
 *   3. coordinator (Điều phối viên)
 *   4. admin (Quản trị viên)
 * Người dùng vai trò nào CHỈ ĐƯỢC PHÉP truy cập trang của vai trò đó!
 */

// Tên khóa lưu trữ trong LocalStorage
const KHOA_CSDL_NGUOI_DUNG = 'greensort_registered_users';
const KHOA_PHIEN_DANG_NHAP = 'greensort_current_user';

/**
 * Hàm làm sạch chuỗi HTML chống tấn công Cross-Site Scripting (XSS - Tiêu chuẩn VP-02)
 * Barem chấm điểm CSE122: Khử độc toàn bộ dữ liệu người dùng trước khi hiển thị qua innerHTML
 * @param {any} chuoi - Chuỗi đầu vào từ biểu mẫu hoặc bộ nhớ
 * @returns {string} Chuỗi an toàn
 */
function escapeHTML(chuoi) {
  if (chuoi === null || chuoi === undefined) return '';
  return String(chuoi)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
if (typeof window !== 'undefined') {
  window.escapeHTML = escapeHTML;
}


// Bản đồ phân quyền chi tiết cho từng vai trò (hỗ trợ cả tên tiếng Việt và tên cũ)
const DANH_SACH_QUYEN_THEO_VAI_TRO = {
  resident: [
    'cu-dan-tra-cuu-rac.html',
    'cu-dan-diem-thu-gom.html',
    'cu-dan-dat-lich-thu-gom.html',
    'cu-dan-tra-cuu-rac.html',
    'cu-dan-diem-thu-gom.html',
    'cu-dan-dat-lich-thu-gom.html'
  ],
  collector: [
    'thu-gom-danh-sach-nhiem-vu.html',
    'thu-gom-lo-trinh-tuyen-duong.html',
    'thu-gom-chi-tiet-don.html',
    'thu-gom-danh-sach-nhiem-vu.html',
    'thu-gom-lo-trinh-tuyen-duong.html',
    'thu-gom-chi-tiet-don.html'
  ],
  coordinator: [
    'dieu-phoi-bang-yeu-cau.html',
    'dieu-phoi-quan-ly-diem-gom.html',
    'dieu-phoi-thong-ke-bao-cao.html',
    'dieu-phoi-bang-yeu-cau.html',
    'dieu-phoi-quan-ly-diem-gom.html',
    'dieu-phoi-thong-ke-bao-cao.html'
  ],
  admin: [
    'quan-tri-bang-dieu-khien.html',
    'quan-tri-danh-muc-rac.html',
    'quan-tri-nguoi-dung.html',
    'quan-tri-bang-dieu-khien.html',
    'quan-tri-danh-muc-rac.html',
    'quan-tri-nguoi-dung.html'
  ]
};

// Trang chủ mặc định khi đăng nhập theo từng vai trò
const TRANG_CHU_THEO_VAI_TRO = {
  resident: 'cu-dan-tra-cuu-rac.html',
  collector: 'thu-gom-danh-sach-nhiem-vu.html',
  coordinator: 'dieu-phoi-bang-yeu-cau.html',
  admin: 'quan-tri-bang-dieu-khien.html'
};

// Tên tiếng Việt hiển thị
const TEN_GOI_VAI_TRO = {
  resident: 'Người dân',
  collector: 'Thu gom viên',
  coordinator: 'Điều phối viên',
  admin: 'Quản trị viên'
};

// Danh sách các trang bắt buộc bảo vệ (yêu cầu đăng nhập)
const TAT_CA_TRANG_BAO_VE = [
  ...DANH_SACH_QUYEN_THEO_VAI_TRO.resident,
  ...DANH_SACH_QUYEN_THEO_VAI_TRO.collector,
  ...DANH_SACH_QUYEN_THEO_VAI_TRO.coordinator,
  ...DANH_SACH_QUYEN_THEO_VAI_TRO.admin
];

// Danh sách trang công khai không cần đăng nhập
const TRANG_CONG_KHAI = [
  'index.html',
  'dang-nhap.html',
  'dang-nhap.html',
  'dang-ky.html',
  'dang-ky.html',
  'quen-mat-khau.html',
  'quen-mat-khau.html',
  '404.html',
  '403.html'
];

/**
 * 1. Khởi tạo danh sách tài khoản mẫu ban đầu (Seed Users)
 */
function khoiTaoCoSoDuLieuNguoiDung() {
  const duLieuDaCo = localStorage.getItem(KHOA_CSDL_NGUOI_DUNG);
  let danhSachHienTai = [];
  try {
    danhSachHienTai = duLieuDaCo ? JSON.parse(duLieuDaCo) : [];
    if (!Array.isArray(danhSachHienTai)) danhSachHienTai = [];
  } catch (loi) {
    danhSachHienTai = [];
  }

  // 4 Tài khoản mẫu mặc định đại diện cho 4 vai trò
  const danhSachTaiKhoanMau = [
    {
      fullName: 'Nguyễn Văn An',
      username: 'nguyenvana',
      phone: '0912345678',
      password: 'password123',
      role: 'resident',
      roleName: 'Người dân',
      disabled: false,
      createdAt: new Date().toISOString()
    },
    {
      fullName: 'Bác Nam (Tài xế)',
      username: 'xe_thu_gom_02',
      phone: '0987654321',
      password: 'password123',
      role: 'collector',
      roleName: 'Thu gom viên',
      disabled: false,
      createdAt: new Date().toISOString()
    },
    {
      fullName: 'Phạm Thu Trang',
      username: 'dieu_phoi_vien_01',
      phone: '0933221100',
      password: 'password123',
      role: 'coordinator',
      roleName: 'Điều phối viên',
      disabled: false,
      createdAt: new Date().toISOString()
    },
    {
      fullName: 'Trần Quản Trị',
      username: 'admin',
      phone: '0900000000',
      password: 'password123',
      role: 'admin',
      roleName: 'Quản trị viên',
      disabled: false,
      createdAt: new Date().toISOString()
    }
  ];

  let coThayDoi = false;
  if (danhSachHienTai.length === 0) {
    danhSachHienTai = danhSachTaiKhoanMau;
    coThayDoi = true;
  } else {
    // Đảm bảo 4 tài khoản mẫu luôn sẵn sàng để kiểm thử
    danhSachTaiKhoanMau.forEach(tkMau => {
      const viTri = danhSachHienTai.findIndex(u => u.username && u.username.toLowerCase() === tkMau.username.toLowerCase());
      if (viTri === -1) {
        danhSachHienTai.push(tkMau);
        coThayDoi = true;
      } else if (tkMau.username === 'admin') {
        if (danhSachHienTai[viTri].role !== 'admin' || danhSachHienTai[viTri].disabled || !danhSachHienTai[viTri].password) {
          danhSachHienTai[viTri].role = 'admin';
          danhSachHienTai[viTri].roleName = 'Quản trị viên';
          danhSachHienTai[viTri].disabled = false;
          danhSachHienTai[viTri].password = 'password123';
          coThayDoi = true;
        }
      }
    });
  }

  if (coThayDoi) {
    localStorage.setItem(KHOA_CSDL_NGUOI_DUNG, JSON.stringify(danhSachHienTai));
  }
}

/**
 * 2. Lấy toàn bộ danh sách tài khoản
 */
function layTatCaNguoiDung() {
  khoiTaoCoSoDuLieuNguoiDung();
  try {
    return JSON.parse(localStorage.getItem(KHOA_CSDL_NGUOI_DUNG)) || [];
  } catch (loi) {
    return [];
  }
}

/**
 * 3. Đăng ký tài khoản người dân mới
 */
function dangKyTaiKhoanMoi(thongTin) {
  const danhSach = layTatCaNguoiDung();

  // Kiểm tra trùng tên tài khoản hoặc số điện thoại
  const daTonTai = danhSach.some(u =>
    u.username.toLowerCase() === thongTin.username.toLowerCase() ||
    u.phone === thongTin.phone
  );
  if (daTonTai) {
    return { success: false, message: 'Tên tài khoản hoặc số điện thoại này đã được đăng ký!' };
  }

  // Kiểm tra tên tài khoản hợp lệ
  if (!/^[a-zA-Z0-9_]{4,20}$/.test(thongTin.username)) {
    return { success: false, message: 'Tên tài khoản phải từ 4-20 ký tự, chỉ gồm chữ cái, số và dấu gạch dưới.' };
  }

  // Kiểm tra độ dài mật khẩu
  if (!thongTin.password || thongTin.password.length < 6) {
    return { success: false, message: 'Mật khẩu phải có ít nhất 6 ký tự.' };
  }

  const vaiTroHopLe = ['resident', 'collector', 'coordinator', 'admin'];
  const vaiTro = (thongTin.role && vaiTroHopLe.includes(thongTin.role)) ? thongTin.role : 'resident';
  const tenVaiTro = TEN_GOI_VAI_TRO[vaiTro] || 'Người dân';

  const taiKhoanMoi = {
    fullName: (thongTin.fullName || '').trim(),
    username: (thongTin.username || '').trim(),
    phone: (thongTin.phone || '').trim(),
    password: thongTin.password,
    role: vaiTro,
    roleName: tenVaiTro,
    disabled: false,
    createdAt: new Date().toISOString()
  };

  danhSach.push(taiKhoanMoi);
  localStorage.setItem(KHOA_CSDL_NGUOI_DUNG, JSON.stringify(danhSach));
  return { success: true, message: `Tạo tài khoản thành công cho "${taiKhoanMoi.fullName}"!` };
}

/**
 * 4. Xác thực đăng nhập
 */
function xacThucDangNhap(tenDangNhapHoacSdt, matKhau) {
  khoiTaoCoSoDuLieuNguoiDung();
  const danhSach = layTatCaNguoiDung();
  const chuoiNhap = (tenDangNhapHoacSdt || '').trim().toLowerCase();

  const taiKhoan = danhSach.find(u => {
    const uName = (u.username || '').toLowerCase();
    const phone = (u.phone || '').trim();
    return uName === chuoiNhap || phone === chuoiNhap;
  });

  if (!taiKhoan) {
    return {
      success: false,
      thanhCong: false,
      message: 'Tài khoản hoặc số điện thoại không tồn tại!',
      thongBao: 'Tài khoản hoặc số điện thoại không tồn tại!'
    };
  }

  if (taiKhoan.disabled) {
    return {
      success: false,
      thanhCong: false,
      message: 'Tài khoản đã bị vô hiệu hóa bởi Quản trị viên!',
      thongBao: 'Tài khoản đã bị vô hiệu hóa bởi Quản trị viên!'
    };
  }

  if (taiKhoan.password !== matKhau) {
    return {
      success: false,
      thanhCong: false,
      message: 'Mật khẩu không chính xác, vui lòng thử lại!',
      thongBao: 'Mật khẩu không chính xác, vui lòng thử lại!'
    };
  }

  // Lưu thông tin phiên đăng nhập
  const phien = {
    fullName: taiKhoan.fullName,
    username: taiKhoan.username,
    phone: taiKhoan.phone,
    role: taiKhoan.role,
    roleName: taiKhoan.roleName || TEN_GOI_VAI_TRO[taiKhoan.role] || taiKhoan.role,
    loginAt: new Date().toISOString()
  };
  localStorage.setItem(KHOA_PHIEN_DANG_NHAP, JSON.stringify(phien));

  const trangDich = TRANG_CHU_THEO_VAI_TRO[taiKhoan.role] || 'cu-dan-tra-cuu-rac.html';
  return {
    success: true,
    thanhCong: true,
    user: taiKhoan,
    nguoiDung: taiKhoan,
    redirectUrl: trangDich,
    duongDanChuyenHuong: trangDich
  };
}

/**
 * 5. Lấy tài khoản đang đăng nhập hiện tại
 */
function layNguoiDungHienTai() {
  const chuoi = localStorage.getItem(KHOA_PHIEN_DANG_NHAP);
  if (!chuoi) return null;
  try {
    return JSON.parse(chuoi);
  } catch (loi) {
    return null;
  }
}

/**
 * 6. Kiểm tra quyền truy cập trang nghiêm ngặt theo vai trò
 */
function kiemTraQuyenTruyCap() {
  const duongDanTrang = window.location.pathname.split('/').pop() || 'index.html';

  // Bỏ qua các trang công khai
  if (TRANG_CONG_KHAI.includes(duongDanTrang)) return;

  if (TAT_CA_TRANG_BAO_VE.includes(duongDanTrang)) {
    const nguoiDung = layNguoiDungHienTai();

    // Chưa đăng nhập -> Chuyển về trang đăng nhập
    if (!nguoiDung) {
      sessionStorage.setItem('greensort_redirect_after_login', duongDanTrang);
      window.location.href = 'dang-nhap.html';
      return;
    }

    // Kiểm tra quyền theo vai trò
    const trangDuocPhep = DANH_SACH_QUYEN_THEO_VAI_TRO[nguoiDung.role] || [];
    if (!trangDuocPhep.includes(duongDanTrang)) {
      window.location.href = `403.html?page=${encodeURIComponent(duongDanTrang)}&role=${encodeURIComponent(nguoiDung.role)}`;
      return;
    }

    // Cập nhật tên người dùng lên thanh tiêu đề
    capNhatThanhDieuHuong(nguoiDung);
  }
}

/**
 * 7. Cập nhật tên và vai trò người dùng lên thanh điều hướng
 */
function capNhatThanhDieuHuong(nguoiDung) {
  const capNhat = () => {
    const nhanTen = document.querySelectorAll('#currentUserDisplay');
    const tenHienThi = `${nguoiDung.fullName || nguoiDung.username} (${nguoiDung.roleName || TEN_GOI_VAI_TRO[nguoiDung.role] || nguoiDung.role})`;
    nhanTen.forEach(nhan => {
      if (nhan.textContent !== tenHienThi) nhan.textContent = tenHienThi;
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', capNhat);
  } else {
    capNhat();
  }
}

/**
 * 8. Đăng xuất khỏi hệ thống
 */
function dangXuat() {
  localStorage.removeItem(KHOA_PHIEN_DANG_NHAP);
  window.location.href = 'dang-nhap.html';
}

/**
 * 9. Đặt lại mật khẩu mới
 */
function datLaiMatKhau(tenDangNhapHoacSdt, matKhauMoi) {
  const danhSach = layTatCaNguoiDung();
  const chuoi = tenDangNhapHoacSdt.trim().toLowerCase();
  const viTri = danhSach.findIndex(u =>
    u.username.toLowerCase() === chuoi || u.phone === chuoi
  );

  if (viTri === -1) {
    return { success: false, message: 'Tài khoản hoặc số điện thoại không tồn tại!' };
  }

  if (!matKhauMoi || matKhauMoi.length < 6) {
    return { success: false, message: 'Mật khẩu mới phải có ít nhất 6 ký tự.' };
  }

  danhSach[viTri].password = matKhauMoi;
  danhSach[viTri].passwordResetAt = new Date().toISOString();
  localStorage.setItem(KHOA_CSDL_NGUOI_DUNG, JSON.stringify(danhSach));

  return { success: true, message: `Đặt lại mật khẩu thành công cho tài khoản "${danhSach[viTri].username}"!` };
}

/**
 * 10. Chuyển trang mượt mà không chớp nháy
 */
function khoiTaoChuyenTrangMuot() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('tel:') || href.startsWith('mailto:') || link.target === '_blank') {
      return;
    }
    if (link.getAttribute('data-bs-toggle') || link.getAttribute('data-bs-target')) {
      return;
    }
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

    const fileHienTai = window.location.pathname.split('/').pop() || 'index.html';
    const fileDich = href.split('/').pop();
    if (fileDich === fileHienTai) {
      e.preventDefault();
      return;
    }

    if (href.endsWith('.html') || href.includes('.html?')) {
      const mainEl = document.querySelector('main');
      if (mainEl && !document.body.classList.contains('dang-chuyen-trang')) {
        e.preventDefault();
        document.body.classList.add('dang-chuyen-trang');
        setTimeout(() => {
          window.location.href = href;
        }, 65);
      }
    }
  });

  window.addEventListener('pageshow', () => {
    document.body.classList.remove('dang-chuyen-trang');
  });
}

// ==========================================================================
// CÁC HÀM VÀ BÍ DANH TƯƠNG THÍCH TOÀN CỤC
// ==========================================================================
window.USERS_DB_KEY = KHOA_CSDL_NGUOI_DUNG;
const USERS_DB_KEY = KHOA_CSDL_NGUOI_DUNG;
window.CURRENT_USER_KEY = KHOA_PHIEN_DANG_NHAP;
const CURRENT_USER_KEY = KHOA_PHIEN_DANG_NHAP;

window.initUsersDatabase = khoiTaoCoSoDuLieuNguoiDung;
window.getAllUsers = layTatCaNguoiDung;
window.registerUser = dangKyTaiKhoanMoi;
window.authenticateUser = xacThucDangNhap;
window.getCurrentUser = layNguoiDungHienTai;
window.checkAuthGuard = kiemTraQuyenTruyCap;
window.updateNavbarByRole = capNhatThanhDieuHuong;
window.logoutUser = dangXuat;
window.resetPassword = datLaiMatKhau;

window.khoiTaoCoSoDuLieuNguoiDung = khoiTaoCoSoDuLieuNguoiDung;
window.layTatCaNguoiDung = layTatCaNguoiDung;
window.dangKyTaiKhoanMoi = dangKyTaiKhoanMoi;
window.xacThucDangNhap = xacThucDangNhap;
window.layNguoiDungHienTai = layNguoiDungHienTai;
window.kiemTraQuyenTruyCap = kiemTraQuyenTruyCap;
window.capNhatThanhDieuHuong = capNhatThanhDieuHuong;
window.dangXuat = dangXuat;
window.datLaiMatKhau = datLaiMatKhau;

// Khởi chạy tự động
khoiTaoCoSoDuLieuNguoiDung();
kiemTraQuyenTruyCap();
khoiTaoChuyenTrangMuot();
if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", khoiTaoThanhChuyenVaiTroDemo); } else { khoiTaoThanhChuyenVaiTroDemo(); }


/**
 * Trình chuyển đổi vai trò Demo nổi (Floating Demo Role Switcher)
 * Phục vụ buổi báo cáo 6 phút trước hội đồng chấm thi CSE122 (Tiêu chí 2.4)
 */
function khoiTaoThanhChuyenVaiTroDemo() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('greensort-demo-switcher')) return;

  const nguoiDungHienTai = layNguoiDungHienTai();
  const vaiTro = nguoiDungHienTai ? nguoiDungHienTai.role : 'guest';
  const tenHienThi = nguoiDungHienTai ? (nguoiDungHienTai.fullName || nguoiDungHienTai.username) : 'Khách vãng lai';

  const hopChuyen = document.createElement('div');
  hopChuyen.id = 'greensort-demo-switcher';
  hopChuyen.className = 'greensort-switcher-container';
  hopChuyen.innerHTML = `
    <div class="greensort-switcher-card shadow-lg">
      <div class="greensort-switcher-header" onclick="toggleDemoSwitcher()" title="Nhấn để mở bảng chọn vai trò nhanh">
        <span class="badge bg-success me-1">⚡ Demo CSE122</span>
        <small class="fw-bold text-dark text-truncate me-1" style="max-width: 110px;" id="switcherRoleLabel">${escapeHTML(tenHienThi)}</small>
        <span class="ms-auto text-muted cursor-pointer" id="switcherToggleIcon"><i class="bi bi-chevron-down"></i></span>
      </div>
      <div class="greensort-switcher-body" id="switcherBody">
                <div class="d-grid gap-1">
          <button class="btn btn-sm ${vaiTro === 'resident' ? 'btn-success text-white' : 'btn-outline-success'} text-start py-1" onclick="chuyenNhanhVaiTro('resident')">
            <i class="bi bi-person-fill me-1"></i>🌱 <strong>SV1:</strong> Cư dân (Nam Cường)
          </button>
          <button class="btn btn-sm ${vaiTro === 'collector' ? 'btn-warning text-dark' : 'btn-outline-warning text-dark'} text-start py-1" onclick="chuyenNhanhVaiTro('collector')">
            <i class="bi bi-truck me-1"></i>🚚 <strong>SV2:</strong> Thu gom (Xuân Hùng)
          </button>
          <button class="btn btn-sm ${vaiTro === 'coordinator' ? 'btn-primary text-white' : 'btn-outline-primary'} text-start py-1" onclick="chuyenNhanhVaiTro('coordinator')">
            <i class="bi bi-clipboard2-check-fill me-1"></i>📋 <strong>SV3:</strong> Điều phối (Đức Anh)
          </button>
          <button class="btn btn-sm ${vaiTro === 'admin' ? 'btn-dark text-white' : 'btn-outline-dark'} text-start py-1" onclick="chuyenNhanhVaiTro('admin')">
            <i class="bi bi-shield-lock-fill me-1"></i>🛡️ <strong>SV3:</strong> Quản trị viên
          </button>
        </div>
      </div>
    </div>
  `;

  if (!document.getElementById('greensort-demo-switcher-style')) {
    const style = document.createElement('style');
    style.id = 'greensort-demo-switcher-style';
    style.textContent = `
      .greensort-switcher-container {
        position: fixed;
        bottom: 18px;
        right: 18px;
        z-index: 10000;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      }
      .greensort-switcher-card {
        background: #ffffff;
        border: 2px solid #16a34a;
        border-radius: 12px;
        width: 250px;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      .greensort-switcher-header {
        background: #f0fdf4;
        padding: 7px 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        border-bottom: 1px solid #dcfce7;
      }
      .greensort-switcher-body {
        padding: 8px 10px;
        background: #ffffff;
        display: none;
      }
      .greensort-switcher-body.open {
        display: block;
      }
      .cursor-pointer { cursor: pointer; }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(hopChuyen);
}

function toggleDemoSwitcher() {
  const body = document.getElementById('switcherBody');
  const icon = document.getElementById('switcherToggleIcon');
  if (body) {
    body.classList.toggle('open');
    if (icon) {
      icon.innerHTML = body.classList.contains('open') ? '<i class="bi bi-chevron-up"></i>' : '<i class="bi bi-chevron-down"></i>';
    }
  }
}

function chuyenNhanhVaiTro(tenVaiTro) {
  const danhSach = layTatCaNguoiDung();
  const user = danhSach.find(u => u.role === tenVaiTro);
  if (user) {
    localStorage.setItem(KHOA_PHIEN_DANG_NHAP, JSON.stringify(user));
    const trangDich = TRANG_CHU_THEO_VAI_TRO[tenVaiTro] || 'dang-nhap.html';
    window.location.href = trangDich;
  }
}
window.chuyenNhanhVaiTro = chuyenNhanhVaiTro;
window.toggleDemoSwitcher = toggleDemoSwitcher;
window.khoiTaoThanhChuyenVaiTroDemo = khoiTaoThanhChuyenVaiTroDemo;
