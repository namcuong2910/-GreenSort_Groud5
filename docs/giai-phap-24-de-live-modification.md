# 🏆 BÍ KÍP LÀM CHỦ 24 ĐỀ LIVE MODIFICATION (CHẶNG 3 - VẤN ĐÁP CSE122)
**Học phần:** CSE122 - Phát triển ứng dụng Web cơ bản | Khoa CNTT - Đại học Thủy Lợi (TLU)  
**Giảng viên chấm thi:** ThS. Kiều Tuấn Dũng & ThS. Tạ Chí Hiếu  
**Sinh viên đảm nhận (SV1):** Bùi Văn Nam Cường (Mã SV: `2551060590`)  
**Phân hệ áp dụng chính:** `cu-dan-tra-cuu-rac.html`, `cu-dan-diem-thu-gom.html`, `cu-dan-dat-lich-thu-gom.html`  

---

## 🧭 BẢN ĐỒ KIẾN THỨC CỐT LÕI (CHỈ CẦN NẮM VỮNG 5 NGUYÊN TẮC NÀY)

Mọi đề bài của giảng viên thực chất chỉ xoay quanh **5 thao tác JavaScript kinh điển** sau:
1. **Bắt sự kiện (Event Listener):** `element.addEventListener('input' | 'change' | 'click', function)`.
2. **Xử lý mảng (Array Methods):** 
   - Lọc dữ liệu: `mang.filter(item => item.giaTri === dieuKien)`
   - Sắp xếp: `mang.sort((a, b) => a.ten.localeCompare(b.ten))`
   - Kiểm tra tồn tại: `mang.some(item => item.id === idMoi)`
3. **Cập nhật giao diện (DOM Manipulation):** `element.innerHTML = ...` hoặc `element.textContent = ...`.
4. **Bật/Tắt giao diện (Class Toggle):** `element.classList.toggle('d-none')` hoặc `element.classList.add('is-invalid')`.
5. **Lưu trữ phiên (LocalStorage):** `localStorage.setItem(key, JSON.stringify(val))` và `JSON.parse(localStorage.getItem(key))`.

---

# 📚 CHI TIẾT 24 ĐỀ BÀI THEO 6 NHÓM KỸ NĂNG

---

## 🏷️ NHÓM A — TÌM KIẾM, BỘ LỌC & SẮP XẾP (SEARCH / FILTER / SORT)
> **Mục tiêu:** Kiểm tra khả năng xử lý mảng và cập nhật giao diện thời gian thực.  
> **Màn hình áp dụng tốt nhất:** `cu-dan-tra-cuu-rac.html` (Trang tra cứu rác) hoặc `cu-dan-diem-thu-gom.html`.

### 📌 Đề A1: Thêm một tiêu chí lọc mới kết hợp đồng thời với ô tìm kiếm
* **Yêu cầu:** Thêm một tiêu chí lọc (ví dụ: lọc theo *Mức độ nguy hại* hoặc *Độ phổ biến*) chạy song song với ô tìm kiếm từ khóa hiện có.
* **Kiến thức cần có:** Lấy giá trị của thẻ `<select>` kết hợp toán tử logic `&&` trong hàm `.filter()`.
* **Cách thực hiện (3 bước - 2 phút):**
  1. **HTML:** Thêm thẻ `<select id="filterDanger">` cạnh ô tìm kiếm:
     ```html
     <select class="form-select form-select-sm w-auto" id="filterDanger">
       <option value="all">Tất cả mức độ</option>
       <option value="cao">Nguy hại cao</option>
       <option value="thap">Thông thường</option>
     </select>
     ```
  2. **JavaScript:** Trong hàm lọc danh sách rác (`locDanhSachRac()`):
     ```javascript
     const mucDo = document.getElementById('filterDanger').value;
     const ketQua = danhSachRac.filter(item => {
       const khopTuKhoa = item.name.toLowerCase().includes(tuKhoa);
       const khopMucDo = (mucDo === 'all') || (item.dangerLevel === mucDo);
       return khopTuKhoa && khopMucDo;
     });
     renderDanhSach(ketQua);
     ```
  3. **Gắn sự kiện:**
     ```javascript
     document.getElementById('filterDanger').addEventListener('change', locDanhSachRac);
     ```

