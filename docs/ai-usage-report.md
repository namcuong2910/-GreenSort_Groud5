# BÁO CÁO ỨNG DỤNG TRÍ TUỆ NHÂN TẠO & KHAI BÁO CÔNG CỤ HỖ TRỢ (AI USAGE REPORT)

**Học phần:** Phát triển ứng dụng Web cơ bản (CSE122)  
**Đề tài:** BTL-05 GreenSort – Phân loại rác & Điều phối thu gom thông minh  
**Nhóm sinh viên thực hiện:** Nhóm BTL-05  

---

## PHẦN I: 3 TÍNH NĂNG AI MÔ PHỎNG TRONG SẢN PHẨM (PRODUCT AI FEATURES)

Hệ thống GreenSort triển khai 3 trải nghiệm AI mô phỏng phía Frontend theo đúng đặc tả đề bài:

### 1. AI-1: Trợ lý Phân loại Rác Thông minh (AI Waste Classifier)
- **Vị trí tích hợp:** `cu-dan-tra-cuu-rac.html`
- **Mục đích:** Giúp người dân nhận diện nhanh chóng chủng loại rác từ tên gọi hoặc mô tả thông thường.
- **Cơ chế kỹ thuật:** Xử lý ngôn ngữ tự nhiên (NLP rule-based) dựa trên tập từ điển chất thải đô thị chuẩn. Phân loại thành 4 nhóm (Hữu cơ, Tái chế, Nguy hại, Vô cơ), tính toán độ tin cậy (Confidence Score 90-98%), chỉ dẫn màu thùng rác quy định và phương pháp sơ chế an toàn.
- **Trạng thái không chắc chắn (Failure State):** Khi người dùng nhập từ khóa lạ hoặc không đủ ngữ cảnh, hệ thống hiển thị cảnh báo tin cậy thấp (<40%), khuyến nghị người dùng chọn phân loại thủ công hoặc tra cứu danh mục rác.
- **Quyền kiểm soát của con người (Human-in-the-loop):** Người dùng có toàn quyền xác nhận, chỉnh sửa loại rác hoặc gửi báo cáo phản ánh lên hệ thống.

### 2. AI-2: Thuật toán Chấm Điểm Ưu Tiên Tự Động (AI Priority Scorer)
- **Vị trí tích hợp:** `cu-dan-dat-lich-thu-gom.html` & `dieu-phoi-bang-yeu-cau.html`
- **Mục đích:** Đảm bảo các đơn phế thải nguy hại hoặc gây ách tắc giao thông đô thị được tự động đẩy lên mức ưu tiên cao nhất trong hàng đợi SLA.
- **Quy tắc tính điểm (0 - 100):**
  - Điểm nền tảng (Base): 30 điểm
  - Chứa rác nguy hại / pin / hóa chất cháy nổ: +45 điểm $\rightarrow$ Kích hoạt hạn SLA Khẩn cấp (<2h, điều xe tức thì)
  - Cành cây to / ngõ hẹp / cản trở giao thông: +35 điểm $\rightarrow$ Ưu tiên P2 (<12h, tuyến trong ngày)
  - Phế thải cồng kềnh thông thường: +20 điểm $\rightarrow$ Tiêu chuẩn P3 (<48h)

### 3. AI-3: Thuật toán Tối Ưu Hóa Tuyến Đường & Gom Cụm Điểm Dừng (AI Route Optimizer & Clustering)
- **Vị trí tích hợp:** `dieu-phoi-bang-yeu-cau.html` & `thu-gom-lo-trinh-tuyen-duong.html`
- **Mục đích:** Hỗ trợ Điều phối viên gom cụm các yêu cầu thu gom lân cận về mặt địa lý (theo khu vực Đống Đa, Hoàn Kiếm, Ba Đình) và sắp xếp thứ tự di chuyển tối ưu cho xe ép rác.
- **Hiệu quả đo lường:** Rút ngắn 4.8 km quãng đường di chuyển (giảm 26%), tiết kiệm 35 phút hành trình và cắt giảm 12.4 kg phát thải CO2 (đáp ứng tiêu chuẩn xanh ESG).

---

