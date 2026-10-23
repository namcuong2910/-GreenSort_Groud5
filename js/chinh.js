/**
 * GreenSort - Hệ thống phân loại & điều phối thu gom thông minh
 * Tệp JavaScript xử lý giao diện tra cứu và gợi ý phân loại rác (chinh.js)
 * 
 * Học phần: CSE122 - Phát triển ứng dụng Web cơ bản
 * Khoa Công nghệ thông tin - Đại học Thủy Lợi (TLU)
 * Nhóm sinh viên thực hiện: BTL-05
 * 
 * Áp dụng kiến thức:
 *   - Chương 5: Vanilla JavaScript (Hàm, Mảng filter/map/find, Template Strings)
 *   - Chương 6: Thao tác DOM (querySelector, getElementById, addEventListener, classList)
 *   - Chương 7: Bất đồng bộ (async/await, fetch, setTimeout)
 *   - Chương 8: Tải và hiển thị dữ liệu JSON (4 trạng thái giao diện)
 *   - Chương 9: Component Thinking, State -> Render UI
 */

// Dữ liệu rác dự phòng (nếu chạy trực tiếp file:// không hỗ trợ fetch local)
const DU_LIEU_RAC_DU_PHONG = [
  {
    "id": "waste-01",
    "name": "Vỏ lon bia / Nước ngọt nhôm",
    "category": "recyclable",
    "categoryName": "Rác tái chế",
    "badgeClass": "text-bg-primary",
    "binColor": "Thùng Xanh Dương",
    "icon": "bi-cup-straw",
    "tip": "Rửa sạch cặn đồ uống, dẫm bẹp để tiết kiệm diện tích chứa.",
    "destination": "Nhà máy tái chế kim loại nhôm",
    "decomposeTime": "80 - 200 năm",
    "hazardous": false,
    "instructions": "1. Tráng qua bằng nước sạch để tránh thu hút côn trùng.\n2. Ép bẹp vỏ lon phẳng lại.\n3. Cho vào túi rác tái chế hoặc thùng rác màu xanh."
  },
  {
    "id": "waste-02",
    "name": "Chai nhựa PET (Nước suối, trà xanh)",
    "category": "recyclable",
    "categoryName": "Rác tái chế",
    "badgeClass": "text-bg-primary",
    "binColor": "Thùng Xanh Dương",
    "icon": "bi-droplet-half",
    "tip": "Bỏ nắp chai riêng hoặc vặn chặt, tháo nhãn màng co nếu có thể.",
    "destination": "Xưởng tái chế hạt nhựa rPET",
    "decomposeTime": "450 năm",
    "hazardous": false,
    "instructions": "1. Đổ hết nước thừa bên trong.\n2. Tháo nắp và gỡ màng bọc nilon bên ngoài.\n3. Bóp dẹp thân chai để giảm thể tích chứa."
  },
  {
    "id": "waste-03",
    "name": "Vỏ chuối & Cuống rau củ quả",
    "category": "organic",
    "categoryName": "Rác hữu cơ",
    "badgeClass": "text-bg-success",
    "binColor": "Thùng Xanh Lá / Nâu",
    "icon": "bi-flower1",
    "tip": "Ủ phân hữu cơ vi sinh (compost) bón cho cây cảnh gia đình.",
    "destination": "Nhà máy sản xuất phân bón hữu cơ vi sinh",
    "decomposeTime": "2 - 6 tuần",
    "hazardous": false,
    "instructions": "1. Để ráo nước, không lẫn túi nilon hay ghim kim loại.\n2. Cho vào thùng ủ rác hữu cơ hoặc túi sinh học tự phân hủy."
  },
  {
    "id": "waste-04",
    "name": "Bã cà phê & Túi trà thảo mộc",
    "category": "organic",
    "categoryName": "Rác hữu cơ",
    "badgeClass": "text-bg-success",
    "binColor": "Thùng Xanh Lá / Nâu",
    "icon": "bi-cup-hot-fill",
    "tip": "Bã cà phê giúp khử mùi tủ lạnh rất tốt trước khi bỏ đi làm phân bón.",
    "destination": "Ủ phân sinh học cải tạo đất",
    "decomposeTime": "1 - 3 tháng",
    "hazardous": false,
    "instructions": "1. Nếu là túi trà, cần cắt bỏ dây nối và ghim bấm kim loại.\n2. Rải gốc cây hoặc gom vào ngăn rác thực phẩm."
  },
  {
    "id": "waste-05",
    "name": "Pin tiểu AA/AAA & Pin điện thoại cũ",
    "category": "hazardous",
    "categoryName": "Rác nguy hại",
    "badgeClass": "text-bg-danger",
    "binColor": "Thùng Đỏ / Điểm Thu Pin Riêng",
    "icon": "bi-battery-charging",
    "tip": "Chứa kim loại nặng độc hại (chì, thủy ngân). Tuyệt đối không vứt chung!",
    "destination": "Khu xử lý chất thải nguy hại chuyên dụng TLU / UBND",
    "decomposeTime": "Hàng trăm năm gây ô nhiễm nguồn nước ngầm",
    "hazardous": true,
    "instructions": "1. Dán băng dính vào 2 đầu cực của pin để tránh chập cháy.\n2. Gom vào lọ thủy tinh hoặc hộp nhựa kín.\n3. Mang đến các điểm thu gom rác điện tử miễn phí."
  },
  {
    "id": "waste-06",
    "name": "Bóng đèn huỳnh quang / Bóng Compact hỏng",
    "category": "hazardous",
    "categoryName": "Rác nguy hại",
    "badgeClass": "text-bg-danger",
    "binColor": "Thùng Đỏ / Điểm Thu Gom",
    "icon": "bi-lightbulb-fill",
    "tip": "Bên trong có hơi thủy ngân. Nếu vỡ, tránh hít phải và quét dọn cẩn thận.",
    "destination": "Lò đốt tiêu hủy chất thải nguy hại đạt chuẩn",
    "decomposeTime": "Không phân hủy sinh học",
    "hazardous": true,
    "instructions": "1. Quấn giấy báo hoặc bọc chống sốc để tránh làm vỡ đèn.\n2. Đánh dấu rõ ràng nhãn 'Bóng đèn hỏng - Nguy hại'.\n3. Bàn giao cho trạm thu gom chất thải đặc thù."
  },
  {
    "id": "waste-07",
    "name": "Hộp xốp đựng cơm & Ly cà phê dùng 1 lần",
    "category": "other",
    "categoryName": "Rác vô cơ khác (Chôn lấp)",
    "badgeClass": "text-bg-secondary",
    "binColor": "Thùng Màu Xám / Đen",
    "icon": "bi-box-seam",
    "tip": "Đã dính nhiều dầu mỡ thực phẩm, hầu như không thể tái chế kinh tế.",
    "destination": "Nhà máy điện rác hoặc bãi chôn lấp hợp vệ sinh",
    "decomposeTime": "500 - 1000 năm",
    "hazardous": false,
    "instructions": "1. Vét sạch thức ăn thừa bỏ vào thùng hữu cơ.\n2. Xếp chồng hộp gọn gàng.\n3. Cho vào túi rác vô cơ chôn lấp thông thường."
  },
  {
    "id": "waste-08",
    "name": "Túi nilon rách, bẩn dính dầu mỡ",
    "category": "other",
    "categoryName": "Rác vô cơ khác (Chôn lấp)",
    "badgeClass": "text-bg-secondary",
    "binColor": "Thùng Màu Xám / Đen",
    "icon": "bi-bag-x-fill",
    "tip": "Hạn chế sử dụng, chuyển sang túi vải hoặc túi sinh học tự phân hủy.",
    "destination": "Đốt rác phát điện hoặc bãi chôn lấp",
    "decomposeTime": "400 - 500 năm",
    "hazardous": false,
    "instructions": "1. Cột chặt túi lại để không bay vương vãi ra môi trường.\n2. Thải bỏ theo lịch thu gom rác sinh hoạt hàng ngày."
  },
  {
    "id": "waste-09",
    "name": "Bìa carton & Thùng giấy bưu phẩm",
    "category": "recyclable",
    "categoryName": "Rác tái chế",
    "badgeClass": "text-bg-primary",
    "binColor": "Thùng Xanh Dương",
    "icon": "bi-box",
    "tip": "Giữ khô ráo, tháo bỏ băng dính dán trên thùng trước khi gấp gọn.",
    "destination": "Nhà máy sản xuất bột giấy tái chế",
    "decomposeTime": "2 - 5 tháng",
    "hazardous": false,
    "instructions": "1. Rạch băng keo, tháo ghim sắt.\n2. Gấp dẹp thùng carton phẳng phiu thành tệp.\n3. Buộc dây gọn gàng gửi cho xe gom hoặc người thu mua."
  },
  {
    "id": "waste-10",
    "name": "Dược phẩm, thuốc tây hết hạn sử dụng",
    "category": "hazardous",
    "categoryName": "Rác nguy hại",
    "badgeClass": "text-bg-danger",
    "binColor": "Thùng Đỏ Y Tế",
    "icon": "bi-capsule",
    "tip": "Tuyệt đối không xả xuống bồn cầu vì làm ô nhiễm hệ sinh thái nước ngầm.",
    "destination": "Thiêu hủy y tế ở nhiệt độ cao",
    "decomposeTime": "Hóa chất tồn lưu lâu dài",
    "hazardous": true,
    "instructions": "1. Giữ nguyên trong vỉ thuốc hoặc lọ đựng ban đầu.\n2. Cho vào túi zip riêng có dán nhãn 'Thuốc quá hạn'.\n3. Nộp lại tại các nhà thuốc hoặc trạm y tế phường có điểm thu hồi."
  },
  {
    "id": "waste-11",
    "name": "Xương gà, xương cá & Thức ăn thừa",
    "category": "organic",
    "categoryName": "Rác hữu cơ",
    "badgeClass": "text-bg-success",
    "binColor": "Thùng Xanh Lá / Nâu",
    "icon": "bi-egg-fried",
    "tip": "Gạn kiệt nước canh để tránh phát sinh mùi hôi thối và nước rỉ rác.",
    "destination": "Ủ chế phẩm vi sinh hoặc thức ăn chăn nuôi xử lý nhiệt",
    "decomposeTime": "1 - 2 tháng",
    "hazardous": false,
    "instructions": "1. Đổ qua rây lọc tách nước canh.\n2. Chứa trong thùng có nắp đậy kín mùi.\n3. Thải bỏ hàng ngày theo khung giờ thu gom rác hữu cơ."
  },
  {
    "id": "waste-12",
    "name": "Mảnh sành sứ vỡ, gương kính vỡ",
    "category": "other",
    "categoryName": "Rác vô cơ khác (Chôn lấp)",
    "badgeClass": "text-bg-secondary",
    "binColor": "Thùng Màu Xám / Đen",
    "icon": "bi-gem",
    "tip": "Gói thật kỹ bằng bìa carton để bảo vệ an toàn cho công nhân thu gom rác!",
    "destination": "Bãi chôn lấp vật liệu trơ",
    "decomposeTime": "Hàng ngàn năm",
    "hazardous": false,
    "instructions": "1. Dùng báo cũ hoặc xốp bọc quanh các cạnh sắc nhọn.\n2. Cho vào hộp cứng và ghi chú bên ngoài: 'VẬT SẮC NHỌN VỠ CẨN THẬN'.\n3. Để riêng cạnh thùng rác để người thu gom chú ý."
  }
];

