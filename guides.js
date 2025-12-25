const GUIDES = [
    {
      id: "abilova",
      name: "Абилова Гүлжан Тағановна",
      exp: "2 жыл",
      role: "Экскурсовод",
      photo: "https://backend.mangystau-travel.kz/storage/MDPWt0ayusru7BmueNcANafLFa47vMxWKQ7VB3bu.png",     // өзіңнің суретің
      cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",    // баннер фон
      phone: "+7 (776) 739 84 84",
      email: "muzei_aktau@mail.ru",
      languages: ["қазақ", "орыс"],
      about:
        "Маңғыстаудың негізгі бағыттары бойынша экскурсия жүргізеді. Табиғи ландшафттар, тарихи орындар, фото-нүктелер мен маршрут логистикасын жақсы біледі. Туристке түсінікті әрі қызықты форматта баяндауға мән береді."
    },
    {
      id: "abaiuly",
      name: "Абайұлы Жандос",
      exp: "2 жыл",
      role: "Гид",
      photo: "	https://backend.mangystau-travel.kz/storage/ErajFjx1wdqBcZZ7phMqc2TKhAOMn2ZuXRO3NB1P.png",
      cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
      phone: "+7 (771) 588 92 12",
      email: "jandos.guide@mail.kz",
      languages: ["қазақ", "орыс", "ағылшын"],
      about:
        "Қысқа және орташа маршруттарға (1–2 күн) гид қызметін ұсынады. Қауіпсіздік, жабдық дайындау және жол жоспары бойынша алдын ала кеңес береді."
    },
    {
      id: "adilova",
      name: "Адилова Әсел",
      exp: "1 жыл",
      role: "Гид",
      photo: "https://backend.mangystau-travel.kz/storage/t5IQjM5IxaEmu81SAZmVzvj24D6P5DKJT667kPVz.png",
      cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
      phone: "+7 (702) 214 17 98",
      email: "asel.guide@mail.kz",
      languages: ["қазақ", "орыс"],
      about:
        "Экологиялық бағыттарға көбірек көңіл бөледі: табиғатты сақтау қағидалары, дұрыс трекинг, фото-тур ұйымдастыру тәжірибесі бар."
    },
    
    {
      id: "aitkulova",
      name: "Айтқұлова Жания Жарылғапқызы",
      exp: "2 жыл",
      role: "Экскурсовод",
      photo: "	https://backend.mangystau-travel.kz/storage/tGECqMzdHcKzrh4S8VRmrYPDiv0WIROb6RHJqpyF.png",
      cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
      phone: "+7 (701) 777 59 28",
      email: "manzapowednik@mail.ru",
      languages: ["қазақ", "орыс"],
      about:
        "Туристермен жұмыс істеу мәдениеті жоғары, маршрут бойындағы тарихи деректерді жеңіл тілмен түсіндіреді. Отбасылық турларға ыңғайлы."
    },
    {
        id: "murkin",
        name: "Муркин Сергей Викторович",
        exp: "3 жыл",
        role: "Экскурсовод",
        photo: "https://backend.mangystau-travel.kz/storage/URx2KCdcr5gKJcLxF5r4bVfLkUnTudXWJvb8A5b4.png", // кейін өз ссылкаңмен ауыстыр
        cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
        phone: "+7 (702) 900 63 15",
        email: "aktaucitytour@gmail.com",
        languages: ["орыс"],
        about:
          "Маршрутты нақты жоспарлап, туристерге қауіпсіздік ережелерін алдын ала түсіндіреді. Жол бойындағы негізгі нүктелерді ретімен көрсетіп, фото-тоқтау орындарын ыңғайлы ұйымдастырады."
      },
      {
        id: "nizamatdinova",
        name: "Низаматдинова Жұлдыз Сақовна",
        exp: "2 жыл",
        role: "Экскурсовод",
        photo: "https://backend.mangystau-travel.kz/storage/B2FEaupOJ16J3xCXDUVk5aGDuYPyJPsRIgQTqNL3.png",
        cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
        phone: "+7 (771) 523 88 82",
        email: "",
        languages: ["қазақ", "орыс"],
        about:
          "Туристермен тіл табысуы жақсы, ақпаратты қарапайым әрі түсінікті жеткізеді. Отбасылық және жеңіл форматтағы турларға ыңғайлы, жағымды атмосфера қалыптастырады."
      },
      {
        id: "nikishin",
        name: "Никишин Вячеслав Анатольевич",
        exp: "6 жыл",
        role: "Экскурсовод",
        photo: "https://backend.mangystau-travel.kz/storage/ruMmQYUrm7oYCq5CyD2lv9MYEAZjMAaCWGQRN5Dg.jpg",
        cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
        phone: "+7 (702) 900 63 15",
        email: "aktaucitytour@gmail.com",
        languages: ["орыс"],
        about:
          "Тәжірибесі мол гид: маршрутты уақытпен дәл жүргізеді, жол логистикасын жақсы біледі. Тур барысында негізгі тарихи/табиғи фактілерді жүйелі түрде айтып, сұрақтарға толық жауап береді."
      },
      {
        id: "nugman",
        name: "Нұғман Абиш",
        exp: "4 жыл",
        role: "Экскурсовод",
        photo: "https://backend.mangystau-travel.kz/storage/pgyfWIS8nkQYAPoXpJ5WPU3DibmxdrxwN40ET8jc.jpg",
        cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
        phone: "+7 (708) 362 69 20",
        email: "kettik.mangystau@gmail.com",
        languages: ["қазақ", "орыс"],
        about:
          "Белсенді форматтағы турларға бейім: трекинг, панорама нүктелері және фото-стоптарды дұрыс таңдайды. Табиғаттағы тәртіп пен қауіпсіздікке ерекше мән береді."
      },
      {
        id: "nurakhmet",
        name: "Нұрахмет Мырза",
        exp: "1 жыл",
        role: "Экскурсовод",
        photo: "	https://backend.mangystau-travel.kz/storage/f024fc9LYt1t0oYc32LAPNCi7o9M1QYKog6TEEyi.jpg",
        cover: "https://backend.mangystau-travel.kz/storage/f024fc9LYt1t0oYc32LAPNCi7o9M1QYKog6TEEyi.jpg",
        phone: "+7 (708) 154 96 46",
        email: "kettik.mangystau@gmail.com",
        languages: ["қазақ", "орыс"],
        about:
          "Жас гид болғанымен, ұйымдастыруы жинақы. Туристерге маршруттың негізгі ережелерін анық айтып, уақытты тиімді пайдалануға көмектеседі. Жеңіл және қысқа турлар үшін қолайлы."
      },
      {
        id: "nurgaziv",
        name: "Нұрғазив Арман Абаевич",
        exp: "2 жыл",
        role: "Экскурсовод",
        photo: "assets/images/user.png",
        cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
        phone: "+7 (707) 980 01 04",
        email: "04aktau-tourist@mail.ru",
        languages: ["қазақ", "орыс"],
        about:
          "Тур барысында коммуникациясы жақсы, топпен жұмыс істеуді біледі. Маршрут бойынша бағыт-бағдарды түсінікті айтып, туристердің сұрақтарына нақты жауап береді."
      },
      {
        id: "polonskaya",
        name: "Полонская Надежда Григорьевна",
        exp: "9 жыл",
        role: "Экскурсовод",
        photo: "https://backend.mangystau-travel.kz/storage/qOeyipx30MKPXjGtlTuv4kqyylJoxdDTQGttkpcn.png",
        cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
        phone: "+7 (702) 900 63 15",
        email: "aktaucitytour@gmail.com",
        languages: ["орыс"],
        about:
          "Үлкен тәжірибесі бар экскурсовод: тарихи деректерді қызықты форматта жеткізеді, маршруттың мәнін ашып береді. Ұзақ турлар мен күрделі бағыттарда топты сенімді жүргізеді."
      },
      {
        id: "rustamov",
        name: "Рустамов Тұрар Бегендикұлы",
        exp: "1 жыл",
        role: "Экскурсовод",
        photo: "https://backend.mangystau-travel.kz/storage/mI9gEcBV5g8yFLLV8qU1OY0odsh0aGOdUnm2on0g.png",
        cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
        phone: "+7 (776) 226 66 67",
        email: "ocdt-2017@mail.ru",
        languages: ["қазақ", "орыс"],
        about:
          "Туристерге қызмет көрсетуі ұқыпты, тәртіп пен қауіпсіздікті қадағалайды. Қала ішіндегі және қысқа бағыттағы турларға ыңғайлы, сабырлы жүргізуші-гид форматына келеді."
      }
      
  ];
  
  // Қаласаң, туроператорларды да осылай толтырасың:
  const OPERATORS = [
    {
      id: "elite_business",
      name: "ИП «Elite business»",
      activityType: "ИП «Elite business»",
      address: "г. Актау, 13 мкр, здание 10а",
      phone: "8 771 845 26 64",
      route: "ИП «Elite business»",
      goal: "Туры по Мангистау",
      duration: "6 сағат",
      link: "operator.html?id=elite_business"
    },
    {
      id: "made_in_mangystau",
      name: "ИП «Made in Mangystau»",
      activityType: "ИП «Made in Mangystau»",
      address: "г. Актау, 17 мкр, здание 7, офис",
      phone: "+7 701 748 01 61",
      route: "ИП «Made in Mangystau»",
      goal: "Туры по Мангистау",
      duration: "6 сағат",
      link: "operator.html?id=made_in_mangystau"
    },
    {
      id: "askar_dana",
      name: "ИП «Аскар Дана»",
      activityType: "Познавательная",
      address: "Мангистауская область, г. Актау, 14 мкр, 45 дом, 21 офис",
      phone: "+7 (775) 599 25 83",
      route: "«Актау – впадина Каракия»",
      goal: "Познавательно-оздоровительное путешествие",
      duration: "5 сағат",
      link: "operator.html?id=askar_dana"
    },
    {
      id: "inzhu",
      name: "ИП «Инжу»",
      activityType: "туроператор",
      address: "г. Актау, 28А мкр, 23 д, кв 48",
      phone: "8702 525 46 04",
      route: "ИП «Инжу»",
      goal: "Туры по Мангистау",
      duration: "6 сағат",
      link: "operator.html?id=inzhu"
    },
    {
      id: "ethnotur",
      name: "ИП «Этнотур»",
      activityType: "Экскурсия, познавательный тур",
      address: "Мангистауская область, г. Актау, 12 мкр, 69 дом, 41 кв",
      phone: "8 (7292) 440 312, 434 051",
      route: "«Тур по Скальной тропе»",
      goal: "Историко-краеведческая, культурно-познавательная",
      duration: "1–1,5 сағат",
      link: "operator.html?id=ethnotur"
    },
  
    {
        id: "redmaya",
        name: "ИП Redmaya",
        activityType: "ИП Redmaya",
        address: "г. Актау, БЦ «Сункар», 2 мкр, 47Б",
        phone: "8 705 176 17 26",
        route: "ИП Redmaya",
        goal: "Туры по Мангистау",
        duration: "6 сағат",
        link: "operator.html?id=redmaya"
      },
    
      {
        id: "aqdariya_group",
        name: 'ТОО "Aqdariya group"',
        activityType: "туроператор",
        address: "Мангистауская область, г. Актау, 17 мкр, зд. 48",
        phone: "8701 591 00 77",
        route: 'ТОО "Aqdariya group"',
        goal: "Туры по Мангистау",
        duration: "6–7 сағат",
        link: "operator.html?id=aqdariya_group"
      },
    
      {
        id: "aqzhelken_group",
        name: 'ТОО "Aqzhelken group"',
        activityType: "Экскурсия, познавательный тур",
        address: "Мангистауская область, г. Актау, 28 мкр, 48 дом",
        phone: "+7 (700) 365 02 62",
        route: "«Паломничество к Бекет Ата»",
        goal: "Паломничество",
        duration: "15 сағат",
        link: "operator.html?id=aqzhelken_group"
      },
    
      {
        id: "kettyk_group",
        name: 'ТОО "Kettyk Group"',
        activityType: "Познавательное путешествие",
        address: "Мангистауская область, г. Актау, Микрорайон 6, 40 дом, 5",
        phone: "+7 (708) 362 69 20",
        route: "Караман ата – Ыбықты сай (Ауынды каньон)",
        goal: "Знакомство с культурой Мангистау",
        duration: "6–7 сағат",
        link: "operator.html?id=kettyk_group"
      },
    
      {
        id: "mangystau_safari",
        name: 'ТОО "Mangystau Safari"',
        activityType: 'ТОО "Mangystau Safari"',
        address: "г. Актау, 17 мкр, БЦ «Ажар»",
        phone: "8 707 362 60 44",
        route: 'ТОО "Mangystau Safari"',
        goal: "Туры по Мангистау",
        duration: "6 сағат",
        link: "operator.html?id=mangystau_safari"
      },
    
      {
        id: "aktau_city_tour",
        name: 'ТОО "Aktau Сити Тур"',
        activityType: "Экскурсия, познавательный тур",
        address: "Мангистауская область, г. Актау, 5 мкр, 36 дом, 2 офис",
        phone: "+7 (702) 900 63 15, +7 (778) 217 67 54",
        route: "aktau_city_tour",
        goal: "Туры по Мангистау",
        duration: "6 сағат",
        link: "operator.html?id=aktau_city_tour"
      }
    
  ];  
  
  function cardTemplate(item, type = "guide") {
    const href = (type === "guide")
      ? `guide.html?id=${encodeURIComponent(item.id)}`
      : `operator.html?id=${encodeURIComponent(item.id)}`; // егер операторға жеке бет жасасаң
  
    return `
      <article class="personCard">
        <div class="personCard__top">
          <img class="personCard__photo" src="${item.photo}" alt="${item.name}"
               onerror="this.src='assets/images/user.png'">
        </div>
  
        <div class="personCard__body">
          <div class="personCard__name">${item.name}</div>
          <div class="personCard__meta">тәжірибе: ${item.exp}</div>
  
          <a class="personCard__btn" href="${href}">
            Толығырақ <span class="personCard__arrow">→</span>
          </a>
        </div>
      </article>
    `;
  }
  
  function renderGrid(gridId, data, type) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = data.map(x => cardTemplate(x, type)).join("");
  }
  
  function setActiveTab(tabKey) {
    document.querySelectorAll(".pillTab").forEach(btn => {
      const isActive = btn.dataset.tab === tabKey;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  
    document.querySelectorAll(".tabPane").forEach(p => p.classList.remove("is-active"));
    const pane = document.getElementById(`tab-${tabKey}`);
    pane?.classList.add("is-active");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderGrid("guidesGrid", GUIDES, "guide");
    renderGrid("operatorsGrid", OPERATORS, "operator");
  
    document.querySelectorAll(".pillTab").forEach(btn => {
      btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
    });
  });

  function esc(s){ return String(s ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[m])); }
  
  function renderOperators(list){
    const root = document.getElementById("operatorsList");
    if(!root) return;
  
    root.innerHTML = list.map(op => `
      <div class="opRow">
        <div class="opTop">
          <div>
            <div class="opTitle">
              <span class="opIcon">🏢</span>
              <h3>${esc(op.name)}</h3>
            </div>
  
            <div class="opMeta">
              <span>🧾 ${esc(op.activityType || "")}</span>
              ${op.address ? `<span>📍 ${esc(op.address)}</span>` : ""}
              ${op.phone ? `<span>📞 ${esc(op.phone)}</span>` : ""}
            </div>
          </div>
  
          <button class="opArrow" type="button"aria-label="Ашу">→</button>
        </div>
  
        <div class="opGrid">
          <div>
            <div class="opLabel">Туристтік маршрут</div>
            <div class="opValue">${esc(op.route || "—")}</div>
          </div>
  
          <div>
            <div class="opLabel">Сапардың мақсаты, туристік маршруттың бағыты</div>
            <div class="opValue">${esc(op.goal || "—")}</div>
          </div>
  
          <div>
            <div class="opLabel">Маршрут ұзақтығы</div>
            <div class="opValue">${esc(op.duration || "—")}</div>
          </div>
        </div>
      </div>
    `).join("");
  
    root.querySelectorAll(".opArrow").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const url = btn.getAttribute("data-link");
        if(url) window.location.href = url;
      });
    });
  }
  
  renderOperators(OPERATORS);
  
  