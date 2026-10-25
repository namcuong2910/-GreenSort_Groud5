# KỊCH BẢN CHI TIẾT 03 VIDEO MINH CHỨNG OBS DÀNH CHO SV1 (BẢN CHUẨN ĐẶC BIỆT)
**Học phần:** CSE122 - Phát triển ứng dụng Web cơ bản (TLU)  
**Giảng viên chấm thi:** ThS. Kiều Tuấn Dũng & ThS. Tạ Chí Hiếu  
**Sinh viên thực hiện:** Bùi Văn Nam Cường – Mã SV: `2551060590`  
**Vai trò:** Sinh viên 1 (SV1 - Nhóm trưởng) – Phân hệ Người dân & Xác thực  
**Nhánh Git cá nhân:** `Bui_Van_Nam_Cuong`  
**Repository:** `https://github.com/namcuong2910/-GreenSort_Groud5`  
**Link web chạy thử (GitHub Pages):** `https://namcuong2910.github.io/-GreenSort_Groud5/`

---

## 🎯 ĐẶC TÍNH CỦA BẢN KỊCH BẢN NÀY
1. **Phần Sửa Code Trực Tiếp (Live Edit) VỪA VẶN & THỰC CHẤT**:
   - Không bị "quá ngắn / lười" kiểu chỉ đổi 1 con số.
   - Cũng không dài dòng phức tạp dễ gõ sai cú pháp.
   - Mỗi video sửa từ **1 đến 3 dòng code mang tính năng thật**, thể hiện sâu tư duy kỹ thuật (NLP, IoT, Thuật toán chấm điểm SLA).
