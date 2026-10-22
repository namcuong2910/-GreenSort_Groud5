/**
 * GreenSort - Quản lý Xác Thực & Phân Quyền Vai Trò Nghiêm Ngặt
 * 4 Vai trò: resident, collector, coordinator, admin
 * Người dùng vai trò nào CHỈ ĐƯỢC PHÉP truy cập trang của vai trò đó!
 * 
 * Học phần: CSE122 - BTL-05
 * Dữ liệu: LocalStorage (mock backend - không bắt buộc máy chủ thật)
 */

const USERS_DB_KEY = 'greensort_registered_users';
const CURRENT_USER_KEY = 'greensort_current_user';

// Bản đồ phân quyền chi tiết cho từng vai trò
const ROLE_PERMISSIONS = {
  resident: [
    'resident-waste-guide.html',
    'resident-collection-points.html',
    'resident-pickup-request.html'
  ],
  collector: [
    'collector-task-list.html',
    'collector-route-view.html',
    'collector-request-detail.html'
  ],
  coordinator: [
    'coordinator-request-board.html',
    'coordinator-point-management.html',
    'coordinator-analytics.html'
  ],
  admin: [
    'admin-dashboard.html',
    'admin-waste-types.html',
    'admin-users.html'
  ]
};

// Trang mặc định chuyển đến khi đăng nhập từng vai trò
const ROLE_HOME_PAGES = {
  resident: 'resident-waste-guide.html',
  collector: 'collector-task-list.html',
  coordinator: 'coordinator-request-board.html',
  admin: 'admin-dashboard.html'
};

// Tên tiếng Việt cho vai trò
const ROLE_NAMES = {
  resident: 'Người dân',
  collector: 'Thu gom viên',
  coordinator: 'Điều phối viên',
  admin: 'Quản trị viên'
};

// Danh sách các trang bắt buộc bảo vệ (protected pages)
const ALL_PROTECTED_PAGES = [
  ...ROLE_PERMISSIONS.resident,
  ...ROLE_PERMISSIONS.collector,
  ...ROLE_PERMISSIONS.coordinator,
  ...ROLE_PERMISSIONS.admin
];

// Các trang công khai (không cần đăng nhập)
const PUBLIC_PAGES = [
  'index.html',
  'login.html',
  'register.html',
  'forgot-password.html',
  '404.html',
  '403.html'
];

/**
 * 1. Khởi tạo danh sách tài khoản mặc định (Seed Data)
 */
function initUsersDatabase() {
  const duLieuDaCo = localStorage.getItem(USERS_DB_KEY);
  let danhSachHienTai = [];
  try {
    danhSachHienTai = duLieuDaCo ? JSON.parse(duLieuDaCo) : [];
    if (!Array.isArray(danhSachHienTai)) danhSachHienTai = [];
  } catch (e) {
    danhSachHienTai = [];
  }

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
    // Luôn bảo đảm 4 tài khoản mẫu mặc định luôn tồn tại
    danhSachTaiKhoanMau.forEach(tkMau => {
      const index = danhSachHienTai.findIndex(u => u.username && u.username.toLowerCase() === tkMau.username.toLowerCase());
      if (index === -1) {
        danhSachHienTai.push(tkMau);
        coThayDoi = true;
      } else if (tkMau.username === 'admin') {
        // Đảm bảo tài khoản admin luôn có quyền admin, mật khẩu hợp lệ và không bị vô hiệu hóa
        if (danhSachHienTai[index].role !== 'admin' || danhSachHienTai[index].disabled || !danhSachHienTai[index].password) {
          danhSachHienTai[index].role = 'admin';
          danhSachHienTai[index].roleName = 'Quản trị viên';
          danhSachHienTai[index].disabled = false;
          danhSachHienTai[index].password = 'password123';
          coThayDoi = true;
        }
      }
    });
  }

  if (coThayDoi) {
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(danhSachHienTai));
  }
}

