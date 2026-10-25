# KỊCH BẢN 03 VIDEO MINH CHỨNG OBS DÀNH CHO SV1 (BẢN TỐI ƯU SIÊU GỌN)
**Học phần:** CSE122 - Phát triển ứng dụng Web cơ bản (TLU)  
**Giảng viên chấm thi:** ThS. Kiều Tuấn Dũng & ThS. Tạ Chí Hiếu  
**Sinh viên thực hiện:** Bùi Văn Nam Cường – Mã SV: `2551060590`  
**Vai trò:** Sinh viên 1 (SV1 - Nhóm trưởng) – Phân hệ Người dân & Xác thực  
**Nhánh Git cá nhân:** `Bui_Van_Nam_Cuong`  
**Repository:** `https://github.com/namcuong2910/-GreenSort_Groud5`  
**Link web chạy thử (GitHub Pages):** `https://namcuong2910.github.io/-GreenSort_Groud5/`

---

## 💡 ĐẶC QUYỀN CỦA BẢN KỊCH BẢN TỐI ƯU NÀY
1. **Phần sửa code trực tiếp (Live Edit) SIÊU NGẮN (chỉ mất 3 đến 5 giây)**:
   - **Video 1**: Đổi đúng 1 từ `btn-success` thành `btn-primary` (đổi màu nút bấm từ Xanh lá sang Xanh dương).
   - **Video 2**: Đổi đúng 1 số `92` thành `99` (bấm Báo đầy rác nhảy vọt lên 99% đỏ rực).
   - **Video 3**: Đổi đúng 1 số `30` thành `50` (điểm cơ bản SLA tự động nhảy từ 30đ lên 50đ).
   👉 **Ưu điểm tuyệt đối:** Không phải gõ nhiều chữ, không bao giờ lo gõ nhầm hay lỗi cú pháp, kết quả thay đổi trên web ngay lập tức 100% rõ rệt!
2. **Kịch bản lời thoại đầy đủ 100% từng giây**: Có sẵn từng câu chữ Nam Cường đọc vào micro, không phải nghĩ thêm gì.
3. **Thao tác Git cực chuẩn**: Hướng dẫn chính xác từng lệnh Terminal và cách mở web GitHub đối chiếu commit.

---

# ========================================================
# 🎬 VIDEO 1: TRA CỨU PHÂN LOẠI RÁC & TRỢ LÝ AI-1
# ========================================================
* **Tên file video khi xuất OBS:** `SV1-01-cu-dan-tra-cuu-rac.mp4`
* **Màn hình demo:** `cu-dan-tra-cuu-rac.html`
* **Mã Task ID Barem:** `GS-RES-07` | **Nhánh Git:** `Bui_Van_Nam_Cuong`
* **Thời lượng chuẩn:** ~ 3 phút 45 giây

---

### KỊCH BẢN CHI TIẾT TỪNG PHẦN (VIDEO 1):

#### ⏰ PHẦN 1: CHÀO HỎI & NHẬN DIỆN (0:00 – 0:30)
* **Hành động màn hình:** Mở OBS, bật webcam hiển thị rõ khuôn mặt Nam Cường ở góc phải dưới. Màn hình máy tính để sẵn cửa sổ trình duyệt và VS Code.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em là Bùi Văn Nam Cường, mã số sinh viên 2551060590, là sinh viên 1 kiêm nhóm trưởng nhóm BTL-05 đề tài GreenSort. Trong video đầu tiên này, em xin trình bày minh chứng quá trình phát triển màn hình Cư dân tra cứu phân loại rác thông minh tích hợp Trợ lý AI-1, mã công việc GS-RES-07 trên nhánh Git cá nhân Bui_Van_Nam_Cuong."*

---