---

### 📌 Đề A2: Thêm nút hoặc thẻ `<select>` sắp xếp theo Tên (A → Z) hoặc Ngày mới/cũ
* **Yêu cầu:** Cho phép người dùng sắp xếp danh sách rác hoặc điểm gom theo thứ tự chữ cái A-Z hoặc Z-A.
* **Kiến thức cần có:** Hàm `Array.prototype.sort()` và phương thức so sánh chuỗi tiếng Việt `String.localeCompare()`.
* **Cách thực hiện:**
  1. **HTML:**
     ```html
     <select class="form-select form-select-sm w-auto" id="sortOrder">
       <option value="az">Sắp xếp: Tên A → Z</option>
       <option value="za">Sắp xếp: Tên Z → A</option>
     </select>
     ```
  2. **JavaScript:**
     ```javascript
     document.getElementById('sortOrder').addEventListener('change', function() {
       const kieuSort = this.value;
       danhSachHienThi.sort((a, b) => {
         return kieuSort === 'az' ? a.name.localeCompare(b.name, 'vi') : b.name.localeCompare(a.name, 'vi');
       });
       renderDanhSach(danhSachHienThi);
     });
     ```

---

### 📌 Đề A3: Hiển thị bộ đếm động: "Đang hiển thị X / Y kết quả"
* **Yêu cầu:** Mỗi khi gõ tìm kiếm hoặc bấm lọc, số lượng hiển thị tự động nhảy (ví dụ: *Đang hiển thị 4 / 24 loại rác*).
* **Kiến thức cần có:** Thuộc tính `.length` của mảng kết quả sau khi lọc và gán vào `textContent`.
* **Cách thực hiện:**
  1. **HTML:** Đặt một thẻ `<span>` ngay trên danh sách:
     ```html
     <div class="text-muted small mb-2" id="resultCounter">Đang hiển thị 0 / 0 kết quả</div>
     ```
  2. **JavaScript:** Thêm 1 dòng vào cuối hàm render dữ liệu:
     ```javascript
     document.getElementById('resultCounter').textContent = 
       `Đang hiển thị ${ketQuaLoc.length} / ${tongSoBanDau} kết quả`;
     ```

---

### 📌 Đề A4: Thêm nút "Xóa tất cả bộ lọc (Reset Filters)"
* **Yêu cầu:** Bấm nút sẽ xóa trắng ô tìm kiếm, reset thẻ `<select>` về mặc định và hiển thị lại toàn bộ dữ liệu ban đầu.
* **Kiến thức cần có:** Đặt lại `.value = ''` cho input và gọi lại hàm hiển thị ban đầu.
* **Cách thực hiện:**
  1. **HTML:**
     ```html
     <button class="btn btn-outline-secondary btn-sm" id="btnResetFilter" type="button">
       <i class="bi bi-arrow-counterclockwise me-1"></i>Xóa bộ lọc
     </button>
     ```
  2. **JavaScript:**
     ```javascript
     document.getElementById('btnResetFilter').addEventListener('click', function() {
       document.getElementById('searchInput').value = '';
       if (document.getElementById('filterSelect')) document.getElementById('filterSelect').value = 'all';
       locDanhSachRac(); // Hoặc hàm hiển thị mặc định
     });
     ```

---

## 📝 NHÓM B — BIỂU MẪU & KIỂM TRA HỢP LỆ (FORM & VALIDATION)
> **Mục tiêu:** Kiểm tra kỹ năng xử lý Form, kiểm tra dữ liệu đầu vào (Validation) và chống lỗi người dùng.  
> **Màn hình áp dụng tốt nhất:** `cu-dan-dat-lich-thu-gom.html` (Form đặt lịch) hoặc `dang-ky.html`.

