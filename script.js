// --- WidgetBot Setup (ปลอดภัย ไม่ error ถ้า Crate ยังไม่พร้อม) ---
const widgetBotScript = document.createElement('script');
widgetBotScript.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
widgetBotScript.async = true;
widgetBotScript.defer = true;
widgetBotScript.onload = function () {
  if (typeof Crate !== 'undefined') {
    new Crate({
      server: '1334985396127404113',
      channel: '1366116183757295816',
      deny: [
        '1337872901935726654',
        '1334985396731514881',
        '1334985396731514884',
        '1334985396890632344',
        '1334985397037563965',
        '1366476856391630940',
        '1366477115242975312',
        '1334985397037563973',
        '1334985397175980166',
        '1334985396580257853',
        '1334985396580257854',
        '1334985396580257855',
        '1334985396580257856'
      ]
    });
  }
};
document.head.appendChild(widgetBotScript);

// ====== HTML Partials Include (footer/header) ======
async function includePartials() {
  const slots = document.querySelectorAll('[data-include]');
  if (!slots.length) return;
  await Promise.all([...slots].map(async (el) => {
    const path = el.getAttribute('data-include');
    try {
      const res = await fetch(path, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      el.outerHTML = html;
    } catch (err) {
      console.error('Include failed for', path, err);
    }
  }));
}

// ====== Translations ======
const translations = {
  en: { nav_features: "Features", nav_shop: "Shop", nav_commands: "Commands", nav_support: "Support", hero_title: "The Ultimate Tic-Tac-Toe Experience.", hero_subtitle: "Challenge your friends or our smart AI. Simple, fun, and competitive.", hero_cta_add: "Add to Discord", hero_cta_vote: "Vote for Bot", features_title: "Powerful Features", feature_1_title: "Play with Friends or Bot", feature_1_desc: "Challenge a friend for a classic match or test your skills against our smart AI.", feature_2_title: "Leaderboards & Stats", feature_2_desc: "Track your wins, losses, and draws. Climb the leaderboard to become the champion.", feature_3_title: "Multi-Language Support", feature_3_desc: "Play in Thai, English, or Japanese. The bot adapts to your preferred language.", commands_title: "All Commands", cmd_play: "Starts a game with another player.", cmd_playbot: "Starts a game against the AI bot.", cmd_stop: "Stops the current game.", cmd_leaderboard: "Shows the server's top players.", cmd_stats: "View your or another player's stats.", cmd_setlanguage: "Changes the bot's language.", footer_terms: "Terms of Service", footer_privacy: "Privacy Policy", follow_us: "Follow our developer" },
  th: { nav_features: "ฟีเจอร์", nav_shop: "ร้านค้า", nav_commands: "คำสั่ง", nav_support: "สนับสนุน", hero_title: "สุดยอดประสบการณ์ Tic-Tac-Toe", hero_subtitle: "ท้าทายเพื่อนของคุณหรือ AI อัจฉริยะของเรา เรียบง่าย สนุก และแข่งขันได้", hero_cta_add: "เพิ่มเข้าสู่ Discord", hero_cta_vote: "โหวตให้บอท", features_title: "ฟีเจอร์เด่น", feature_1_title: "เล่นกับเพื่อนหรือบอท", feature_1_desc: "ท้าทายเพื่อนในเกมคลาสสิก หรือทดสอบฝีมือของคุณกับ AI อัจฉริยะ", feature_2_title: "กระดานผู้นำและสถิติ", feature_2_desc: "ติดตามการชนะ, แพ้, และเสมอ ไต่อันดับเพื่อเป็นแชมป์เปี้ยน", feature_3_title: "รองรับหลายภาษา", feature_3_desc: "เล่นได้ทั้งภาษาไทย, อังกฤษ, หรือญี่ปุ่น บอทจะปรับตามภาษาที่คุณต้องการ", commands_title: "คำสั่งทั้งหมด", cmd_play: "เริ่มเกมกับผู้เล่นอื่น", cmd_playbot: "เริ่มเกมกับบอท AI", cmd_stop: "หยุดเกมปัจจุบัน", cmd_leaderboard: "แสดงอันดับผู้เล่นสูงสุด", cmd_stats: "ดูสถิติของคุณหรือผู้เล่นอื่น", cmd_setlanguage: "เปลี่ยนภาษาของบอท", footer_terms: "ข้อกำหนดในการให้บริการ", footer_privacy: "นโยบายความเป็นส่วนตัว", follow_us: "ติดตามผู้พัฒนา" },
  ja: { nav_features: "特徴", nav_shop: "ショップ", nav_commands: "コマンド", nav_support: "サポート", hero_title: "究極の三目並べ体験", hero_subtitle: "友達や賢いAIに挑戦しよう。シンプルで楽しく、競争力があります。", hero_cta_add: "Discordに追加", hero_cta_vote: "ボットに投票", features_title: "強力な機能", feature_1_title: "友達やボットと対戦", feature_1_desc: "クラシックなマッチで友達に挑戦したり、賢いAIでスキルを試したりできます。", feature_2_title: "リーダーボードと統計", feature_2_desc: "勝ち、負け、引き分けを追跡します。リーダーボードを駆け上がってチャンピオンを目指しましょう。", feature_3_title: "多言語対応", feature_3_desc: "タイ語、英語、日本語でプレイできます。ボットはあなたの好みの言語に適応します。", commands_title: "すべてのコマンド", cmd_play: "他のプレイヤーとゲームを開始します。", cmd_playbot: "AIボットと対戦します。", cmd_stop: "現在のゲームを停止します。", cmd_leaderboard: "サーバーのトッププレイヤーを表示します。", cmd_stats: "自分または他のプレイヤーの統計を表示します。", cmd_setlanguage: "ボットの言語を変更します。", footer_terms: "利用規約", footer_privacy: "プライバシーポリシー", follow_us: "開発者をフォロー" }
};

document.addEventListener('DOMContentLoaded', () => {
  (async () => {
    // 1) Theme toggle + sync กับ OS
    const themeToggle = document.getElementById('theme-toggle');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = (t) => {
      document.documentElement.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
      // (ทางเลือก) sync meta theme-color ถ้ามี
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', t === 'dark' ? '#0b0f1a' : '#ffffff');
    };
    if (themeToggle) {
      const saved = localStorage.getItem('theme') || (prefers.matches ? 'dark' : 'light');
      applyTheme(saved);
      themeToggle.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
      // auto-update เมื่อผู้ใช้สลับธีม OS
      prefers.addEventListener?.('change', (e) => {
        if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
      });
    }

    // 2) Mobile nav
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (hamburgerButton && navLinks) {
      const closeMenu = () => {
        hamburgerButton.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('noscroll');
      };
      hamburgerButton.addEventListener('click', () => {
        hamburgerButton.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('noscroll');
      });
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburgerButton.contains(e.target)) closeMenu();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });
    }

    // 3) Slideshow (หยุดเมื่อโฮเวอร์/สลับแท็บ, พรีโหลดภาพ)
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
      if (!slides.length) return;
      slides.forEach((s, i) => {
        s.classList.toggle('active', i === index);
        if (dots[i]) dots[i].classList.toggle('active', i === index);
      });
      currentSlide = index;
    }
    function nextSlide() {
      if (!slides.length) return;
      showSlide((currentSlide + 1) % slides.length);
    }
    function startSlideShow() {
      stopSlideShow();
      slideInterval = setInterval(nextSlide, 5000);
    }
    function stopSlideShow() {
      if (slideInterval) clearInterval(slideInterval);
    }

    if (slides.length) {
      // พรีโหลด
      slides.forEach(img => { if (img?.src) { const i = new Image(); i.src = img.src; }});
      // จุดคลิก
      dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          const idx = Number(e.currentTarget.getAttribute('data-slide')) || 0;
          showSlide(idx);
          startSlideShow();
        });
      });
      // หยุดเมื่อ hover/focus
      const slideBox = document.querySelector('.slideshow-container');
      if (slideBox) {
        slideBox.addEventListener('mouseenter', stopSlideShow);
        slideBox.addEventListener('mouseleave', startSlideShow);
        slideBox.addEventListener('focusin', stopSlideShow);
        slideBox.addEventListener('focusout', startSlideShow);
      }
      // หยุดเมื่อแท็บถูกซ่อน
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopSlideShow(); else startSlideShow();
      });
      startSlideShow();
    }

    // 4) Include partials (เช่น footer) แล้วค่อยแปลภาษา
    await includePartials();

    // 5) Language Translation
    const langSwitcher = document.getElementById('lang-switcher');
    const setLanguage = (lang) => {
      document.documentElement.lang = lang;
      document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang]?.[key]) el.textContent = translations[lang][key];
      });
      localStorage.setItem('xo-arena-lang', lang);
      if (langSwitcher) langSwitcher.value = lang;
    };
    if (langSwitcher) langSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));
    setLanguage(localStorage.getItem('xo-arena-lang') || 'en');

    // 6) Scroll Reveal Animation (ครั้งเดียวต่อ element)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 7) Smooth scroll สำหรับลิงก์ #anchor โดยชดเชย sticky header
    const header = document.querySelector('.main-header');
    const headerH = () => (header ? header.offsetHeight + 8 : 0);
    function scrollToHash(hash) {
      const target = document.querySelector(hash);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerH();
      window.scrollTo({ top, behavior: 'smooth' });
    }
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href && href.length > 1) {
          e.preventDefault();
          scrollToHash(href);
          history.pushState(null, '', href);
        }
      });
    });
    if (location.hash) setTimeout(() => scrollToHash(location.hash), 0);
  })();
});