#### ⏰ PHẦN 2: ĐỐI CHIẾU MOCKUP FIGMA (0:30 – 1:00)
* **Hành động màn hình:** Mở tab trình duyệt Figma thiết kế GreenSort, phóng to khung màn hình Tra cứu rác.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Trước hết, đây là bản vẽ thiết kế trên Figma do em tự thiết kế: Phía trên là thanh Header nhận diện thương hiệu GreenSort; ở giữa là Khung tìm kiếm Trợ lý AI nổi bật với hiệu ứng bo tròn hiện đại; bên dưới là lưới danh mục 4 nhóm rác quy chuẩn gồm Hữu cơ, Tái chế, Nguy hại và Vô cơ theo đúng Luật Bảo vệ Môi trường 2024."*

---

#### ⏰ PHẦN 3 & 4: GIẢI THÍCH CODE TRONG VS CODE (1:00 – 2:00)
* **Hành động màn hình:** Chuyển sang VS Code mở tệp `cu-dan-tra-cuu-rac.html`. Cuộn chuột cho thầy thấy các khối chú thích số `1. ĐÂY LÀ...`, `2. ĐÂY LÀ...`, `3. ĐÂY LÀ...`.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Tiếp theo, em mở file cu-dan-tra-cuu-rac.html trong VS Code:<br>- Toàn bộ code đã được em đánh số thứ tự từ 1 đến 6 rất khoa học: Mục 1 là Khai báo Head, Mục 2 là Header, Mục 3 là Thân trang Main duy nhất.<br>- Về chuẩn HTML5 Semantic: Trang tuân thủ đúng yêu cầu chỉ có duy nhất 1 thẻ main tại dòng 110 và đúng 1 thẻ h1 lớn nhất tại dòng 121.<br>- Về CSS: Em dùng hệ thống lưới Bootstrap 5.3 kết hợp file giao-dien.css tạo các card bo góc rounded-4 mượt mà.<br>- Về JavaScript: Hàm xuLyGoiYPhanLoai() trong file chinh.js xử lý đối sánh từ khóa rác thông minh. Khi người dùng nhập dưới 3 ký tự, hệ thống kích hoạt Uncertainty UX hiển thị 4 gợi ý nhanh. Toàn bộ chuỗi hiển thị đều được bọc qua hàm escapeHTML() để chống triệt để lỗ hổng XSS theo quy định VP-02 của thầy."*

---

#### ⏰ PHẦN 5: SỬA CODE TRỰC TIẾP (LIVE EDIT SIÊU NGẮN 3 GIÂY) (2:00 – 2:30)
* **Hành động màn hình:**
  1. Trong VS Code file `cu-dan-tra-cuu-rac.html`, cuộn chuột đến mục **`<!-- 3.2. TRỢ LÝ AI PHÂN LOẠI RÁC... -->`** (khoảng dòng 210).
  2. Tìm nút bấm AI:
     ```html
     <button class="btn btn-success px-4" id="btnAiAnalyze" type="button">
     ```
  3. **Thao tác sửa cực ngắn:** Xóa đúng chữ `btn-success` -> Gõ thành `btn-primary`.
     ```html
     <button class="btn btn-primary px-4" id="btnAiAnalyze" type="button">
     ```
  4. Nhấn **`Ctrl + S`** để lưu lại.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Bây giờ em thực hiện phần Sửa code trực tiếp theo Barem: Tại khối 3.2 Trợ lý AI, em đổi class của nút bấm phân tích từ màu xanh lá btn-success sang màu xanh dương công nghệ btn-primary. Em nhấn Ctrl+S lưu lại."*

---