// Khởi tạo trạng thái ứng dụng (State)
let danhSachRac = [];
let boLocHienTai = 'all';
let tuKhoaTimKiem = '';

// Khởi chạy khi tài liệu nạp xong
document.addEventListener('DOMContentLoaded', async () => {
  await taiDuLieuRac();
  hienThiDanhSachTheRac();
  khoiTaoCacSuKien();
  khoiTaoNutLenDauTrang();
});

/**
 * 1. TẢI DỮ LIỆU TỪ TỆP JSON (CHƯƠNG 8)
 */
async function taiDuLieuRac() {
  try {
    const phanHoi = await fetch('assets/data/du-lieu-rac.json').catch(() => fetch('assets/data/du-lieu-rac.json'));
    if (phanHoi && phanHoi.ok) {
      danhSachRac = await phanHoi.json();
    } else {
      danhSachRac = [...DU_LIEU_RAC_DU_PHONG];
    }
  } catch (loi) {
    console.warn('Sử dụng dữ liệu nội bộ DU_LIEU_RAC_DU_PHONG:', loi);
    danhSachRac = [...DU_LIEU_RAC_DU_PHONG];
  }
}

/**
 * 2. KẾT XUẤT (RENDER) DANH SÁCH THẺ RÁC VÀO DOM (CHƯƠNG 6 & 9)
 */
