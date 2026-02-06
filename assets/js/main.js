(function(){
  const DEFAULT_LANG = "ru";
  const LANG_KEY = "cleverdi_lang";

  const translations = {
    ru: {
      nav_home: "Главная",
      nav_about: "О центре",
      nav_courses: "Курсы",
      nav_materials: "Материалы",
      nav_schedule: "Расписание",
      nav_certs: "Сертификаты",
      nav_contacts: "Контакты",
      cta_materials: "Материалы",
      cta_courses: "Смотреть курсы",
      nav_enroll: "Запись",      hero_kicker: "Cleverdi — учебный центр",
      hero_title: "Язык • Интеллект • Личностный рост",
      hero_lead: "Современная академия развития: английский язык, искусственный интеллект и личностное развитие. Материалы и расписание доступны на сайте, а учебные файлы — по ссылкам Google Drive.",
      hero_badge_1: "Онлайн и офлайн",
      hero_badge_2: "Практика и задания",
      hero_badge_3: "Материалы в Google Drive",
      hero_badge_4: "Сертификат",
      side_title: "Что будет на сайте",
      side_p: "Структура чуть сложнее обычного сайта: отдельные страницы курсов, материалы и расписание — поэтому важно сделать удобную навигацию и единый дизайн.",
      side_li1: "Страницы курсов с программой, длительностью и стоимостью",
      side_li2: "Раздел материалов с ссылками на лекции/презентации",
      side_li3: "Расписание (таблица или Google Sheets)",
      sec_courses_h2: "Популярные направления",
      sec_courses_p: "Примеры курсов — можно добавить новые в любой момент (достаточно создать страницу и вставить ссылки).",
      course_tag_lang: "Язык",
      course_tag_ai: "Технологии",
      course_tag_growth: "Развитие",
      course_en_title: "Английский язык",
      course_en_desc: "Разговорная практика, грамматика и уверенность в общении.",
      course_ai_title: "Искусственный интеллект",
      course_ai_desc: "Понимание AI-инструментов и применение в учёбе и работе.",
      course_gr_title: "Личностное развитие",
      course_gr_desc: "Осознанность, мышление, дисциплина и рост.",
      meta_format: "Формат",
      meta_duration: "Длительность",
      meta_level: "Уровень",
      format_mix: "онлайн/офлайн",
      duration_2m: "2 месяца",
      level_all: "с нуля",
      sec_how_h2: "Как устроены материалы",
      sec_how_p: "Мы используем Google-ссылки — удобно обновлять и не требует сложного обслуживания.",
      how1_h3: "Лекции и презентации",
      how1_p: "Хранятся в Google Drive (папки по курсам).",
      how2_h3: "Запись на обучение",
      how2_p: "Осуществляется через Google Form — заявки приходят автоматически.",
      how3_h3: "Расписание",
      how3_p: "Можно вести в Google Sheets и показывать на сайте.",
      sec_contact_h2: "Контакты",
      sec_contact_p: "Свяжитесь с нами по телефону или в соцсетях — подскажем по курсам и расписанию.",
      contact_note: "Замените контакты, карту и ссылки на формы/диск на свои.",
      page_title_courses: "Курсы",
      page_title_materials: "Материалы",
      page_title_schedule: "Расписание",
      page_title_certs: "Сертификаты",
      page_title_contacts: "Контакты",
      page_title_about: "О центре",      about_p1: "Cleverdi — современная академия развития, где сочетаются язык, интеллект и личностный рост.",
      about_p2: "Обучение практико-ориентированное: теория + задания, а материалы доступны по ссылкам.",      materials_p: "Ниже — кнопки на папки Google Drive. Достаточно заменить ссылки.",
      schedule_p: "Ниже — вариант таблицы или встроенная Google таблица.",
      certs_p: "Разместите образец сертификата и условия получения.",
      contacts_p: "Укажите адрес, телефон, WhatsApp/Telegram/Instagram и карту.",
      footer_right: "Документы • Публичная оферта • Политика",
      footer_copy: "© Cleverdi Academy. Все права защищены."
    },
    kg: {

      nav_home: "Башкы бет",
      nav_about: "Борбор тууралуу",
      nav_courses: "Курстар",
      nav_materials: "Материалдар",
      nav_schedule: "Расписание",
      nav_certs: "Сертификаттар",
      nav_contacts: "Байланыш",
      cta_materials: "Материалдар",
      cta_courses: "Курстарды көрүү",
      nav_enroll: "Катталуу",      hero_kicker: "Cleverdi — окуу борбору",
      hero_title: "Тил • Интеллект • Жеке өсүү",
      hero_lead: "Заманбап өнүгүү академиясы: англис тили, жасалма интеллект жана жеке өнүгүү. Материалдар жана расписание сайтта, ал эми окуу файлдары Google Drive шилтемелери аркылуу берилет.",
      hero_badge_1: "Онлайн жана офлайн",
      hero_badge_2: "Практика жана тапшырмалар",
      hero_badge_3: "Google Drive материалдар",
      hero_badge_4: "Сертификат",
      side_title: "Сайтта эмне болот",
      side_p: "Кадимки маалыматтык сайтка караганда бир аз татаалыраак: курстардын өзүнчө беттери, материалдар жана расписание — ошондуктан ыңгайлуу навигация жана бирдиктүү дизайн керек.",
      side_li1: "Курстардын беттери: программа, узактыгы, баасы",
      side_li2: "Материалдар бөлүмү: лекция/презентация шилтемелери",
      side_li3: "Расписание (таблица же Google Sheets)",
      sec_courses_h2: "Негизги багыттар",
      sec_courses_p: "Курстарды кийин көбөйтүүгө болот (бет кошуп, шилтемелерди киргизүү жетиштүү).",
      course_tag_lang: "Тил",
      course_tag_ai: "Технология",
      course_tag_growth: "Өнүгүү",
      course_en_title: "Англис тили",
      course_en_desc: "Сүйлөшүү практикасы, грамматика жана ишеним.",
      course_ai_title: "Жасалма интеллект",
      course_ai_desc: "AI куралдарын түшүнүү жана окууда/иште колдонуу.",
      course_gr_title: "Жеке өнүгүү",
      course_gr_desc: "Аң-сезим, ой жүгүртүү, тартип жана өсүү.",
      meta_format: "Формат",
      meta_duration: "Узактыгы",
      meta_level: "Деңгээли",
      format_mix: "онлайн/офлайн",
      duration_2m: "2 ай",
      level_all: "нөлдөн",
      sec_how_h2: "Материалдар кантип уюштурулат",
      sec_how_p: "Google шилтемелерди колдонобуз — жаңыртуу жеңил жана татаал тейлөө талап кылбайт.",
      how1_h3: "Лекция жана презентациялар",
      how1_p: "Google Drive ичинде (курстар боюнча папкалар).",
      how2_h3: "Окууга катталуу",
      how2_p: "Google Form аркылуу — заявкалар автоматтык келет.",
      how3_h3: "Расписание",
      how3_p: "Google Sheetsте жүргүзүп, сайтта көрсөтөбүз.",
      sec_contact_h2: "Байланыш",
      sec_contact_p: "Телефон же соцтармактар аркылуу байланышыңыз — курстар жана расписание тууралуу айтып беребиз.",
      contact_note: "Контакттарды, картаны жана форма/диск шилтемелерин өзүңүздүкүнө алмаштырыңыз.",
      page_title_courses: "Курстар",
      page_title_materials: "Материалдар",
      page_title_schedule: "Расписание",
      page_title_certs: "Сертификаттар",
      page_title_contacts: "Байланыш",
      page_title_about: "Борбор тууралуу",      about_p1: "Cleverdi — тил, интеллект жана жеке өсүүнү бириктирген заманбап өнүгүү академиясы.",
      about_p2: "Окутуу практика багытында: теория + тапшырмалар, материалдар шилтеме аркылуу берилет.",      materials_p: "Төмөндө Google Drive папкаларына кнопкалар бар. Шилтемелерди алмаштырсаңыз жетиштүү.",
      schedule_p: "Төмөндө таблица варианты же Google таблицасын киргизүү.",
      certs_p: "Сертификат үлгүсүн жана алуу шарттарын жайгаштырыңыз.",
      contacts_p: "Дарек, телефон, WhatsApp/Telegram/Instagram жана картаны көрсөтүңүз.",
      footer_right: "Документтер • Оферта • Саясат",
      footer_copy: "© Cleverdi Academy. Бардык укуктар корголгон."
    }
  };

  function setLang(lang){
    if(!translations[lang]) lang = DEFAULT_LANG;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      const val = translations[lang][key];
      if(typeof val === "string"){
        el.textContent = val;
      }
    });

    document.querySelectorAll(".lang button").forEach(btn=>{
      btn.classList.toggle("active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true":"false");
    });
  }

  function currentLang(){
    return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  }

  // Burger menu
  function initBurger(){
    const burger = document.querySelector("[data-burger]");
    const menu = document.querySelector("[data-mobilemenu]");
    if(!burger || !menu) return;
    burger.addEventListener("click", ()=>{
      menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", menu.classList.contains("open") ? "true":"false");
    });
    // Close on link click
    menu.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click", ()=> menu.classList.remove("open"));
    });
  }

  // Active link
  function initActive(){
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navlinks a, .mobilemenu a").forEach(a=>{
      const href = a.getAttribute("href");
      if(href === path) a.classList.add("active");
    });
  }

  // Language buttons
  function initLang(){
    document.querySelectorAll(".lang button").forEach(btn=>{
      btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
    });
    setLang(currentLang());
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    initBurger();
    initActive();
    initLang();
  });
})();