2. **Kịch bản lời thoại đầy đủ 100% từ giây 0:00 đến khi kết thúc video**:
   - Hướng dẫn chi tiết từng cú click chuột, phím tắt (`Ctrl+S`, `Ctrl+F5`, `F12`, `Ctrl+` `).
   - Từng câu nói của Nam Cường vào micro tự tin, rành mạch, đúng ngôn từ kỹ sư phần mềm.
3. **Thao tác Git / GitHub bài bản**: Hướng dẫn gõ từng lệnh trên Terminal, giải thích Staging Area, Commit message và mở web GitHub đối chiếu commit hash.

---

# ========================================================
# 🎬 VIDEO 1: TRA CỨU PHÂN LOẠI RÁC & TRỢ LÝ THÔNG MINH AI-1
# ========================================================
* **Tên file video khi xuất OBS:** `SV1-01-cu-dan-tra-cuu-rac.mp4`
* **Màn hình demo:** `cu-dan-tra-cuu-rac.html`
* **Mã Task ID Barem:** `GS-RES-07` | **Nhánh Git:** `Bui_Van_Nam_Cuong`
* **Thời lượng chuẩn:** ~ 3 phút 45 giây – 4 phút

---

### KỊCH BẢN CHI TIẾT TỪNG PHẦN (VIDEO 1):

#### ⏰ PHẦN 1: CHÀO HỎI & NHẬN DIỆN (0:00 – 0:30)
* **Thao tác trên màn hình:**
  - Bật OBS, mở webcam hiển thị rõ khuôn mặt Nam Cường ở góc dưới bên phải màn hình.
  - Màn hình desktop mở sẵn trình duyệt và VS Code.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em tên là Bùi Văn Nam Cường, mã số sinh viên 2551060590, là sinh viên 1 kiêm nhóm trưởng nhóm BTL-05 đề tài GreenSort. Trong video đầu tiên này, em xin trình bày minh chứng quá trình phát triển màn hình Cư dân tra cứu phân loại rác thông minh tích hợp Trợ lý AI-1, mã công việc GS-RES-07 trên nhánh Git cá nhân Bui_Van_Nam_Cuong."*

---

#### ⏰ PHẦN 2: ĐỐI CHIẾU MOCKUP FIGMA (0:30 – 1:00)
* **Thao tác trên màn hình:**
  - Chuyển sang tab Figma thiết kế GreenSort. Phóng to khung màn hình Tra cứu rác.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Trước hết, đây là bản vẽ thiết kế trên Figma do em tự thiết kế: Phía trên là thanh Header nhận diện thương hiệu GreenSort; ở giữa là Khung tìm kiếm Trợ lý AI nổi bật với hiệu ứng bo tròn hiện đại; bên dưới là lưới danh mục 4 nhóm rác quy chuẩn gồm Hữu cơ, Tái chế, Nguy hại và Vô cơ theo đúng Luật Bảo vệ Môi trường 2024."*

---

#### ⏰ PHẦN 3 & 4: GIẢI THÍCH CẤU TRÚC CODE TRONG VS CODE (1:00 – 2:00)
* **Thao tác trên màn hình:**
  - Mở VS Code tệp `cu-dan-tra-cuu-rac.html`.
  - Cuộn chuột cho thầy thấy các khối chú thích đánh số: `1. ĐÂY LÀ...`, `2. ĐÂY LÀ...`, `3. ĐÂY LÀ...`.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Tiếp theo, em mở file cu-dan-tra-cuu-rac.html trong VS Code:<br>- Toàn bộ cấu trúc trang đã được em đánh số thứ tự từ 1 đến 6 rất rõ ràng: Mục 1 là Khai báo Head, Mục 2 là Header, Mục 3 là Thân trang Main duy nhất.<br>- Về chuẩn HTML5 Semantic: Trang tuân thủ đúng yêu cầu chỉ có duy nhất 1 thẻ main tại dòng 110 và đúng 1 thẻ h1 lớn nhất tại dòng 121.<br>- Về CSS: Em dùng hệ thống lưới Bootstrap 5.3 kết hợp file giao-dien.css tạo các thẻ bo góc rounded-4 hiện đại.<br>- Về JavaScript: Hàm xuLyGoiYPhanLoai() trong file chinh.js xử lý đối sánh từ khóa rác thông minh. Khi người dùng nhập dưới 3 ký tự, hệ thống kích hoạt Uncertainty UX hiển thị 4 gợi ý nhanh. Toàn bộ chuỗi hiển thị đều được bọc qua hàm escapeHTML() để chống triệt để lỗ hổng XSS theo quy định VP-02 của thầy."*

---

#### ⏰ PHẦN 5: SỬA CODE TRỰC TIẾP (LIVE EDIT) (2:00 – 2:40)
* **Thao tác trên màn hình:**
  1. Trong file `cu-dan-tra-cuu-rac.html`, cuộn chuột đến mục **`<!-- 3.2. TRỢ LÝ AI PHÂN LOẠI RÁC... -->`** (khoảng dòng 210).
  2. Tìm nút bấm AI gốc:
     ```html
     <button class="btn btn-success px-4" id="btnAiAnalyze" type="button">
       <i class="bi bi-magic me-1"></i>Gợi ý phân loại ✨
     </button>
     ```
  3. **Thao tác sửa code:** Nâng cấp nút bấm sang phong cách công nghệ NLP AI:
     ```html
     <button class="btn btn-primary px-4 shadow-sm" id="btnAiAnalyze" type="button">
       <i class="bi bi-robot me-1"></i>Phân Tích AI (NLP) ⚡
     </button>
     ```
  4. Nhấn **`Ctrl + S`** để lưu lại.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Bây giờ em thực hiện phần Sửa code trực tiếp tại chỗ theo yêu cầu Barem: Tại mục 3.2 Trợ lý AI, em nâng cấp nút bấm phân tích: Em chuyển class sang btn-primary màu xanh dương công nghệ, bổ sung hiệu ứng đổ bóng shadow-sm, đổi icon sang bi-robot và đặt lại tên nút là 'Phân Tích AI (NLP) ⚡' để nhấn mạnh cơ chế xử lý ngôn ngữ tự nhiên đối sánh từ khóa. Em nhấn phím Ctrl+S để lưu lại."*

---

#### ⏰ PHẦN 6: CHẠY THỬ TRÌNH DUYỆT & TEST F12 RESPONSIVE (2:40 – 3:20)
* **Thao tác trên màn hình:**
  1. Nhấn `Alt + Tab` sang trình duyệt, nhấn **`Ctrl + F5`**.
  2. Chỉ chuột vào nút bấm mới: Đã chuyển sang màu xanh dương công nghệ với icon robot!
  3. Gõ vào ô tìm kiếm: `"Pin con thỏ cũ"` -> Bấm nút: Hiệu ứng loading chạy 800ms -> Trả kết quả Thùng đỏ Rác Nguy Hại (độ tin cậy 98.5%) kèm hướng dẫn quấn băng dính 2 đầu cực.
  4. Gõ thử 1 chữ `"a"` -> Hiện ngay cảnh báo Uncertainty độ tin cậy thấp kèm 4 gợi ý nhanh.
  5. Nhấn **`F12`**, co màn hình về kích thước điện thoại 320px.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em quay lại trình duyệt và nhấn Ctrl+F5 làm tươi trang:<br>- Như hai thầy thấy, nút bấm lập tức đổi sang màu xanh dương với icon robot chuẩn công nghệ đúng như em vừa sửa trực tiếp.<br>- Giờ em test chức năng AI: Em nhập 'Pin con thỏ cũ' và bấm nút: Hiệu ứng loading xuất hiện rồi hiển thị ngay kết quả Thùng Đỏ Rác Nguy Hại độ tin cậy 98.5% cùng hướng dẫn xử lý.<br>- Em thử nhập 1 ký tự 'a': Hệ thống kích hoạt ngay Fallback Uncertainty cảnh báo độ tin cậy thấp kèm 4 gợi ý chuẩn.<br>- Em nhấn F12 co màn hình về 320px: Toàn bộ giao diện co giãn mượt mà, không hề bị tràn viền hay vỡ khung."*

---

#### ⏰ PHẦN 7: THAO TÁC GIT TRÊN TERMINAL (3:20 – 3:55)
* **Thao tác trên màn hình:** Mở Terminal trong VS Code (**`Ctrl + ` `**). Gõ lần lượt:
  ```bash
  git status
  ```
  *(Thấy file `cu-dan-tra-cuu-rac.html` báo đỏ)*
  ```bash
  git diff cu-dan-tra-cuu-rac.html
  ```
  *(Chỉ chuột vào dòng màu đỏ cũ và dòng màu xanh lá mới có `btn-primary` và `bi-robot`)*
  ```bash
  git add cu-dan-tra-cuu-rac.html
  git commit -m "feat(ai-waste): live edit nang cap nut bam tro ly AI NLP"
  git push origin Bui_Van_Nam_Cuong
  ```