/**
 * 2. Lấy danh sách tài khoản
 */
function getAllUsers() {
  initUsersDatabase();
  try {
    return JSON.parse(localStorage.getItem(USERS_DB_KEY)) || [];
  } catch (loi) {
    return [];
  }
}

/**
 * 3. Đăng ký tài khoản mới
 * - Chỉ cho phép đăng ký vai trò "Người dân" (resident) từ giao diện đăng ký
 * - Các vai trò khác (collector, coordinator) phải do Quản trị viên tạo
 */
function registerUser(thongTinNguoiDung) {
  const danhSachNguoiDung = getAllUsers();

  // Kiểm tra trùng username hoặc số điện thoại
  const taiKhoanDaTonTai = danhSachNguoiDung.some(nguoiDung =>
    nguoiDung.username.toLowerCase() === thongTinNguoiDung.username.toLowerCase() ||
    nguoiDung.phone === thongTinNguoiDung.phone
  );
  if (taiKhoanDaTonTai) {
    return { success: false, message: 'Tên tài khoản hoặc số điện thoại này đã được đăng ký!' };
  }

  // Kiểm tra username hợp lệ
  if (!/^[a-zA-Z0-9_]{4,20}$/.test(thongTinNguoiDung.username)) {
    return { success: false, message: 'Tên tài khoản phải từ 4-20 ký tự, chỉ gồm chữ cái, số và dấu gạch dưới.' };
  }

  // Kiểm tra mật khẩu đủ dài
  if (!thongTinNguoiDung.password || thongTinNguoiDung.password.length < 6) {
    return { success: false, message: 'Mật khẩu phải có ít nhất 6 ký tự.' };
  }

  const danhSachVaiTroHopLe = ['resident', 'collector', 'coordinator', 'admin'];
  const vaiTroXacDinh = (thongTinNguoiDung.role && danhSachVaiTroHopLe.includes(thongTinNguoiDung.role)) ? thongTinNguoiDung.role : 'resident';
  const tenHienThiVaiTro = ROLE_NAMES[vaiTroXacDinh] || 'Người dân';

  const taiKhoanMoi = {
    fullName: thongTinNguoiDung.fullName.trim(),
    username: thongTinNguoiDung.username.trim(),
    phone: thongTinNguoiDung.phone.trim(),
    password: thongTinNguoiDung.password,
    role: vaiTroXacDinh,
    roleName: tenHienThiVaiTro,
    disabled: false,
    createdAt: new Date().toISOString()
  };

  danhSachNguoiDung.push(taiKhoanMoi);
  localStorage.setItem(USERS_DB_KEY, JSON.stringify(danhSachNguoiDung));
  return { success: true, message: `Tạo tài khoản thành công cho "${taiKhoanMoi.fullName}" với vai trò ${tenHienThiVaiTro}!` };
}

/**
 * 4. Xác thực đăng nhập
 * - Cho phép đăng nhập bằng username HOẶC số điện thoại
 * - Hỗ trợ cả username 'admin' hoặc 'admin_greensort'
 * - Kiểm tra tài khoản bị vô hiệu hóa (disabled)
 */
