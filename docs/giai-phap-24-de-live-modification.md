# CẨM NANG GIẢI PHÁP 24 ĐỀ LIVE-MODIFICATION THI VẤN ĐÁP CSE122
**Học phần:** CSE122 - Phát triển ứng dụng Web cơ bản (Phiên bản Barem V2 - 2026)  
**Giảng viên chấm thi:** ThS. Kiều Tuấn Dũng & ThS. Tạ Chí Hiếu (TLU)  
**Đề tài BTL-05:** GreenSort - Hệ thống phân loại & điều phối thu gom thông minh  
**Thời gian làm bài trực tiếp:** 2 – 3 phút / câu hỏi bốc thăm ngẫu nhiên.

---

## MỤC LỤC 24 ĐỀ LIVE-MODIFICATION THEO 6 NHÓM CHUYÊN ĐỀ
* [Nhóm A: Thao tác DOM & Giao diện động (A1 - A4)](#nhóm-a-thao-tác-dom--giao-diện-động)
* [Nhóm B: Form, Sự kiện & Xác thực dữ liệu (B1 - B4)](#nhóm-b-form-sự-kiện--xác-thực-dữ-liệu)
* [Nhóm C: Xử lý Mảng, Đối tượng & Thuật toán (C1 - C4)](#nhóm-c-xử-lý-mảng-đối-tượng--thuật-toán)
* [Nhóm D: Web Storage (LocalStorage) & Đồng bộ Trạng thái (D1 - D4)](#nhóm-d-web-storage-localstorage--đồng-bộ-trạng-thái)
* [Nhóm E: Nâng cấp Tính năng AI (AI Features Modification) (E1 - E4)](#nhóm-e-nâng-cấp-tính-năng-ai-ai-features-modification)
* [Nhóm F: Bảo mật, Kiểm soát Quyền RBAC & Xử lý Ngoại lệ (F1 - F4)](#nhóm-f-bảo-mật-kiểm-soát-quyền-rbac--xử-lý-ngoại-lệ)

---

## NHÓM A: THAO TÁC DOM & GIAO DIỆN ĐỘNG

### Đề A1: "Thêm nút chuyển đổi Giao diện Tối/Sáng (Dark Mode) cho trang hiện tại"
* **File áp dụng:** Bất kỳ trang nào (ví dụ: `cu-dan-tra-cuu-rac.html` hoặc `quan-tri-bang-dieu-khien.html`).
* **Thời gian thực hiện:** 60 giây.
* **Cách làm:**
  1. Thêm nút vào Header:
  ```html
  <button class="btn btn-sm btn-outline-dark rounded-pill px-3" onclick="toggleDarkMode()">
    <i class="bi bi-moon-stars me-1"></i>Chế độ Tối
  </button>
  ```
  2. Thêm hàm JS vào thẻ `<script>`:
  ```javascript
  function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-theme');
    if (isDark) {
      document.body.style.backgroundColor = '#1e293b';
      document.body.style.color = '#f8fafc';
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }
  ```

---

### Đề A2: "Thêm một cột 'Thời gian còn lại' hiển thị đếm ngược (Countdown) cho các đơn hàng"
* **File áp dụng:** `dieu-phoi-bang-yeu-cau.html`
* **Cách làm:**
  Trong hàm render bảng `hangYeuCau.innerHTML`, chèn thêm thẻ hiển thị thời gian:
  ```javascript
  const gioTao = new Date(yeuCau.createdAt || Date.now());
  const phutConLai = Math.max(0, 120 - Math.floor((Date.now() - gioTao) / 60000));
  // Thêm vào dòng HTML:
  `<span class="badge ${phutConLai < 30 ? 'bg-danger' : 'bg-warning'} text-dark">
    <i class="bi bi-stopwatch me-1"></i>Còn ${phutConLai} phút
  </span>`
  ```

---

### Đề A3: "Đổi màu nền của dòng (table row) thành màu đỏ nhạt nếu đơn hàng có mức ưu tiên P1 (Khẩn cấp)"
* **File áp dụng:** `dieu-phoi-bang-yeu-cau.html` hoặc `quan-tri-bang-dieu-khien.html`
* **Cách làm:**
  Tìm đến chỗ tạo thẻ `<tr>`:
  ```javascript
  const hangYeuCau = document.createElement('tr');
  // Thêm điều kiện này:
  if (yeuCau.priorityScore >= 70 || yeuCau.status === 'urgent') {
    hangYeuCau.classList.add('table-danger'); // Class có sẵn của Bootstrap 5
  }
  ```

---

### Đề A4: "Thêm tính năng Thu gọn / Mở rộng (Collapse/Accordion) cho phần Hướng dẫn phân loại"
* **File áp dụng:** `cu-dan-tra-cuu-rac.html`
* **Cách làm:**
  Thêm thuộc tính Bootstrap data-bs-toggle vào tiêu đề:
  ```html
  <button class="btn btn-sm btn-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#huongDanNhanh">
    Xem chi tiết hướng dẫn
  </button>
  <div class="collapse mt-2" id="huongDanNhanh">
    <div class="card card-body bg-light small">
      Rác tái chế cần làm sạch và ép bẹp trước khi bỏ thùng xanh.
    </div>
  </div>
  ```

---

## NHÓM B: FORM, SỰ KIỆN & XÁC THỰC DỮ LIỆU

### Đề B1: "Thêm trường 'Số tầng/Căn hộ' vào form đặt lịch và bắt buộc phải nhập nếu là chung cư"
* **File áp dụng:** `cu-dan-dat-lich-thu-gom.html`
* **Cách làm:**
  1. Thêm input HTML:
  ```html
  <div class="mb-3">
    <label class="form-label small fw-semibold">Số phòng / Căn hộ:</label>
    <input type="text" id="apartmentNo" class="form-control" placeholder="Ví dụ: P.804 Tòa A">
  </div>
  ```
  2. Bổ sung kiểm tra trong sự kiện `submit`:
  ```javascript
  const soPhong = document.getElementById('apartmentNo').value.trim();
  const diaChi = document.getElementById('requesterAddress').value.toLowerCase();
  if (diaChi.includes('chung cư') && !soPhong) {
    alert('Vui lòng nhập số tầng/phòng căn hộ đối với khu chung cư!');
    document.getElementById('apartmentNo').focus();
    return;
  }
  ```

---

### Đề B2: "Kiểm tra số điện thoại người đăng ký phải đúng đầu số mạng Việt Nam (03, 05, 07, 08, 09) và đủ 10 chữ số"
* **File áp dụng:** `dang-ky.html` hoặc `cu-dan-dat-lich-thu-gom.html`
* **Cách làm:**
  ```javascript
  const sdt = document.getElementById('requesterPhone').value.trim();
  const regexVN = /^(03|05|07|08|09)[0-9]{8}$/;
  if (!regexVN.test(sdt)) {
    alert('Số điện thoại không hợp lệ! Bắt buộc phải là 10 số thuộc đầu số mạng VN (03, 05, 07, 08, 09).');
    return;
  }
  ```

---

### Đề B3: "Tự động tính ngày thu gom gợi ý là 2 ngày sau ngày hiện tại khi mở form"
* **File áp dụng:** `cu-dan-dat-lich-thu-gom.html`
* **Cách làm:**
  Trong thẻ `<script>`, thêm đoạn thiết lập giá trị mặc định cho ô `pickupDate`:
  ```javascript
  const oNgay = document.getElementById('pickupDate');
  if (oNgay) {
    const ngayMaiKia = new Date();
    ngayMaiKia.setDate(ngayMaiKia.getDate() + 2);
    oNgay.value = ngayMaiKia.toISOString().split('T')[0];
  }
  ```

---

### Đề B4: "Thêm nút 'Làm trống biểu mẫu' (Reset) có hộp thoại xác nhận (Confirm) trước khi xóa"
* **File áp dụng:** `cu-dan-dat-lich-thu-gom.html`
* **Cách làm:**
  Thêm nút vào cạnh nút Gửi:
  ```html
  <button type="button" class="btn btn-outline-secondary rounded-pill px-3" onclick="xoaFormAnToan()">
    Làm lại
  </button>
  ```
  ```javascript
  function xoaFormAnToan() {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ thông tin đã nhập?')) {
      document.getElementById('pickupBookingForm').reset();
    }
  }
  ```

---

## NHÓM C: XỬ LÝ MẢNG, ĐỐI TƯỢNG & THUẬT TOÁN

### Đề C1: "Sắp xếp danh sách rác hoặc đơn hàng theo thứ tự ưu tiên giảm dần (Cao xếp trên)"
* **File áp dụng:** `dieu-phoi-bang-yeu-cau.html` hoặc `cu-dan-tra-cuu-rac.html`
* **Cách làm:**
  Trước khi chạy vòng lặp `forEach` hoặc `map`, chèn hàm `.sort()`:
  ```javascript
  // Sắp xếp giảm dần theo điểm ưu tiên:
  danhSachHienThi.sort((a, b) => (b.priorityScore || 0) - (a.priorityScore || 0));
  ```

---

### Đề C2: "Thêm bộ lọc chỉ hiển thị các điểm thu gom đang có cảm biến mức đầy > 80%"
* **File áp dụng:** `cu-dan-diem-thu-gom.html` hoặc `dieu-phoi-quan-ly-diem-gom.html`
* **Cách làm:**
  Thêm nút lọc trên giao diện:
  ```html
  <button class="btn btn-sm btn-outline-danger rounded-pill px-3" onclick="locDiemGomSapDay()">
    ⚠️ Báo động (>80%)
  </button>
  ```
  ```javascript
  function locDiemGomSapDay() {
    const tatCaDiem = KhoDuLieu.collectionPoints.getAll();
    const diemSapDay = tatCaDiem.filter(d => (d.fillLevel || 0) >= 80);
    hienThiDanhSachDiemGom(diemSapDay); // Hàm render của trang
  }
  ```

---

### Đề C3: "Tính tổng khối lượng rác ước tính của tất cả các đơn hàng đang chờ thu gom"
* **File áp dụng:** `dieu-phoi-bang-yeu-cau.html`
* **Cách làm:**
  Dùng hàm `reduce`:
  ```javascript
  const tatCaDon = KhoDuLieu.pickupRequests.getAll();
  const tongKg = tatCaDon
    .filter(don => don.status === 'pending')
    .reduce((tong, don) => tong + Number(don.estimatedWeight || 5), 0);
  console.log('Tổng tải trọng cần gom:', tongKg, 'kg');
  alert(`Tổng khối lượng các đơn chờ thu gom: ${tongKg} kg`);
  ```

---

### Đề C4: "Tìm kiếm rác gần đúng không phân biệt dấu tiếng Việt (Ví dụ gõ 'giay' vẫn ra 'Giấy')"
* **File áp dụng:** `js/chinh.js` hoặc `cu-dan-tra-cuu-rac.html`
* **Cách làm:**
  Hàm loại bỏ dấu tiếng Việt chuẩn:
  ```javascript
  function boDauTiengViet(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
  }
  // Áp dụng khi so khớp:
  const khop = boDauTiengViet(vatPham.name).includes(boDauTiengViet(tuKhoaTimKiem));
  ```

---

## NHÓM D: WEB STORAGE (LOCALSTORAGE) & ĐỒNG BỘ TRẠNG THÁI

### Đề D1: "Lưu lịch sử 5 từ khóa tìm kiếm gần nhất vào LocalStorage và hiển thị dạng thẻ tag"
* **File áp dụng:** `cu-dan-tra-cuu-rac.html`
* **Cách làm:**
  ```javascript
  function luuLichSuTimKiem(tuKhoa) {
    let ls = JSON.parse(localStorage.getItem('gs_search_history') || '[]');
    if (!ls.includes(tuKhoa)) {
      ls.unshift(tuKhoa);
      if (ls.length > 5) ls.pop();
      localStorage.setItem('gs_search_history', JSON.stringify(ls));
    }
  }
  ```

---

### Đề D2: "Thêm nút 'Khôi phục dữ liệu gốc' (Factory Reset) xóa sạch đơn tạo mới và nạp lại dữ liệu mặc định"
* **File áp dụng:** Bất kỳ trang nào.
* **Cách làm:**
  ```html
  <button class="btn btn-sm btn-outline-danger" onclick="khoiPhucGoc()">
    <i class="bi bi-arrow-counterclockwise me-1"></i>Đặt lại dữ liệu
  </button>
  ```
  ```javascript
  function khoiPhucGoc() {
    if (confirm('Xác nhận đặt lại toàn bộ hệ thống về dữ liệu mẫu ban đầu?')) {
      KhoDuLieu.datLaiMacDinh();
      location.reload();
    }
  }
  ```

---

### Đề D3: "Lưu trạng thái đóng/mở của thanh Sidebar hoặc bộ lọc vào LocalStorage để khi F5 không bị mất"
* **File áp dụng:** `quan-tri-bang-dieu-khien.html`
* **Cách làm:**
  ```javascript
  // Khi người dùng bấm thu gọn:
  localStorage.setItem('sidebar_collapsed', 'true');
  // Khi tải trang:
  if (localStorage.getItem('sidebar_collapsed') === 'true') {
    document.getElementById('sidebar')?.classList.add('d-none');
  }
  ```

---

### Đề D4: "Thêm thông báo Toast góc màn hình khi phát hiện dữ liệu đơn hàng thay đổi từ Tab khác"
* **File áp dụng:** `dieu-phoi-bang-yeu-cau.html`
* **Cách làm:**
  Hệ thống GreenSort đã có sẵn CustomEvent `greensort:dataChanged`:
  ```javascript
  window.addEventListener('greensort:dataChanged', (e) => {
    const thongBao = document.createElement('div');
    thongBao.className = 'alert alert-info position-fixed bottom-0 start-0 m-3 shadow-lg';
    thongBao.style.zIndex = '99999';
    thongBao.innerHTML = '🔔 <strong>Thông báo:</strong> Dữ liệu đơn hàng vừa được cập nhật từ Tab khác!';
    document.body.appendChild(thongBao);
    setTimeout(() => thongBao.remove(), 4000);
  });
  ```

---

## NHÓM E: NÂNG CẤP TÍNH NĂNG AI (AI FEATURES MODIFICATION)

### Đề E1: "Thêm nhóm rác mới 'Rác thiết bị công nghệ (E-Waste)' vào mô hình nhận diện AI-1"
* **File áp dụng:** `js/chinh.js`
* **Cách làm:**
  Tìm đến hàm `xuLyGoiYPhanLoai()`, bổ sung một khối `else if`:
  ```javascript
  else if (tuKhoaThuong.includes('điện thoại') || tuKhoaThuong.includes('laptop') || tuKhoaThuong.includes('máy tính') || tuKhoaThuong.includes('chuột')) {
    ketQua = {
      name: tuKhoa,
      category: 'hazardous',
      categoryName: 'Rác điện tử (E-Waste)',
      boxClass: 'rac-nguy-hai',
      badgeClass: 'text-bg-dark text-white',
      bin: 'Thùng Thu Gom Rác Công Nghệ Riêng Biệt',
      confidence: '97.8%',
      reason: 'Thiết bị chứa bo mạch, kim loại quý và chì, cần thu gom chuyên biệt.',
      instructions: 'Tháo pin trước khi chuyển giao, không đập vỡ màn hình.'
    };
  }
  ```

---

### Đề E2: "Điều chỉnh trọng số SLA AI-2: Tăng gấp đôi điểm ưu tiên nếu khối lượng rác > 50kg"
* **File áp dụng:** `cu-dan-dat-lich-thu-gom.html`
* **Cách làm:**
  Tìm đến hàm `tinhDiemUuTien()`:
  ```javascript
  let diem = diemLoaiRac + diemKhoiLuong + diemKhanCap + diemThoiGian;
  // Bổ sung yêu cầu của thầy:
  if (khoiLuongUocTinh > 50) {
    diem += 30; // Cộng thêm điểm ưu tiên tải trọng lớn
  }
  ```

---

### Đề E3: "Hiển thị thêm chỉ số 'Lượng khí thải CO2 giảm thiểu được' trong kết quả tối ưu lộ trình AI-3"
* **File áp dụng:** `thu-gom-lo-trinh-tuyen-duong.html`
* **Cách làm:**
  Trong modal tối ưu hoặc banner AI-3, thêm dòng:
  ```html
  <div class="badge bg-success-subtle text-success p-2 rounded-pill">
    🌱 Giảm thiểu CO2: <strong>1.05 kg CO2</strong> (~4.2 km x 0.25 kg/km)
  </div>
  ```

---

### Đề E4: "Thêm nút 'Sao chép kết quả phân tích AI' vào bộ nhớ tạm (Clipboard)"
* **File áp dụng:** `cu-dan-tra-cuu-rac.html`
* **Cách làm:**
  ```javascript
  function copyKetQuaAI() {
    const text = document.getElementById('aiResultBox').innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert('Đã sao chép kết quả phân loại AI vào bộ nhớ tạm!');
    });
  }
  ```

---

## NHÓM F: BẢO MẬT, KIỂM SOÁT QUYỀN RBAC & XỬ LÝ NGOẠI LỆ

### Đề F1: "Mô phỏng tấn công XSS bằng thẻ `<img src=x onerror=alert('Hacked')>` và chứng minh hệ thống không bị lỗi"
* **File áp dụng:** `cu-dan-dat-lich-thu-gom.html` hoặc `cu-dan-tra-cuu-rac.html`
* **Cách giải thích & chứng minh với thầy:**
  1. Nhập `<img src=x onerror=alert('Hacked')>` vào ô địa chỉ hoặc ô tra cứu rác.
  2. Bấm Gửi/Tra cứu.
  3. Mở DevTools (F12) tab Elements, chỉ cho thầy thấy: Chuỗi đã được biến đổi an toàn thành:
     `&lt;img src=x onerror=alert(&#39;Hacked&#39;)&gt;`
  4. Trả lời: *"Thưa thầy, hệ thống nhóm em đã chủ động dùng hàm `escapeHTML()` trước khi gán vào `innerHTML`, nên trình duyệt xem đây là chuỗi văn bản thuần và không thể thực thi mã độc Javascript!"*

---

### Đề F2: "Khóa tài khoản người dùng ngay lập tức nếu nhập sai mật khẩu quá 5 lần"
* **File áp dụng:** `dang-nhap.html`
* **Cách làm:**
  ```javascript
  let soLanSai = Number(localStorage.getItem('login_fails_' + username) || 0);
  if (matKhauSai) {
    soLanSai++;
    localStorage.setItem('login_fails_' + username, soLanSai);
    if (soLanSai >= 5) {
      alert('Tài khoản đã bị tạm khóa 15 phút do nhập sai mật khẩu 5 lần liên tiếp!');
      return;
    }
  }
  ```

---

### Đề F3: "Chặn truy cập vào trang admin nếu URL có chứa chuỗi gian lận và tự động đẩy sang 403.html"
* **File áp dụng:** `js/kiem-tra-quyen.js`
* **Cách làm:**
  Trong hàm `kiemTraQuyenTruyCap()`:
  ```javascript
  const user = layNguoiDungHienTai();
  if (window.location.pathname.includes('quan-tri') && (!user || user.role !== 'admin')) {
    window.location.replace('403.html?page=Admin');
  }
  ```

---

### Đề F4: "Hiển thị Modal cảnh báo sắp hết phiên đăng nhập (Session Timeout) sau 10 phút không thao tác"
* **File áp dụng:** `js/kiem-tra-quyen.js`
* **Cách làm:**
  ```javascript
  let demThoiGianRanh;
  function resetTimer() {
    clearTimeout(demThoiGianRanh);
    demThoiGianRanh = setTimeout(() => {
      alert('Phiên làm việc đã hết hạn do không có tương tác trong 10 phút!');
      logoutUser();
    }, 10 * 60 * 1000);
  }
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  ```

---
*Tài liệu này được chuẩn bị riêng cho Nhóm BTL-05 GreenSort - TLU. Hãy giữ bình tĩnh, đọc kỹ câu hỏi của thầy và tự tin code trực tiếp!*
