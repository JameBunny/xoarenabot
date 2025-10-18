// --- WidgetBot Setup ---
const widgetBotScript = document.createElement('script');
widgetBotScript.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
widgetBotScript.async = true;
widgetBotScript.defer = true;
widgetBotScript.onload = function () {
  // ป้องกัน error ถ้า Crate ยังไม่พร้อม
  if (typeof Crate !== 'undefined') {
    new Crate({
      server: '1334985396127404113', // ID เซิร์ฟเวอร์ของคุณ

      // !! กำหนดช่องเริ่มต้น !!
      channel: '1366116183757295816',

      // ใส่ ID ของช่อง หรือ ID ของหมวดหมู่ที่ต้องการซ่อน
      deny: [
        '1337872901935726654',
        '1334985396731514881',
        '1334985396731514884',
        '1334985396890632344',
        '1334985397037563965',
        '1366476856391630940',
        '1366477115242975312',
        '1334985397037563973',
        '1334985397175980166', // <-- เพิ่มลูกน้ำตรงนี้
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


// ====== Translations (unchanged) ======
const translations = {
  en: { nav_features: "Features", nav_shop: "Shop", nav_commands: "Commands", nav_support: "Support", hero_title: "The Ultimate Tic-Tac-Toe Experience.", hero_subtitle: "Challenge your friends or our smart AI. Simple, fun, and competitive.", hero_cta_add: "Add to Discord", hero_cta_vote: "Vote for Bot", features_title: "Powerful Features", feature_1_title: "Play with Friends or Bot", feature_1_desc: "Challenge a friend for a classic match or test your skills against our smart AI.", feature_2_title: "Leaderboards & Stats", feature_2_desc: "Track your wins, losses, and draws. Climb the leaderboard to become the champion.", feature_3_title: "Multi-Language Support", feature_3_desc: "Play in Thai, English, or Japanese. The bot adapts to your preferred language.", commands_title: "All Commands", cmd_play: "Starts a game with another player.", cmd_playbot: "Starts a game against the AI bot.", cmd_stop: "Stops the current game.", cmd_leaderboard: "Shows the server's top players.", cmd_stats: "View your or another player's stats.", cmd_setlanguage: "Changes the bot's language.", footer_terms: "Terms of Service", footer_privacy: "Privacy Policy", follow_us: "Follow our developer" },
  th: { nav_features: "ฟีเจอร์", nav_shop: "ร้านค้า", nav_commands: "คำสั่ง", nav_support: "สนับสนุน", hero_title: "สุดยอดประสบการณ์ Tic-Tac-Toe", hero_subtitle: "ท้าทายเพื่อนของคุณหรือ AI อัจฉริยะของเรา เรียบง่าย สนุก และแข่งขันได้", hero_cta_add: "เพิ่มเข้าสู่ Discord", hero_cta_vote: "โหวตให้บอท", features_title: "ฟีเจอร์เด่น", feature_1_title: "เล่นกับเพื่อนหรือบอท", feature_1_desc: "ท้าทายเพื่อนในเกมคลาสสิก หรือทดสอบฝีมือของคุณกับ AI อัจฉริยะ", feature_2_title: "กระดานผู้นำและสถิติ", feature_2_desc: "ติดตามการชนะ, แพ้, และเสมอ ไต่อันดับเพื่อเป็นแชมป์เปี้ยน", feature_3_title: "รองรับหลายภาษา", feature_3_desc: "เล่นได้ทั้งภาษาไทย, อังกฤษ, หรือญี่ปุ่น บอทจะปรับตามภาษาที่คุณต้องการ", commands_title: "คำสั่งทั้งหมด", cmd_play: "เริ่มเกมกับผู้เล่นอื่น", cmd_playbot: "เริ่มเกมกับบอท AI", cmd_stop: "หยุดเกมปัจจุบัน", cmd_leaderboard: "แสดงอันดับผู้เล่นสูงสุด", cmd_stats: "ดูสถิติของคุณหรือผู้เล่นอื่น", cmd_setlanguage: "เปลี่ยนภาษาของบอท", footer_terms: "ข้อกำหนดในการให้บริการ", footer_privacy: "นโยบายความเป็นส่วนตัว", follow_us: "ติดตามผู้พัฒนา" },
  ja: { nav_features: "特徴", nav_shop: "ショップ", nav_commands: "コマンド", nav_support: "サポート", hero_title: "究極の三目並べ体験", hero_subtitle: "友達や賢いAIに挑戦しよう。シンプルで楽しく、競争力があります。", hero_cta_add: "Discordに追加", hero_cta_vote: "ボットに投票", features_title: "強力な機能", feature_1_title: "友達やボットと対戦", feature_1_desc: "クラシックなマッチで友達に挑戦したり、賢いAIでスキルを試したりできます。", feature_2_title: "リーダーボードと統計", feature_2_desc: "勝ち、負け、引き分けを追跡します。リーダーボードを駆け上がってチャンピオンを目指しましょう。", feature_3_title: "多言語対応", feature_3_desc: "タイ語、英語、日本語でプレイできます。ボットはあなたの好みの言語に適応します。", commands_title: "すべてのコマンド", cmd_play: "他のプレイヤーとゲームを開始します。", cmd_playbot: "AIボットと対戦します。", cmd_stop: "現在のゲームを停止します。", cmd_leaderboard: "サーバーのトッププレイヤーを表示します。", cmd_stats: "自分または他のプレイヤーの統計を表示します。", cmd_setlanguage: "ボットの言語を変更します。", footer_terms: "利用規約", footer_privacy: "プライバシーポリシー", follow_us: "開発者をフォロー" }
};


document.addEventListener('DOMContentLoaded', () => {
  // ทำให้ฟังก์ชันใน DOMContentLoaded ใช้ await ได้
  (async () => {

    // 1) Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', savedTheme);

      themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });
    }

    // 2) Mobile nav
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (hamburgerButton && navLinks) {
      hamburgerButton.addEventListener('click', () => {
        hamburgerButton.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('noscroll');
      });

      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburgerButton.classList.remove('active');
          navLinks.classList.remove('active');
          body.classList.remove('noscroll');
        });
      });
    }

    // 3) Slideshow
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
      if (!slides.length || !dots.length) return;
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (dots[i]) dots[i].classList.remove('active'); // กันพลาดกรณีจำนวนไม่เท่ากัน
      });
      slides[index].classList.add('active');
      if (dots[index]) dots[index].classList.add('active');
      currentSlide = index;
    }

    function nextSlide() {
      if (!slides.length) return;
      const next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }

    function startSlideShow() {
      stopSlideShow();
      slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideShow() {
      if (slideInterval) clearInterval(slideInterval);
    }

    if (slides.length && dots.length) {
      dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          const slideIndex = parseInt(e.target.getAttribute('data-slide'));
          showSlide(slideIndex);
          startSlideShow();
        });
      });
      startSlideShow();
    }

    // 4) Include partials (เช่น footer) แล้วค่อยแปลภาษา
    await includePartials();

    // 5) Language Translation (แปลทั้งหน้า + เนื้อหาที่ include มา)
    const langSwitcher = document.getElementById('lang-switcher');
    const setLanguage = (lang) => {
      document.documentElement.lang = lang;
      document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang]?.[key]) {
          el.textContent = translations[lang][key];
        }
      });
      localStorage.setItem('xo-arena-lang', lang);
      if (langSwitcher) langSwitcher.value = lang;
    };

    if (langSwitcher) {
      langSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));
    }
    setLanguage(localStorage.getItem('xo-arena-lang') || 'en');

    // 6) Scroll Reveal Animation (เดิม)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { 
          entry.target.classList.add('visible'); 
          // ทำให้ reveal เฉพาะครั้ง (ช่วยประสิทธิภาพและลื่นขึ้น)
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  })();
});


// ===================================================
// Modern Scroll Interactions (เพิ่มฟีเจอร์เลื่อนให้ทันสมัย)
// ===================================================

// 1) สร้าง Progress Bar ด้านบนอัตโนมัติ (ถ้ายังไม่มี)
(function createProgressBar(){
  if (document.getElementById('scroll-progress')) return;
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.appendChild(bar);
})();

// 2) อัปเดตความคืบหน้าตามการเลื่อน (ใช้งาน rAF เพื่อความลื่น)
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

  // ใส่ .parallax ให้ element หลัก ๆ ถ้ายังไม่มี
  const candidates = [
    '.hero-section .hero-content',
    '.hero-section .slideshow-container',
    '.features-grid'
  ];
  candidates.forEach(sel=>{
    document.querySelectorAll(sel).forEach(el=>{
      if (!el.classList.contains('parallax')) el.classList.add('parallax');
      if (!el.dataset.parallaxSpeed) el.dataset.parallaxSpeed = '0.15'; // default speed
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