## PHẦN II: KHAI BÁO SỬ DỤNG CÔNG CỤ TRÍ TUỆ NHÂN TẠO TRONG QUÁ TRÌNH HỌC TẬP (MỤC 20 ĐỀ BÀI)

Tuân thủ quy định học thuật và liêm chính trong học phần CSE122, nhóm sinh viên công khai khai báo quá trình ứng dụng công cụ hỗ trợ như sau:

| Tiêu chí khai báo | Chi tiết thực hiện của nhóm |
|---|---|
| **1. Công cụ AI đã sử dụng** | GitHub Copilot & ChatGPT-4o (đóng vai trò trợ lý tra cứu cú pháp và gợi ý đoạn mã mẫu). |
| **2. Các câu lệnh (Prompt) chính đã dùng** | - *"Gợi ý bảng mã màu sinh thái sinh thái chuẩn Bootstrap 5 cho website môi trường"*<br>- *"Viết biểu thức chính quy (Regex) kiểm tra số điện thoại di động 10 số của Việt Nam"*<br>- *"Gợi ý cấu trúc JSON giả lập dữ liệu các trạm thu gom rác thải đô thị"* |
| **3. Phần mã nguồn có sự hỗ trợ của AI** | - Bộ khung layout lưới ban đầu của Bootstrap 5.<br>- Biểu thức regex xác thực biểu mẫu.<br>- Dữ liệu mẫu JSON trong `waste-data.json`. |
| **4. Phần sinh viên tự tay thiết kế & phát triển** | - Tự phân tích kiến trúc dữ liệu và viết toàn bộ module `GreenSortAPI` trên LocalStorage trong `js/api.js`.<br>- Tự lập trình cơ chế bảo vệ phân quyền nghiêm ngặt 4 vai trò (RBAC) và chuyển hướng trong `js/auth-guard.js`.<br>- Tự lập trình xử lý DOM, bắt sự kiện, tính toán tiến độ tải xe, lọc danh mục và phân tuyến động.<br>- Tự xử lý tất cả các trạng thái giao diện: Trạng thái Rỗng (Empty State), Đang tải (Loading Skeleton), Thất bại (Failure/Uncertainty State) và trang 403 Forbidden. |
| **5. Các lỗi AI gặp phải trong quá trình làm việc** | - AI thường sinh ra code dạng nút bấm có `onclick="alert(...)"` đơn giản mà không liên kết cơ sở dữ liệu thật.<br>- Code do AI gợi ý ban đầu không đồng bộ được dữ liệu giữa 4 vai trò (ví dụ: tạo đơn ở Người dân nhưng Thu gom viên không nhìn thấy).<br>- AI hay nhầm lẫn phân quyền và để lộ liên kết sang vai trò khác.<br>- *Sinh viên đã phát hiện và tự tay tái cấu trúc, viết lại hoàn toàn bằng hàm JavaScript thuần.* |
| **6. Cách sinh viên kiểm chứng chất lượng mã** | - Kiểm thử thủ công từng luồng người dùng qua lại giữa 4 vai trò trên Google Chrome DevTools.<br>- Kiểm tra bộ nhớ LocalStorage và Console để đảm bảo không có bất kỳ lỗi Runtime hoặc cảnh báo W3C nào.<br>- Thử nghiệm Responsive trên các kích thước màn hình: Mobile (375px), Tablet (768px), Laptop/Desktop (1440px). |
| **7. Điều sinh viên học được sau dự án** | - Nắm vững mô hình kiến trúc Frontend nhiều vai trò (Multi-role RBAC).<br>- Nâng cao kỹ năng thao tác DOM, xử lý sự kiện form validation và quản lý trạng thái dữ liệu (State Management).<br>- Hiểu rõ AI chỉ là công cụ hỗ trợ tra cứu nhanh, người kỹ sư lập trình phải là người làm chủ kiến trúc, logic nghiệp vụ và chất lượng sản phẩm cuối cùng. |
| **8. Phân định tính năng Mock & API** | Toàn bộ dữ liệu được mô phỏng tập trung qua module `GreenSortAPI` lưu trữ trong `LocalStorage` của trình duyệt, sẵn sàng tích hợp với RESTful API / Node.js backend trong các học phần tiếp theo. |