function hienThiDanhSachTheRac() {
  const khungChuaTheRac = document.getElementById('wasteGrid');
  const theDemSoLuongRac = document.getElementById('searchCountBadge');
  const hopThongBaoRong = document.getElementById('emptyStateBox');

  if (!khungChuaTheRac) return;

  const tuKhoa = tuKhoaTimKiem.trim().toLowerCase();
  
  // Lọc theo danh mục và từ khóa tìm kiếm
  const danhSachLoc = danhSachRac.filter(vatPham => {
    const khopDanhMuc = (boLocHienTai === 'all') || (vatPham.category === boLocHienTai);
    const khopTuKhoa = vatPham.name.toLowerCase().includes(tuKhoa) || 
                       vatPham.categoryName.toLowerCase().includes(tuKhoa) || 
                       vatPham.tip.toLowerCase().includes(tuKhoa);
    return khopDanhMuc && khopTuKhoa;
  });

  // Cập nhật số lượng tìm thấy
  if (theDemSoLuongRac) {
    theDemSoLuongRac.textContent = `${danhSachLoc.length} vật phẩm`;
  }

  // Xử lý trạng thái rỗng (Empty State)
  if (danhSachLoc.length === 0) {
    khungChuaTheRac.innerHTML = '';
    if (hopThongBaoRong) hopThongBaoRong.classList.remove('d-none');
    return;
  } else {
    if (hopThongBaoRong) hopThongBaoRong.classList.add('d-none');
  }

  // Tạo mã HTML các thẻ rác
  khungChuaTheRac.innerHTML = danhSachLoc.map(vatPham => `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="the-vat-pham-rac p-3 shadow-sm h-100">
        <div class="d-flex align-items-start justify-content-between mb-2">
          <div class="bieu-tuong-vat-pham shadow-sm">
            <i class="bi ${vatPham.icon} text-success"></i>
          </div>
          <span class="badge ${vatPham.badgeClass} rounded-pill">${vatPham.categoryName}</span>
        </div>
        
        <h3 class="h6 fw-bold text-dark mt-2 mb-1 text-truncate" title="${vatPham.name}">${vatPham.name}</h3>
        
        <p class="small text-muted mb-2 flex-grow-1" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${vatPham.tip}
        </p>

        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
          <span class="small fw-semibold text-secondary">
            <i class="bi bi-trash3 me-1"></i>${vatPham.binColor.split('/')[0]}
          </span>
          <button class="btn btn-outline-success btn-sm rounded-pill px-3" onclick="moChiTietRac('${vatPham.id}')">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 3. MỞ MODAL XEM CHI TIẾT VẬT PHẨM
 */
function moChiTietRac(maRac) {
  const vatPham = danhSachRac.find(r => r.id === maRac);
  if (!vatPham) return;

  const modalEl = document.getElementById('wasteDetailModal');
  if (!modalEl) return;

  document.getElementById('modalWasteName').textContent = vatPham.name;
  const badgeEl = document.getElementById('modalWasteBadge');
  badgeEl.className = `badge ${vatPham.badgeClass} rounded-pill fs-6 px-3 py-2`;
  badgeEl.textContent = vatPham.categoryName;
  document.getElementById('modalBinColor').textContent = vatPham.binColor;
  document.getElementById('modalDestination').textContent = vatPham.destination;
  document.getElementById('modalDecompose').textContent = vatPham.decomposeTime;
  document.getElementById('modalInstructions').innerHTML = vatPham.instructions.replace(/\n/g, '<br>');
  document.getElementById('modalTip').textContent = vatPham.tip;

  const hopThoaiModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  hopThoaiModal.show();
}
window.openWasteModal = moChiTietRac;

/**
 * 4. KHỞI TẠO CÁC SỰ KIỆN TƯƠNG TÁC (CHƯƠNG 6)
 */
function khoiTaoCacSuKien() {
  const oNhapTimKiemRac = document.getElementById('searchInput');
  const danhSachNutLocRac = document.querySelectorAll('.nut-loc-danh-muc');
  const oNhapGoiY = document.getElementById('aiWasteInput');
  const nutGoiY = document.getElementById('btnAiAnalyze');

  // Tìm kiếm tức thời khi người dùng gõ phím
  if (oNhapTimKiemRac) {
    oNhapTimKiemRac.addEventListener('input', (suKien) => {
      tuKhoaTimKiem = suKien.target.value;
      hienThiDanhSachTheRac();
    });
  }

  // Lọc theo nút danh mục rác
  danhSachNutLocRac.forEach(nutBam => {
    nutBam.addEventListener('click', () => {
      danhSachNutLocRac.forEach(nutKhac => nutKhac.classList.remove('active'));
      nutBam.classList.add('active');
      boLocHienTai = nutBam.getAttribute('data-filter');
      hienThiDanhSachTheRac();
    });
  });

  // Thẻ từ khóa tìm nhanh
  document.querySelectorAll('.the-tim-nhanh').forEach(theNhanh => {
    theNhanh.addEventListener('click', (suKien) => {
      suKien.preventDefault();
      const giaTri = theNhanh.getAttribute('data-val');
      if (oNhapTimKiemRac) oNhapTimKiemRac.value = giaTri;
      tuKhoaTimKiem = giaTri;
      hienThiDanhSachTheRac();
      const lookupSec = document.getElementById('wasteLookupSection');
      if (lookupSec) lookupSec.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Sự kiện gửi yêu cầu gợi ý phân loại rác
  if (nutGoiY) {
    nutGoiY.addEventListener('click', xuLyGoiYPhanLoai);
  }

  if (oNhapGoiY) {
    oNhapGoiY.addEventListener('keypress', (suKien) => {
      if (suKien.key === 'Enter') {
        xuLyGoiYPhanLoai();
      }
    });
  }

  // Nút gửi đánh giá / phản hồi
  const nutDanhGia = document.getElementById('btnSubmitFeedback');
  if (nutDanhGia) {
    nutDanhGia.addEventListener('click', () => {
      hienThongBaoNhanh('Cảm ơn bạn! Đóng góp phân loại đã được gửi tới điều phối viên.');
      const modalEl = document.getElementById('wasteDetailModal');
      if (modalEl) bootstrap.Modal.getInstance(modalEl).hide();
    });
  }
}

/**
 * 5. XỬ LÝ GỢI Ý PHÂN LOẠI RÁC TỰ ĐỘNG THEO TỪ KHÓA
 */
function xuLyGoiYPhanLoai() {
  const oNhap = document.getElementById('aiWasteInput');
  const hopDangXuLy = document.getElementById('aiLoadingBox');
  const hopKetQua = document.getElementById('aiResultBox');
  const hopBaoLoi = document.getElementById('aiErrorBox');

  if (!oNhap) return;
  const tuKhoa = oNhap.value.trim();
  
  if (!tuKhoa) {
    oNhap.classList.add('is-invalid');
    oNhap.focus();
    return;
  }
  oNhap.classList.remove('is-invalid');

  // Bước 1: Hiển thị trạng thái đang xử lý (Loading)
  if (hopDangXuLy) hopDangXuLy.classList.remove('d-none');
  if (hopKetQua) hopKetQua.classList.add('d-none');
  if (hopBaoLoi) hopBaoLoi.classList.add('d-none');

  // Mô phỏng thời gian tra cứu hệ thống (900ms)
  setTimeout(() => {
    if (hopDangXuLy) hopDangXuLy.classList.add('d-none');
    
    const tuKhoaThuong = tuKhoa.toLowerCase();
    let ketQua = null;

    if (tuKhoaThuong.includes('pin') || tuKhoaThuong.includes('ắc quy') || tuKhoaThuong.includes('đèn') || tuKhoaThuong.includes('thuốc') || tuKhoaThuong.includes('sạc') || tuKhoaThuong.includes('nhiệt kế')) {
      ketQua = {
        name: tuKhoa,
        category: 'hazardous',
        categoryName: 'Rác nguy hại',
        boxClass: 'rac-nguy-hai',
        badgeClass: 'text-bg-danger',
        bin: 'Thùng Màu Đỏ / Trạm thu gom nguy hại TLU',
        confidence: '98.5%',
        reason: 'Vật phẩm có chứa kim loại nặng độc hại (chì, thủy ngân, axit) dễ gây ô nhiễm nguồn nước ngầm và cháy nổ nếu bị ép nén.',
        instructions: 'Bọc kín hai đầu cực, cho vào hộp kín và nộp tại trạm thu gom rác nguy hại, không bỏ vào thùng rác gia đình.'
      };
    } else if (tuKhoaThuong.includes('lon') || tuKhoaThuong.includes('chai') || tuKhoaThuong.includes('giấy') || tuKhoaThuong.includes('bìa') || tuKhoaThuong.includes('nhôm') || tuKhoaThuong.includes('sắt') || tuKhoaThuong.includes('nhựa') || tuKhoaThuong.includes('sách')) {
      ketQua = {
        name: tuKhoa,
        category: 'recyclable',
        categoryName: 'Rác tái chế',
        boxClass: 'rac-tai-che',
        badgeClass: 'text-bg-primary',
        bin: 'Thùng Màu Xanh Dương (Tái chế)',
        confidence: '96.2%',
        reason: 'Vật liệu có giá trị tái sinh cao (nhôm, nhựa PET/HDPE, xenlulo từ giấy) có thể thu hồi tạo ra sản phẩm mới.',
        instructions: 'Làm sạch chất lỏng thừa, ép bẹp để giảm diện tích chứa trước khi cho vào thùng xanh.'
      };
    } else if (tuKhoaThuong.includes('cơm') || tuKhoaThuong.includes('thịt') || tuKhoaThuong.includes('cá') || tuKhoaThuong.includes('rau') || tuKhoaThuong.includes('chuối') || tuKhoaThuong.includes('vỏ') || tuKhoaThuong.includes('bã') || tuKhoaThuong.includes('trái cây')) {
      ketQua = {
        name: tuKhoa,
        category: 'organic',
        categoryName: 'Rác hữu cơ',
        boxClass: 'rac-huu-co',
        badgeClass: 'text-bg-success',
        bin: 'Thùng Màu Xanh Lá / Nâu (Hữu cơ)',
        confidence: '99.1%',
        reason: 'Chất hữu cơ dễ phân hủy sinh học, có khả năng ủ làm phân bón hữu cơ compost hoặc chế biến thức ăn chăn nuôi.',
        instructions: 'Chắt ráo nước canh để tránh phát sinh mùi hôi, cho vào túi rác phân hủy sinh học.'
      };
    } else if (tuKhoaThuong.includes('xốp') || tuKhoaThuong.includes('nilon') || tuKhoaThuong.includes('túi') || tuKhoaThuong.includes('bỉm') || tuKhoaThuong.includes('tã') || tuKhoaThuong.includes('gốm') || tuKhoaThuong.includes('sứ') || tuKhoaThuong.includes('cao su')) {
      ketQua = {
        name: tuKhoa,
        category: 'other',
        categoryName: 'Rác vô cơ khác (Chôn lấp / Không tái chế)',
        boxClass: 'rac-vo-co',
        badgeClass: 'text-bg-secondary',
        bin: 'Thùng Màu Xám / Đen',
        confidence: '89.4%',
        reason: 'Vật phẩm hỗn hợp khó phân hủy, đã dính bẩn hoặc không có đơn vị tái chế kinh tế khả thi.',
        instructions: 'Cho vào bao rác sinh hoạt thông thường chuyển tới khu xử lý đốt rác phát điện hoặc bãi chôn lấp.'
      };
    } else {
      // Trường hợp từ khóa chưa đủ dữ liệu nhận diện
      ketQua = {
        name: tuKhoa,
        isUncertain: true,
        category: 'uncertain',
        categoryName: 'Chưa đủ dữ liệu nhận diện',
        boxClass: 'rac-vo-co',
        badgeClass: 'text-bg-warning text-dark',
        bin: 'Cần xác định thủ công',
        confidence: '34.2% (Thấp)',
        reason: 'Hệ thống chưa đủ dữ liệu phân loại cho từ khóa này trong kho dữ liệu chuẩn.',
        instructions: 'Vui lòng kiểm tra lại tên gọi, chọn thủ công từ danh mục rác hoặc gửi yêu cầu để ban điều phối hỗ trợ.'
      };
    }

    // Hiển thị kết quả vào giao diện
    hienThiKetQuaGoiY(ketQua);
  }, 900);
}

/**
 * 6. HIỂN THỊ KẾT QUẢ GỢI Ý VÀO DOM
 */
function hienThiKetQuaGoiY(duLieuKetQua) {
  const hopKetQua = document.getElementById('aiResultBox');
  if (!hopKetQua) return;

  hopKetQua.className = `hop-ket-qua-goi-y hop-ket-qua-ai p-4 mt-3 ${duLieuKetQua.boxClass}`;

  if (duLieuKetQua.isUncertain) {
    hopKetQua.innerHTML = `
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <div>
          <span class="badge ${duLieuKetQua.badgeClass} rounded-pill fs-6 px-3 py-2 me-2">
            <i class="bi bi-exclamation-diamond-fill me-1"></i>${duLieuKetQua.categoryName}
          </span>
          <span class="badge bg-white text-danger border border-danger-subtle rounded-pill py-2 px-3">
            <i class="bi bi-lightning-charge text-warning me-1"></i>Độ phù hợp: <strong>${duLieuKetQua.confidence}</strong>
          </span>
        </div>
        <div class="small text-muted">
          <i class="bi bi-search me-1"></i>Phương thức: <strong>Phân tích từ khóa ngữ cảnh</strong>
        </div>
      </div>

      <h4 class="h5 fw-bold text-dark mb-2">
        <i class="bi bi-question-circle text-warning me-2"></i>Chưa nhận diện chắc chắn về: "${duLieuKetQua.name}"
      </h4>

      <div class="p-3 bg-white rounded-3 border border-warning-subtle mb-3">
        <p class="text-secondary small mb-2">
          <strong>Lý do:</strong> ${duLieuKetQua.reason}
        </p>
        <p class="text-secondary small mb-0">
          <strong>Khuyến nghị:</strong> ${duLieuKetQua.instructions}
        </p>
      </div>

      <div class="d-flex flex-wrap align-items-center gap-2">
        <button class="btn btn-warning text-dark btn-sm px-3 rounded-pill fw-semibold" onclick="chuyenSuaThuCong('${duLieuKetQua.name}')">
          <i class="bi bi-card-checklist me-1"></i>Chọn loại rác thủ công
        </button>
        <button class="btn btn-outline-secondary btn-sm px-3 rounded-pill" onclick="document.getElementById('aiWasteInput').focus(); document.getElementById('aiWasteInput').select();">
          <i class="bi bi-arrow-repeat me-1"></i>Thử lại với mô tả khác
        </button>
        <button class="btn btn-outline-danger btn-sm px-3 rounded-pill" onclick="baoLoiPhanLoai('${duLieuKetQua.name}')">
          <i class="bi bi-flag me-1"></i>Gửi báo cáo hỗ trợ
        </button>
      </div>
    `;
  } else {
    hopKetQua.innerHTML = `
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <div>
          <span class="badge ${duLieuKetQua.badgeClass} rounded-pill fs-6 px-3 py-2 me-2">
            ${duLieuKetQua.categoryName}
          </span>
          <span class="badge bg-white text-dark border rounded-pill py-2 px-3">
            <i class="bi bi-check-circle-fill text-success me-1"></i>Độ phù hợp: <strong>${duLieuKetQua.confidence}</strong>
          </span>
        </div>
        <div class="small text-muted">
          <i class="bi bi-search me-1"></i>Phương thức: <strong>Đối sánh dữ liệu thông minh</strong>
        </div>
      </div>

      <h4 class="h5 fw-bold text-dark mb-2">
        <i class="bi bi-check2-circle text-success me-2"></i>Đề xuất phân loại cho: "${duLieuKetQua.name}"
      </h4>

      <div class="p-3 bg-white rounded-3 border mb-3">
        <div class="row g-2">
          <div class="col-md-6">
            <span class="text-muted small">Thùng bỏ quy định:</span>
            <p class="fw-bold text-dark mb-1"><i class="bi bi-trash3-fill me-1 text-primary"></i>${duLieuKetQua.bin}</p>
          </div>
          <div class="col-md-6">
            <span class="text-muted small">Cách chuẩn bị:</span>
            <p class="fw-bold text-dark mb-1">${duLieuKetQua.instructions}</p>
          </div>
        </div>
        <div class="mt-2 pt-2 border-top">
          <span class="text-muted small"><strong>Giải thích:</strong> ${duLieuKetQua.reason}</span>
        </div>
      </div>

      <div class="d-flex flex-wrap align-items-center gap-2">
        <button class="btn btn-success btn-sm px-3 rounded-pill" onclick="chapNhanKetQua('${duLieuKetQua.name}', '${duLieuKetQua.categoryName}')">
          <i class="bi bi-check-lg me-1"></i>Chấp nhận kết quả
        </button>
        <button class="btn btn-outline-secondary btn-sm px-3 rounded-pill" onclick="chuyenSuaThuCong('${duLieuKetQua.name}')">
          <i class="bi bi-pencil me-1"></i>Sửa loại rác thủ công
        </button>
        <button class="btn btn-outline-danger btn-sm px-3 rounded-pill" onclick="baoLoiPhanLoai('${duLieuKetQua.name}')">
          <i class="bi bi-flag me-1"></i>Báo lỗi kết quả
        </button>
      </div>
    `;
  }

  hopKetQua.classList.remove('d-none');
}

/**
 * 7. CÁC HÀNH ĐỘNG PHẢN HỒI KẾT QUẢ GỢI Ý
 */
function chapNhanKetQua(tenVatPham, loaiRac) {
  hienThongBaoNhanh(`Đã lưu "${tenVatPham}" vào danh sách phân loại thành công! (+10 Điểm Xanh thưởng 🌱)`);
}
window.acceptAiResult = chapNhanKetQua;
window.chapNhanKetQua = chapNhanKetQua;

function chuyenSuaThuCong(tenVatPham) {
  hienThongBaoNhanh(`Chuyển sang chế độ chỉnh sửa thủ công cho "${tenVatPham}".`);
  const oNhapTimKiemRac = document.getElementById('searchInput');
  if (oNhapTimKiemRac) {
    oNhapTimKiemRac.value = tenVatPham;
    tuKhoaTimKiem = tenVatPham;
    hienThiDanhSachTheRac();
  }
  const lookupSec = document.getElementById('wasteLookupSection');
  if (lookupSec) lookupSec.scrollIntoView({ behavior: 'smooth' });
}
window.triggerManualEdit = chuyenSuaThuCong;
window.chuyenSuaThuCong = chuyenSuaThuCong;

function baoLoiPhanLoai(tenVatPham) {
  hienThongBaoNhanh(`Đã ghi nhận phản hồi cho "${tenVatPham}". Đội ngũ điều phối viên sẽ kiểm tra lại!`);
}
window.reportAiError = baoLoiPhanLoai;
window.baoLoiPhanLoai = baoLoiPhanLoai;

/**
 * 8. HIỂN THỊ THÔNG BÁO TOAST NHANH
 */
function hienThongBaoNhanh(thongDiep) {
  const noiDungThongBao = document.getElementById('toastMessage');
  const toastEl = document.getElementById('feedbackToast');
  if (noiDungThongBao) noiDungThongBao.textContent = thongDiep;
  if (toastEl) {
    const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
    toast.show();
  }
}

/**
 * 9. NÚT CUỘN LÊN ĐẦU TRANG (BACK TO TOP)
 */
function khoiTaoNutLenDauTrang() {
  const nutLenDau = document.getElementById('nutCuonLenDau');
  if (!nutLenDau) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      nutLenDau.style.display = 'block';
    } else {
      nutLenDau.style.display = 'none';
    }
  });

  nutLenDau.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
