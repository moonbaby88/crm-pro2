import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { 
  Server, 
  Phone, 
  Monitor, 
  ShieldCheck, 
  LayoutDashboard, 
  Globe, 
  Headphones, 
  CheckCircle2,
  ChevronDown,
  Layers,
  Box,
  Zap,
  Lock,
  BarChart3,
  Cpu,
  ArrowRight
} from "lucide-react";
import { GlassCard, SectionTitle } from "./components/UI";
import { useRef, RefObject, useState, useEffect } from "react";
import { translations, getComplexSteps, getModules, getModule7 } from "./data";

const SpectraNoiseBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#05050a]">
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 80, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-indigo-600/10 blur-[100px] mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, 30, -80, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[40%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-purple-600/5 blur-[100px] mix-blend-screen"
      />
    </div>
  );
};

export default function App() {
  const complexRef = useRef<HTMLDivElement>(null);
  const modularRef = useRef<HTMLDivElement>(null);
  
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  const [lang, setLang] = useState<'ru' | 'en'>('en');

  useEffect(() => {
    const userLang = navigator.language.toLowerCase();
    // Check if it's a CIS country language (ru, be, kk, uk, uz)
    if (userLang.startsWith('ru') || userLang.startsWith('be') || userLang.startsWith('kk') || userLang.startsWith('uk') || userLang.startsWith('uz')) {
      setLang('ru');
    } else {
      setLang('en');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];
  const complexSteps = getComplexSteps(lang);
  const modules = getModules(lang);
  const module7 = getModule7(lang);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollTo = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SpectraNoiseBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        className="fixed top-4 left-4 right-4 md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-5xl z-50"
      >
        <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4 bg-white/[0.05] backdrop-blur-2xl border border-white/[0.1] rounded-2xl md:rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-xl md:rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="text-white w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
            </div>
            <span className="text-lg md:text-xl font-display font-bold tracking-tight text-white">CRM <span className="text-blue-500">Pro</span></span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollTo(complexRef)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">{t.nav.complex}</button>
              <button onClick={() => scrollTo(modularRef)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">{t.nav.modular}</button>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <button 
                onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
                className="flex items-center gap-1.5 px-2 py-1.5 md:px-3 md:py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all text-xs md:text-sm font-medium"
              >
                <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="uppercase">{lang}</span>
              </button>
              <button className="px-4 py-2 md:px-6 md:py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl md:rounded-full text-xs md:text-sm font-medium transition-all backdrop-blur-md">
                {t.nav.contact}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-32 pb-16 md:pb-20 px-6 min-h-[100svh] md:min-h-[90vh] flex flex-col justify-start md:justify-center">
        <div className="max-w-6xl mx-auto text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[32px] sm:text-[37px] text-center leading-[1.1] font-display font-black text-white mb-5 md:mb-8 tracking-tight md:whitespace-nowrap"
          >
            {t.hero.title1} <br className="md:hidden" />
            <span className="text-blue-500 uppercase block mt-2 md:inline md:mt-0">{t.hero.title2}</span>
            {" "}
            <span className="text-blue-500 uppercase block md:inline">{t.hero.title3}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[13px] md:text-[15px] italic text-slate-400 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl shadow-black/50"
          >
            <p className="text-sm md:text-base text-slate-300 mb-6 md:mb-8 font-medium text-center">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch md:items-center justify-center gap-4">
              <button 
                onClick={() => scrollTo(complexRef)}
                className="flex-1 sm:flex-none px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-sm md:text-base transition-all shadow-lg shadow-blue-600/20"
              >
                {t.hero.btnComplex}
              </button>
              <button 
                onClick={() => scrollTo(modularRef)}
                className="flex-1 sm:flex-none px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white rounded-2xl font-bold text-sm md:text-base transition-all"
              >
                {t.hero.btnModular}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Section */}
      <section ref={complexRef} className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title={t.complex.title} 
            subtitle={t.complex.subtitle}
          />

          <div className="max-w-3xl mx-auto relative pl-6 sm:pl-12 mt-12">
            {/* Dashed line */}
            <div className="absolute left-[11px] sm:left-[23px] top-8 bottom-8 w-[2px] border-l-2 border-dashed border-slate-800" />

            <div className="space-y-4 sm:space-y-6">
              {complexSteps.map((step) => {
                const isExpanded = expandedStep === step.id;
                const Icon = step.icon;

                return (
                  <div key={step.id} className="relative group">
                    {/* Node on the dashed line */}
                    <div 
                      className={`absolute -left-6 sm:-left-12 top-4 sm:top-5 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[10px] sm:text-xs font-medium transition-all duration-300 z-10 ${
                        isExpanded 
                          ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] border-none' 
                          : 'bg-[#0a0f1c] border border-slate-800 text-slate-500 group-hover:border-slate-600 group-hover:text-slate-300'
                      }`}
                    >
                      {step.id < 10 ? `0${step.id}` : step.id}
                    </div>

                    {/* Card */}
                    <div className={`overflow-hidden transition-all duration-300 rounded-2xl ${
                      isExpanded 
                        ? 'bg-slate-900/40 border border-blue-500/20 shadow-lg shadow-blue-900/10' 
                        : 'bg-transparent border border-transparent hover:bg-slate-900/20 hover:border-slate-800/50'
                    }`}>
                      <div 
                        className="p-4 sm:p-5 cursor-pointer flex items-start sm:items-center justify-between gap-4 transition-colors"
                        onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-base sm:text-lg font-medium transition-colors mb-1 ${
                            isExpanded ? 'text-blue-400' : 'text-slate-200 group-hover:text-white'
                          }`}>
                            {step.title}
                          </h3>
                          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                            {step.shortDesc}
                          </p>
                        </div>
                        
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 mt-1 sm:mt-0 ${
                          isExpanded 
                            ? 'bg-blue-500/10 text-blue-400 rotate-180' 
                            : 'bg-slate-800/50 text-slate-500 group-hover:bg-slate-800 group-hover:text-slate-300'
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 border-t border-slate-800/50 relative overflow-hidden">
                              <div className="relative z-10 text-sm text-slate-400 leading-relaxed">
                                {step.content}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modular Section */}
      <section ref={modularRef} className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title={t.modular.title} 
            subtitle={t.modular.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <GlassCard key={module.id} className="flex flex-col">
                <div className={`w-12 h-12 rounded-xl ${module.bg} flex items-center justify-center mb-6`}>
                  <module.icon className={`${module.iconColor} w-6 h-6`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                <p className="text-sm text-slate-400 mb-6 flex-grow">{module.desc}</p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {module.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <div className={`w-1 h-1 rounded-full ${module.iconColor.replace('text-', 'bg-')} mt-1.5`} /> 
                      {bullet}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}

            {/* Module 7 */}
            <GlassCard className="flex flex-col lg:col-span-3">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="text-blue-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{module7.title}</h3>
                  <p className="text-slate-400 mb-4">{module7.desc}</p>
                  <div className="flex flex-wrap gap-4">
                    {module7.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap className="text-blue-500 w-6 h-6" />
            <span className="text-xl font-display font-bold text-white">CRM Pro</span>
          </div>
          <p className="text-sm text-slate-500">{t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Telegram</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
