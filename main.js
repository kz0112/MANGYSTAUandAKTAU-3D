const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const backdrop = document.getElementById("menuBackdrop");
const menuClose = document.getElementById("menuClose");

function openMenu() {
  document.body.classList.add("menu-open");
  menuBtn?.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuBtn?.setAttribute("aria-expanded", "false");
}

menuBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = document.body.classList.contains("menu-open");
  if (isOpen) closeMenu();
  else openMenu();
});

backdrop?.addEventListener("click", closeMenu);
menuClose?.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

nav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});


// ====== LANGUAGE DROPDOWN ======
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const langWrap = langBtn ? langBtn.closest(".lang") : null;

if (langBtn && langMenu && langWrap) {
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langWrap.classList.toggle("open");
  });

  langMenu.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const l = btn.getAttribute("data-lang");
      langBtn.innerHTML = `${l.toUpperCase()} <span class="chev">▾</span>`;
      langWrap.classList.remove("open");
      // Мұнда кейін нақты аударма логикасын қосасың
    });
  });

  document.addEventListener("click", () => langWrap.classList.remove("open"));
}

// ====== ROUTES SLIDER BUTTONS ======
const track = document.getElementById("routesTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function scrollRoutes(px) {
  if (!track) return;
  track.scrollBy({ left: px, behavior: "smooth" });
}

if (prevBtn) prevBtn.addEventListener("click", () => scrollRoutes(-360));
if (nextBtn) nextBtn.addEventListener("click", () => scrollRoutes(360));

// ===== HERO SLIDER (5 slides) =====
(function () {
    const hero = document.getElementById("hero");
    if (!hero) return;
  
    const bgA = document.getElementById("heroBgA");
    const bgB = document.getElementById("heroBgB");
    const labelEl = document.getElementById("heroLabel");
    const titleEl = document.getElementById("heroTitle");
    const textEl = document.getElementById("heroText");
    const btnEl = document.getElementById("heroBtn");
    const dotsWrap = document.getElementById("heroDots");
  
    // 5 слайд (өз ақпаратыңмен ауыстыра сал)
    const slides = [
      {
        label: "ПОПУЛЯРНЫЕ МАРШРУТЫ",
        title: "Город-декорация Абаста",
        text: "Его построили в 2012 году, когда снимали художественный фильм “В ожидании моря”. Организаторы съемок основательно потрудились над декорациями...",
        btnText: "Узнай больше",
        href: "tours.html",
        bg: "https://weproject.media/upload/medialibrary/167/167244f3a892f526f8a440fc5c3ec28d.jpg",
      },
      {
        label: "ПОПУЛЯРНЫЕ МАРШРУТЫ",
        title: "Впадина Карынжарык",
        text: "Посещение этой природной достопримечательности особенно интересно в весенний период, и в любое другое время года после дождя...",
        btnText: "Узнай больше",
        href: "tours.html",
        bg: "https://wildticketasia.com/uploads/posts/2023-04/1682202914_tour-karynzharyk-tuzbair-7.jpg",
      },
      {
        label: "ПРИРОДА И ПЕЙЗАЖИ",
        title: "Бозжыра",
        text: "Белые останцы, панорамные виды и ощущение другой планеты. Лучшее время — рассвет и закат.",
        btnText: "Смотреть маршрут",
        href: "tours.html",
        bg: "https://sputnik.kz/img/07e4/0b/17/15549277_166:0:2833:2000_1920x0_80_0_0_1e41b88ecad6cd19d903a9ec6c11325f.jpg",
      },
      {
        label: "ИСТОРИЯ И КУЛЬТУРА",
        title: "Шерқала",
        text: "Легендарная гора Мангистау. Виды, история и отличная точка для фото и маршрутов выходного дня.",
        btnText: "Узнай больше",
        href: "tours.html",
        bg: "https://kz24.news/wp-content/uploads/2023/04/sherkala-2.jpg",
      },
      {
        label: "НЕОБЫЧНЫЕ МЕСТА",
        title: "Торыш — Valley of Balls",
        text: "Шаровые конкреции, которые выглядят как каменные мячи. Место для уникальных прогулок и съемок.",
        btnText: "Открыть на карте",
        href: "map.html",
        bg: "https://www.advantour.com/img/kazakhstan/mangystau/torysh-valley-of-balls5.jpg",
      },
    ];
  
    let index = 0;
    let useA = true;
    let timer = null;
    const intervalMs = 6500;
  
    function setActiveDot(i) {
      if (!dotsWrap) return;
      dotsWrap.querySelectorAll(".heroDot").forEach((b) => b.classList.remove("is-active"));
      const active = dotsWrap.querySelector(`.heroDot[data-i="${i}"]`);
      if (active) active.classList.add("is-active");
    }
  
    function renderSlide(i) {
      const s = slides[i];
  
      // text
      if (labelEl) labelEl.textContent = s.label;
      if (titleEl) titleEl.textContent = s.title;
      if (textEl) textEl.textContent = s.text;
      if (btnEl) {
        btnEl.href = s.href;
        btnEl.innerHTML = `${s.btnText} <span class="btn__arrow">→</span>`;
      }
  
      // bg crossfade
      const show = useA ? bgA : bgB;
      const hide = useA ? bgB : bgA;
  
      if (show) show.style.backgroundImage = `url('${s.bg}')`;
      if (show) show.classList.add("is-visible");
      if (hide) hide.classList.remove("is-visible");
  
      useA = !useA;
      setActiveDot(i);
    }
  
    function next() {
      index = (index + 1) % slides.length;
      renderSlide(index);
    }
  
    function start() {
      stop();
      timer = setInterval(next, intervalMs);
    }
  
    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }
  
    // dots click
    if (dotsWrap) {
      dotsWrap.querySelectorAll(".heroDot").forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = Number(btn.getAttribute("data-i"));
          index = i;
          renderSlide(index);
          start();
        });
      });
    }
  
    // pause on hover (UX)
    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);
  
    // init
    renderSlide(index);
    start();
  })();
  // ===== Events filter (chips) =====