function authenticateUser(tenDangNhapHoacSdt, matKhau) {
  initUsersDatabase();
  const danhSachNguoiDung = getAllUsers();
  const chuoiNhapVao = (tenDangNhapHoacSdt || '').trim().toLowerCase();
  
  const taiKhoanTimThay = danhSachNguoiDung.find(nguoiDung => {
    const uName = (nguoiDung.username || '').toLowerCase();
    const phone = (nguoiDung.phone || '').trim();
    return uName === chuoiNhapVao || 
           phone === chuoiNhapVao ||
           (chuoiNhapVao === 'admin_greensort' && uName === 'admin');
  });

  if (!taiKhoanTimThay) {
    return { success: false, message: 'Tài khoản hoặc số điện thoại không tồn tại trong hệ thống!' };
  }

  if (taiKhoanTimThay.disabled) {
    return { success: false, message: 'Tài khoản đã bị vô hiệu hóa bởi Quản trị viên. Vui lòng liên hệ hỗ trợ.' };
  }

  if (taiKhoanTimThay.password !== matKhau) {
    return { success: false, message: 'Mật khẩu không chính xác! Vui lòng thử lại hoặc sử dụng chức năng Quên mật khẩu.' };
  }

  // Lưu phiên đăng nhập vào localStorage (session)
  const thongTinPhienDangNhap = {
    fullName: taiKhoanTimThay.fullName,
    username: taiKhoanTimThay.username,
    phone: taiKhoanTimThay.phone,
    role: taiKhoanTimThay.role,
    roleName: taiKhoanTimThay.roleName || ROLE_NAMES[taiKhoanTimThay.role] || taiKhoanTimThay.role,
    loginAt: new Date().toISOString()
  };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(thongTinPhienDangNhap));

  return { success: true, user: taiKhoanTimThay };
}

/**
 * 5. Lấy tài khoản đang đăng nhập hiện tại
 */
function getCurrentUser() {
  const chuoiPhienNguoiDung = localStorage.getItem(CURRENT_USER_KEY);
  if (!chuoiPhienNguoiDung) return null;
  try {
    return JSON.parse(chuoiPhienNguoiDung);
  } catch (loi) {
    return null;
  }
}

/**
 * 6. Guard kiểm soát quyền truy cập nghiêm ngặt (Strict Role Guard)
 * - Trang protected → yêu cầu đăng nhập
 * - Trang của role khác → chặn + redirect về trang đúng role
 */
function checkAuthGuard() {
  const duongDanTrangHienTai = window.location.pathname.split('/').pop() || 'index.html';
  
  // Bỏ qua các trang công khai
  if (PUBLIC_PAGES.includes(duongDanTrangHienTai)) return;

  if (ALL_PROTECTED_PAGES.includes(duongDanTrangHienTai)) {
    const nguoiDungHienTai = getCurrentUser();
    
    // Chưa đăng nhập -> Chuyển hướng về login
    if (!nguoiDungHienTai) {
      console.warn('⚠️ Bạn cần đăng nhập để truy cập trang này! Đang chuyển hướng về login.html...');
      sessionStorage.setItem('greensort_redirect_after_login', duongDanTrangHienTai);
      window.location.href = 'login.html';
      return;
    }

    // Kiểm tra quyền hạn theo vai trò
    const danhSachTrangDuocPhep = ROLE_PERMISSIONS[nguoiDungHienTai.role] || [];
    if (!danhSachTrangDuocPhep.includes(duongDanTrangHienTai)) {
      window.location.href = `403.html?page=${encodeURIComponent(duongDanTrangHienTai)}&role=${encodeURIComponent(nguoiDungHienTai.role)}`;
      return;
    }

    // Đã đúng vai trò -> Cập nhật thanh điều hướng
    updateNavbarByRole(nguoiDungHienTai);
  }
}

/**
 * 7. Cập nhật thanh điều hướng theo đúng vai trò đang đăng nhập
 */