### 📌 Đề B1: Thêm trường nhập liệu mới kèm quy tắc kiểm tra hợp lệ hiển thị lỗi đỏ
* **Yêu cầu:** Thêm ô "Số điện thoại người liên hệ dự phòng" (hoặc "Email"), nếu nhập sai định dạng thì viền đỏ và hiện thông báo lỗi.
* **Kiến thức cần có:** Biểu thức chính quy (Regex), class `is-invalid` của Bootstrap và sự kiện `submit`.
* **Cách thực hiện:**
  1. **HTML:**
     ```html
     <div class="mb-3">
       <label class="form-label fw-semibold">SĐT dự phòng (10 số)</label>
       <input type="tel" class="form-control" id="backupPhone" placeholder="0987654321">
       <div class="invalid-feedback" id="backupPhoneError">Số điện thoại phải gồm 10 chữ số và bắt đầu bằng số 0!</div>
     </div>
     ```
  2. **JavaScript:**
     ```javascript
     const phoneInput = document.getElementById('backupPhone');
     const regexSdt = /^0\d{9}$/;
     if (!regexSdt.test(phoneInput.value.trim())) {
       phoneInput.classList.add('is-invalid');
       return; // Chặn gửi form
     } else {
       phoneInput.classList.remove('is-invalid');
     }
     ```

---

### 📌 Đề B2: Thêm bộ đếm ký tự thời gian thực (0 / 200 ký tự) cho `<textarea>`
* **Yêu cầu:** Khi gõ vào ô ghi chú: >180 ký tự chuyển màu vàng cam, >200 ký tự chuyển màu đỏ và khóa nút Submit.
* **Kiến thức cần có:** Sự kiện `input`, kiểm tra `textarea.value.length`, đổi class màu và thuộc tính `btn.disabled`.
* **Cách thực hiện:**
  1. **HTML:**
     ```html
     <div class="d-flex justify-content-end small mt-1">
       <span id="charCount" class="text-muted">0 / 200 ký tự</span>
     </div>
     ```
  2. **JavaScript:**
     ```javascript
     const ghiChu = document.getElementById('requestNotes');
     const demKyTu = document.getElementById('charCount');
     const nutGui = document.getElementById('btnSubmitForm');

     ghiChu.addEventListener('input', function() {
       const doDai = this.value.length;
       demKyTu.textContent = `${doDai} / 200 ký tự`;
       if (doDai > 200) {
         demKyTu.className = 'text-danger fw-bold';
         if (nutGui) nutGui.disabled = true;
       } else if (doDai > 180) {
         demKyTu.className = 'text-warning fw-bold';
         if (nutGui) nutGui.disabled = false;
       } else {
         demKyTu.className = 'text-muted';
         if (nutGui) nutGui.disabled = false;
       }
     });
     ```

---

### 📌 Đề B3: Bổ sung cơ chế chống trùng lặp dữ liệu khi gửi biểu mẫu
* **Yêu cầu:** Không cho phép tạo đơn trùng địa chỉ và khung giờ đã có trong danh sách yêu cầu.
* **Kiến thức cần có:** `Array.prototype.some()` duyệt mảng LocalStorage.
* **Cách thực hiện:**
  ```javascript
  const danhSachDon = JSON.parse(localStorage.getItem('danhSachDonGom') || '[]');
  const diaChiMoi = document.getElementById('pickupAddress').value.trim();
  const ngayMoi = document.getElementById('pickupDate').value;

  const biTrung = danhSachDon.some(don => don.address === diaChiMoi && don.date === ngayMoi);
  if (biTrung) {
    alert('⚠️ Cảnh báo: Địa chỉ và ngày này bạn đã có đơn đặt trước đó rồi!');
    return; // Dừng lại không lưu
  }
  ```

---