#### ⏰ PHẦN 6: CHẠY THỬ TRÌNH DUYỆT & TEST F12 RESPONSIVE (2:30 – 3:15)
* **Hành động màn hình:**
  1. Nhấn `Alt + Tab` sang trình duyệt, nhấn **`Ctrl + F5`**.
  2. Chỉ chuột vào nút bấm: Đã đổi sang màu xanh dương!
  3. Gõ ô tìm kiếm: `"Pin con thỏ cũ"` -> Bấm nút -> Hiện loading -> Trả kết quả Thùng đỏ Rác Nguy Hại (độ tin cậy 98.5%).
  4. Gõ 1 chữ `"a"` -> Hiện ngay cảnh báo Uncertainty độ tin cậy thấp kèm 4 gợi ý nhanh.
  5. Nhấn **`F12`**, co màn hình về kích thước điện thoại 320px.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em quay lại trình duyệt và nhấn Ctrl+F5:<br>- Nút bấm lập tức chuyển sang màu xanh dương đúng như em vừa sửa trực tiếp.<br>- Giờ em test AI: Em nhập 'Pin con thỏ cũ' và bấm nút: Hệ thống hiện hiệu ứng loading rồi trả kết quả Thùng Đỏ Rác Nguy Hại độ tin cậy 98.5% cùng hướng dẫn quấn băng dính 2 đầu cực.<br>- Em thử gõ 1 chữ 'a': Hệ thống kích hoạt cảnh báo Uncertainty độ tin cậy thấp kèm 4 gợi ý chuẩn.<br>- Em nhấn F12 co màn hình về 320px: Toàn bộ layout co giãn mượt mà, không hề bị tràn viền."*

---

