const translations = {
  en: {
    navAbout:"About",navWork:"Selected Work",navServices:"Services",navContact:"Contact",letsTalk:"Let’s talk",
    heroEyebrow:"INDEPENDENT CREATIVE • AI & MOTION",heroLine1:"Ideas into",heroLine2:"visual impact.",
    heroIntro:"I’m Shadab Khodajoo — an AI-focused visual creator crafting distinctive advertising, motion and digital experiences.",
    exploreWork:"Explore my work",moreAbout:"More about me",available:"Available for selected projects",scroll:"SCROLL TO DISCOVER",
    stripText:"CREATIVE THINKING. CINEMATIC EXECUTION. SMART TECHNOLOGY.",aboutKicker:"A LITTLE INTRODUCTION",
    aboutTitle:"Designing visuals<br>that <em>stay with you.</em>",
    aboutText:"I bring ideas to life through visual design, motion and AI-assisted production. My work combines a strong visual direction with thoughtful storytelling — from a product’s first impression to a complete advertising experience.",
    aboutText2:"This portfolio is a growing collection of selected experiments, concepts and client projects. Each project can be expanded with its own story, process and final deliverables.",
    startConversation:"Start a conversation",skill1:"AI Advertising & Video",skill2:"Motion Graphics",skill3:"Visual & Brand Design",skill4:"Creative Direction",
    workKicker:"A SELECTION OF MY WORK",workTitle:"Selected <em>projects.</em>",workDescription:"A snapshot of creative directions across advertising, motion and visual design.",
    filterAll:"All work",filterAI:"AI Advertising",filterMotion:"Motion",filterDesign:"Visual Design",
    portfolioNote:"The cards above are editable project starters. Replace the concept artwork with your approved final images or videos before presenting this portfolio to clients.",
    servicesKicker:"WHAT I CAN CREATE",servicesTitle:"Creative services<br>with <em>purpose.</em>",servicesDescription:"From the first concept to the final frame, I help brands communicate with clarity and character.",
    service1:"AI-powered advertising videos",service2:"Motion graphics & logo animation",service3:"Creative image generation",service4:"Visual identity & campaign design",
    contactKicker:"HAVE A PROJECT IN MIND?",contactTitle:"Let’s make<br><em>something memorable.</em>",contactText:"Have an idea, a brief or a collaboration in mind? I’d love to hear about it.",
    footerText:"Independent creative portfolio · Built with care",backTop:"Back to top ↑"
  },
  fa: {
    navAbout:"درباره من",navWork:"نمونه‌کارها",navServices:"خدمات",navContact:"ارتباط",letsTalk:"شروع همکاری",
    heroEyebrow:"خلاق مستقل • هوش مصنوعی و موشن",heroLine1:"ایده‌ها را به",heroLine2:"تصویر ماندگار تبدیل می‌کنم.",
    heroIntro:"من شاداب خداجو هستم؛ خالق محتوای بصری با تمرکز بر هوش مصنوعی، طراحی حرکت و تجربه‌های تبلیغاتی متفاوت.",
    exploreWork:"مشاهده نمونه‌کارها",moreAbout:"بیشتر درباره من",available:"آماده همکاری در پروژه‌های منتخب",scroll:"برای کشف بیشتر اسکرول کنید",
    stripText:"تفکر خلاقانه. اجرای سینمایی. فناوری هوشمند.",aboutKicker:"کمی درباره من",
    aboutTitle:"خلق تصاویری که<br>در <em>ذهن می‌مانند.</em>",
    aboutText:"ایده‌ها را با طراحی بصری، موشن و تولید محتوای مبتنی بر هوش مصنوعی به تجربه‌هایی دیدنی تبدیل می‌کنم. تمرکز من ترکیب نگاه خلاقانه و داستان‌پردازی تصویری است؛ از اولین برخورد مخاطب با محصول تا ساخت یک تجربه تبلیغاتی کامل.",
    aboutText2:"این پورتفولیو مجموعه‌ای در حال توسعه از ایده‌ها، تجربه‌ها و پروژه‌های منتخب است. برای هر پروژه می‌توان داستان، روند اجرا و خروجی نهایی را جداگانه نمایش داد.",
    startConversation:"برای همکاری گفتگو کنیم",skill1:"تبلیغات و ویدئوی هوش مصنوعی",skill2:"موشن‌گرافیک",skill3:"طراحی بصری و برند",skill4:"هدایت خلاقانه",
    workKicker:"گزیده‌ای از فعالیت‌ها",workTitle:"پروژه‌های <em>منتخب.</em>",workDescription:"نگاهی به مسیرهای خلاقانه در تبلیغات، موشن و طراحی بصری.",
    filterAll:"همه",filterAI:"تبلیغات هوش مصنوعی",filterMotion:"موشن",filterDesign:"طراحی بصری",
    portfolioNote:"کارت‌های بالا نمونه‌های اولیه و قابل ویرایش هستند. پیش از ارائه سایت به کارفرما، تصاویر و ویدئوهای نهایی و مورد تأیید خودت را جایگزین کن.",
    servicesKicker:"چه خدماتی ارائه می‌دهم؟",servicesTitle:"خدمات خلاقانه<br>با <em>هدف مشخص.</em>",servicesDescription:"از شکل‌گیری ایده تا آخرین فریم، به برندها کمک می‌کنم پیامشان را با هویت و جذابیت بصری منتقل کنند.",
    service1:"ساخت ویدئوهای تبلیغاتی با هوش مصنوعی",service2:"موشن‌گرافیک و لوگوموشن",service3:"تولید تصاویر خلاقانه با هوش مصنوعی",service4:"طراحی هویت بصری و کمپین تبلیغاتی",
    contactKicker:"ایده‌ای برای اجرا داری؟",contactTitle:"بیایید چیزی<br><em>به‌یادماندنی بسازیم.</em>",contactText:"اگر ایده، سفارش یا پیشنهادی برای همکاری داری، خوشحال می‌شوم درباره‌اش صحبت کنیم.",
    footerText:"پورتفولیوی مستقل خلاقانه · طراحی‌شده با دقت",backTop:"بازگشت به بالا ↑"
  }
};
let currentLang = "en";
const languageToggle = document.getElementById("languageToggle");
function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang === "fa" ? "fa" : "en";
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[lang][key] !== undefined) el.innerHTML=translations[lang][key];
  });
  document.querySelectorAll("[data-project-en]").forEach(el=>{
    el.textContent = lang === "fa" ? el.dataset.projectFa : el.dataset.projectEn;
  });
  document.querySelectorAll("[data-project-desc-en]").forEach(el=>{
    el.textContent = lang === "fa" ? el.dataset.projectDescFa : el.dataset.projectDescEn;
  });
  languageToggle.textContent = lang === "fa" ? "EN" : "فا";
  languageToggle.setAttribute("aria-label", lang === "fa" ? "Switch to English" : "تغییر زبان به فارسی");
}
languageToggle.addEventListener("click",()=>setLanguage(currentLang==="en"?"fa":"en"));
document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const filter=btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card=>{
      card.hidden = filter!=="all" && card.dataset.category!==filter;
    });
  });
});
const menuToggle=document.getElementById("menuToggle");
const nav=document.querySelector(".desktop-nav");
menuToggle.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");
}));
setLanguage("en");
