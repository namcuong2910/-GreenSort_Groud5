/**
 * Quản lý danh sách tài khoản người dùng và Auth Guard - GreenSort
 * Sử dụng LocalStorage để lưu trữ tài khoản (hỗ trợ Đăng ký mới, Đăng nhập, Kiểm tra mật khẩu)
 */

const USERS_DB_KEY = 'greensort_registered_users';
const CURRENT_USER_KEY = 'greensort_current_user';

// Danh sách trang bắt buộc phải đăng nhập
const PROTECTED_PAGES = [
  'resident-waste-guide.html',
  'resident-collection-points.html',
  'resident-pickup-request.html',
  'coordinator-request-board.html',
  'collector-task-list.html'
];

/**
 * 1. Khởi tạo danh sách tài khoản mặc định (nếu LocalStorage chưa có)
 */
function initUsersDatabase() {
  const existing = localStorage.getItem(USERS_DB_KEY);
  if (!existing) {
    const defaultUsers = [
      {
        fullName: 'Nguyễn Văn An',
        username: 'nguyenvana',
        phone: '0912345678',
        password: 'password123',
        role: 'resident',
        roleName: 'Người dân',
        createdAt: new Date().toISOString()
      },
      {
        fullName: 'Bác Nam (Tài xế)',
        username: 'xe_thu_gom_02',
        phone: '0987654321',
        password: 'password123',
        role: 'collector',
        roleName: 'Thu gom viên',
        createdAt: new Date().toISOString()
      },
      {
        fullName: 'Phạm Thu Trang',
        username: 'dieu_phoi_vien_01',
        phone: '0933221100',
        password: 'password123',
        role: 'coordinator',
        roleName: 'Điều phối viên',
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(defaultUsers));
  }
}

/**
 * 2. Lấy danh sách tất cả tài khoản
 */
function getAllUsers() {
  initUsersDatabase();
  try {
    return JSON.parse(localStorage.getItem(USERS_DB_KEY)) || [];
  } catch (e) {
    return [];
  }
}

/**
 * 3. Đăng ký tài khoản mới (Sign Up)
 */
function registerUser(userData) {
  const users = getAllUsers();
  
  // Kiểm tra trùng username hoặc số điện thoại
  const isExist = users.some(u => u.username.toLowerCase() === userData.username.toLowerCase() || u.phone === userData.phone);
  if (isExist) {
    return { success: false, message: 'Tên tài khoản hoặc số điện thoại này đã được đăng ký trên hệ thống!' };
  }

  const newUser = {
    fullName: userData.fullName,
    username: userData.username.trim(),
    phone: userData.phone.trim(),
    password: userData.password,
    role: userData.role || 'resident',
    roleName: userData.role === 'resident' ? 'Người dân' : (userData.role === 'collector' ? 'Thu gom viên' : 'Điều phối viên'),
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
  return { success: true, message: 'Đăng ký tài khoản thành công! Bạn có thể đăng nhập ngay bây giờ.' };
}

/**
 * 4. Xác thực đăng nhập (Login)
 */
function authenticateUser(usernameOrPhone, password) {
  const users = getAllUsers();
  const input = usernameOrPhone.trim().toLowerCase();
  
  const user = users.find(u => (u.username.toLowerCase() === input || u.phone === input));
  
  if (!user) {
    return { success: false, message: 'Tài khoản hoặc số điện thoại không tồn tại!' };
  }
  
  if (user.password !== password) {
    return { success: false, message: 'Mật khẩu không chính xác, vui lòng thử lại!' };
  }

  // Lưu phiên đăng nhập hiện tại
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({
    fullName: user.fullName,
    username: user.username,
    phone: user.phone,
    role: user.role,
    roleName: user.roleName,
    loginAt: new Date().toISOString()
  }));

  return { success: true, user: user };
}

/**
 * 5. Lấy tài khoản đang đăng nhập hiện tại
 */
function getCurrentUser() {
  const userJson = localStorage.getItem(CURRENT_USER_KEY);
  if (!userJson) return null;
  try {
    return JSON.parse(userJson);
  } catch (e) {
    return null;
  }
}

/**
 * 6. Guard bảo vệ trang: nếu chưa đăng nhập thì tự động đá về login.html
 */
function checkAuthGuard() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  if (PROTECTED_PAGES.includes(currentPage)) {
    const user = getCurrentUser();
    if (!user) {
      console.warn('Bạn chưa đăng nhập! Đang chuyển hướng về login.html...');
      sessionStorage.setItem('redirect_after_login', currentPage);
      window.location.href = 'login.html';
    } else {
      updateUserHeaderUI(user);
    }
  }
}

/**
 * 7. Đăng xuất (Logout)
 */
function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
  window.location.href = 'login.html';
}

/**
 * 8. Hiển thị thông tin người dùng lên Header
 */
function updateUserHeaderUI(user) {
  document.addEventListener('DOMContentLoaded', () => {
    const userLabel = document.getElementById('currentUserDisplay');
    if (userLabel) {
      userLabel.textContent = `${user.fullName || user.username} (${user.roleName || user.role})`;
    }
  });
}

// Chạy khởi tạo và Auth Guard ngay khi nhúng script
initUsersDatabase();
checkAuthGuard();