### 📌 Đề B4: Thêm bước xác nhận kèm nhập "Lý do hủy" trước khi Hủy/Xóa
* **Yêu cầu:** Khi bấm nút "Hủy đơn", mở hộp thoại bắt buộc người dùng nhập lý do (không được để trống).
* **Kiến thức cần có:** `prompt()` hoặc Modal Bootstrap và kiểm tra chuỗi rỗng.
* **Cách thực hiện:**
  ```javascript
  function huyDonHang(idDon) {
    const lyDo = prompt('Vui lòng nhập lý do bạn muốn hủy đơn gom này (bắt buộc):');
    if (lyDo === null) return; // Người dùng bấm Cancel
    if (lyDo.trim() === '') {
      alert('❌ Lỗi: Bạn không được để trống lý do hủy!');
      return;
    }
    // Tiến hành cập nhật trạng thái đã hủy
    capNhatTrangThaiHuy(idDon, lyDo.trim());
    alert(`Đã hủy đơn thành công. Lý do: ${lyDo}`);
  }
  ```

---

## 🎨 NHÓM C — BỐ CỤC GIAO DIỆN, CSS & RESPONSIVE (UI / LAYOUT)
> **Mục tiêu:** Kiểm tra CSS3, Bootstrap 5 Grid System và khả năng thích ứng màn hình.  
> **Màn hình áp dụng:** Bất kỳ trang nào có danh sách thẻ (Cards).

### 📌 Đề C1: Thêm nút chuyển đổi chế độ xem (Bảng Table ↔ Lưới Thẻ Grid)
* **Kiến thức cần có:** Bật/tắt class `d-none` giữa thẻ `<table>` và thẻ `<div class="row">`.
* **Cách thực hiện:**
  ```html
  <div class="btn-group btn-group-sm mb-3">
    <button class="btn btn-outline-success active" onclick="chuyenCheDoXem('grid')"><i class="bi bi-grid-fill"></i></button>
    <button class="btn btn-outline-success" onclick="chuyenCheDoXem('table')"><i class="bi bi-table"></i></button>
  </div>
  ```
  ```javascript
  function chuyenCheDoXem(kieu) {
    document.getElementById('wasteGrid').classList.toggle('d-none', kieu === 'table');
    document.getElementById('wasteTable').classList.toggle('d-none', kieu === 'grid');
  }
  ```

---

### 📌 Đề C2: Đổi lưới Responsive thẻ (Desktop 4 cột, Tablet 2 cột, Mobile 1 cột) + Hover nổi nhẹ
* **Kiến thức cần có:** Lưới Bootstrap 5: `col-12 col-md-6 col-lg-3` và hiệu ứng CSS `transition` + `transform`.
* **Cách thực hiện:**
  1. Trong HTML (vòng lặp render): Thay `col-md-4` thành `col-12 col-md-6 col-lg-3`.
  2. Trong CSS (`css/giao-dien.css` hoặc thẻ `<style>`):
     ```css
     .card-interactive {
       transition: transform 0.25s ease, box-shadow 0.25s ease;
     }
     .card-interactive:hover {
       transform: translateY(-5px);
       box-shadow: 0 12px 24px rgba(0,0,0,0.12) !important;
     }
     ```

---

### 📌 Đề C3: Bổ sung thanh KPI Summary (Thống kê nhanh) ở đầu danh sách
* **Yêu cầu:** Hiển thị 3 chỉ số: Tổng số đơn, Số đơn khẩn cấp P1, Tỷ lệ hoàn thành.
* **Kiến thức cần có:** Dùng `.length` và `.filter()` tính toán trực tiếp từ mảng dữ liệu.
* **Cách thực hiện:**
  ```javascript
  function capNhatThongKeKpi(danhSach) {
    const tongSo = danhSach.length;
    const soP1 = danhSach.filter(d => d.priority === 'P1').length;
    const tyLe = tongSo > 0 ? Math.round((soP1 / tongSo) * 100) : 0;

    document.getElementById('kpiTotal').textContent = tongSo;
    document.getElementById('kpiUrgent').textContent = soP1;
    document.getElementById('kpiRate').textContent = `${tyLe}%`;
  }
  ```

---