* **Lời thoại Nam Cường nói vào mic:**
  > *"Bây giờ em thực hiện thao tác Git trong Terminal:<br>- Em gõ `git status`: File cu-dan-tra-cuu-rac.html đang báo đỏ trạng thái Modified.<br>- Em gõ `git diff`: Thầy thấy rõ dòng trừ màu đỏ là code cũ và dòng cộng màu xanh là nút bấm AI NLP em vừa sửa.<br>- Em gõ `git add cu-dan-tra-cuu-rac.html` và commit với thông điệp chuẩn Conventional Commits.<br>- Cuối cùng em gõ `git push origin Bui_Van_Nam_Cuong` để đẩy lên nhánh cá nhân của em."*

---

#### ⏰ PHẦN 8: KIỂM TRA TRÊN GITHUB & KẾT THÚC (3:55 – 4:15)
* **Thao tác trên màn hình:**
  - Chuyển sang trình duyệt mở tab GitHub nhánh `Bui_Van_Nam_Cuong`:  
    `https://github.com/namcuong2910/-GreenSort_Groud5/tree/Bui_Van_Nam_Cuong`
  - Nhấn phím **`F5`**, chỉ chuột vào commit mới nhất vừa xuất hiện.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em chuyển sang trang web GitHub của nhóm: Nhánh Bui_Van_Nam_Cuong vừa cập nhật commit mới nhất cách đây vài giây, minh chứng hoàn toàn trung thực quá trình làm việc của em. Em xin kết thúc video số 1 tại đây. Cảm ơn hai thầy!"*

