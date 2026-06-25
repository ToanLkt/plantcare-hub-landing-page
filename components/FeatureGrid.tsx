'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const personalFeatures = [
  {
    id: 'diagnosis',
    title: 'Chẩn đoán bệnh bằng AI',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
      </svg>
    ),
    description: 'Chụp ảnh cây và nhận kết quả nhận diện bệnh cùng hướng dẫn xử lý phù hợp.',
  },
  {
    id: 'calendar',
    title: 'Lịch chăm sóc thông minh',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    description: 'Tự động nhắc tưới nước và bón phân theo nhu cầu của từng loại cây.',
  },
  {
    id: 'diary',
    title: 'Nhật ký phát triển',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>
    ),
    description: 'Lưu lại hình ảnh và theo dõi sự phát triển của cây theo thời gian.',
  },
  {
    id: 'library',
    title: 'Thư viện cây cá nhân',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
    description: 'Quản lý toàn bộ cây đang trồng trong một nơi duy nhất.',
  },
];

const gardenFeatures = [
  {
    id: 'zones',
    title: 'Quản lý theo lô và khu vực',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M3 15h18"/>
        <path d="M9 3v18"/>
        <path d="M15 3v18"/>
      </svg>
    ),
    description: 'Phân chia cây theo khu vực hoặc lô để quản lý dễ dàng với số lượng lớn.',
  },
  {
    id: 'materials',
    title: 'Quản lý vật tư',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7.5 4.27 9 5.15"/>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
        <path d="m3.3 7 8.7 5 8.7-5"/>
        <path d="M12 22V12"/>
      </svg>
    ),
    description: 'Theo dõi đất trồng, phân bón, dụng cụ và vật tư sử dụng trong vườn.',
  },
  {
    id: 'dashboard',
    title: 'Dashboard tổng quan',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M18 17V9"/>
        <path d="M13 17V5"/>
        <path d="M8 17v-3"/>
      </svg>
    ),
    description: 'Theo dõi tình trạng toàn vườn, công việc cần thực hiện và các chỉ số quan trọng.',
  },
];

const featureScreens = {
  diagnosis: {
    gradient: 'from-emerald-400/10 to-teal-600/10',
    content: (
      <div className="h-full w-full overflow-hidden relative">
        <img 
          src="/images/diagnosis-screen.svg" 
          alt="Chẩn đoán bệnh bằng AI" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    ),
  },
  calendar: {
    gradient: 'from-emerald-500/10 to-teal-600/10',
    content: (
      <div className="h-full w-full overflow-hidden relative">
        <img 
          src="/images/calendar-screen.png" 
          alt="Lịch chăm sóc thông minh" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    ),
  },
  diary: {
    gradient: 'from-amber-400/10 to-orange-500/10',
    content: (
      <div className="h-full w-full overflow-hidden relative">
        <img 
          src="/images/diary-screen.svg" 
          alt="Nhật ký phát triển" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    ),
  },
  library: {
    gradient: 'from-green-400/10 to-emerald-500/10',
    content: (
      <div className="h-full w-full overflow-hidden relative">
        <img 
          src="/images/library-screen.svg" 
          alt="Thư viện cây cá nhân" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    ),
  },
  zones: {
    gradient: 'from-violet-400/10 to-purple-500/10',
    content: (
      <div className="h-full w-full overflow-hidden relative">
        <img 
          src="/images/zones-screen.svg" 
          alt="Quản lý theo lô và khu vực" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    ),
  },
  materials: {
    gradient: 'from-slate-400/10 to-gray-500/10',
    content: (
      <div className="h-full w-full overflow-hidden relative">
        <img 
          src="/images/materials-screen.svg" 
          alt="Quản lý vật tư" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    ),
  },
  dashboard: {
    gradient: 'from-pink-400/10 to-rose-500/10',
    content: (
      <div className="h-full w-full overflow-hidden relative">
        <img 
          src="/images/dashboard-screen.svg" 
          alt="Dashboard tổng quan" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    ),
  },
};

