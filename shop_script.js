document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Theme Switcher (ระบบเปลี่ยนธีม) ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // ตรวจสอบธีมที่เคยบันทึกไว้ หรือใช้ค่าเริ่มต้นจากระบบ
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme); // อัปเดตไอคอนตอนโหลด

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    // ฟังก์ชันเปลี่ยนไอคอน (ถ้าปุ่มมี SVG หรือ Text)
    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        // ถ้าคุณใช้ Text emoji ในปุ่ม
        if (themeToggle.innerText.match(/☀️|🌙/)) {
             themeToggle.innerText = theme === 'dark' ? '🌙' : '☀️';
        }
        // ถ้าคุณใช้ SVG (แบบซ่อน/แสดง class)
        const sunIcon = themeToggle.querySelector('.sun');
        const moonIcon = themeToggle.querySelector('.moon');
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }
    }

    // --- 2. Language Translation (ระบบแปลภาษา) ---
    const translations = {
        en: {
            shop_title: "Nosu Store",
            shop_subtitle: "Premium stickers & digital goods for our community.",
            
            // Product 1 (Old)
            product1_name: "Nosu 1st Anniversary Sticker",
            product1_price: "฿35",
            
            // Product 2 (New)
            product2_name: "NosuTeam Sticker Vol. 2",
            product2_price: "฿35",
            
            buy_button: "Buy Now"
        },
        th: {
            shop_title: "Nosu Store",
            shop_subtitle: "สติ๊กเกอร์และสินค้าดิจิทัลสุดพิเศษสำหรับชาวแก๊ง",
            
            // Product 1
            product1_name: "สติ๊กเกอร์ Nosu ฉลองครบ 1 ปี",
            product1_price: "฿35",
            
            // Product 2
            product2_name: "Nosu Halloween Collection",
            product2_price: "฿35",
            
            buy_button: "ซื้อเลย"
        },
        ja: {
            shop_title: "Nosu Store",
            shop_subtitle: "コミュニティのためのプレミアムスタンプ＆デジタルグッズ",
            
            // Product 1
            product1_name: "Nosu 1周年記念スタンプ",
            product1_price: "฿35",
            
            // Product 2
            product2_name: "Nosu Halloween Collection",
            product2_price: "฿35",
            
            buy_button: "今すぐ購入"
        }
    };

    const langSwitcher = document.getElementById('lang-switcher');
    
    const setLanguage = (lang) => {
        if (!translations[lang]) return;

        // อัปเดต attribute lang ของ html
        document.documentElement.lang = lang;
        
        // วนลูปหา element ที่มี data-lang ทั้งหมดในหน้า
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // บันทึกค่าลง localStorage
        localStorage.setItem('xo-arena-lang', lang);
        
        // อัปเดตค่าใน select box
        if (langSwitcher) {
            langSwitcher.value = lang;
        }
    };

    if (langSwitcher) {
        langSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));
    }

    // โหลดภาษาที่บันทึกไว้ หรือใช้ค่า Default เป็น 'en'
    setLanguage(localStorage.getItem('xo-arena-lang') || 'en');
});