---

# ========================================================
# 🎬 VIDEO 2: ĐIỂM THU GOM RÁC & CẢM BIẾN MỨC ĐẦY IOT
# ========================================================
* **Tên file video khi xuất OBS:** `SV1-02-cu-dan-diem-thu-gom.mp4`
* **Màn hình demo:** `cu-dan-diem-thu-gom.html`
* **Mã Task ID Barem:** `GS-RES-08` | **Nhánh Git:** `Bui_Van_Nam_Cuong`
* **Thời lượng chuẩn:** ~ 3 phút 45 giây – 4 phút

---

### KỊCH BẢN CHI TIẾT TỪNG PHẦN (VIDEO 2):

#### ⏰ PHẦN 1: CHÀO HỎI & NHẬN DIỆN (0:00 – 0:30)
* **Thao tác trên màn hình:**
  - Mở OBS, bật webcam hiển thị rõ mặt ở góc dưới phải. Màn hình desktop sẵn sàng.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em là Bùi Văn Nam Cường, MSSV 2551060590, sinh viên 1 của nhóm BTL-05 GreenSort. Trong video thứ 2 này, em xin trình bày minh chứng màn hình Mạng lưới Điểm thu gom và Giám sát cảm biến mức đầy thùng rác IoT thời gian thực, mã công việc GS-RES-08 trên nhánh cá nhân Bui_Van_Nam_Cuong."*

---

#### ⏰ PHẦN 2: ĐỐI CHIẾU MOCKUP FIGMA (0:30 – 1:00)
* **Thao tác trên màn hình:**
  - Mở tab Figma chuyển sang Frame Điểm thu gom rác.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Trên bản vẽ Figma, màn hình này được em thiết kế trực quan gồm: Thanh tìm kiếm theo quận huyện; bộ nút bấm lọc nhanh loại rác tiếp nhận; và danh sách các thẻ điểm thu gom hiển thị mức đầy cảm biến IoT kèm giờ mở cửa và nút định vị GPS."*

---

#### ⏰ PHẦN 3 & 4: GIẢI THÍCH CẤU TRÚC CODE TRONG VS CODE (1:00 – 2:00)
* **Thao tác trên màn hình:**
  - Mở VS Code tệp `cu-dan-diem-thu-gom.html`.
  - Cuộn qua cấu trúc đánh số và chỉ vào 8 hàm trong thẻ `<script>`.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Trong VS Code tệp cu-dan-diem-thu-gom.html:<br>- Cấu trúc HTML5 chuẩn có đúng 1 thẻ main tại dòng 77 và 1 thẻ h1 duy nhất tại dòng 83.<br>- Toàn bộ JavaScript đã được em chú thích rõ ràng 8 hàm chức năng: Hàm số 4 taiDanhSachDiemThuGom() nạp dữ liệu từ KhoDuLieu. Dữ liệu cảm biến IoT được hiển thị qua thanh tiến độ progress-bar với 3 dải màu: Dưới 70% xanh an toàn, 70 đến 85% vàng cảnh báo, và trên 85% đỏ quá tải.<br>- Hàm số 7 baoCaoThungRacDay() cho phép người dân bấm báo đầy rác, hệ thống lập tức cập nhật trạng thái thùng rác và gửi cảnh báo sang Coordinator."*

---