(function () {
    const chips = document.getElementById("eventChips");
    const grid = document.getElementById("eventGrid");
    if (!chips || !grid) return;
  
    const items = Array.from(grid.querySelectorAll(".eventCard"));
    const btns = Array.from(chips.querySelectorAll(".chip"));
  
    function setActive(btn){
      btns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    }
  
    function applyFilter(filter){
      items.forEach(card => {
        const cat = card.getAttribute("data-cat");
        const show = (filter === "all") || (cat === filter);
        card.style.display = show ? "" : "none";
      });
    }
  
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        const f = btn.getAttribute("data-filter");
        setActive(btn);
        applyFilter(f);
      });
    });
  })();
  
  
  // ===== 3D tours slider (simple) =====
  (function () {
    const track = document.getElementById("tourTrack");
    const prev = document.getElementById("tourPrev");
    const next = document.getElementById("tourNext");
    if (!track || !prev || !next) return;
  
    function scrollByCard(dir){
      const card = track.querySelector(".tourCard");
      if (!card) return;
      const gap = 18;
      const step = card.getBoundingClientRect().width + gap;
      track.scrollBy({ left: dir * step, behavior: "smooth" });
    }
  
    prev.addEventListener("click", () => scrollByCard(-1));
    next.addEventListener("click", () => scrollByCard(1));
  })();
  
  
  // ===== Video modal =====
  (function () {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    if (!modal || !frame) return;
  
    function openModal(src){
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      frame.src = src + "?autoplay=1";
      document.body.style.overflow = "hidden";
    }
  
    function closeModal(){
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      frame.src = "";
      document.body.style.overflow = "";
    }
  
    document.addEventListener("click", (e) => {
      const play = e.target.closest("[data-video]");
      if (play){
        openModal(play.getAttribute("data-video"));
        return;
      }
      if (e.target.closest("[data-close]")) closeModal();
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  })();

  /* =========================
   ROUTES DATA (12 places)
========================= */
const ROUTES = {
    bluebay: {
      title: "Теңіз шығанағы «Көгілдір бухта»",
      img: "https://backend.mangystau-travel.kz/storage/20/jpeg.jpg",
      gallery: [
        "https://backend.mangystau-travel.kz/storage/21/-W98ovk06ML3F.jpg",
        "https://backend.mangystau-travel.kz/storage/22/palec.jpg",
        "https://backend.mangystau-travel.kz/storage/109/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_151340055.png",
        "https://backend.mangystau-travel.kz/storage/rScpnZC6Kv4KOu8VoYRh86tdzymK2VlvsqLoOLx6.png"
      ],
      short: "Маңғышлақ түбегінің тастақты жағалауы мен мөлдір суы үйлескен ерекше шығанақ.",
      about:
      "«Көгілдір бухта» — Каспий жағалауындағы ең фотогендік орындардың бірі. Бұл жерде теңіздің түсі күннің уақытына және ауа райына қарай құбылып, көгілдірден қою көкке дейін өзгеріп тұрады.\n\n" +
      "Жағалау сызығы жартасты әрі ерекше бедерлі: бір жағынан теңіз толқыны, екінші жағынан табиғи тас қабаттары панорама береді. Сондықтан бұл локация фото/видео түсіруге, тыныш серуендеуге және демалуға өте қолайлы.\n\n" +
      "Кеңес: жел күшейетін күндері жеңіл желқабақ киім алған дұрыс. Су мен күннен қорғайтын крем міндетті. Жартастардың жиегіне тым жақындама — қауіпсіздік маңызды.",
 facts: {
        location: "Маңғыстау облысы, Каспий жағалауы",
        duration: "1 күн",
        season: "Көктем – күз",
        level: "Жеңіл",
        format: "Жеке/топтық тур"
      },
      highlights: ["Жағалау панорамасы", "Фотонүктелер", "Теңіз ауасы", "Күн батуы"],
      tips: ["Желге арналған сырт киім ал", "Су және бас киім міндетті", "Табиғатты таза ұста"],
      panoLink: "https://www.google.com/maps/@44.1705503,50.852816,3a,90y,10.73h,74.03t/data=!3m8!1e1!3m6!1sAF1QipN7AABWwbHSlYCo5e3iqiOEYNH-nat4wfEfmo-C!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipN7AABWwbHSlYCo5e3iqiOEYNH-nat4wfEfmo-C%3Dw900-h600-k-no-pi15.974414257683833-ya10.728295542900213-ro0-fo100!7i9000!8i4500?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",

      // Қаласаң осылай да қалдыр: карта батырмасы сол линкке апарады
      mapLink: "https://www.google.com/maps/@44.1705503,50.852816,3a,90y,10.73h,74.03t/data=!3m8!1e1!3m6!1sAF1QipN7AABWwbHSlYCo5e3iqiOEYNH-nat4wfEfmo-C!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipN7AABWwbHSlYCo5e3iqiOEYNH-nat4wfEfmo-C%3Dw900-h600-k-no-pi15.974414257683833-ya10.728295542900213-ro0-fo100!7i9000!8i4500?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
    tupkaragan: {
      title: "«Түпқараған» мүйісі",
      img: "https://backend.mangystau-travel.kz/storage/24/mys-tupkaragan1.jpg",
      gallery: [
        "https://backend.mangystau-travel.kz/storage/23/mys-tupkaragan_cover.webp",
        "https://backend.mangystau-travel.kz/storage/25/dsc_0141.jpg",
        "https://backend.mangystau-travel.kz/storage/26/dsc_0173.jpg",
      ],
      short: "Тарихы мен табиғаты тоғысқан, кең көкжиек ашылатын мүйіс.",
      about:
      "Түпқараған мүйісі — Маңғыстаудың географиясы мен табиғи мінезін сезінетін ерекше нүкте. Жартасты жота бойымен жүргенде бірден кең көкжиек ашылып, Каспийдің шексіздігі анық көрінеді.\n\n" +
      "Бұл локация маршруттық саяхат үшін өте ыңғайлы: қысқа серуен жасап, бірнеше «көру нүктесінен» панораманы тамашалауға болады. Желдің дыбысы, толқынның ырғақтары және жартас қабаттары — бәрі ерекше атмосфера береді.\n\n" +
      "Кеңес: мүйіс аймағында жел жиі болады, бас киім мен жылы қабат алып жүр. Жартастың шетіне жақындама — қауіпсіз арақашықтық сақта.",
       facts: {
        location: "Түпқараған ауданы",
        duration: "1 күн",
        season: "Көктем – күз",
        level: "Орташа",
        format: "Джип-тур / трекинг"
      },
      highlights: ["Жартасты жота", "Каспий панорамасы", "Фото/дронға лайық"],
      tips: ["Тың жер – аяқ киім мықты болсын", "Байланыс әлсіз болуы мүмкін"],
      mapLink: "https://www.google.com/maps/@44.5868301,50.7504082,3a,90y,91.85h,80.1t/data=!3m8!1e1!3m6!1sAF1QipMflS4_HTqgOW1ZmursJ8X6vHOZ_EllSAPAPUCx!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMflS4_HTqgOW1ZmursJ8X6vHOZ_EllSAPAPUCx%3Dw900-h600-k-no-pi9.901792409884209-ya258.8535413962074-ro0-fo100!7i7070!8i3535?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
    zhygylgan: {
      title: "Жығылған мүйісі",
      img: "https://backend.mangystau-travel.kz/storage/27/2020-07-13-122731.jpg",
      gallery: [
        "https://backend.mangystau-travel.kz/storage/28/3-2020-07-13-122726.jpg ",
        "https://backend.mangystau-travel.kz/storage/29/6-2020-07-13-122726.jpg",
        "https://backend.mangystau-travel.kz/storage/30/i8nrq8lw0-2020-07-13-122728.jpg",
        "https://backend.mangystau-travel.kz/storage/31/i-2020-07-13-122727.jpg",
        "https://backend.mangystau-travel.kz/storage/32/i4d8f2k67-2020-07-13-122727.jpg"
      ],
      short: "Табиғи опырылманың ізі қалған ерекше геологиялық аймақ.",
      about:
      "Жығылған — табиғи процестердің қуатын көрсететін ерекше локация. Бұл жерде жер бедері «қозғалыста» болғандай әсер береді: жартастардың құрылымы, қабаттардың сызығы және кең ашық кеңістік өте әсерлі көрінеді.\n\n" +
      "Геологияға қызығатындар үшін бұл — қызықты нүкте: қабаттардан табиғаттың тарихын «оқуға» болады. Сонымен бірге панорамалық кадрлар үшін де керемет орын.\n\n" +
      "Кеңес: жолы күрделірек болуы мүмкін, ыңғайлы аяқ киім керек. Қауіпсіздік үшін топпен жүрген дұрыс, ал жартас жиегінде аса сақ бол.",
      facts: {
        location: "Маңғыстау облысы",
        duration: "1 күн",
        season: "Көктем – күз",
        level: "Орташа",
        format: "Экскурсия / фото-тур"
      },
      highlights: ["Геология", "Панорама", "Каспий жаққа көрініс"],
      tips: ["Қауіпсіздік үшін жартастың шетіне жақындама"],
      mapLink: "https://city3d.kz/travel/zagadki-mangistau/98-3d-tour-zhygalgan.html"
    },
  
    kapamsay: {
      title: "Қапамсай каньоны",
      img: "https://backend.mangystau-travel.kz/storage/34/zapadniy_kaz78_4x3.jpg",
      gallery: [
        "https://backend.mangystau-travel.kz/storage/35/08_foto_Kanyon_Kapamsai.jpg",
        "https://backend.mangystau-travel.kz/storage/36/01_%D1%84%D0%BE%D1%82%D0%BE_%D0%9A%D0%B0%D0%BD%D1%8C%D0%BE%D0%BD_%D0%9A%D0%B0%D0%BF%D0%B0%D0%BC%D1%81%D0%B0%D0%B8%CC%86.jpg",
        "https://backend.mangystau-travel.kz/storage/105/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_144648052.png"
      ],
      short: "Борлы шатқал, ұзын сайлар және әсерлі бедерлер.",
      about:
      "Қапамсай — борлы (ақшыл) қабаттардан құралған әсерлі шатқал. Сай бойымен жүргенде рельефтің түрлі пішіндерін, қабаттардың сызықтарын және табиғи «галерея» сияқты көріністерді байқайсың.\n\n" +
      "Бұл маршрут қысқа трекингке жақсы: көп шаршамай-ақ бірнеше әдемі нүктеге жетуге болады. Фотоға да өте ұтымды — әсіресе көлеңке түсетін уақытта қабаттар анық көрінеді.\n\n" +
      "Кеңес: сай ішінде ауа салқындау болуы мүмкін, жеңіл күрте ал. Су міндетті. Жаңбырлы күні сайға түспеген дұрыс.",
      facts: {
        location: "Түпқараған өңірі",
        duration: "1 күн",
        season: "Көктем – күз",
        level: "Орташа",
        format: "Трекинг / экскурсия"
      },
      highlights: ["Борлы қабаттар", "Шатқал көрінісі", "Тыныш табиғат"],
      tips: ["Суға төзімді аяқ киім + шаңға маска пайдалы"],
      mapLink: "https://city3d.kz/travel/zagadki-mangistau/97-3d-tour-capamsay.html"
    },
  
    torysh: {
      title: "Торыш — шарлы конкрециялар алқабы",
      img: "https://backend.mangystau-travel.kz/storage/38/131d017abbedaa043f8fabb0d7bb154b.jpeg",
      gallery: [
        "https://backend.mangystau-travel.kz/storage/39/photo_317929.jpeg",
        "https://backend.mangystau-travel.kz/storage/40/Torysh1125.jpg",
        "https://backend.mangystau-travel.kz/storage/41/news6857.jpg",
        "https://backend.mangystau-travel.kz/storage/42/dji_20230607134623_0085_d.jpg"
      ],
      short: "Далаға шашылған тас шарлар — Маңғыстаудың ең әйгілі құпияларының бірі.",
      about:
      "Торыш алқабы — жүздеген шар тәрізді конкрециялар кездесетін ерекше табиғи құбылыс. Бұл тастардың пішіні мен орналасуы туристерді қатты қызықтырады және «басқа планета» сияқты әсер береді.\n\n" +
      "Әсіресе күн батарда тастардың көлеңкесі ұзарып, рельеф терең көрінеді — дәл сол уақыт контент түсіруге ең қолайлы.\n\n" +
      "Кеңес: тастарға шығып секірме — табиғи мұраға зиян келмеуі керек. Суды жеткілікті ал, желден қорғайтын киім пайдалы.",
      facts: {
        location: "Қарақия ауданы",
        duration: "1 күн",
        season: "Көктем – күз",
        level: "Жеңіл",
        format: "Экскурсия / фото-тур"
      },
      highlights: ["Тас шарлар", "Кең дала", "Ерекше атмосфера"],
      tips: ["Тасқа зиян келтірме, алып кетпе"],
      mapLink: "https://www.google.com/maps/place/Torysh/@44.3237053,51.5962213,3a,75y,326.36h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICEsY2XhwE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c-hv_fTGiLFvYdvdvB7rVzF1b52pIt1GRPcUfMJEqz3Tf5vMJIaw9mOJ8mKlhJCSsTxPXYMrQghoQFUxBMsuJC3tV1USeJQrdpgSOvJHuiloxjfHBJhySCIRr9KzPEGlqnjqz6fZA%3Dw900-h600-k-no-pi0-ya235.36374-ro0-fo100!7i8704!8i4352!4m14!1m7!3m6!1s0x41b6d481008da615:0xb78671aac7afc326!2sTorysh!8m2!3d44.3615366!4d51.5610276!16s%2Fg%2F11gfk0l2z8!3m5!1s0x41b6d481008da615:0xb78671aac7afc326!8m2!3d44.3615366!4d51.5610276!16s%2Fg%2F11gfk0l2z8?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
    kokala: {
      title: "Көкала (Кокала) урочищесі",
      img: "https://backend.mangystau-travel.kz/storage/43/0_10_570-min.JPG",
      gallery: [
       "https://backend.mangystau-travel.kz/storage/44/0_11_599-min.JPG",
       "https://backend.mangystau-travel.kz/storage/45/kok-kala.jpg",
       "https://backend.mangystau-travel.kz/storage/46/1650048490_kokala-tract-8.jpg"
      ],
      short: "Жартастар, кең көкжиек, тыныш табиғат — демалуға да, зерттеуге де қолайлы.",
      about:
      "Көкала — бедері анық көрінетін, ашық кеңістік пен панорамаға бай локация. Мұнда табиғаттың қаталдығы мен әсемдігі қатар сезіледі: желдің дыбысы, жартастың құрылымы және кең көкжиек ерекше атмосфера береді.\n\n" +
      "Көкалада көп шаршамай-ақ бірнеше жақсы көру нүктесін аралап шығуға болады. Бұл жер фотосессияға да, тыныш серуенге де өте ыңғайлы.\n\n" +
      "Кеңес: күннен қорған, су алып жүр. Жел жиі болатындықтан, жеңіл желқабақ киім пайдалы.",
      facts: {
        location: "Маңғыстау облысы",
        duration: "1 күн",
        season: "Көктем – күз",
        level: "Жеңіл/орташа",
        format: "Джип-тур / серуен"
      },
      highlights: ["Жартасты көрініс", "Фотонүктелер", "Кең панорама"],
      tips: ["Күннен қорғайтын крем алып жүр"],
      mapLink: "https://www.google.com/maps/place/%D0%9A%D3%A9%D0%BA%D0%B0%D0%BB%D0%B0/@44.2473596,51.8856483,3a,75y,266.57h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDr37uR3QE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c8zoUPh_dKNO2FicQDMAtMrU-hhHjBrSPQJ6Ktdu-oS3Kdgg3UP5Yuygj9bC3-Cpj5xUljiLVnxPR-xYQ4OMIgM6ck6rxGPNe2vySfEAfIKfPgPrQLNlbW7Sj9B_piCknhWrFH0UA%3Dw900-h600-k-no-pi0-ya266.5722-ro0-fo100!7i14400!8i7200!4m10!1m2!2m1!1z0JrTqdC60LDQu9CwINGD0YDQvtGH0LjRidC10YHRliAzRA!3m6!1s0x41b6df382f76e5ab:0x8128fb7cc217c131!8m2!3d44.2473596!4d51.8856483!15sCiLQmtOp0LrQsNC70LAg0YPRgNC-0YfQuNGJ0LXRgdGWIDNEkgESdG91cmlzdF9hdHRyYWN0aW9u4AEA!16s%2Fg%2F11jyfd6wvk?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
    akmysh: {
      title: "Ақмыш урочищесі",
      img: "https://backend.mangystau-travel.kz/storage/47/1602160368_01-4.jpg",
      gallery: [
       "https://backend.mangystau-travel.kz/storage/48/1602160432_01-3.jpg",
       "https://backend.mangystau-travel.kz/storage/49/1602160401_01-2.jpg",
       "https://backend.mangystau-travel.kz/storage/47/1602160368_01-4.jpg"
      ],
      short: "Жасыл оазис: бұлақтар, ағаштар, көлеңкелі сайлар.",
      about:
      "Ақмыш — шөлейт өңірде «жасыл» көрінісімен ерекшеленетін орын. Жерасты су көздері мен табиғи ылғал әсерінен бұл жерде өсімдік көбірек кездесіп, микроклимат сезіледі.\n\n" +
      "Серуен үшін өте жайлы: көлеңкелі учаскелер болуы мүмкін, ал табиғат көрінісі басқа Маңғыстау локацияларына қарағанда жұмсақтау әсер береді.\n\n" +
      "Кеңес: табиғи бұлақ көздерін бүлдірме, қоқыс қалдырма. Аяқ киім ыңғайлы болсын — кей жері тайғанақ болуы мүмкін.",
       facts: {
        location: "Маңғыстау облысы",
        duration: "0.5–1 күн",
        season: "Көктем – жаз – күз",
        level: "Жеңіл",
        format: "Отбасылық серуен"
      },
      highlights: ["Оазис", "Бұлақтар", "Көлеңкелі аймақ"],
      tips: ["Қоқыс қалдырма, табиғатты қорға"],
      mapLink: "https://www.google.com/maps/place/%D0%90%D2%9B%D0%BC%D1%8B%D1%88+%D1%81%D0%B0%D0%B9%D1%8B/@44.2484848,51.9875665,3a,75y,106.57h,94.6t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgID2h6SYSA!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c-JOooxPM23gQRXlzFKwvpcwwS4F8xN4oXuBwlVPCq5RVAN61V5KcEY7zKvvDTYHwK7ckOqTbe7AUMx7xh4GbHHHKKd6e0VlvM2xudhSJywyZmXFpys1emRxHFmFmWiMxCq_Z8H%3Dw900-h600-k-no-pi-4.595638766272387-ya105.5716447337781-ro0-fo100!7i8192!8i4096!4m14!1m7!3m6!1s0x41b721c01c355121:0x6437098bbfcaf35!2z0JDSm9C80YvRiCDRgdCw0LnRiw!8m2!3d44.2484848!4d51.9875665!16s%2Fg%2F11jdgxq9z4!3m5!1s0x41b721c01c355121:0x6437098bbfcaf35!8m2!3d44.2484848!4d51.9875665!16s%2Fg%2F11jdgxq9z4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
    
  
    tuzbair: {
      title: "Тұзбайыр сор алқабы",
      img: "https://backend.mangystau-travel.kz/storage/54/4de825188efc4522b56be71591cbe9ebmax-1200x800-97.jpg",
      gallery: [
       "https://backend.mangystau-travel.kz/storage/55/sor-tuzbair_2.webp",
       "https://backend.mangystau-travel.kz/storage/56/%D0%A2%D1%83%D0%B7%D0%B1%D0%B0%D0%B8%D1%80.jpg",
       "https://backend.mangystau-travel.kz/storage/57/caption.jpg",
       "https://backend.mangystau-travel.kz/storage/58/IMG_2966.jpg",
       "https://backend.mangystau-travel.kz/storage/59/izbgxivqe.jpg",
       "https://backend.mangystau-travel.kz/storage/60/7646097.jpg"
             ],
      short: "Ақ сор, кең кеңістік және ерекше “ай пейзажы”.",
      about:
      "Тұзбайыр — сорлы алқаптардың ең әсерлілерінің бірі. Ақ түсті қабаттар, кең көкжиек және жарыққа қарай құбылатын реңктер туристерді бірден баурап алады.\n\n" +
      "Бұл жердің басты ерекшелігі — минималистік әрі өте «кинолық» көрініс. Кеңістік сезімі күшті, сондықтан контент түсіргің келсе, дәл осы жерде кадр өте таза шығады.\n\n" +
      "Кеңес: сорға тым терең кірмеу керек (жер жұмсарып кетуі мүмкін). Жол жағдайын алдын ала біліп ал. Су, көзілдірік, крем міндетті.",
        facts: {
        location: "Маңғыстау облысы",
        duration: "1 күн",
        season: "Көктем – күз",
        level: "Жеңіл",
        format: "Экскурсия / фото-тур"
      },
      highlights: ["Ақ сор", "Кең панорама", "Дронға керемет"],
      tips: ["Жаңбырдан кейін жол қиындауы мүмкін"],
      mapLink: "https://www.google.com/maps/@44.0331412,53.2043718,3a,90y,65.18h,91.85t/data=!3m8!1e1!3m6!1sAF1QipM3OS0gRQs2gf24UaXmzvU8z-JkxwkQ6Ew2zgeo!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipM3OS0gRQs2gf24UaXmzvU8z-JkxwkQ6Ew2zgeo%3Dw900-h600-k-no-pi-1.851052631578952-ya65.17999999999999-ro0-fo100!7i10000!8i5000?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
    kyzylkup: {
      title: "Қызылқұп урочищесі",
      img: "https://backend.mangystau-travel.kz/storage/62/0_8_IMG_3095-min.jpg",
      gallery: [
       "https://backend.mangystau-travel.kz/storage/63/%D0%A3%D1%80%D0%BE%D1%87%D0%B8%D1%89%D0%B5-%D0%9A%D1%8B%D0%B7%D1%8B%D0%BB%D0%BA%D1%83%D0%BF.jpg",
       "https://backend.mangystau-travel.kz/storage/64/25663.970.jpg",
       "https://backend.mangystau-travel.kz/storage/65/aa8a8185-edit-scaled.jpg",
       "https://backend.mangystau-travel.kz/storage/66/image-1.png"
        ],
      short: "Түрлі түсті қабаттардан құралған ерекше жоталар.",
      about:
      "Қызылқұп — табиғи қабаттардың түсі айқын көрінетін ерекше орын. Қызыл, сары, ақ реңктер бір-біріне ауысып, «жолақ» сияқты эффект береді.\n\n" +
      "Бұл локацияны көбісі «Марс пейзажы» деп атайды, себебі түс пен рельеф өте ерекше. Әсіресе күн батарда түстер тереңдеп, кадр одан сайын әсерлі болады.\n\n" +
      "Кеңес: көп жүру керек болуы мүмкін, ыңғайлы аяқ киім маңызды. Табиғи қабаттарды бұзба, сынып тұрған жерлерге шықпа.",
        facts: {
        location: "Маңғыстау облысы",
        duration: "1 күн",
        season: "Көктем – күз",
        level: "Орташа",
        format: "Экскурсия / фото-тур"
      },
      highlights: ["Түсті қабаттар", "Пейзаж", "Фотонүктелер"],
      tips: ["Түсте күн қатты — таңертең/кешке бар жақсы"],
      mapLink: "https://www.google.com/maps/place/%D0%9A%D1%8B%D0%B7%D1%8B%D0%BB+%D0%BA%D1%83%D0%BF/@43.474207,53.810185,3a,75y,293.54h,90t/data=!3m8!1e1!3m6!1sCIABIhAA3jU3PSXmXGe4UbIABtHk!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c8zRpRVhWhlojFEAgsRx_LzWcxVTVmTrxDLFW-I3EGHVT9x7jf6uUv9pC6Zw3pxJ1Mb1rhMKsapyJ1wHhIHN9U8m8qUb5-id_C6iQ6UyAw07xa-x9I2NkEpDpiYOjOTbLgnZIHuD83rSgA%3Dw900-h600-k-no-pi0-ya232.29853832153321-ro0-fo100!7i8192!8i4096!4m14!1m7!3m6!1s0x41c8690058b052c7:0x77d65891da6342ca!2z0JrRi9C30YvQuyDQutGD0L8!8m2!3d43.4744289!4d53.809483!16s%2Fg%2F11y73nl3ht!3m5!1s0x41c8690058b052c7:0x77d65891da6342ca!8m2!3d43.4744289!4d53.809483!16s%2Fg%2F11y73nl3ht?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
    bokty: {
      title: "Боқты тауы",
      img: "https://backend.mangystau-travel.kz/storage/67/0_5_IMG_0450-min.jpg",
      gallery: [
       "https://backend.mangystau-travel.kz/storage/68/gora-bokty_cover.webp",
       "https://backend.mangystau-travel.kz/storage/69/1659783356_bokty-mount-3.jpg",
       "https://backend.mangystau-travel.kz/storage/70/original-146.jpg",
       "https://backend.mangystau-travel.kz/storage/67/0_5_IMG_0450-min.jpg"
      ],
      short: "Ежелгі теңіз түбінен қалған қабаттары бар фотогендік тау.",
      about:
      "Боқты — рельефі анық, алыстан бірден байқалатын тау. Оның қабаттары ежелгі геологиялық процестерді көрсетіп, табиғаттың ұзақ тарихын еске салады.\n\n" +
      "Бұл жерде панорама жақсы ашылады: айнала төңірек кең, кадр «кең масштабта» шығады. Сондықтан фотоға өте әдемі нәтиже береді.\n\n" +
      "Кеңес: биіктеу жерлерде жел күшейеді. Қауіпсіздік сақта, жартас жиегіне жақындама, жалғыз шықпаған дұрыс.",
        facts: {
        location: "Маңғыстау облысы",
        duration: "1 күн",
        season: "Көктем – күз",
        level: "Жеңіл/орташа",
        format: "Экскурсия / серуен"
      },
      highlights: ["Қабаттар", "Панорама", "Фото"],
      tips: ["Көлікпен бару үшін жол жағдайын алдын ала тексер"],
      mapLink: "https://www.google.com/maps/place/%D0%93%D0%BE%D1%80%D0%B0+%D0%91%D0%BE%D0%BA%D1%82%D1%8B/@43.4219157,53.7995346,525m/data=!3m1!1e3!4m14!1m7!3m6!1s0x41c8690d9a1f64a3:0xce26741fa5ef2f80!2z0JPQvtGA0LAg0JHQvtC60YLRiw!8m2!3d43.422976!4d53.799393!16s%2Fg%2F11qprhsdmq!3m5!1s0x41c8690d9a1f64a3:0xce26741fa5ef2f80!8m2!3d43.422976!4d53.799393!16s%2Fg%2F11qprhsdmq?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
    teyesu: {
      title: "Түйесу құмдары",
      img: "https://backend.mangystau-travel.kz/storage/71/teyesu-sands-mangystau-region-(6).jpg",
      gallery: [
       "https://backend.mangystau-travel.kz/storage/72/8235680.jpg",
       "https://backend.mangystau-travel.kz/storage/73/9016859.jpg",
       "https://backend.mangystau-travel.kz/storage/71/teyesu-sands-mangystau-region-(6).jpg"
       ],
      short: "Құм жоталары, жел бедері және күн батар шақтағы ерекше атмосфера.",
      about:
      "Түйесу құмдары — құм жоталары айқын көрінетін, табиғаты өте «динамикалық» локация. Жел бағыты өзгерген сайын құмның беті де, өрнегі де жаңарып отырады.\n\n" +
      "Кешкі уақытта құм алтын түске боялып, кадр өте жұмсақ әрі жылы шығады. Жеңіл серуенге, тынығуға және контент түсіруге тамаша орын.\n\n" +
      "Кеңес: құмда жүру аяққа салмақ түсіреді, сондықтан жеңіл аяқ киім/ыңғайлы кроссовка ки. Су, көзілдірік, крем алып жүр.",  
        facts: {
        location: "Маңғыстау облысы",
        duration: "0.5–1 күн",
        season: "Көктем – күз",
        level: "Жеңіл",
        format: "Фото-тур / серуен"
      },
      highlights: ["Құм жоталары", "Күн батуы", "Тыныштық"],
      tips: ["Көзілдірік және су міндетті"],
      mapLink: "https://www.google.com/maps/place/TUYESU+Dunes/@43.3713036,53.3803525,2221m/data=!3m1!1e3!4m6!3m5!1s0x41c849b29839fff1:0x2a99d020cfe4f563!8m2!3d43.3723667!4d53.3910351!16s%2Fg%2F11l5gbydwc?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    bozzhyra: {
      title: "Бозжыра",
      img: "https://massaget.kz/userdata/blogs/blogs_27469/image_l.jpeg",
      gallery: [
        "https://www.advantour.com/img/kazakhstan/mangystau/bozzhyra.jpg",
        "https://static.tildacdn.pro/tild3738-6631-4766-b061-636238626639/bozjyra-kazakhstan.jpg",
        "https://avatars.mds.yandex.net/i?id=c823683f4fa33654dc1a72fa9c87fd528ca5018e-10871820-images-thumbs&n=13",
        "https://kz.kursiv.media/wp-content/uploads/2025/03/whatsapp-image-2025-03-07-at-15.40.42-1024x768.jpeg"
      ],
      short: "Ақ борлы шыңдар, кең панорама және Маңғыстаудың ең танымал фотонүктелерінің бірі.",
      about:
        "Бозжыра — Маңғыстаудың визит картасы саналатын ерекше табиғи ландшафт. Мұнда ақ борлы жартастар мен қия беткейлер алыстан-ақ көз тартады, ал жоғары нүктелерден кең дала мен көкжиек өте әсерлі көрінеді.\n\n" +
        "Бұл жердің басты ерекшелігі — рельефтің «театр декорациясы» сияқты көрінуі: кей бұрыштан қарағанда мұнараларға ұқсайтын шыңдар, кей жерден — толқын тәрізді қабаттар байқалады. Таңертең және күн батарда жарық жұмсақ болып, бордың түсі одан әрі әдемі ашылады.\n\n" +
        "Бозжыраға барған кезде қауіпсіздікке мән бер: шетке тым жақындама, құлама беткейлер болуы мүмкін. Жолдың кей бөліктері қиындау болуы ықтимал, сондықтан алдын ала маршрутты белгілеп, көлік мүмкіндігін есептеген дұрыс.\n\n" +
        "Кеңес: су қоры, бас киім, күннен қорғайтын крем және желге арналған жеңіл сырт киім міндетті. Фото/видео түсіретін болсаң, таңғы сағаттар ең ұтымды уақыт.",
      facts: {
        location: "Маңғыстау облысы",
        duration: "1 күн",
        season: "Көктем – күз",
        level: "Орташа",
        format: "Жеке/топтық тур"
      },
      highlights: ["Ақ борлы шыңдар", "Панорама нүктелері", "Күн батуы", "Фототур"],
      tips: ["Су қорын көп ал", "Күннен қорғайтын крем жақ", "Шетке жақындама", "Жолға ыңғайлы аяқ киім ки"],
      mapLink: "https://maps.app.goo.gl/PuP3JwkbuA3NJAxn7"
      // panoLink: "https://..."  // болса қоясың
    },
  
    airakty: {
      title: "Айрақты",
      img: "https://backend.mangystau-travel.kz/storage/100/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_140908311.png",
      gallery: [
        "https://backend.mangystau-travel.kz/storage/101/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_140917234.png",
        "https://backend.mangystau-travel.kz/storage/102/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_140935461.png",
        "https://backend.mangystau-travel.kz/storage/103/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_140945360.png",
        "https://backend.mangystau-travel.kz/storage/104/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_141002757.png"
      ],
      short: "Жартасты «қамалдар», ерекше бедерлер және серуенге ыңғайлы панорамалық аймақ.",
      about:
        "Айрақты — жел мен уақыт мүсіндеген жартасты бедерлерімен танымал локация. Бұл аймақтағы тастар кейде мұнараға, кейде қамал қабырғасына ұқсап тұрады, сондықтан туристер оны «жартасты қала» деп те атайды.\n\n" +
        "Айрақтыда серуен жасаған кезде әр бұрылыстан жаңа композиция ашылады: қабат-қабат жыныстар, тар шатқалдар, кең алаңқайлар. Фотоға да өте әдемі түседі, әсіресе жарық бүйірден түскен кезде бедердің көлеңкесі айқындалып, кадр терең көрінеді.\n\n" +
        "Бұл жер белсенді жүрісті ұнататындарға жақсы: тым ауыр трек емес, бірақ кей тұстарда тас үстімен жүру керек болады. Сол үшін табаны таймайтын кроссовка немесе треккинг аяқ киім кию ұсынылады.\n\n" +
        "Кеңес: жел жиі болатындықтан, жеңіл куртка алып жүр. Су, жеңіл тіскебасар, навигацияға телефон қуаты (powerbank) пайдалы болады.",
      facts: {
        location: "Маңғыстау облысы",
        duration: "0.5–1 күн",
        season: "Көктем – күз",
        level: "Жеңіл–орташа",
        format: "Жеке/топтық тур"
      },
      highlights: ["Жартасты қамалдар", "Фотонүктелер", "Кең панорама"],
      tips: ["Таймайтын аяқ киім ки", "Желге арналған киім ал", "Су және powerbank алып жүр"],
      mapLink: "https://city3d.kz/travel/zagadki-mangistau/93-3d-tour-airakty.html"
    },
  
    sherkala: {
      title: "Шеркала",
      img: "https://backend.mangystau-travel.kz/storage/96/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_125540470.png",
      gallery: [
        "https://backend.mangystau-travel.kz/storage/97/IMG_1905.JPG",
        "https://backend.mangystau-travel.kz/storage/98/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_125613809.png",
        "https://backend.mangystau-travel.kz/storage/99/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_125702045.png"
      ],
      short: "Аңызға толы тау, алыстан көрінетін ерекше силуэт және тарихи атмосфера.",
      about:
        "Шеркала — Маңғыстаудағы ең танымал табиғи нысандардың бірі. Оның пішіні алыстан қарағанда алып киіз үйге немесе бекініске ұқсайды. Сол себепті бұл тау туралы аңыздар көп айтылады және туристер үшін ерекше қызығушылық тудырады.\n\n" +
        "Шеркаланың жанында тұрған кезде кең дала мен көкжиек сезімі күшейеді: айнала ашық, аспан кең, ал тау бірден композицияның ортасына айналады. Фотоға түсіргенде де өте “киношный” кадрлар шығады.\n\n" +
        "Егер уақыт болса, таудың айналасын жаяу аралап шығу пайдалы: әр қырынан басқа пішін байқалады. Кей учаскелерде тас пен қиыршық көп, сондықтан ыңғайлы аяқ киім маңызды.\n\n" +
        "Кеңес: күн қатты болатын маусымда көлеңке аз, сондықтан бас киім, су, крем міндетті. Таңертең немесе күн батарда барсаң — ауа жұмсақ, жарық әдемі болады.",
      facts: {
        location: "Маңғыстау облысы",
        duration: "0.5–1 күн",
        season: "Көктем – күз",
        level: "Жеңіл",
        format: "Фото-тур / серуен"
      },
      highlights: ["Аңызға толы тау", "Панорама", "Күн батуы", "Фототур"],
      tips: ["Көлеңке аз — бас киім ал", "Су міндетті", "Таңертең/кешке барған жақсы"],
      mapLink: "https://www.google.com/maps/place/%D0%A8%D0%B5%D1%80%D0%BA%D0%B0%D0%BB%D0%B0/@44.256389,52.006111,3a,75y,4.85h,94.99t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDC4tGZYA!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c8OOobhZEzbg5ryYhJOSVqnbBgShml7OtfqzIkViz0EinFeH5ciq-cAm18JVGD28eiNpOaWcAL8AsYvQ1TPb6BGh828HMEktI81AI9N3TuO6e_9pwS1b16fKA6WCCveap-OQEE%3Dw900-h600-k-no-pi-4.988058934401494-ya4.8523275495318785-ro0-fo100!7i3840!8i1920!4m14!1m7!3m6!1s0x41b72194ba4f000b:0xa8e6273dcdbaae6e!2z0KjQtdGA0LrQsNC70LA!8m2!3d44.256389!4d52.006111!16s%2Fm%2F0gg5m8b!3m5!1s0x41b72194ba4f000b:0xa8e6273dcdbaae6e!8m2!3d44.256389!4d52.006111!16s%2Fm%2F0gg5m8b?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
    otpantau: {
      title: "Отпан тау",
      img: "https://backend.mangystau-travel.kz/storage/92/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_114216656.png",
      gallery: [
        "https://backend.mangystau-travel.kz/storage/93/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_114312826.png",
        "https://backend.mangystau-travel.kz/storage/94/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_114323332.png",
        "https://backend.mangystau-travel.kz/storage/95/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2023-12-26_114338576.png"
      ],
      short: "Киелі орын, биік төбе және ұлттық рух сезілетін панорамалық нүкте.",
      about:
        "Отпан тау — Маңғыстаудағы символдық, киелі орындардың бірі. Бұл жерге келген адамдар табиғатты ғана емес, өңірдің рухани атмосферасын да сезінеді. Биіктен қарағанда айнала кең ашылып, аймақтың көлемі мен тынысы анық байқалады.\n\n" +
        "Отпан тауға бару — тыныш серуен мен ой жинауға жақсы мүмкіндік. Әсіресе көктемде ауа жұмсақ, жол ыңғайлырақ болады. Кей кездері жел күшейеді, сондықтан киім таңдауда соны ескер.\n\n" +
        "Бұл локация топпен баруға да ыңғайлы: көрініс нүктелері бар, фотоға түсетін орындар жеткілікті. Панорама сүйетіндер үшін ең жақсы уақыт — таңертең немесе күн батар алдындағы сәт.\n\n" +
        "Кеңес: жоғарыда жел салқындау болады. Су, жеңіл куртка және телефонға заряд (powerbank) алып жүрген дұрыс.",
      facts: {
        location: "Маңғыстау облысы",
        duration: "0.5 күн",
        season: "Көктем – күз",
        level: "Жеңіл",
        format: "Жеке/топтық тур"
      },
      highlights: ["Киелі атмосфера", "Панорама нүктелері", "Кең дала көрінісі"],
      tips: ["Желге арналған киім ал", "Су және powerbank алып жүр", "Кешке жарық әдемі"],
      mapLink: "https://www.google.com/maps/place/%D0%9E%D1%82%D0%BF%D0%B0%D0%BD+%D0%A2%D0%B0%D1%83/@44.1877453,51.8893102,3a,75y,1.34h,116.32t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDC4rHDXg!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c9sUtLuzZ8EhjjAvKs7nJexOrlrjxoesjBFRh0l03sa78hJiey7EJ-fDZaBVP-BmRXGTX0J7rupqTyknqXirtykCRCo35z7TUpkj8nxCwpMCdam2JvdCGsBJ3Qv4uyeckqedSg7%3Dw900-h600-k-no-pi-26.32198248301512-ya1.3350766695648417-ro0-fo100!7i3840!8i1920!4m14!1m7!3m6!1s0x41b6e09d4d1c95fb:0xea4392a08f4abb42!2z0J7RgtC_0LDQvSDQotCw0YM!8m2!3d44.1877453!4d51.8893102!16s%2Fg%2F11byyh_rfv!3m5!1s0x41b6e09d4d1c95fb:0xea4392a08f4abb42!8m2!3d44.1877453!4d51.8893102!16s%2Fg%2F11byyh_rfv?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
    karakiya: {
      title: "Қарақия ойпаты",
      img: "https://backend.mangystau-travel.kz/storage/83/14_521045.jpg",
      gallery: [
        "https://backend.mangystau-travel.kz/storage/84/1270025763_tour.jpg",
        "https://backend.mangystau-travel.kz/storage/85/i7zgkgyg5.jpg",
        "https://backend.mangystau-travel.kz/storage/86/1249987738_guide.jpg"
      ],
      short: "Кең ойпат, ерекше кеңістік және табиғи «марс» әсерін беретін ландшафт.",
      about:
        "Қарақия ойпаты — Маңғыстаудың ең әсерлі географиялық нүктелерінің бірі. Мұнда кең жазық пен ойыс рельеф ерекше сезіледі: кеңістік “ашылып” тұрғандай әсер береді, ал горизонт сызығы өте алысқа кетеді.\n\n" +
        "Бұл аймақты көргенде табиғаттың масштабы анық байқалады. Кадрға түсіргенде адам немесе көлік қоссаң, биіктік пен кеңістіктің айырмасы жақсы көрінеді. Сол үшін Қарақия — контент түсіруге өте ыңғайлы орын.\n\n" +
        "Жол бойы жел болуы мүмкін, күн қатты түседі. Ойпат аймағында көлеңке аз, сондықтан барлық базалық қорғаныс заттарын (су, бас киім, крем) міндетті түрде ал.\n\n" +
        "Кеңес: ауа райын алдын ала тексер. Егер шаңды жел болса, көзілдірік/бафф пайдалы болады.",
      facts: {
        location: "Маңғыстау облысы",
        duration: "0.5–1 күн",
        season: "Көктем – күз",
        level: "Жеңіл",
        format: "Жеке/топтық тур"
      },
      highlights: ["Кең ойпат", "Панорамалық көрініс", "Фотоға масштаб эффекті"],
      tips: ["Көзілдірік және крем ал", "Суды көп ал", "Жел болса — бет орайтын бафф ал"],
      mapLink: "https://www.google.com/maps/place/%D0%92%D0%BF%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0+%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B8%D0%B5/@43.3953217,51.7403117,3a,75y,87.75h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDauoWjGg!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c_kQrVB3vhFdPkQflmUJccAzFPoLHqFCWo_Snxu9F-qpjXE1OvUCK74u9R1gJ0a30_TCazzYp7WzTcgwuTGxvwFGCfkuA429McGR62gWzHGMUqrLBOLhd7eInK9OqfQ_DHGng2y%3Dw900-h600-k-no-pi0-ya87.74975-ro0-fo100!7i5656!8i2828!4m14!1m7!3m6!1s0x41b5e6a24228e4e5:0xaca938f6e7c15590!2z0JLQv9Cw0LTQuNC90LAg0JrQsNGA0LDQs9C40LU!8m2!3d43.3968158!4d51.7926407!16s%2Fg%2F11csb2b3s1!3m5!1s0x41b5e6a24228e4e5:0xaca938f6e7c15590!8m2!3d43.3968158!4d51.7926407!16s%2Fg%2F11csb2b3s1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    },
  
  };
  
  
  /* =========================
     TOUR PAGE RENDER
  ========================= */
  function getQueryParam(name){
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }
  
  function escapeHtml(s){
    return String(s)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }
  
  function renderTourPage(){
    const mount = document.getElementById("tourPage");
    if(!mount) return;
  
    const id = getQueryParam("id");
    const item = id ? ROUTES[id] : null;
  
    if(!item){
      mount.innerHTML = `
        <section class="container tourEmpty">
          <h1>Маршрут табылмады</h1>
          <p>Сілтеме қате болуы мүмкін. Маршруттар тізіміне қайта оралыңыз.</p>
          <a class="btn btn--primary" href="tours.html">Маршруттарға қайту →</a>
        </section>
      `;
      return;
    }
  
    document.title = `${item.title} | Mangystau Travel`;
  
    const facts = item.facts || {};
    const highlights = (item.highlights || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
    const tips = (item.tips || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
  
    mount.innerHTML = `
      <section class="tourHero">
        <div class="tourHero__bg" style="background-image:url('${escapeHtml(item.img)}')"></div>
        <div class="tourHero__overlay"></div>
  
        <div class="container tourHero__content">
          <div class="tourHero__crumbs">
            <a href="index.html">Басты бет</a> <span>›</span>
            <a href="tours.html">Маршруттар</a> <span>›</span>
            <b>${escapeHtml(item.title)}</b>
          </div>
  
          <h1 class="tourHero__title">${escapeHtml(item.title)}</h1>
          <p class="tourHero__lead">${escapeHtml(item.short)}</p>
  
          <div class="tourHero__actions">
            <a class="btn btn--primary" href="${escapeHtml(item.mapLink || '#')}" target="_blank" rel="noopener">
              Картадан ашу →
            </a>
            <a class="btn btn--ghost" href="tours.html">Барлық маршруттар</a>
          </div>
        </div>
      </section>
  
      <section class="container tourBody">
        <div class="tourGrid">
          <article class="tourCard">
            <h2>Маршрут туралы</h2>
            <p>${escapeHtml(item.about)}</p>
          </article>
  
          <aside class="tourCard tourCard--facts">
            <h2>Қысқаша мәлімет</h2>
            <div class="facts">
              <div class="fact"><span>Орналасуы</span><b>${escapeHtml(facts.location || "—")}</b></div>
              <div class="fact"><span>Ұзақтығы</span><b>${escapeHtml(facts.duration || "—")}</b></div>
              <div class="fact"><span>Маусым</span><b>${escapeHtml(facts.season || "—")}</b></div>
              <div class="fact"><span>Деңгейі</span><b>${escapeHtml(facts.level || "—")}</b></div>
              <div class="fact"><span>Форматы</span><b>${escapeHtml(facts.format || "—")}</b></div>
            </div>
          </aside>
  
          <article class="tourCard">
            <h2>Неге бару керек</h2>
            <ul class="list">${highlights || "<li>—</li>"}</ul>
          </article>
  
          <article class="tourCard">
            <h2>Пайдалы кеңестер</h2>
            <ul class="list">${tips || "<li>—</li>"}</ul>
          </article>
  
          <article class="tourCard tourCard--wide">
            <h2>3D тур (қосуға дайын орын)</h2>
            <p>Бұл жерге кейін өзің 3D сілтемені/iframe-ды қоясың. Қазір placeholder тұр.</p>
            <div class="embedStub">
              <div>3D / iframe осында</div>
            </div>
          </article>
        </div>
      </section>
    `;
  }
  
  /* Авто іске қосу */
  document.addEventListener("DOMContentLoaded", () => {
    renderTourPage();
  });
  /* =========================
   8 places for big map markers
   (сен ссылкаларын кейін ауыстырасың)
========================= */
const MAP_POINTS_8 = [
  { id:"torysh",    n:1, title:"Торыш",     x:18, y:58 },
  { id:"kokala",    n:2, title:"Көкала",    x:28, y:42 },
  { id:"akmysh",    n:3, title:"Ақмыш",     x:36, y:50 },
  { id:"tuzbair",   n:5, title:"Тұзбайыр",  x:56, y:54 },
  { id:"kyzylkup",  n:6, title:"Қызылқұп",  x:64, y:44 },
  { id:"bokty",     n:7, title:"Боқты",     x:74, y:58 },
  { id:"teyesu",    n:8, title:"Түйесу",    x:84, y:46 },
  { id: "bozzhyra",  title: "Бозжыра",        x: 18, y: 72 },
  { id: "airakty",   title: "Айрақты",        x: 28, y: 66 },
  { id: "sherkala",  title: "Шеркала",        x: 34, y: 62 },
  { id: "otpantau",  title: "Отпан тау",      x: 40, y: 58 },
  { id: "karakiya",  title: "Қарақия ойпаты", x: 26, y: 84 },
];

/* ==== helper ==== */
function getQueryParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}
function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

/* =========================
   ROUTES example fields
   ROUTES[id] ішінде мына 3 өріс болсын:
   - gallery: [img1,img2,img3...]
   - panoLink: "https://...." (iframe link)
   - videoLink: "https://...." (button link)
========================= */

/* =========================
   Render Tour Page (Hero + Info + Gallery + 3D + Big Map)
========================= */
function renderTourLikePage(){
  const mount = document.getElementById("tourPage");
  if(!mount) return;

  const id = getQueryParam("id") || "kokala"; // тест үшін
  const item = (typeof ROUTES !== "undefined") ? ROUTES[id] : null;

  if(!item){
    mount.innerHTML = `
      <section class="container" style="padding:50px 0">
        <h1>Маршрут табылмады</h1>
        <p>Сілтеме қате болуы мүмкін.</p>
        <a class="btn btn--primary" href="tours.html">Маршруттарға қайту →</a>
      </section>
    `;
    return;
  }

  // Дефолт мәндер (болмаса)
  const videoLink = item.videoLink || "#";      // сен кейін қоясың
  const panoLink = item.pano || item.panoLink || item.panoLink || "";




// ОСЫ ЕКІ ЖОЛДЫ ҚОС
const mapEmbed = item.mapEmbed || "";
const mapLink  = item.mapLink  || "";

  const gallery   = item.gallery && item.gallery.length
    ? item.gallery
    : [item.img, item.img, item.img]; // болмаса 3 рет қайталаймыз

  document.title = `${item.title} | Mangystau Travel`;

  // SVG wave (декор)
  const waveSvg = `
  <svg class="tourHero2__wave" viewBox="0 0 1200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 95 C 160 25, 260 150, 390 85 C 520 20, 610 150, 730 85 C 860 20, 960 150, 1110 70"
      stroke="rgba(255,255,255,.25)" stroke-width="2" />
    <circle cx="390" cy="85" r="9" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.25)" />
    <circle cx="730" cy="85" r="9" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.25)" />
    <circle cx="1110" cy="70" r="9" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.25)" />
  </svg>`;

  mount.innerHTML = `
    <!-- HERO -->
    <section class="tourHero2">
      <div class="tourHero2__bg" style="background-image:url('${escapeHtml(item.img)}')"></div>
      <div class="tourHero2__overlay"></div>
      ${waveSvg}

      <div class="container tourHero2__content">
        <h1 class="tourHero2__title">${escapeHtml(item.title)}</h1>
        <p class="tourHero2__desc">${escapeHtml(item.short || "")}</p>

        <div class="tourHero2__row">
          <div class="badgeLine">
            <span class="badgeLine__dot">⦿</span>
            <div>
              <div style="font-weight:800">Орналасуы</div>
              <div style="opacity:.85">${escapeHtml(item.facts?.location || "Маңғыстау облысы")}</div>
            </div>
          </div>

        
        </div>
      </div>
    </section>

    <!-- INFO (WHITE) -->
    <section class="tourBody2">
      <div class="container tourInfoGrid">
        <div class="tourInfoGrid__left">
          <h2>${escapeHtml(item.title)}</h2>
          <p>${escapeHtml(item.short || "Маңғыстаудың әсем табиғаты мен ерекше бедерлері сізді таңғалдырмай қоймайды.")}</p>
        </div>

        <div class="tourInfoGrid__right">
          <p>${escapeHtml(item.about || "")}</p>
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="gallery">
      <div class="container">
        <div class="kicker2"><span class="kicker2__line"></span><span>Маңғыстау – шабыт пен тынығу</span></div>

        <div class="galleryHead">
          <h3>Фотогалерея</h3>
          <div class="galleryBtns">
            <button class="galleryBtn" id="gPrev" aria-label="Prev">←</button>
            <button class="galleryBtn galleryBtn--primary" id="gNext" aria-label="Next">→</button>
          </div>
        </div>

        <div class="galleryTrack" id="galleryTrack">
          ${gallery.map(src => `
            <div class="gItem"><img src="${escapeHtml(src)}" alt=""></div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- 3D PANORAMA + BIG MAP WITH 8 MARKERS -->
      <!-- 3D PANORAMA + MAP + BIG MAP WITH 8 MARKERS -->
  <section class="pano">
    <div class="container">
      <div class="kicker2">
        <span class="kicker2__line"></span>
        <span>Маңғыстауды 3D форматта көр</span>
      </div>

      <h3>3D панорама</h3>

      <div class="panoWrap">

        <!-- 3D -->
     <div class="panoEmbed">
 <a class="panoCard"
   href="${escapeHtml(panoLink || item.mapLink || "#")}"
   target="_blank"
   rel="noopener"
   aria-label="3D панорамаға өту">

  <img class="panoCard__img"
       src="https://egemen.kz/media/2020/12/03/dsc08021.jpg"
       alt="Маңғыстау картасы">

  <div class="panoCard__overlay"></div>

  <div class="panoCard__content">
    <div class="panoCard__badge">3D панорама</div>
    <div class="panoCard__title">3D көру үшін бас</div>
    <div class="panoCard__hint">Google панорама / 3D сілтемесі жаңа бетте ашылады</div>
    <div class="panoCard__btn">Ашу →</div>
  </div>
</a>

</div>


        <!-- MAP (Google embed + fallback) -->
      

          
        </div>

       

      </div>
    </div>
  </section>
`;


  // Gallery slider buttons
  const track = document.getElementById("galleryTrack");
  const prev = document.getElementById("gPrev");
  const next = document.getElementById("gNext");

  function scrollGallery(dir){
    if(!track) return;
    const card = track.querySelector(".gItem");
    const step = card ? (card.getBoundingClientRect().width + 14) : 360;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  }
  prev?.addEventListener("click", () => scrollGallery(-1));
  next?.addEventListener("click", () => scrollGallery(1));

  // Markers -> open another tour (сен link-ті кейін ауыстыра аласың)
  document.querySelectorAll(".marker").forEach(btn => {
    btn.addEventListener("click", () => {
      const customUrl = btn.getAttribute("data-url"); // сен осында өз ссылкаңды қоясың
      if(customUrl && customUrl !== "#") window.location.href = customUrl;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // тур бет ашылса ғана
  if(document.getElementById("tourPage")){
    renderTourLikePage();
  }
});
