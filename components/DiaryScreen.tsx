'use client';

export default function DiaryScreen() {
  const photoCards = [
    { date: '05/06/2026', growth: 'Tốt lắm!', img: '/images/diary-plant-4.png' },
    { date: '22/05/2026', growth: '+18cm', img: '/images/diary-plant-3.png' },
    { date: '10/05/2026', growth: '+20cm', img: '/images/diary-plant-2.png' },
    { date: '22/04/2026', growth: 'Đã lớn!', img: '/images/diary-plant-1.png' },
    { date: '18/03/2026', growth: '+15cm', img: '/images/diary-plant-4.png' },
    { date: '20/02/2026', growth: '+10cm', img: '/images/diary-plant-3.png' },
    { date: '15/01/2026', growth: '+5cm', img: '/images/diary-plant-2.png' },
    { date: '02/01/2026', growth: 'Mới trồng', img: '/images/diary-plant-1.png' },
    { date: '28/12/2025', growth: 'Bắt đầu', img: '/images/diary-plant-5.png' },
    { date: '10/12/2025', growth: 'Mới đem về', img: '/images/diary-plant-6.png' },
  ];

  return (
    <div className="w-full h-full bg-[#f8fbf7] overflow-hidden">
      {/* Header */}
      <div 
        className="px-5 pt-10 pb-4"
        style={{ background: 'linear-gradient(180deg, #16a34a 0%, #15803d 100%)' }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-white">Nhật ký phát triển</h1>
            <p className="text-[11px] text-white/85 mt-0.5">Cây kim tiền - 6 tháng</p>
          </div>
          <div className="w-9 h-7 rounded-lg bg-white/25 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">+</span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="mx-4 mt-3 p-3.5 bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-around">
          <div className="text-center">
            <p className="text-base font-bold text-emerald-600">32</p>
            <p className="text-[9px] text-gray-500 mt-0.5">Ngày theo dõi</p>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div className="text-center">
            <p className="text-base font-bold text-emerald-600">10</p>
            <p className="text-[9px] text-gray-500 mt-0.5">Hình ảnh</p>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div className="text-center">
            <p className="text-base font-bold text-emerald-600">+25cm</p>
            <p className="text-[9px] text-gray-500 mt-0.5">Chiều cao</p>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex items-center justify-between mx-5 mt-4">
        <h2 className="text-xs font-semibold text-gray-700">Gần đây</h2>
        <span className="text-[10px] text-emerald-600">Xem tất cả</span>
      </div>

      {/* Photo Grid - Row 1 */}
      <div className="flex gap-2 mx-4 mt-2">
        {photoCards.slice(0, 2).map((card, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative h-[88px]">
              <img
                src={card.img}
                alt="Cây kim tiền"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-t-xl" />
            </div>
            <div className="px-2 py-2 text-center">
              <p className="text-[9px] text-gray-500">{card.date}</p>
              <p className="text-[9px] text-emerald-600 font-medium mt-0.5">{card.growth}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 2 */}
      <div className="flex items-center justify-between mx-5 mt-3">
        <h2 className="text-xs font-semibold text-gray-700">Tháng trước</h2>
      </div>

      {/* Photo Grid - Row 2 */}
      <div className="flex gap-2 mx-4 mt-2">
        {photoCards.slice(2, 4).map((card, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative h-[88px]">
              <img
                src={card.img}
                alt="Cây kim tiền"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-t-xl" />
            </div>
            <div className="px-2 py-2 text-center">
              <p className="text-[9px] text-gray-500">{card.date}</p>
              <p className="text-[9px] text-emerald-600 font-medium mt-0.5">{card.growth}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 3 */}
      <div className="flex items-center justify-between mx-5 mt-3">
        <h2 className="text-xs font-semibold text-gray-700">Mới bắt đầu</h2>
      </div>

      {/* Photo Grid - Row 3 */}
      <div className="flex gap-2 mx-4 mt-2">
        {photoCards.slice(4, 6).map((card, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative h-[88px]">
              <img
                src={card.img}
                alt="Cây kim tiền"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-t-xl" />
            </div>
            <div className="px-2 py-2 text-center">
              <p className="text-[9px] text-gray-500">{card.date}</p>
              <p className="text-[9px] text-emerald-600 font-medium mt-0.5">{card.growth}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Section 4 */}
      <div className="flex items-center justify-between mx-5 mt-3">
        <h2 className="text-xs font-semibold text-gray-700">Lịch sử</h2>
      </div>

      {/* Photo Grid - Row 4 */}
      <div className="flex gap-2 mx-4 mt-2">
        {photoCards.slice(6, 9).map((card, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative h-[88px]">
              <img
                src={card.img}
                alt="Cây kim tiền"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-t-xl" />
            </div>
            <div className="px-2 py-2 text-center">
              <p className="text-[9px] text-gray-500">{card.date}</p>
              <p className="text-[9px] text-emerald-600 font-medium mt-0.5">{card.growth}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Photo Grid - Row 5 */}
      <div className="flex gap-2 mx-4 mt-2">
        {photoCards.slice(9, 10).map((card, i) => (
          <div key={i} className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative h-[88px]">
              <img
                src={card.img}
                alt="Cây kim tiền"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-t-xl" />
            </div>
            <div className="px-2 py-2 text-center">
              <p className="text-[9px] text-gray-500">{card.date}</p>
              <p className="text-[9px] text-emerald-600 font-medium mt-0.5">{card.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