export function FeatureGrid() {
  const [activePersonal, setActivePersonal] = useState('diagnosis');
  const [activeGarden, setActiveGarden] = useState('zones');

  const allFeatures = [...personalFeatures, ...gardenFeatures];
  const activeFeature = allFeatures.find(f => f.id === activePersonal || f.id === activeGarden) || personalFeatures[0];
  const activeScreen = featureScreens[activeFeature.id as keyof typeof featureScreens];

  return (
    <section id="features" className="relative w-full overflow-hidden bg-white pt-20 lg:pt-32 pb-20 lg:pb-32 scroll-mt-20 lg:scroll-mt-24">
      <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-14 xl:px-16">
        {/* Section Header - Template Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-emerald-950">
            Tính năng nổi bật
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            PlantCare Hub giúp bạn chăm sóc cây thông minh hơn với AI, lịch chăm sóc tự động và công cụ quản lý vườn toàn diện.
          </p>
        </motion.div>

        {/* Main Content - Template Style */}
        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Accordion List */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%]"
          >
            {/* Personal Mode */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-bold text-foreground">Personal Mode</h3>
              </div>
              <div className="border-b border-gray-200">
                {personalFeatures.map((feature) => (
                  <motion.div
                    key={feature.id}
                    initial={false}
                    className={`py-4 cursor-pointer transition-colors ${
                      activePersonal === feature.id
                        ? 'bg-emerald-50/50 -mx-4 px-4'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActivePersonal(activePersonal === feature.id ? null : feature.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                        activePersonal === feature.id
                          ? 'bg-emerald-500 text-white'
                          : 'text-gray-500'
                      }`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${
                          activePersonal === feature.id
                            ? 'text-emerald-700'
                            : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h4>
                      </div>
                      <motion.svg
                        className={`w-4 h-4 ${activePersonal === feature.id ? 'text-emerald-500' : 'text-gray-400'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        animate={{ rotate: activePersonal === feature.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </motion.svg>
                    </div>
                    <AnimatePresence>
                      {activePersonal === feature.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-500 leading-relaxed pl-14 pt-2">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Garden Mode */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-bold text-foreground">Garden Mode</h3>
              </div>
              <div className="border-b border-gray-200">
                {gardenFeatures.map((feature) => (
                  <motion.div
                    key={feature.id}
                    initial={false}
                    className={`py-4 cursor-pointer transition-colors ${
                      activeGarden === feature.id
                        ? 'bg-emerald-50/50 -mx-4 px-4'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveGarden(activeGarden === feature.id ? null : feature.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                        activeGarden === feature.id
                          ? 'bg-emerald-500 text-white'
                          : 'text-gray-500'
                      }`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${
                          activeGarden === feature.id
                            ? 'text-emerald-700'
                            : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h4>
                      </div>
                      <motion.svg
                        className={`w-4 h-4 ${activeGarden === feature.id ? 'text-emerald-500' : 'text-gray-400'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        animate={{ rotate: activeGarden === feature.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </motion.svg>
                    </div>
                    <AnimatePresence>
                      {activeGarden === feature.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-500 leading-relaxed pl-14 pt-2">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[55%] flex justify-center lg:sticky lg:top-32"
          >
            <div className="relative">
              {/* Phone Frame - Clean Realistic iPhone */}
              <div className="relative mx-auto" style={{ width: '290px' }}>
                {/* Subtle glow behind phone */}
                <div className="absolute -inset-10 bg-gradient-to-b from-emerald-100/40 via-transparent to-teal-100/30 rounded-full blur-2xl" />
                
                {/* Phone body - ultra thin continuous frame */}
                <div 
                  className="relative rounded-[34px] p-[2.5px]"
                  style={{
                    background: 'linear-gradient(145deg, #b0b4b8 0%, #8a8e92 50%, #b0b4b8 100%)',
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  {/* Side buttons */}
                  <div className="absolute -left-[2.5px] top-[90px] w-[2.5px] h-[26px] rounded-l-sm" style={{ background: 'linear-gradient(90deg, #8a8e92, #b0b4b8)' }} />
                  <div className="absolute -left-[2.5px] top-[122px] w-[2.5px] h-[26px] rounded-l-sm" style={{ background: 'linear-gradient(90deg, #8a8e92, #b0b4b8)' }} />
                  <div className="absolute -left-[2.5px] top-[62px] w-[2.5px] h-[18px] rounded-l-sm" style={{ background: 'linear-gradient(90deg, #8a8e92, #b0b4b8)' }} />
                  <div className="absolute -right-[2.5px] top-[115px] w-[2.5px] h-[40px] rounded-r-sm" style={{ background: 'linear-gradient(270deg, #8a8e92, #b0b4b8)' }} />
                  
                  {/* Inner screen - no extra black bars */}
                  <div className="rounded-[31.5px] overflow-hidden bg-black relative">
                    {/* Dynamic Island overlay */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-[80px] h-[20px] bg-black rounded-full pointer-events-none" />
                    
                    {/* Full screen content */}
                    <div className="bg-[#f8fbf7] h-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeFeature.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="h-[520px] overflow-hidden pt-4">
                            {activeScreen.content}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      {/* Home indicator - floating at bottom */}
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 w-[80px] h-[3px] bg-gray-600 rounded-full pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