### 📌 Đề C4: Cố định thanh công cụ (Sticky) và thêm kiểu `:focus-visible`
* **Kiến thức cần có:** `position: sticky` và CSS pseudo-class `:focus-visible`.
* **Cách thực hiện:**
  ```css
  /* 1. Ghim thanh tìm kiếm khi cuộn trang */
  .sticky-filter-bar {
    position: sticky;
    top: 70px;
    z-index: 1020;
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  /* 2. Hiệu ứng viền xanh nổi bật khi dùng phím Tab */
  button:focus-visible, input:focus-visible, select:focus-visible {
    outline: 3px solid #16a34a !important;
    outline-offset: 2px !important;
  }
  ```

---

## 💾 NHÓM D — BAO PHỦ TRẠNG THÁI & DỮ LIỆU (STATE & STORAGE)
> **Mục tiêu:** Đảm bảo sản phẩm không bị "sập" khi mất mạng, mảng rỗng hoặc khi người dùng F5 tải lại trang.

### 📌 Đề D1: Thiết kế giao diện Empty State khi mảng rỗng `[]`
* **Kiến thức cần có:** Kiểm tra `if (mang.length === 0)` và chèn HTML thông báo thân thiện kèm nút khôi phục dữ liệu mẫu.
* **Cách thực hiện:**
  ```javascript
  if (danhSach.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="display-1 text-muted mb-3">📦</div>
        <h5 class="fw-bold text-dark">Chưa có bản ghi nào!</h5>
        <p class="text-secondary small">Không tìm thấy dữ liệu phù hợp với bộ lọc hiện tại.</p>
        <button class="btn btn-success btn-sm rounded-pill px-4" onclick="khoiPhucDuLieuMacDinh()">
          <i class="bi bi-arrow-repeat me-1"></i>Khôi phục dữ liệu mẫu
        </button>
      </div>`;
    return;
  }
  ```

---

### 📌 Đề D2: Giả lập độ trễ tải dữ liệu 800ms kèm Spinner Loading và khóa nút lọc
* **Kiến thức cần có:** `setTimeout()`, class `spinner-border` và thuộc tính `disabled`.
* **Cách thực hiện:**
  ```javascript
  function taiDuLieuVoiDoTre() {
    const container = document.getElementById('wasteGrid');
    const btnFilter = document.getElementById('btnFilter');
    
    // 1. Hiện xoay xoay và khóa nút
    btnFilter.disabled = true;
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="spinner-border text-success" role="status"></div>
        <div class="small text-muted mt-2">Đang tải danh mục rác (800ms)...</div>
      </div>`;

    // 2. Chờ 800ms xong mới hiển thị
    setTimeout(() => {
      btnFilter.disabled = false;
      renderDanhSach(danhSachGoc);
    }, 800);
  }
  ```

---

### 📌 Đề D3: Lưu trạng thái bộ lọc vào LocalStorage để khi F5 trang không bị mất
* **Kiến thức cần có:** `localStorage.setItem()` và `localStorage.getItem()` trong sự kiện `DOMContentLoaded`.
* **Cách thực hiện:**
  ```javascript
  // 1. Khi chọn bộ lọc: Lưu ngay vào LocalStorage
  document.getElementById('categoryFilter').addEventListener('change', function() {
    localStorage.setItem('gs_saved_category', this.value);
    locDanhSach();
  });

  // 2. Khi vừa mở trang hoặc F5: Đọc lại giá trị đã lưu
  window.addEventListener('DOMContentLoaded', () => {
    const daLuu = localStorage.getItem('gs_saved_category');
    if (daLuu) {
      document.getElementById('categoryFilter').value = daLuu;
      locDanhSach();
    }
  });
  ```

---

### 📌 Đề D4: Thêm nút "Xuất dữ liệu (Export JSON / CSV)"
* **Kiến thức cần có:** Đối tượng `Blob` và thuộc tính thẻ `<a>` ảo `download`.
* **Cách thực hiện:**
  ```javascript
  function xuatDuLieuJson() {
    const duLieu = JSON.stringify(danhSachHienTai, null, 2);
    const blob = new Blob([duLieu], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GreenSort_Data_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }
  ```

---

## 🔄 NHÓM E — VÒNG ĐỜI NGHIỆP VỤ & LIÊN THÔNG ROLE (CRUD & WORKFLOW)
> **Mục tiêu:** Kiểm tra khả năng hiểu trạng thái dữ liệu nghiệp vụ thực tế.

### 📌 Đề E1: Thêm trạng thái nghiệp vụ mới "Cần bổ sung (Needs Revision)"
* **Cách thực hiện:**
  1. Thêm một giá trị trạng thái mới: `status: 'needs_revision'`.
  2. Trong hàm render, bổ sung hiển thị Badge màu cam nổi bật:
     ```javascript
     if (item.status === 'needs_revision') {
       return `<span class="badge bg-warning text-dark"><i class="bi bi-pencil-square me-1"></i>Cần bổ sung</span>`;
     }
     ```
  3. Thêm nút chuyển trạng thái:
     ```html
     <button class="btn btn-sm btn-outline-warning" onclick="chuyenTrangThai(id, 'needs_revision')">Yêu cầu sửa</button>
     ```

---

### 📌 Đề E2: Thao tác chọn nhiều (Bulk Action bằng Checkbox) để Duyệt hàng loạt
* **Kiến thức cần có:** `document.querySelectorAll('.item-checkbox:checked')`.
* **Cách thực hiện:**
  ```javascript
  function duyetHangLoat() {
    const cacDonDaChon = document.querySelectorAll('.item-checkbox:checked');
    if (cacDonDaChon.length === 0) {
      alert('Vui lòng tích chọn ít nhất 1 đơn!');
      return;
    }
    cacDonDaChon.forEach(cb => {
      capNhatTrangThaiDon(cb.value, 'approved');
    });
    alert(`Đã duyệt thành công ${cacDonDaChon.length} đơn được chọn!`);
    taiLaiDanhSach();
  }
  ```

---

### 📌 Đề E3: Thêm Nhật ký hoạt động (Activity Timeline) ghi lại lịch sử thay đổi
* **Kiến thức cần có:** Mảng thuộc tính `item.history = []` lưu kèm mốc thời gian `new Date().toLocaleTimeString()`.
* **Cách thực hiện:**
  ```javascript
  function ghiNhatKy(donHang, noiDung) {
    if (!donHang.history) donHang.history = [];
    const gio = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    donHang.history.push(`${gio} - ${noiDung}`);
  }
  ```

---

### 📌 Đề E4: Thêm nút "Đánh dấu sao / Ghim (Star/Bookmark)" lưu vào LocalStorage
* **Cách thực hiện:**
  ```javascript
  function toggleGhim(id) {
    let danhSachGhim = JSON.parse(localStorage.getItem('gs_pinned') || '[]');
    if (danhSachGhim.includes(id)) {
      danhSachGhim = danhSachGhim.filter(item => item !== id);
    } else {
      danhSachGhim.push(id);
    }
    localStorage.setItem('gs_pinned', JSON.stringify(danhSachGhim));
    renderDanhSach(); // Icon ngôi sao tự đổi từ viền sang đặc
  }
  ```

---

## 🤖 NHÓM F — TƯƠNG TÁC AI UX & AI FAILURE UX (AI EXPERIENCE)
> **Mục tiêu:** Chứng minh sinh viên thiết kế tính năng AI có trách nhiệm, có giải thích khoa học và xử lý lỗi chuyên nghiệp.

### 📌 Đề F1: Hiển thị Chỉ số độ tin cậy (Confidence Score) kèm 3 Yếu tố chính
* **Màn hình áp dụng:** `cu-dan-tra-cuu-rac.html` (Khung kết quả AI-1).
* **Cách thực hiện:** Bổ sung vào khung kết quả:
  ```html
  <div class="mt-3 p-3 bg-light rounded-3 border">
    <div class="d-flex justify-content-between small fw-bold mb-1">
      <span>Độ tin cậy phân tích AI:</span>
      <span class="text-success">96.8%</span>
    </div>
    <div class="progress mb-2" style="height: 6px;">
      <div class="progress-bar bg-success" style="width: 96.8%;"></div>
    </div>
    <div class="small text-muted">
      <strong>3 Yếu tố đánh giá:</strong>
      <ul class="mb-0 ps-3">
        <li>So khớp từ khóa vật liệu (Polyme tái chế).</li>
        <li>Quy định thu gom rác sinh hoạt đô thị Hà Nội 2024.</li>
        <li>Khả năng tái sinh và bảo vệ môi trường.</li>
      </ul>
    </div>
  </div>
  ```

---

### 📌 Đề F2: AI Uncertainty / Failure UX (Nhập < 10 ký tự báo chưa đủ dữ liệu kèm Prompt Chips)
* **Yêu cầu:** Nếu gõ quá ngắn ("pin", "rác"), AI không đoán bừa mà báo: *"Chưa đủ dữ liệu để phân tích chính xác"* kèm các nút gợi ý câu mẫu.
* **Cách thực hiện:**
  ```javascript
  if (moTaRac.length < 10) {
    ketQuaBox.innerHTML = `
      <div class="alert alert-warning border-warning d-flex align-items-center gap-2">
        <i class="bi bi-exclamation-triangle-fill fs-4 text-warning"></i>
        <div>
          <strong>AI chưa đủ dữ liệu để phân tích chính xác!</strong><br>
          Vui lòng nhập mô tả chi tiết hơn hoặc chọn thử các câu gợi ý dưới đây:
        </div>
      </div>
      <div class="d-flex gap-2 flex-wrap mt-2">
        <button class="btn btn-sm btn-outline-secondary rounded-pill" onclick="dienThuCau('Hộp xốp dính dầu mỡ')">Hộp xốp dính dầu mỡ</button>
        <button class="btn btn-sm btn-outline-secondary rounded-pill" onclick="dienThuCau('Vỏ chuối chín hữu cơ')">Vỏ chuối chín hữu cơ</button>
        <button class="btn btn-sm btn-outline-secondary rounded-pill" onclick="dienThuCau('Pin con thỏ hết điện')">Pin con thỏ hết điện</button>
      </div>`;
    return;
  }
  ```

---

### 📌 Đề F3: Cho phép chỉnh sửa gợi ý AI trước khi bấm Lưu (Human-in-the-loop)
* **Cách thực hiện:** Đưa kết quả gợi ý của AI vào một thẻ `<textarea id="aiEditSuggestion">` để người dùng có thể gõ sửa đổi bổ sung trước khi bấm nút *"Xác nhận & Lưu"*.

---

### 📌 Đề F4: So sánh 2 phương án AI gợi ý (Option A vs Option B)
* **Cách thực hiện:** Hiển thị 2 thẻ song song:
  * **Phương án A:** Gom rác thông thường (Tiết kiệm chi phí, xử lý trong 24h).
  * **Phương án B (AI Khuyến nghị):** Thu gom phân loại đổi quà GreenPoint (Cộng 50 điểm thưởng, giảm phát thải CO2).

---

## ⚡ BÍ KÍP VÀNG: QUY TRÌNH NGHIỆM THU 1 PHÚT VỚI THẦY
Khi thầy chỉ định đề xong:
1. **Bình tĩnh 30 giây:** Xác định đề thuộc Nhóm nào (A, B, C, D, E hay F).
2. **Gõ từ 2 - 5 dòng code** theo đúng mẫu ở trên.
3. **Bấm Ctrl+S** và sang trình duyệt **F5 kiểm thử ngay**.
4. **Mở Terminal chạy lệnh:**
   ```bash
   git diff
   ```
   Dõng dạc nói: *"Thưa thầy, em vừa hoàn thành xong yêu cầu. Lệnh `git diff` trên màn hình hiển thị chính xác các dòng code em vừa thêm và tính năng đã hoạt động trơn tru trên trình duyệt ạ!"*