#### ⏰ PHẦN 5: SỬA CODE TRỰC TIẾP (LIVE EDIT) (2:00 – 2:40)
* **Thao tác trên màn hình:**
  1. Trong file `cu-dan-diem-thu-gom.html`, tìm đến mục **`<!-- 3.1. KHUNG TIÊU ĐỀ (thẻ H1 duy nhất)... -->`** (khoảng dòng 83).
  2. Tìm thẻ H1 gốc:
     ```html
     <h1 class="h3 fw-bold text-dark mb-1">Mạng Lưới Điểm Thu Gom Rác & Tái Chế</h1>
     ```
  3. **Thao tác sửa code:** Thêm một Badge công nghệ IoT ngay cạnh tiêu đề H1:
     ```html
     <h1 class="h3 fw-bold text-dark mb-1">
       Mạng Lưới Điểm Thu Gom Rác & Tái Chế
       <span class="badge bg-success-subtle text-success border border-success-subtle fs-6 align-middle ms-2">
         <i class="bi bi-broadcast me-1"></i>Cảm Biến IoT Trực Tuyến
       </span>
     </h1>
     ```
  4. Nhấn **`Ctrl + S`** để lưu lại.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em thực hiện sửa code trực tiếp tại mục 3.1: Em bổ sung một huy hiệu 'Cảm Biến IoT Trực Tuyến' kèm biểu tượng phát sóng không dây bi-broadcast ngay cạnh tiêu đề H1 để người dân nhận biết hệ thống đang kết nối cảm biến đo mức đầy thùng rác từ xa theo thời gian thực. Em nhấn phím Ctrl+S để lưu lại."*

---

#### ⏰ PHẦN 6: CHẠY THỬ TRÌNH DUYỆT & TEST F12 RESPONSIVE (2:40 – 3:20)
* **Thao tác trên màn hình:**
  1. Nhấn `Alt + Tab` sang trình duyệt, nhấn **`Ctrl + F5`**.
  2. Chỉ chuột vào huy hiệu IoT màu xanh lá mới hiện lên cạnh tiêu đề H1.
  3. Bấm nút **'Tìm gần tôi (GPS)'** -> Thông báo định vị 2km hiện lên.
  4. Bấm nút **'Báo đầy rác'** tại trạm ĐH Thủy Lợi -> Bấm OK -> Thanh đo cảm biến lập tức nhảy lên **92% (Quá tải - Đã báo xe)** màu đỏ rực!
  5. Bấm nút **'Gợi ý điểm mới'** -> Modal mở ra mượt mà.
  6. Bấm **`F12`** co về 375px điện thoại: Lưới card điểm gom tự xếp 1 cột dọc rất ngay ngắn.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em quay lại trình duyệt nhấn Ctrl+F5:<br>- Huy hiệu 'Cảm Biến IoT Trực Tuyến' vừa thêm đã hiển thị nổi bật ngay cạnh tiêu đề H1.<br>- Em bấm 'Tìm gần tôi (GPS)': Hệ thống định vị tọa độ khu vực Thủy Lợi Đống Đa và lọc nhanh các trạm xung quanh.<br>- Em bấm nút 'Báo đầy rác' tại Điểm thu gom TLU: Mức đầy cảm biến lập tức tăng lên 92%, thanh chuyển màu đỏ báo động quá tải.<br>- Em bấm 'Gợi ý điểm mới': Modal chuẩn Bootstrap hiện ra để người dân đề xuất trạm mới.<br>- Bấm F12 co về 375px: Lưới card tự động xếp chồng 1 cột dọc rất chuẩn, các nút bấm to rõ ràng dễ chạm."*

---

