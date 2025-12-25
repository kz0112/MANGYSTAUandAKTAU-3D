// guides.js ішіндегі GUIDES массивін осында да көшіру немесе бөлек data.js жасап импорттау керек.
// Қарапайым үшін осында қайта жазып қоямыз:
const GUIDES = [
    {
      id: "abilova",
      name: "Абилова Гүлжан Тағановна",
      exp: "2 жыл",
      role: "Экскурсовод",
      photo: "https://backend.mangystau-travel.kz/storage/MDPWt0ayusru7BmueNcANafLFa47vMxWKQ7VB3bu.png",
      cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
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
      photo: "https://backend.mangystau-travel.kz/storage/ErajFjx1wdqBcZZ7phMqc2TKhAOMn2ZuXRO3NB1P.png",
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
        cover: "https://turanasia.kz/wp-content/uploads/tuzbair1.jpg",
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
  
  function getParam(name) {
    const u = new URL(window.location.href);
    return u.searchParams.get(name);
  }
  
  function escapeHtml(s = "") {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const id = getParam("id");
    const item = GUIDES.find(x => x.id === id) || GUIDES[0];
    const mount = document.getElementById("guidePage");
    if (!mount || !item) return;
  
    const langs = (item.languages || []).join(", ");
  
    mount.innerHTML = `
      <section class="guideHero">
        <div class="guideHero__banner" style="background-image:url('${escapeHtml(item.cover)}')">
          <div class="guideHero__overlay"></div>
  
          <div class="container guideHero__inner">
            <div class="guideHero__avatarWrap">
              <img class="guideHero__avatar" src="${escapeHtml(item.photo)}" alt="${escapeHtml(item.name)}"
                   onerror="this.src='assets/images/user.png'">
            </div>
  
            <div class="guideHero__text">
              <div class="guideHero__kicker">${escapeHtml(item.role)}</div>
              <div class="guideHero__name">${escapeHtml(item.name)}</div>
              <div class="guideHero__exp">тәжірибе: ${escapeHtml(item.exp)}</div>
  
              <div class="guideHero__contacts">
                <div class="guideHero__contact">✉ ${escapeHtml(item.email || "")}</div>
                <div class="guideHero__contact">☎ ${escapeHtml(item.phone || "")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="container guideBody">
        <h2 class="guideSectionTitle">Гид туралы</h2>
        <p class="guideAbout">${escapeHtml(item.about || "")}</p>
  
        <div class="guideFacts">
          <div class="guideFact">
            <div class="guideFact__label">Тілдер</div>
            <div class="guideFact__value">${escapeHtml(langs || "—")}</div>
          </div>
          <div class="guideFact">
            <div class="guideFact__label">Байланыс</div>
            <div class="guideFact__value">${escapeHtml(item.phone || "—")}</div>
          </div>
        </div>
      </section>
    `;
  });