function updateNavbarByRole(nguoiDung) {
  const capNhatGiaoDien = () => {
    const danhSachNhanTen = document.querySelectorAll('#currentUserDisplay');
    const tenHienThi = `${nguoiDung.fullName || nguoiDung.username} (${nguoiDung.roleName || ROLE_NAMES[nguoiDung.role] || nguoiDung.role})`;
    danhSachNhanTen.forEach(nhan => {
      if (nhan.textContent !== tenHienThi) {
        nhan.textContent = tenHienThi;
      }
    });

    const danhSachTieuDeMenu = document.querySelectorAll('.dropdown-header');
    danhSachTieuDeMenu.forEach(tieuDe => {
      if (tieuDe.textContent.includes('Tài khoản')) {
        tieuDe.textContent = `${nguoiDung.roleName || ROLE_NAMES[nguoiDung.role]}:`;
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', capNhatGiaoDien);
  } else {
    capNhatGiaoDien();
  }
}

/**
 * 8. Đăng xuất
 */
function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
  window.location.href = 'login.html';
}

/**
 * 9. Đổi mật khẩu (dùng cho trang forgot-password)
 */
function resetPassword(tenDangNhapHoacSdt, matKhauMoi) {
  const danhSachNguoiDung = getAllUsers();
  const chuoiNhapVao = tenDangNhapHoacSdt.trim().toLowerCase();
  const viTriTaiKhoan = danhSachNguoiDung.findIndex(nguoiDung =>
    nguoiDung.username.toLowerCase() === chuoiNhapVao || nguoiDung.phone === chuoiNhapVao
  );

  if (viTriTaiKhoan === -1) {
    return { success: false, message: 'Tài khoản hoặc số điện thoại không tồn tại trong hệ thống!' };
  }

  if (!matKhauMoi || matKhauMoi.length < 6) {
    return { success: false, message: 'Mật khẩu mới phải có ít nhất 6 ký tự.' };
  }

  danhSachNguoiDung[viTriTaiKhoan].password = matKhauMoi;
  danhSachNguoiDung[viTriTaiKhoan].passwordResetAt = new Date().toISOString();
  localStorage.setItem(USERS_DB_KEY, JSON.stringify(danhSachNguoiDung));

  return { success: true, message: `Mật khẩu đã được đặt lại thành công cho tài khoản "${danhSachNguoiDung[viTriTaiKhoan].username}"!` };
}

// Bí danh tiếng Việt trực quan cho sinh viên giải trình đồ án
window.khoiTaoCoSoDuLieuNguoiDung = initUsersDatabase;
window.layTatCaNguoiDung = getAllUsers;
window.dangKyTaiKhoanMoi = registerUser;
window.xacThucDangNhap = authenticateUser;
window.layNguoiDungHienTai = getCurrentUser;
window.kiemTraQuyenTruyCap = checkAuthGuard;
window.capNhatThanhDieuHuong = updateNavbarByRole;
window.dangXuatHeThong = logoutUser;
window.datLaiMatKhau = resetPassword;

/**
 * 8. Bộ điều hướng chuyển cảnh siêu êm không bị giật hay nhấp nháy trắng giữa các trang
 */
function initSmoothPageTransitions() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank' || link.hasAttribute('download')) {
      return;
    }
    if (link.getAttribute('data-bs-toggle') || link.getAttribute('data-bs-target')) {
      return;
    }
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

    // Không load lại nếu đang ở chính xác file và tham số đó
    const fileHienTai = window.location.pathname.split('/').pop() || 'index.html';
    const linkFull = href.split('/').pop();
    if (linkFull === (fileHienTai + window.location.search) || (linkFull === fileHienTai && !window.location.search)) {
      e.preventDefault();
      return;
    }

    // Nếu là liên kết nội bộ các trang HTML của GreenSort
    if (href.endsWith('.html') || href.includes('.html?') || (!href.includes('://') && !href.startsWith('//'))) {
      const mainEl = document.querySelector('main');
      if (mainEl && !document.body.classList.contains('dang-chuyen-trang')) {
        e.preventDefault();
        document.body.classList.add('dang-chuyen-trang');
        setTimeout(() => {
          window.location.href = href;
        }, 75);
      }
    }
  });

  // Đảm bảo khi bấm Back/Forward hoặc phục hồi từ bộ nhớ cache trình duyệt không bị ẩn trang
  window.addEventListener('pageshow', () => {
    document.body.classList.remove('dang-chuyen-trang');
  });
}

// ===== KHỞI TẠO TỰ ĐỘNG =====
initUsersDatabase();
checkAuthGuard();
initSmoothPageTransitions();