#### ⏰ PHẦN 7: THAO TÁC GIT TRÊN TERMINAL (3:20 – 3:55)
* **Thao tác trên màn hình:** Mở Terminal trong VS Code (**`Ctrl + ` `**). Gõ lần lượt:
  ```bash
  git status
  git diff cu-dan-diem-thu-gom.html
  ```
  *(Chỉ chuột vào dòng màu xanh có thẻ badge `Cảm Biến IoT Trực Tuyến`)*
  ```bash
  git add cu-dan-diem-thu-gom.html
  git commit -m "feat(points): live edit them huy hieu cam bien IoT truc tuyen"
  git push origin Bui_Van_Nam_Cuong
  ```
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em mở Terminal gõ `git status` và `git diff`: Thầy thấy dòng màu xanh chính là đoạn mã thêm huy hiệu Cảm biến IoT em vừa sửa. Em gõ `git add` và commit, sau đó gõ `git push origin Bui_Van_Nam_Cuong` để đẩy lên server GitHub."*

---

#### ⏰ PHẦN 8: KIỂM TRA TRÊN GITHUB & KẾT THÚC (3:55 – 4:15)
* **Thao tác trên màn hình:**
  - Mở trình duyệt vào trang GitHub commits của nhánh `Bui_Van_Nam_Cuong`:  
    `https://github.com/namcuong2910/-GreenSort_Groud5/commits/Bui_Van_Nam_Cuong`  
  - Nhấn **`F5`**, chỉ vào commit mới nhất.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em kiểm tra trên web GitHub nhánh Bui_Van_Nam_Cuong: Commit mới nhất đã xuất hiện minh bạch. Em xin kết thúc video số 2. Em cảm ơn hai thầy!"*

---

# ========================================================
# 🎬 VIDEO 3: ĐẶT LỊCH THU GOM RÁC CỒNG KỀNH & THUẬT TOÁN AI-2 SLA
# ========================================================
* **Tên file video khi xuất OBS:** `SV1-03-cu-dan-dat-lich-thu-gom.mp4`
* **Màn hình demo:** `cu-dan-dat-lich-thu-gom.html`
* **Mã Task ID Barem:** `GS-RES-09` | **Nhánh Git:** `Bui_Van_Nam_Cuong`
* **Thời lượng chuẩn:** ~ 3 phút 45 giây – 4 phút

---

### KỊCH BẢN CHI TIẾT TỪNG PHẦN (VIDEO 3):

#### ⏰ PHẦN 1: CHÀO HỎI & NHẬN DIỆN (0:00 – 0:30)
* **Thao tác trên màn hình:**
  - Mở OBS, kiểm tra webcam hiển thị rõ khuôn mặt. Màn hình desktop sẵn sàng.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em là Bùi Văn Nam Cường, MSSV 2551060590, sinh viên 1 của nhóm BTL-05 GreenSort. Trong video thứ 3 này, em xin chứng minh quá trình phát triển màn hình Đặt lịch thu gom rác cồng kềnh tích hợp thuật toán chấm điểm ưu tiên SLA AI-2 và đồng bộ Real-time đa tab, mã công việc GS-RES-09 trên nhánh Bui_Van_Nam_Cuong."*

---

#### ⏰ PHẦN 2: ĐỐI CHIẾU MOCKUP FIGMA (0:30 – 1:00)
* **Thao tác trên màn hình:**
  - Mở tab Figma chuyển sang Frame Đặt lịch thu gom rác cồng kềnh.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Trên bản vẽ Figma, màn hình được bố cục 2 cột rõ ràng: Cột bên trái là Biểu mẫu đặt lịch với ô chấm điểm ưu tiên SLA tự động nhảy điểm theo thời gian thực; Cột bên phải là Danh sách lịch sử các yêu cầu đã gửi kèm trạng thái xử lý và nút hủy yêu cầu."*

---

#### ⏰ PHẦN 3 & 4: GIẢI THÍCH CẤU TRÚC CODE TRONG VS CODE (1:00 – 2:00)
* **Thao tác trên màn hình:**
  - Mở VS Code tệp `cu-dan-dat-lich-thu-gom.html`.
  - Chỉ vào cấu trúc 2 cột tại mục 3.1 và 3.2, sau đó cuộn xuống các hàm JavaScript.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Trong VS Code tệp cu-dan-dat-lich-thu-gom.html:<br>- Cấu trúc HTML5 chuẩn có đúng 1 thẻ main tại dòng 77 và đúng 1 thẻ h1 duy nhất tại dòng 90.<br>- Về thuật toán AI-2: Hàm tinhDiemUuTien() tự động tính điểm dựa trên loại rác và từ khóa ghi chú. Nếu điểm từ 70 trở lên, hệ thống xếp vào diện Khẩn cấp SLA 2 giờ điều xe ngay.<br>- Về tính năng đồng bộ Real-time: Em cài đặt sự kiện greensort:dataChanged để đồng bộ đa tab. Khi người dân gửi đơn ở tab này, bảng điều phối ở tab của bạn Đức Anh tự động nhảy đơn mới mà không cần nhấn F5."*

---

#### ⏰ PHẦN 5: SỬA CODE TRỰC TIẾP (LIVE EDIT LOGIC THUẬT TOÁN) (2:00 – 2:40)
* **Thao tác trên màn hình:**
  1. Trong file `cu-dan-dat-lich-thu-gom.html`, cuộn xuống thẻ `<script>` tìm đến **`// 1. Hàm tự động tính điểm ưu tiên SLA...`** (khoảng dòng 210 - 215).
  2. Tìm đoạn code kiểm tra loại rác:
     ```javascript
     if (loaiRac.includes('Đồ gỗ') || loaiRac.includes('Sofa')) {
       diemSo += 20;
     }
     ```
  3. **Thao tác sửa code:** Viết thêm 1 câu lệnh IF nhận diện từ khóa `"gấp"` để cộng 25 điểm ưu tiên:
     ```javascript
     if (ghiChu.includes('gấp') || ghiChu.includes('khẩn')) {
       diemSo += 25; // Ưu tiên xử lý hỏa tốc trong ngày
     }
     ```
  4. Nhấn **`Ctrl + S`** để lưu lại.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em thực hiện sửa code trực tiếp vào thuật toán AI-2 tính điểm ưu tiên SLA tại hàm tinhDiemUuTien(): Em viết thêm một logic điều kiện: Nếu trong ô ghi chú người dân nhập từ khóa 'gấp' hoặc 'khẩn', thuật toán sẽ tự động cộng thêm 25 điểm ưu tiên để đẩy nhanh đơn thu gom vào tuyến hỏa tốc trong ngày. Em nhấn phím Ctrl+S để lưu lại."*

---

#### ⏰ PHẦN 6: CHẠY THỬ TRÌNH DUYỆT & TEST F12 RESPONSIVE (2:40 – 3:20)
* **Thao tác trên màn hình:**
  1. Nhấn `Alt + Tab` sang trình duyệt, nhấn **`Ctrl + F5`**.
  2. Bấm 'Gửi Yêu Cầu Thu Gom' khi form còn trống -> Trình duyệt báo lỗi viền đỏ từng ô (Form Validation).
  3. Điền họ tên: `Bùi Văn Nam Cường`, SĐT: `0987654321`, địa chỉ: `Số 175 Tây Sơn`, chọn loại rác: `Đồ gỗ / Tủ / Bàn ghế cũ`.
  4. Tại ô ghi chú, gõ chữ: `"Cần dọn gấp trong sáng nay"`.
  5. **Nhìn ngay vào ô SLA:** Điểm số tự động cộng thêm 25đ và nhảy vọt lên **75 điểm màu đỏ rực: Khẩn Cấp (75đ - SLA 2h - Điều xe ngay)**!
  6. Bấm Gửi đơn -> Đơn hàng xuất hiện ngay sang cột Lịch sử bên phải.
  7. Bấm **`F12`** co về 320px: Bố cục 2 cột tự chuyển thành 1 cột dọc co giãn vừa khít.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Quay lại trình duyệt:<br>- Em thử bấm Gửi khi form còn trống: Trình duyệt kích hoạt ngay HTML5 Form Validation với viền đỏ chuẩn xác.<br>- Giờ em điền tên 'Bùi Văn Nam Cường', số điện thoại, địa chỉ, chọn loại rác Đồ gỗ.<br>- Tại ô ghi chú, em gõ chữ 'Cần dọn gấp': Như hai thầy thấy, thuật toán AI-2 em vừa sửa code trực tiếp lập tức bắt được từ khóa 'gấp', cộng thêm 25 điểm và đẩy điểm ưu tiên lên 75 điểm màu đỏ rực - diện Khẩn cấp SLA 2 giờ!<br>- Em bấm Gửi: Đơn hàng lập tức xuất hiện ngay sang cột Lịch sử bên phải.<br>- Em nhấn F12 co về 320px: Bố cục 2 cột tự động chuyển thành 1 cột dọc rất chuẩn trên màn hình điện thoại."*

---

#### ⏰ PHẦN 7: THAO TÁC GIT TRÊN TERMINAL (3:20 – 3:55)
* **Thao tác trên màn hình:** Mở Terminal trong VS Code (**`Ctrl + ` `**). Gõ lần lượt:
  ```bash
  git status
  git diff cu-dan-dat-lich-thu-gom.html
  ```
  *(Chỉ chuột vào khối IF cộng 25 điểm khẩn cấp màu xanh lá)*
  ```bash
  git add cu-dan-dat-lich-thu-gom.html
  git commit -m "feat(booking-sla): live edit them logic nhan dien tu khoa gap cong 25 diem"
  git push origin Bui_Van_Nam_Cuong
  ```
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em mở Terminal gõ `git status` và `git diff`: Thầy thấy khối lệnh IF nhận diện từ khóa 'gấp' cộng 25 điểm hiển thị rõ ràng màu xanh lá. Em gõ `git add` và commit, sau đó gõ `git push origin Bui_Van_Nam_Cuong` để đẩy lên server GitHub."*

---

#### ⏰ PHẦN 8: KIỂM TRA TRÊN GITHUB & KẾT THÚC (3:55 – 4:15)
* **Thao tác trên màn hình:**
  - Mở trình duyệt vào trang GitHub nhánh `Bui_Van_Nam_Cuong`, nhấn **`F5`**, chỉ chuột vào commit mới nhất vừa xuất hiện.
* **Lời thoại Nam Cường nói vào mic:**
  > *"Em chuyển sang trình duyệt vào nhánh Bui_Van_Nam_Cuong trên GitHub và nhấn F5: Commit mới nhất đã được ghi nhận thành công trên GitHub. Em xin chân thành cảm ơn hai thầy Kiều Tuấn Dũng và Tạ Chí Hiếu đã theo dõi toàn bộ 3 video minh chứng của em!"*

---

## 🛡️ BẢNG TỔNG HỢP 3 PHA LIVE EDIT VỪA VẶN & Ý NGHĨA

| Video | Tệp tin | Vị trí cần tìm | Code cũ | Sửa thành (Code mới) | Ý nghĩa kỹ thuật |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **Video 1** | `cu-dan-tra-cuu-rac.html` | Dòng ~210 (mục 3.2) | `<button class="btn btn-success px-4" id="btnAiAnalyze" type="button"><i class="bi bi-magic me-1"></i>Gợi ý phân loại ✨</button>` | `<button class="btn btn-primary px-4 shadow-sm" id="btnAiAnalyze" type="button"><i class="bi bi-robot me-1"></i>Phân Tích AI (NLP) ⚡</button>` | Nâng cấp giao diện Trợ lý AI NLP công nghệ cao |
| **Video 2** | `cu-dan-diem-thu-gom.html` | Dòng ~83 (mục 3.1) | `<h1 class="h3 fw-bold text-dark mb-1">Mạng Lưới Điểm Thu Gom Rác & Tái Chế</h1>` | Thêm thẻ: `<span class="badge bg-success-subtle text-success border border-success-subtle fs-6 align-middle ms-2"><i class="bi bi-broadcast me-1"></i>Cảm Biến IoT Trực Tuyến</span>` | Thể hiện mạng lưới kết nối cảm biến IoT trực tuyến |
| **Video 3** | `cu-dan-dat-lich-thu-gom.html` | Dòng ~212 (hàm số 1) | Đoạn IF kiểm tra rác đồ gỗ | Thêm: `if (ghiChu.includes('gấp') || ghiChu.includes('khẩn')) { diemSo += 25; }` | Thể hiện thuật toán AI-2 xử lý từ khóa ngôn ngữ tự nhiên |
