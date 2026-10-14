/**
 * GreenSort - Hệ thống phân loại & điều phối thu gom thông minh
 * Tệp JavaScript xử lý tương tác DOM, Lọc dữ liệu, Tra cứu và Mô phỏng AI
 * Học phần: CSE122 - Phát triển ứng dụng Web cơ bản
 */

// Dữ liệu rác mặc định dự phòng (nếu không fetch được JSON do bảo mật local file://)
const FALLBACK_WASTE_DATA = [
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
    "tip": "CỰC KỲ NGUY HIỂM: Chứa chì, thủy ngân, cadimi. Tuyệt đối không vứt chung!",
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
    "instructions": "1. Rạch băng keo, tháo ghim sắt.\n2. Gấp dẹp thùng carton phẳng phiu thành tệp.\n3. Buộc dây gọn gàng gửi cho người thu mua ve chai hoặc xe gom."
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
let wasteList = [];
let currentFilter = 'all';
let currentSearchQuery = '';

// DOM Elements
const wasteGridContainer = document.getElementById('wasteGrid');
const searchInput = document.getElementById('searchInput');
const searchCountBadge = document.getElementById('searchCountBadge');
const emptyStateBox = document.getElementById('emptyStateBox');
const filterButtons = document.querySelectorAll('.filter-btn');

// AI Elements
const aiInput = document.getElementById('aiWasteInput');
const btnAiAnalyze = document.getElementById('btnAiAnalyze');
const aiLoadingBox = document.getElementById('aiLoadingBox');
const aiResultBox = document.getElementById('aiResultBox');
const aiErrorBox = document.getElementById('aiErrorBox');

// Modal Elements
const wasteDetailModal = new bootstrap.Modal(document.getElementById('wasteDetailModal'));
const modalWasteName = document.getElementById('modalWasteName');
const modalWasteBadge = document.getElementById('modalWasteBadge');
const modalBinColor = document.getElementById('modalBinColor');
const modalDestination = document.getElementById('modalDestination');
const modalDecompose = document.getElementById('modalDecompose');
const modalInstructions = document.getElementById('modalInstructions');
const modalTip = document.getElementById('modalTip');

// Feedback Toast
const liveToast = new bootstrap.Toast(document.getElementById('feedbackToast'));
const toastMessage = document.getElementById('toastMessage');

/**
 * 1. KHỞI CHẠY KHI TẢI TRANG
 */
document.addEventListener('DOMContentLoaded', async () => {
  await loadWasteData();
  renderWasteCards();
  initEventListeners();
  initBackToTop();
});

/**
 * 2. TẢI DỮ LIỆU TỪ JSON HOẶC DỰ PHÒNG
 */
async function loadWasteData() {
  try {
    const response = await fetch('assets/data/waste-data.json');
    if (response.ok) {
      wasteList = await response.json();
    } else {
      wasteList = [...FALLBACK_WASTE_DATA];
    }
  } catch (error) {
    // Trường hợp mở trực tiếp file:// trong trình duyệt không dùng local server
    console.warn('Sử dụng dữ liệu nội bộ FALLBACK_WASTE_DATA do trình duyệt chặn fetch file://:', error);
    wasteList = [...FALLBACK_WASTE_DATA];
  }
}

/**
 * 3. KẾT XUẤT (RENDER) DANH SÁCH THẺ RÁC VÀO DOM
 */
function renderWasteCards() {
  const query = currentSearchQuery.trim().toLowerCase();
  
  // Lọc theo danh mục và từ khóa tìm kiếm
  const filteredList = wasteList.filter(item => {
    const matchCategory = (currentFilter === 'all') || (item.category === currentFilter);
    const matchSearch = item.name.toLowerCase().includes(query) || 
                        item.categoryName.toLowerCase().includes(query) || 
                        item.tip.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  // Cập nhật số lượng tìm thấy
  searchCountBadge.textContent = `${filteredList.length} vật phẩm`;

  // Xử lý trạng thái rỗng (Empty State)
  if (filteredList.length === 0) {
    wasteGridContainer.innerHTML = '';
    emptyStateBox.classList.remove('d-none');
    return;
  } else {
    emptyStateBox.classList.add('d-none');
  }

  // Tạo HTML các thẻ rác
  wasteGridContainer.innerHTML = filteredList.map(item => `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="waste-item-card p-3 shadow-sm h-100">
        <div class="d-flex align-items-start justify-content-between mb-2">
          <div class="waste-card-icon shadow-sm">
            <i class="bi ${item.icon} text-success"></i>
          </div>
          <span class="badge ${item.badgeClass} rounded-pill">${item.categoryName}</span>
        </div>
        
        <h3 class="h6 fw-bold text-dark mt-2 mb-1 text-truncate" title="${item.name}">${item.name}</h3>
        
        <p class="small text-muted mb-2 flex-grow-1" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${item.tip}
        </p>

        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
          <span class="small fw-semibold text-secondary">
            <i class="bi bi-trash3 me-1"></i>${item.binColor.split('/')[0]}
          </span>
          <button class="btn btn-outline-success btn-sm rounded-pill px-3" onclick="openWasteModal('${item.id}')">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 4. MỞ MODAL XEM CHI TIẾT
 */
window.openWasteModal = function(id) {
  const item = wasteList.find(w => w.id === id);
  if (!item) return;

  modalWasteName.textContent = item.name;
  modalWasteBadge.className = `badge ${item.badgeClass} rounded-pill fs-6 px-3 py-2`;
  modalWasteBadge.textContent = item.categoryName;
  modalBinColor.textContent = item.binColor;
  modalDestination.textContent = item.destination;
  modalDecompose.textContent = item.decomposeTime;
  modalInstructions.innerHTML = item.instructions.replace(/\n/g, '<br>');
  modalTip.textContent = item.tip;

  wasteDetailModal.show();
};

/**
 * 5. KHỞI TẠO CÁC SỰ KIỆN TƯƠNG TÁC (EVENT LISTENERS)
 */
function initEventListeners() {
  // Tìm kiếm tức thời (Real-time input search)
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    renderWasteCards();
  });

  // Lọc theo Tab Category
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderWasteCards();
    });
  });

  // Quick Tags ở Hero
  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.preventDefault();
      const val = tag.getAttribute('data-val');
      searchInput.value = val;
      currentSearchQuery = val;
      renderWasteCards();
      document.getElementById('wasteLookupSection').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // AI-1 WASTE CLASSIFIER SIMULATOR (Mô phỏng trải nghiệm AI)
  btnAiAnalyze.addEventListener('click', handleAiAnalyze);

  // Nhấn Enter trong ô input AI
  aiInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleAiAnalyze();
    }
  });

  // Nút gửi feedback/phản hồi
  const feedbackBtn = document.getElementById('btnSubmitFeedback');
  if (feedbackBtn) {
    feedbackBtn.addEventListener('click', () => {
      showToast('Cảm ơn bạn! Đóng góp phân loại đã được gửi tới điều phối viên.');
      wasteDetailModal.hide();
    });
  }
}

/**
 * 6. XỬ LÝ MÔ PHỎNG AI-1: PHÂN LOẠI RÁC (WASTE CLASSIFIER)
 * Áp dụng đúng nguyên tắc BTL-05: Nhập -> Đang xử lý -> Kết quả -> Lý do -> Người dùng kiểm soát
 */
function handleAiAnalyze() {
  const query = aiInput.value.trim();
  
  if (!query) {
    aiInput.classList.add('is-invalid');
    aiInput.focus();
    return;
  }
  aiInput.classList.remove('is-invalid');

  // Bước 1: Hiển thị Skeleton/Loading
  aiLoadingBox.classList.remove('d-none');
  aiResultBox.classList.add('d-none');
  aiErrorBox.classList.add('d-none');

  // Mô phỏng độ trễ mạng AI suy luận (1 giây)
  setTimeout(() => {
    aiLoadingBox.classList.add('d-none');
    
    // Thuật toán Rule-based NLP mô phỏng AI thông minh
    const qLower = query.toLowerCase();
    let result = null;

    if (qLower.includes('pin') || qLower.includes('ắc quy') || qLower.includes('đèn') || qLower.includes('thuốc') || qLower.includes('sạc') || qLower.includes('nhiệt kế')) {
      result = {
        name: query,
        category: 'hazardous',
        categoryName: 'Rác nguy hại',
        boxClass: 'hazardous',
        badgeClass: 'text-bg-danger',
        bin: 'Thùng Màu Đỏ / Trạm thu gom nguy hại TLU',
        confidence: '98.5%',
        reason: 'Vật phẩm có chứa kim loại nặng độc hại (chì, thủy ngân, axit) dễ gây ô nhiễm nguồn nước ngầm và cháy nổ nếu bị ép nén.',
        instructions: 'Bọc kín hai đầu cực, cho vào hộp kín và nộp tại trạm thu gom rác nguy hại, không bỏ vào thùng rác gia đình.'
      };
    } else if (qLower.includes('lon') || qLower.includes('chai') || qLower.includes('giấy') || qLower.includes('bìa') || qLower.includes('nhôm') || qLower.includes('sắt') || qLower.includes('nhựa') || qLower.includes('sách')) {
      result = {
        name: query,
        category: 'recyclable',
        categoryName: 'Rác tái chế',
        boxClass: 'recyclable',
        badgeClass: 'text-bg-primary',
        bin: 'Thùng Màu Xanh Dương (Tái chế)',
        confidence: '96.2%',
        reason: 'Vật liệu có giá trị tái sinh cao (nhôm, nhựa PET/HDPE, cellulose từ giấy) có thể thu hồi tạo ra sản phẩm mới.',
        instructions: 'Làm sạch chất lỏng thừa, ép bẹp để giảm diện tích chứa trước khi cho vào thùng xanh.'
      };
    } else if (qLower.includes('cơm') || qLower.includes('thịt') || qLower.includes('cá') || qLower.includes('rau') || qLower.includes('chuối') || qLower.includes('vỏ') || qLower.includes('bã') || qLower.includes('trái cây')) {
      result = {
        name: query,
        category: 'organic',
        categoryName: 'Rác hữu cơ',
        boxClass: 'organic',
        badgeClass: 'text-bg-success',
        bin: 'Thùng Màu Xanh Lá / Nâu (Hữu cơ)',
        confidence: '99.1%',
        reason: 'Chất hữu cơ dễ phân hủy sinh học, có khả năng ủ làm phân bón hữu cơ compost hoặc chế biến thức ăn chăn nuôi.',
        instructions: 'Chắt ráo nước canh để tránh phát sinh mùi hôi, cho vào túi rác phân hủy sinh học.'
      };
    } else {
      // Trường hợp rác vô cơ chôn lấp khác hoặc vật phẩm chung
      result = {
        name: query,
        category: 'other',
        categoryName: 'Rác vô cơ khác (Chôn lấp / Không tái chế)',
        boxClass: 'other',
        badgeClass: 'text-bg-secondary',
        bin: 'Thùng Màu Xám / Đen',
        confidence: '89.4%',
        reason: 'Vật phẩm hỗn hợp khó phân hủy, đã dính bẩn hoặc không có đơn vị tái chế kinh tế khả thi.',
        instructions: 'Cho vào bao rác sinh hoạt thông thường chuyển tới khu xử lý đốt rác phát điện hoặc bãi chôn lấp.'
      };
    }

    // Hiển thị kết quả AI vào DOM
    renderAiResult(result);
  }, 900);
}

/**
 * 7. RENDER KẾT QUẢ AI VÀ TƯƠNG TÁC KIỂM SOÁT
 */
function renderAiResult(data) {
  aiResultBox.className = `ai-result-box p-4 mt-3 ${data.boxClass}`;
  aiResultBox.innerHTML = `
    <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
      <div>
        <span class="badge ${data.badgeClass} rounded-pill fs-6 px-3 py-2 me-2">
          ${data.categoryName}
        </span>
        <span class="badge bg-white text-dark border rounded-pill py-2 px-3">
          <i class="bi bi-cpu text-success me-1"></i>Độ tin cậy: <strong>${data.confidence}</strong>
        </span>
      </div>
      <div class="small text-muted">
        <i class="bi bi-clock-history me-1"></i>Mô hình: <strong>GreenSort-v2.5 (Vision & NLP)</strong>
      </div>
    </div>

    <h4 class="h5 fw-bold text-dark mb-2">
      <i class="bi bi-check2-circle text-success me-2"></i>Đề xuất cho: "${data.name}"
    </h4>

    <div class="p-3 bg-white rounded-3 border mb-3">
      <div class="row g-2">
        <div class="col-md-6">
          <span class="text-muted small">Thùng bỏ quy định:</span>
          <p class="fw-bold text-dark mb-1"><i class="bi bi-trash3-fill me-1 text-primary"></i>${data.bin}</p>
        </div>
        <div class="col-md-6">
          <span class="text-muted small">Cách chuẩn bị:</span>
          <p class="fw-bold text-dark mb-1">${data.instructions}</p>
        </div>
      </div>
      <div class="mt-2 pt-2 border-top">
        <span class="text-muted small"><strong>Giải thích của AI:</strong> ${data.reason}</span>
      </div>
    </div>

    <!-- Người dùng kiểm soát (User Control theo BTL-05) -->
    <div class="d-flex flex-wrap align-items-center gap-2">
      <button class="btn btn-success btn-sm px-3 rounded-pill" onclick="acceptAiResult('${data.name}', '${data.categoryName}')">
        <i class="bi bi-check-lg me-1"></i>Chấp nhận kết quả
      </button>
      <button class="btn btn-outline-secondary btn-sm px-3 rounded-pill" onclick="triggerManualEdit('${data.name}')">
        <i class="bi bi-pencil me-1"></i>Sửa loại rác thủ công
      </button>
      <button class="btn btn-outline-danger btn-sm px-3 rounded-pill" onclick="reportAiError('${data.name}')">
        <i class="bi bi-flag me-1"></i>Báo lỗi phân loại
      </button>
    </div>
  `;

  aiResultBox.classList.remove('d-none');
}

/**
 * 8. CÁC HÀNH ĐỘNG KIỂM SOÁT NGƯỜI DÙNG KHI AI ĐƯA RA KẾT QUẢ
 */
window.acceptAiResult = function(name, category) {
  showToast(`Đã lưu "${name}" vào lịch sử phân loại thành công! (+10 Điểm Xanh thưởng 🌱)`);
};

window.triggerManualEdit = function(name) {
  showToast(`Chuyển sang chế độ chỉnh sửa thủ công cho "${name}".`);
  searchInput.value = name;
  currentSearchQuery = name;
  renderWasteCards();
  document.getElementById('wasteLookupSection').scrollIntoView({ behavior: 'smooth' });
};

window.reportAiError = function(name) {
  showToast(`Đã ghi nhận báo cáo lỗi cho "${name}". Đội ngũ điều phối viên sẽ kiểm tra lại!`);
};

/**
 * 9. TOAST THÔNG BÁO TƯƠNG TÁC
 */
function showToast(message) {
  toastMessage.textContent = message;
  liveToast.show();
}

/**
 * 10. NÚT BACK TO TOP
 */
function initBackToTop() {
  const btn = document.getElementById('btnBackToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