#### ⏰ PHẦN 7: THAO TÁC GIT TRÊN TERMINAL (3:15 – 3:50)
* **Hành động màn hình:** Mở Terminal trong VS Code (**`Ctrl + ` `**). Gõ lần lượt 5 lệnh:
  ```bash
  git status
  ```
  *(Thấy file `cu-dan-tra-cuu-rac.html` báo đỏ)*
  ```bash
  git diff cu-dan-tra-cuu-rac.html
  ```
  *(Chỉ chuột vào dòng `- btn-success` màu đỏ và `+ btn-primary` màu xanh lá)*
  ```bash
  git add cu-dan-tra-cuu-rac.html
  git commit -m "feat(ai-waste): live edit doi mau nut bam sang btn-primary"
  git push origin Bui_Van_Nam_Cuong
  ```
* **Lời thoại Nam Cường nói vào mic:**
  > *"Bây giờ em thực hiện thao tác Git trong Terminal:<br>- Em gõ `git status`: File cu-dan-tra-cuu-rac.html đang báo đỏ trạng thái Modified.<br>- Em gõ `git diff`: Thầy thấy rõ dòng trừ màu đỏ là btn-success cũ, và dòng cộng màu xanh là btn-primary em vừa sửa.<br>- Em gõ `git add`, sau đó commit với thông điệp chuẩn Conventional Commits.<br>- Cuối cùng em gõ `git push origin Bui_Van_Nam_Cuong` để đẩy lên nhánh cá nhân của em."*

---

#### ⏰ PHẦN 8: KIỂM TRA TRÊN GITHUB & KẾT THÚC (3:50 – 4:10)
* **Hành động màn hình:** Chuyển sang trình duyệt mở tab GitHub nhánh `Bui_Van_Nam_Cuong`:  
  `https://github.com/namcuong2910/-GreenSort_Groud5/tree/Bui_Van_Nam_Cuong`  
  Nhấn **`F5`**, chỉ chuột vào commit mới nhất vừa xuất hiện.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em chuyển sang trang web GitHub của nhóm: Nhánh Bui_Van_Nam_Cuong vừa cập nhật commit mới nhất cách đây vài giây, minh chứng hoàn toàn trung thực quá trình làm việc của em. Em xin kết thúc video số 1 tại đây. Cảm ơn hai thầy!"*

---

# ========================================================
# 🎬 VIDEO 2: ĐIỂM THU GOM RÁC & CẢM BIẾN MỨC ĐẦY IOT
# ========================================================
* **Tên file video khi xuất OBS:** `SV1-02-cu-dan-diem-thu-gom.mp4`
* **Màn hình demo:** `cu-dan-diem-thu-gom.html`
* **Mã Task ID Barem:** `GS-RES-08` | **Nhánh Git:** `Bui_Van_Nam_Cuong`
* **Thời lượng chuẩn:** ~ 3 phút 45 giây

---

### KỊCH BẢN CHI TIẾT TỪNG PHẦN (VIDEO 2):

#### ⏰ PHẦN 1: CHÀO HỎI & NHẬN DIỆN (0:00 – 0:30)
* **Hành động màn hình:** Mở OBS, bật webcam thấy mặt rõ ràng góc dưới phải.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em là Bùi Văn Nam Cường, MSSV 2551060590, sinh viên 1 nhóm BTL-05 GreenSort. Trong video thứ 2 này, em xin trình bày minh chứng màn hình Mạng lưới Điểm thu gom và Giám sát cảm biến mức đầy thùng rác IoT thời gian thực, mã công việc GS-RES-08 trên nhánh cá nhân Bui_Van_Nam_Cuong."*

---

#### ⏰ PHẦN 2: ĐỐI CHIẾU MOCKUP FIGMA (0:30 – 1:00)
* **Hành động màn hình:** Mở Figma chuyển sang Frame Điểm thu gom rác.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Trên bản vẽ Figma, màn hình này được em thiết kế trực quan gồm: Thanh tìm kiếm theo quận huyện; bộ nút bấm lọc nhanh loại rác tiếp nhận; và danh sách các thẻ điểm thu gom hiển thị mức đầy cảm biến IoT kèm giờ mở cửa và nút định vị GPS."*

---

#### ⏰ PHẦN 3 & 4: GIẢI THÍCH CODE TRONG VS CODE (1:00 – 2:00)
* **Hành động màn hình:** Mở VS Code tệp `cu-dan-diem-thu-gom.html`. Chỉ vào cấu trúc đánh số và 8 hàm trong thẻ `<script>`.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Trong VS Code tệp cu-dan-diem-thu-gom.html:<br>- Cấu trúc HTML5 chuẩn có đúng 1 thẻ main tại dòng 77 và 1 thẻ h1 duy nhất tại dòng 83.<br>- Toàn bộ JavaScript đã được em chú thích rõ ràng 8 hàm chức năng: Hàm số 4 taiDanhSachDiemThuGom() nạp dữ liệu từ KhoDuLieu. Dữ liệu cảm biến IoT được hiển thị qua thanh tiến độ progress-bar với 3 dải màu: Dưới 70% xanh an toàn, 70 đến 85% vàng cảnh báo, và trên 85% đỏ quá tải.<br>- Hàm số 7 baoCaoThungRacDay() cho phép người dân bấm báo đầy rác, hệ thống lập tức cập nhật trạng thái thùng rác và gửi cảnh báo sang Coordinator."*

---

#### ⏰ PHẦN 5: SỬA CODE TRỰC TIẾP (LIVE EDIT SIÊU NGẮN 3 GIÂY) (2:00 – 2:30)
* **Hành động màn hình:**
  1. Trong file `cu-dan-diem-thu-gom.html`, cuộn xuống thẻ `<script>` tìm đến **`// 7. Hàm báo cáo thùng rác đầy...`** (khoảng dòng 388).
  2. Tìm dòng code:
     ```javascript
     KhoDuLieu.collectionPoints.update(maDiem, { fillLevel: 92 });
     ```
  3. **Thao tác sửa cực ngắn:** Xóa số `92` -> Gõ thành `99`.
     ```javascript
     KhoDuLieu.collectionPoints.update(maDiem, { fillLevel: 99 });
     ```
  4. Nhấn **`Ctrl + S`** để lưu lại.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em thực hiện sửa code trực tiếp tại hàm số 7 baoCaoThungRacDay(): Em nâng mức đầy cảnh báo khẩn cấp khi người dân bấm báo đầy rác từ 92% lên 99% để thể hiện tình trạng thùng rác quá tải mức tối đa. Em nhấn Ctrl+S lưu lại."*

---

#### ⏰ PHẦN 6: CHẠY THỬ TRÌNH DUYỆT & TEST F12 RESPONSIVE (2:30 – 3:15)
* **Hành động màn hình:**
  1. Nhấn `Alt + Tab` sang trình duyệt, nhấn **`Ctrl + F5`**.
  2. Bấm nút **'Tìm gần tôi (GPS)'** -> Thông báo định vị 2km hiện lên.
  3. Bấm nút **'Báo đầy rác'** tại trạm ĐH Thủy Lợi -> Bấm OK xác nhận -> Thanh đo cảm biến lập tức nhảy vọt lên **99% (Quá tải - Đã báo xe)** màu đỏ rực!
  4. Bấm **`F12`** co về 375px điện thoại: Lưới card điểm gom tự động xếp 1 cột dọc rất ngay ngắn.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em quay lại trình duyệt nhấn Ctrl+F5:<br>- Em bấm 'Tìm gần tôi (GPS)': Hệ thống định vị tọa độ khu vực Thủy Lợi Đống Đa và lọc nhanh các trạm xung quanh.<br>- Em bấm nút 'Báo đầy rác' tại Điểm thu gom TLU: Mức đầy cảm biến lập tức nhảy lên đúng 99% đỏ rực như em vừa sửa trong code.<br>- Nhấn F12 co về 375px: Lưới card điểm gom tự động xếp chồng 1 cột dọc rất chuẩn, các nút bấm to rõ ràng dễ chạm."*

---

#### ⏰ PHẦN 7: THAO TÁC GIT TRÊN TERMINAL (3:15 – 3:50)
* **Hành động màn hình:** Mở Terminal trong VS Code (**`Ctrl + ` `**). Gõ lần lượt:
  ```bash
  git status
  git diff cu-dan-diem-thu-gom.html
  ```
  *(Chỉ chuột vào dòng `- fillLevel: 92` và `+ fillLevel: 99`)*
  ```bash
  git add cu-dan-diem-thu-gom.html
  git commit -m "feat(points): live edit nang muc day bao cao len 99 phan tram"
  git push origin Bui_Van_Nam_Cuong
  ```
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em mở Terminal gõ `git status` và `git diff`: Thầy thấy dòng màu xanh chính là số 99% em vừa sửa trực tiếp. Em gõ `git add` và commit, sau đó gõ `git push origin Bui_Van_Nam_Cuong` để đẩy lên server GitHub."*

---

#### ⏰ PHẦN 8: KIỂM TRA TRÊN GITHUB & KẾT THÚC (3:50 – 4:10)
* **Hành động màn hình:** Mở trình duyệt vào trang GitHub nhánh `Bui_Van_Nam_Cuong`, nhấn **`F5`**, chỉ vào commit mới nhất.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em kiểm tra trên web GitHub nhánh Bui_Van_Nam_Cuong: Commit mới nhất đã xuất hiện minh bạch. Em xin kết thúc video số 2. Em cảm ơn hai thầy!"*

---

# ========================================================
# 🎬 VIDEO 3: ĐẶT LỊCH THU GOM RÁC CỒNG KỀNH & THUẬT TOÁN AI-2 SLA
# ========================================================
* **Tên file video khi xuất OBS:** `SV1-03-cu-dan-dat-lich-thu-gom.mp4`
* **Màn hình demo:** `cu-dan-dat-lich-thu-gom.html`
* **Mã Task ID Barem:** `GS-RES-09` | **Nhánh Git:** `Bui_Van_Nam_Cuong`
* **Thời lượng chuẩn:** ~ 3 phút 45 giây

---

### KỊCH BẢN CHI TIẾT TỪNG PHẦN (VIDEO 3):

#### ⏰ PHẦN 1: CHÀO HỎI & NHẬN DIỆN (0:00 – 0:30)
* **Hành động màn hình:** Mở OBS, kiểm tra webcam hiển thị rõ khuôn mặt.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em là Bùi Văn Nam Cường, MSSV 2551060590, sinh viên 1 của nhóm BTL-05 GreenSort. Trong video thứ 3 này, em xin chứng minh quá trình phát triển màn hình Đặt lịch thu gom rác cồng kềnh tích hợp thuật toán chấm điểm ưu tiên SLA AI-2 và đồng bộ Real-time đa tab, mã công việc GS-RES-09 trên nhánh Bui_Van_Nam_Cuong."*

---

#### ⏰ PHẦN 2: ĐỐI CHIẾU MOCKUP FIGMA (0:30 – 1:00)
* **Hành động màn hình:** Mở tab Figma chuyển sang Frame Đặt lịch thu gom rác cồng kềnh.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Trên bản vẽ Figma, màn hình được bố cục 2 cột rõ ràng: Cột bên trái là Biểu mẫu đặt lịch với ô chấm điểm ưu tiên SLA tự động nhảy điểm theo thời gian thực; Cột bên phải là Danh sách lịch sử các yêu cầu đã gửi kèm trạng thái xử lý và nút hủy yêu cầu."*

---

#### ⏰ PHẦN 3 & 4: GIẢI THÍCH CODE TRONG VS CODE (1:00 – 2:00)
* **Hành động màn hình:** Mở VS Code tệp `cu-dan-dat-lich-thu-gom.html`. Chỉ vào cấu trúc 2 cột tại mục 3.1 và 3.2, sau đó cuộn xuống các hàm JavaScript.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Trong VS Code tệp cu-dan-dat-lich-thu-gom.html:<br>- Cấu trúc HTML5 chuẩn có đúng 1 thẻ main tại dòng 77 và đúng 1 thẻ h1 duy nhất tại dòng 90.<br>- Về thuật toán AI-2: Hàm tinhDiemUuTien() tự động tính điểm dựa trên loại rác và từ khóa ghi chú. Nếu điểm từ 70 trở lên, hệ thống xếp vào diện Khẩn cấp SLA 2 giờ điều xe ngay.<br>- Về tính năng đồng bộ Real-time: Em cài đặt sự kiện greensort:dataChanged để đồng bộ đa tab. Khi người dân gửi đơn ở tab này, bảng điều phối ở tab của bạn Đức Anh tự động nhảy đơn mới mà không cần nhấn F5."*

---

#### ⏰ PHẦN 5: SỬA CODE TRỰC TIẾP (LIVE EDIT SIÊU NGẮN 3 GIÂY) (2:00 – 2:30)
* **Hành động màn hình:**
  1. Trong file `cu-dan-dat-lich-thu-gom.html`, cuộn xuống thẻ `<script>` tìm đến **`// 1. Hàm tự động tính điểm ưu tiên SLA...`** (khoảng dòng 206).
  2. Tìm dòng khai báo điểm số cơ bản:
     ```javascript
     let diemSo = 30; // Điểm cơ bản
     ```
  3. **Thao tác sửa cực ngắn:** Xóa số `30` -> Gõ thành `50`.
     ```javascript
     let diemSo = 50; // Điểm cơ bản
     ```
  4. Nhấn **`Ctrl + S`** để lưu lại.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em thực hiện sửa code trực tiếp vào thuật toán AI-2 tính điểm ưu tiên SLA tại hàm tinhDiemUuTien(): Em nâng mức điểm ưu tiên cơ bản từ 30 điểm lên 50 điểm để hỗ trợ xử lý nhanh các đơn thu gom trong đợt cao điểm. Em nhấn Ctrl+S lưu lại."*

---

#### ⏰ PHẦN 6: CHẠY THỬ TRÌNH DUYỆT & TEST F12 RESPONSIVE (2:30 – 3:15)
* **Hành động màn hình:**
  1. Nhấn `Alt + Tab` sang trình duyệt, nhấn **`Ctrl + F5`**.
  2. Nhìn ngay vào khung xanh SLA: Điểm ưu tiên cơ bản lập tức nhảy lên mức **Ưu Tiên (50đ - SLA 12h)** màu vàng cam!
  3. Thử bấm 'Gửi Yêu Cầu Thu Gom' khi chưa điền -> Kích hoạt HTML5 Validation báo lỗi viền đỏ từng ô.
  4. Điền họ tên: `Bùi Văn Nam Cường`, SĐT: `0987654321`, địa chỉ: `Số 175 Tây Sơn`, chọn loại rác: `Đồ điện tử / Thiết bị máy cũ`.
  5. Điểm SLA lập tức nhảy lên **95 điểm màu đỏ rực: Khẩn Cấp (95đ - SLA 2h - Điều xe ngay)**!
  6. Bấm Gửi đơn -> Đơn hàng xuất hiện ngay sang cột Lịch sử bên phải.
  7. Bấm **`F12`** co về 320px: Bố cục 2 cột tự chuyển thành 1 cột dọc co giãn vừa khít.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Quay lại trình duyệt:<br>- Điểm ưu tiên cơ bản đã lập tức nhảy lên 50 điểm mức Ưu tiên theo đúng dòng code em vừa sửa.<br>- Em thử bấm Gửi khi form còn trống: Trình duyệt kích hoạt ngay HTML5 Form Validation với viền đỏ chuẩn xác.<br>- Giờ em điền đầy đủ thông tin và chọn Thiết bị điện tử: Điểm số cộng dồn lên 95 điểm mức Khẩn cấp SLA 2 giờ.<br>- Em bấm Gửi: Đơn hàng lập tức xuất hiện ngay sang cột Lịch sử bên phải.<br>- Em nhấn F12 co về 320px: Bố cục 2 cột tự động chuyển thành 1 cột dọc rất chuẩn trên màn hình điện thoại."*

---

#### ⏰ PHẦN 7: THAO TÁC GIT TRÊN TERMINAL (3:15 – 3:50)
* **Hành động màn hình:** Mở Terminal trong VS Code (**`Ctrl + ` `**). Gõ lần lượt:
  ```bash
  git status
  git diff cu-dan-dat-lich-thu-gom.html
  ```
  *(Chỉ chuột vào dòng `- let diemSo = 30;` và `+ let diemSo = 50;`)*
  ```bash
  git add cu-dan-dat-lich-thu-gom.html
  git commit -m "feat(booking-sla): live edit nang diem uu tien co ban len 50"
  git push origin Bui_Van_Nam_Cuong
  ```
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em mở Terminal gõ `git status` và `git diff`: Thầy thấy dòng code đổi điểm số cơ bản từ 30 lên 50 hiển thị rõ ràng màu xanh lá. Em gõ `git add` và commit, sau đó gõ `git push origin Bui_Van_Nam_Cuong` để đẩy lên server GitHub."*

---

#### ⏰ PHẦN 8: KIỂM TRA TRÊN GITHUB & KẾT THÚC (3:50 – 4:10)
* **Hành động màn hình:** Mở trình duyệt vào trang GitHub nhánh `Bui_Van_Nam_Cuong`, nhấn **`F5`**, chỉ chuột vào commit mới nhất vừa xuất hiện.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em chuyển sang trình duyệt vào nhánh Bui_Van_Nam_Cuong trên GitHub và nhấn F5: Commit mới nhất đã được ghi nhận thành công trên GitHub. Em xin chân thành cảm ơn hai thầy Kiều Tuấn Dũng và Tạ Chí Hiếu đã theo dõi toàn bộ 3 video minh chứng của em!"*

---

## 🛡️ TỔNG HỢP 3 PHA LIVE EDIT SIÊU NGẮN (TRA CỨU NHANH KHI QUAY)

| Video | Tệp tin | Vị trí cần tìm | Code cũ | Sửa thành (Code mới) | Kết quả thấy ngay trên web |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **Video 1** | `cu-dan-tra-cuu-rac.html` | Dòng ~210 (mục 3.2) | `btn-success` | `btn-primary` | Nút bấm AI đổi từ Xanh lá sang Xanh dương |
| **Video 2** | `cu-dan-diem-thu-gom.html` | Dòng ~388 (hàm số 7) | `fillLevel: 92` | `fillLevel: 99` | Bấm "Báo đầy rác" nhảy lên 99% đỏ rực |
| **Video 3** | `cu-dan-dat-lich-thu-gom.html` | Dòng ~206 (hàm số 1) | `let diemSo = 30;` | `let diemSo = 50;` | Điểm cơ bản SLA nhảy từ 30đ lên 50đ cam |