// ===================================================
// Modern Scroll Interactions
// ===================================================

// 1) สร้าง Progress Bar ด้านบนอัตโนมัติ (ถ้ายังไม่มี)
(function createProgressBar(){
  if (document.getElementById('scroll-progress')) return;
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.appendChild(bar);
})();

// 2) อัปเดตความคืบหน้าตามการเลื่อน (ใช้ rAF ลื่น ๆ)
(function scrollProgress(){
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    bar.style.width = (Math.max(0, Math.min(1, scrolled)) * 100).toFixed(2) + '%';
  };
  update();
  window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  window.addEventListener('resize', () => requestAnimationFrame(update));
})();

// 3) Parallax เบา ๆ ให้ hero/media ดู “ลอย” (เคารพ reduced-motion)
(function parallaxLite(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const candidates = [
    '.hero-section .hero-content',
    '.hero-section .slideshow-container',
    '.features-grid'
  ];
  candidates.forEach(sel=>{
    document.querySelectorAll(sel).forEach(el=>{
      if (!el.classList.contains('parallax')) el.classList.add('parallax');
      if (!el.dataset.parallaxSpeed) el.dataset.parallaxSpeed = '0.15';
      el.style.willChange = 'transform';
      el.style.transform = 'translate3d(0,0,0)';
    });
  });

  const els = Array.from(document.querySelectorAll('.parallax'));
  if (!els.length) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(()=>{
      const y = window.scrollY || window.pageYOffset;
      els.forEach(el=>{
        const speed = parseFloat(el.dataset.parallaxSpeed || '0.15');
        const offset = (y * speed);
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
      ticking = false;
    });
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
