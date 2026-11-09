function vraag(question, correct, wrong, hint) {
  const answers = [correct, ...wrong];
  for (let i = answers.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return { question, answers, correct: answers.indexOf(correct), hint };
}

const questions = {
  Nederland: [
    vraag("Wat is de hoofdstad van Nederland?", "Amsterdam", ["Rotterdam", "Utrecht", "Den Haag"], "De stad heeft grachten en staat bekend om haar fietsen."),
    vraag("Welke rivier stroomt langs Rotterdam?", "De Maas", ["De IJssel", "De Eems", "De Vecht"], "Deze rivier komt vanuit Frankrijk en België."),
    vraag("Hoeveel provincies heeft Nederland?", "12", ["10", "11", "13"], "Tel ze maar eens op de kaart!"),
    vraag("Op welk eiland ligt Den Burg?", "Texel", ["Ameland", "Terschelling", "Schiermonnikoog"], "Het is het grootste Nederlandse Waddeneiland."),
    vraag("Welke provincie ligt het meest zuidelijk?", "Limburg", ["Noord-Brabant", "Zeeland", "Gelderland"], "Maastricht ligt in deze provincie."),
    vraag("Wat is de hoofdstad van Friesland?", "Leeuwarden", ["Sneek", "Harlingen", "Drachten"], "Deze stad was in 2018 Culturele Hoofdstad van Europa."),
    vraag("Welke provincie heeft Assen als hoofdstad?", "Drenthe", ["Overijssel", "Groningen", "Flevoland"], "TT Circuit Assen ligt hier ook."),
    vraag("Wat is de hoofdstad van Zeeland?", "Middelburg", ["Vlissingen", "Goes", "Zierikzee"], "De naam begint met 'Middel'."),
    vraag("Welke zee ligt ten westen van Nederland?", "Noordzee", ["Waddenzee", "Oostzee", "Ierse Zee"], "Deze zee ligt ook naast Engeland."),
    vraag("Welke provincie is in 1986 als laatste toegevoegd?", "Flevoland", ["Drenthe", "Limburg", "Zeeland"], "Een groot deel van deze provincie is op de zee gewonnen."),
    vraag("Wat is de hoofdstad van Noord-Brabant?", "Den Bosch", ["Eindhoven", "Tilburg", "Breda"], "De volledige naam is 's-Hertogenbosch."),
    vraag("Welke rivier stroomt door Maastricht?", "De Maas", ["De Rijn", "De Waal", "De Lek"], "De rivier loopt ook door Luik."),
    vraag("In welke provincie ligt de stad Zwolle?", "Overijssel", ["Gelderland", "Drenthe", "Flevoland"], "Het is de hoofdstad van deze provincie."),
    vraag("Wat is de hoofdstad van Groningen?", "Groningen", ["Delfzijl", "Veendam", "Stadskanaal"], "De provincie en de hoofdstad hebben dezelfde naam."),
    vraag("Welke stad ligt op het eiland Walcheren?", "Middelburg", ["Dordrecht", "Hoorn", "Alkmaar"], "Het is ook de hoofdstad van Zeeland.")
  ],
  Europa: [
    vraag("Wat is de hoofdstad van Frankrijk?", "Parijs", ["Lyon", "Marseille", "Nice"], "De Eiffeltoren staat in deze stad."),
    vraag("Welk land heeft de vorm van een laars?", "Italië", ["Griekenland", "Portugal", "Kroatië"], "Rome ligt in dit land."),
    vraag("Wat is de hoofdstad van Spanje?", "Madrid", ["Barcelona", "Sevilla", "Valencia"], "Deze stad ligt midden in Spanje."),
    vraag("Welke zee ligt tussen Europa en Afrika?", "Middellandse Zee", ["Noordzee", "Zwarte Zee", "Oostzee"], "Griekenland en Italië grenzen eraan."),
    vraag("In welk land ligt Berlijn?", "Duitsland", ["Oostenrijk", "Zwitserland", "België"], "De Brandenburger Tor staat in de hoofdstad."),
    vraag("Wat is de hoofdstad van Portugal?", "Lissabon", ["Porto", "Coimbra", "Faro"], "Deze stad ligt aan de rivier de Taag."),
    vraag("Wat is de hoofdstad van België?", "Brussel", ["Antwerpen", "Brugge", "Gent"], "Hier zetelt ook het Europees Parlement."),
    vraag("Wat is de hoofdstad van Griekenland?", "Athene", ["Thessaloniki", "Patras", "Heraklion"], "De Akropolis torent boven deze stad uit."),
    vraag("Welke rivier stroomt door Londen?", "De Theems", ["De Seine", "De Rijn", "De Donau"], "De Tower Bridge overspant deze rivier."),
    vraag("In welk land ligt Kopenhagen?", "Denemarken", ["Zweden", "Noorwegen", "Finland"], "Dit land bestaat uit een schiereiland en veel eilanden."),
    vraag("Wat is de hoofdstad van Noorwegen?", "Oslo", ["Bergen", "Trondheim", "Stavanger"], "Deze stad ligt aan het Oslofjord."),
    vraag("Wat is de hoofdstad van Zweden?", "Stockholm", ["Göteborg", "Malmö", "Uppsala"], "Deze stad is gebouwd op veertien eilanden."),
    vraag("Wat is de hoofdstad van Finland?", "Helsinki", ["Turku", "Tampere", "Oulu"], "Deze stad ligt aan de Finse Golf."),
    vraag("Wat is de hoofdstad van Ierland?", "Dublin", ["Cork", "Galway", "Limerick"], "De rivier de Liffey stroomt door deze stad."),
    vraag("Wat is de hoofdstad van Polen?", "Warschau", ["Krakau", "Gdańsk", "Wrocław"], "De rivier de Wisła stroomt door deze stad."),
    vraag("Wat is de hoofdstad van Tsjechië?", "Praag", ["Brno", "Ostrava", "Plzeň"], "De Karelsbrug steekt hier de Moldau over."),
    vraag("Wat is de hoofdstad van Oostenrijk?", "Wenen", ["Salzburg", "Graz", "Innsbruck"], "Mozart woonde in deze stad."),
    vraag("Wat is de hoofdstad van Zwitserland?", "Bern", ["Zürich", "Genève", "Basel"], "Deze stad staat bekend om haar berenpark."),
    vraag("Wat is de hoofdstad van Hongarije?", "Boedapest", ["Debrecen", "Szeged", "Pécs"], "De Donau deelt deze stad in tweeën."),
    vraag("Wat is de hoofdstad van Kroatië?", "Zagreb", ["Split", "Dubrovnik", "Zadar"], "Deze stad ligt in het noorden van het land."),
    vraag("Wat is de hoofdstad van Roemenië?", "Boekarest", ["Cluj-Napoca", "Timișoara", "Iași"], "Deze stad wordt soms 'Klein Parijs' genoemd."),
    vraag("Wat is de hoofdstad van Bulgarije?", "Sofia", ["Varna", "Plovdiv", "Burgas"], "De Vitosjaberg ligt vlak bij deze stad."),
    vraag("Wat is de hoofdstad van IJsland?", "Reykjavik", ["Akureyri", "Keflavík", "Selfoss"], "Deze stad is de noordelijkste hoofdstad van Europa."),
    vraag("Wat is de hoofdstad van Estland?", "Tallinn", ["Tartu", "Riga", "Vilnius"], "De oude binnenstad staat op de Werelderfgoedlijst."),
    vraag("Wat is de hoofdstad van Letland?", "Riga", ["Tallinn", "Vilnius", "Kaunas"], "Art-nouveaugebouwen zijn hier volop te zien."),
    vraag("Wat is de hoofdstad van Litouwen?", "Vilnius", ["Riga", "Tallinn", "Klaipėda"], "De oude binnenstad is een van de grootste van Europa."),
    vraag("Wat is de hoofdstad van Slowakije?", "Bratislava", ["Košice", "Praag", "Ljubljana"], "Deze stad ligt aan de Donau, vlak bij Wenen."),
    vraag("Wat is de hoofdstad van Slovenië?", "Ljubljana", ["Maribor", "Zagreb", "Sarajevo"], "Een groene draak is het symbool van deze stad."),
    vraag("Wat is de hoofdstad van Servië?", "Belgrado", ["Novi Sad", "Niš", "Skopje"], "De Sava en de Donau komen hier samen."),
    vraag("Wat is de hoofdstad van Albanië?", "Tirana", ["Durrës", "Vlora", "Shkodër"], "Deze stad ligt in het midden van het land."),
    vraag("Wat is de hoofdstad van Noord-Macedonië?", "Skopje", ["Ohrid", "Bitola", "Tirana"], "De rivier de Vardar stroomt door deze stad."),
    vraag("Wat is de hoofdstad van Montenegro?", "Podgorica", ["Kotor", "Budva", "Cetinje"], "De naam betekent ongeveer 'onder de kleine berg'."),
    vraag("Wat is de hoofdstad van Luxemburg?", "Luxemburg", ["Esch-sur-Alzette", "Luik", "Namen"], "Het land en de hoofdstad hebben dezelfde naam."),
    vraag("Welk land ligt ten westen van Spanje?", "Portugal", ["Frankrijk", "Italië", "Andorra"], "Porto en Lissabon liggen in dit land."),
    vraag("Welke rivier stroomt door Parijs?", "De Seine", ["De Loire", "De Rhône", "De Garonne"], "De Notre-Dame staat op een eiland in deze rivier."),
    vraag("Welke rivier stroomt door Boedapest?", "De Donau", ["De Rijn", "De Elbe", "De Po"], "Deze rivier stroomt door veel hoofdsteden."),
    vraag("Wat is de hoogste berg van de Alpen?", "Mont Blanc", ["Matterhorn", "Zugspitze", "Grossglockner"], "De naam betekent 'witte berg'."),
    vraag("Welk gebergte vormt een grens tussen Frankrijk en Spanje?", "De Pyreneeën", ["De Alpen", "De Karpaten", "De Apennijnen"], "Andorra ligt midden in dit gebergte."),
    vraag("Welke zee ligt tussen Zweden en Finland?", "Botnische Golf", ["Noordzee", "Adriatische Zee", "Golf van Biskaje"], "Dit noordelijke deel hoort bij de Oostzee."),
    vraag("Op welk eiland ligt de stad Palma?", "Mallorca", ["Kreta", "Sicilië", "Corsica"], "Dit Spaanse eiland is populair bij vakantiegangers."),
    vraag("Welk land grenst aan zowel Spanje als Frankrijk?", "Andorra", ["Monaco", "België", "San Marino"], "Dit kleine land ligt in de Pyreneeën.")
  ],
  "De wereld": [
    vraag("Wat is het grootste continent?", "Azië", ["Afrika", "Europa", "Zuid-Amerika"], "China en India liggen op dit continent."),
    vraag("Welke oceaan is het grootst?", "Grote Oceaan", ["Atlantische Oceaan", "Indische Oceaan", "Noordelijke IJszee"], "De oceaan ligt tussen Azië en Amerika."),
    vraag("Op welk continent ligt de Sahara?", "Afrika", ["Azië", "Australië", "Zuid-Amerika"], "Het is de grootste hete woestijn ter wereld."),
    vraag("Wat is de hoofdstad van Japan?", "Tokio", ["Kyoto", "Osaka", "Hiroshima"], "Deze miljoenenstad ligt op het eiland Honshu."),
    vraag("Welk continent ligt helemaal op het zuidelijk halfrond?", "Antarctica", ["Europa", "Noord-Amerika", "Azië"], "Pinguïns leven op dit ijzige continent."),
    vraag("Wat is de hoofdstad van Canada?", "Ottawa", ["Toronto", "Vancouver", "Montreal"], "Deze stad ligt in de provincie Ontario."),
    vraag("Wat is de hoofdstad van Brazilië?", "Brasília", ["Rio de Janeiro", "São Paulo", "Salvador"], "Deze geplande stad werd in 1960 de hoofdstad."),
    vraag("Welke rivier stroomt door Egypte?", "De Nijl", ["De Amazone", "De Ganges", "De Mekong"], "Deze rivier stroomt noordwaarts naar de Middellandse Zee."),
    vraag("Op welk continent ligt Peru?", "Zuid-Amerika", ["Afrika", "Azië", "Noord-Amerika"], "De Inca-stad Machu Picchu ligt hier."),
    vraag("Wat is de hoofdstad van Australië?", "Canberra", ["Sydney", "Melbourne", "Perth"], "Deze stad ligt tussen Sydney en Melbourne.")
  ]
};

const extraCapitalQuestions = [
  ["Afghanistan", "Kabul"],
  ["Algerije", "Algiers"],
  ["Angola", "Luanda"],
  ["Antigua en Barbuda", "Saint John's"],
  ["Argentinië", "Buenos Aires"],
  ["Armenië", "Jerevan"],
  ["Azerbeidzjan", "Bakoe"],
  ["Bahama's", "Nassau"],
  ["Bahrein", "Manama"],
  ["Bangladesh", "Dhaka"],
  ["Barbados", "Bridgetown"],
  ["Belarus", "Minsk"],
  ["Belize", "Belmopan"],
  ["Benin", "Porto-Novo"],
  ["Bhutan", "Thimphu"],
  ["Bolivia", "Sucre"],
  ["Bosnië en Herzegovina", "Sarajevo"],
  ["Botswana", "Gaborone"],
  ["Brunei", "Bandar Seri Begawan"],
  ["Burkina Faso", "Ouagadougou"],
  ["Burundi", "Gitega"],
  ["Cambodja", "Phnom Penh"],
  ["Kameroen", "Yaoundé"],
  ["Kaapverdië", "Praia"],
  ["Centraal-Afrikaanse Republiek", "Bangui"],
  ["Tsjaad", "N'Djamena"],
  ["Chili", "Santiago"],
  ["China", "Beijing"],
  ["Colombia", "Bogotá"],
  ["Comoren", "Moroni"],
  ["Republiek Congo", "Brazzaville"],
  ["Costa Rica", "San José"],
  ["Ivoorkust", "Yamoussoukro"],
  ["Cuba", "Havana"],
  ["Cyprus", "Nicosia"],
  ["Democratische Republiek Congo", "Kinshasa"],
  ["Djibouti", "Djibouti"],
  ["Dominica", "Roseau"],
  ["Dominicaanse Republiek", "Santo Domingo"],
  ["Ecuador", "Quito"],
  ["Egypte", "Caïro"],
  ["El Salvador", "San Salvador"],
  ["Equatoriaal-Guinea", "Malabo"],
  ["Eritrea", "Asmara"],
  ["Eswatini", "Mbabane"],
  ["Ethiopië", "Addis Abeba"],
  ["Fiji", "Suva"],
  ["Gabon", "Libreville"],
  ["Gambia", "Banjul"],
  ["Georgië", "Tbilisi"],
  ["Ghana", "Accra"],
  ["Grenada", "Saint George's"],
  ["Guatemala", "Guatemala-Stad"],
  ["Guinee", "Conakry"],
  ["Guinee-Bissau", "Bissau"],
  ["Guyana", "Georgetown"],
  ["Haïti", "Port-au-Prince"],
  ["Honduras", "Tegucigalpa"],
  ["India", "New Delhi"],
  ["Indonesië", "Jakarta"],
  ["Iran", "Teheran"],
  ["Irak", "Bagdad"],
  ["Jamaica", "Kingston"],
  ["Jordanië", "Amman"],
  ["Kazachstan", "Astana"],
  ["Kenia", "Nairobi"],
  ["Kiribati", "Zuid-Tarawa"],
  ["Koeweit", "Koeweit-Stad"],
  ["Kirgizië", "Bisjkek"],
  ["Laos", "Vientiane"],
  ["Libanon", "Beiroet"],
  ["Lesotho", "Maseru"],
  ["Liberia", "Monrovia"],
  ["Libië", "Tripoli"],
  ["Liechtenstein", "Vaduz"],
  ["Madagaskar", "Antananarivo"],
  ["Malawi", "Lilongwe"],
  ["Maleisië", "Kuala Lumpur"],
  ["Maldiven", "Malé"],
  ["Mali", "Bamako"],
  ["Malta", "Valletta"],
  ["Marshalleilanden", "Majuro"],
  ["Mauritanië", "Nouakchott"],
  ["Mauritius", "Port Louis"],
  ["Mexico", "Mexico-Stad"],
  ["Micronesië", "Palikir"],
  ["Moldavië", "Chișinău"],
  ["Monaco", "Monaco"],
  ["Mongolië", "Ulaanbaatar"],
  ["Marokko", "Rabat"],
  ["Mozambique", "Maputo"],
  ["Myanmar", "Naypyidaw"],
  ["Namibië", "Windhoek"],
  ["Zimbabwe", "Harare"],
  ["Nepal", "Kathmandu"],
  ["Nieuw-Zeeland", "Wellington"],
  ["Nicaragua", "Managua"],
  ["Niger", "Niamey"],
  ["Nigeria", "Abuja"],
  ["Noord-Korea", "Pyongyang"],
  ["Oman", "Muscat"],
  ["Pakistan", "Islamabad"],
  ["Palau", "Ngerulmud"],
  ["Panama", "Panama-Stad"],
  ["Papoea-Nieuw-Guinea", "Port Moresby"],
  ["Paraguay", "Asunción"],
  ["Peru", "Lima"],
  ["Filipijnen", "Manilla"],
  ["Qatar", "Doha"],
  ["Rusland", "Moskou"],
  ["Rwanda", "Kigali"],
  ["Samoa", "Apia"],
  ["San Marino", "San Marino"],
  ["São Tomé en Principe", "São Tomé"],
  ["Saoedi-Arabië", "Riyad"],
  ["Senegal", "Dakar"],
  ["Seychellen", "Victoria"],
  ["Sierra Leone", "Freetown"],
  ["Singapore", "Singapore"],
  ["Salomonseilanden", "Honiara"],
  ["Somalië", "Mogadishu"],
  ["Zuid-Afrika", "Pretoria"],
  ["Zuid-Korea", "Seoul"],
  ["Zuid-Soedan", "Juba"],
  ["Sri Lanka", "Sri Jayewardenepura Kotte"],
  ["Soedan", "Khartoem"],
  ["Suriname", "Paramaribo"],
  ["Syrië", "Damascus"],
  ["Tadzjikistan", "Doesjanbe"],
  ["Tanzania", "Dodoma"],
  ["Thailand", "Bangkok"],
  ["Oost-Timor", "Dili"],
  ["Togo", "Lomé"],
  ["Tonga", "Nuku'alofa"],
  ["Trinidad en Tobago", "Port of Spain"],
  ["Tunesië", "Tunis"],
  ["Turkije", "Ankara"],
  ["Turkmenistan", "Asjchabad"],
  ["Tuvalu", "Funafuti"],
  ["Oeganda", "Kampala"],
  ["Oekraïne", "Kyiv"],
  ["Verenigde Arabische Emiraten", "Abu Dhabi"],
  ["Verenigd Koninkrijk", "Londen"],
  ["Verenigde Staten", "Washington D.C."],
  ["Uruguay", "Montevideo"],
  ["Oezbekistan", "Tasjkent"],
  ["Vanuatu", "Port Vila"],
  ["Venezuela", "Caracas"],
  ["Vietnam", "Hanoi"],
  ["Zambia", "Lusaka"]
];

if (extraCapitalQuestions.length !== 150) {
  throw new Error(`Verwacht 150 extra topografievragen, kreeg ${extraCapitalQuestions.length}.`);
}

const extraCapitals = extraCapitalQuestions.map(([, capital]) => capital);
questions["De wereld"].push(...extraCapitalQuestions.map(([country, capital]) => {
  const wrongAnswers = shuffled(extraCapitals.filter((answer) => answer !== capital)).slice(0, 3);
  return vraag(
    country === "Zuid-Afrika"
      ? "Wat is de bestuurlijke hoofdstad van Zuid-Afrika?"
      : `Wat is de hoofdstad van ${country}?`,
    capital,
    wrongAnswers,
    `Zoek ${country} op de kaart en ontdek waar de hoofdstad ligt.`
  );
}));

const mapLocations = [
  { place: "Nederland", x: 514, y: 112, hint: "In Noordwest-Europa, aan de Noordzee." },
  { place: "Canada", x: 185, y: 100, hint: "In Noord-Amerika, boven de Verenigde Staten." },
  { place: "Brazilië", x: 223, y: 286, hint: "Het grootste land van Zuid-Amerika." },
  { place: "Japan", x: 822, y: 166, hint: "Een eilandengroep ten oosten van China en Korea." },
  { place: "Egypte", x: 551, y: 197, hint: "In Noordoost-Afrika, bij de Middellandse Zee." },
  { place: "India", x: 690, y: 192, hint: "Een groot land in Zuid-Azië." },
  { place: "Australië", x: 862, y: 342, hint: "Een eilandcontinent ten zuidoosten van Azië." },
  { place: "Mexico", x: 208, y: 188, hint: "Ten zuiden van de Verenigde Staten." },
  { place: "Zuid-Afrika", x: 566, y: 321, hint: "Helemaal in het zuiden van Afrika." },
  { place: "Noorwegen", x: 515, y: 89, hint: "Een lang land in het noorden van Europa." },
  { place: "Spanje", x: 488, y: 145, hint: "In het zuidwesten van Europa." },
  { place: "Argentinië", x: 216, y: 343, hint: "Een lang land aan de zuidkant van Zuid-Amerika." },
  { place: "China", x: 735, y: 143, hint: "Een enorm land in Oost-Azië." },
  { place: "Madagaskar", x: 602, y: 300, hint: "Een groot eiland voor de zuidoostkust van Afrika." },
  { place: "Nieuw-Zeeland", x: 949, y: 408, hint: "Eilanden ten zuidoosten van Australië." },
  { place: "Kenia", x: 568, y: 257, hint: "In Oost-Afrika, bij de evenaar." },
  { place: "Verenigde Staten", x: 185, y: 144, hint: "In Noord-Amerika, ten zuiden van Canada." },
  { place: "Italië", x: 519, y: 144, hint: "Het laarsvormige land in Zuid-Europa." },
  { place: "Indonesië", x: 770, y: 263, hint: "Een uitgestrekte eilandengroep tussen Azië en Australië." },
  { place: "Peru", x: 197, y: 250, hint: "Aan de westkant van Zuid-Amerika." }
];

const ROUND_LENGTH = 10;
const QUESTION_TIME = 15;
const STORAGE_KEY = "topowereld-records-v1";
const dialog = document.querySelector(".quiz-dialog");
const fullscreenButton = document.querySelector(".fullscreen-toggle");
const areaSelect = document.querySelector(".game-area-select");
const modeSelect = document.querySelector(".game-mode-select");
const questionTitle = document.querySelector("#quiz-title");
const answerList = document.querySelector(".answer-list");
const nextButton = document.querySelector(".quiz-next");
const feedback = document.querySelector(".quiz-feedback");
const progressFill = document.querySelector(".progress-fill");
const progressLabel = document.querySelector(".quiz-progress-label");
const areaName = document.querySelector(".quiz-area-name");
const quizPrompt = document.querySelector(".quiz-prompt");
const pointsLabel = document.querySelector(".game-points");
const streakLabel = document.querySelector(".game-streak");
const recordLabel = document.querySelector(".game-record");
const timerLabel = document.querySelector(".game-timer");
const hintButton = document.querySelector(".quiz-hint");
const arena = document.querySelector(".archery-arena");
const mapArena = document.querySelector(".world-map-arena");
const worldMap = document.querySelector(".world-map");
const mapMarkers = document.querySelector(".map-feedback-markers");
const aimingBow = document.querySelector(".aiming-bow");
let activeArea = "Nederland";
let gameMode = "archery";
let roundQuestions = [];
let questionIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let correctAnswers = 0;
let hintsLeft = 2;
let answered = false;
let timeLeft = QUESTION_TIME;
let timerId = null;
let shotTimerId = null;
let aimTargetIndex = 0;
let records = readRecords();

function readRecords() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (error) {
    console.warn("Topografie-records konden niet worden gelezen.", error);
    return {};
  }
}

function saveRecord(area, value) {
  records[area] = Math.max(records[area] || 0, value);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (error) {
    console.warn("Je record kon niet worden bewaard.", error);
  }
}

function shuffled(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function updateGameStats() {
  pointsLabel.textContent = score;
  streakLabel.textContent = `${streak}x`;
  recordLabel.textContent = records[activeArea] || 0;
  timerLabel.textContent = `${Math.max(0, timeLeft)}s`;
}

function startQuestionTimer() {
  clearInterval(timerId);
  timeLeft = QUESTION_TIME;
  updateGameStats();

  timerId = window.setInterval(() => {
    timeLeft -= 1;
    updateGameStats();

    if (timeLeft <= 0) {
      clearInterval(timerId);
      handleTimeout();
    }
  }, 1000);
}

function handleTimeout() {
  if (answered) return;

  answered = true;
  if (gameMode === "map") {
    showMapMarker(roundQuestions[questionIndex], "answer");
    hintButton.disabled = true;
    streak = 0;
    feedback.textContent = `Tijd op! ${roundQuestions[questionIndex].place} stond op de kaart aangegeven.`;
    feedback.classList.add("wrong");
    updateGameStats();
    nextButton.disabled = false;
    nextButton.innerHTML = questionIndex === ROUND_LENGTH - 1
      ? 'Bekijk je prijs <span aria-hidden="true">🏆</span>'
      : 'Volgende vraag <span aria-hidden="true">→</span>';
    return;
  }

  const question = roundQuestions[questionIndex];
  const options = [...answerList.children];
  options.forEach((option, index) => {
    option.disabled = true;
    if (index === question.correct) option.classList.add("correct");
  });
  hintButton.disabled = true;
  streak = 0;
  feedback.textContent = `Tijd op! Het juiste antwoord was ${question.answers[question.correct]}.`;
  feedback.classList.add("wrong");
  updateGameStats();
  nextButton.disabled = false;
  nextButton.innerHTML = questionIndex === ROUND_LENGTH - 1
    ? 'Bekijk je prijs <span aria-hidden="true">🏆</span>'
    : 'Volgende vraag <span aria-hidden="true">→</span>';
}

function renderQuestion() {
  const question = roundQuestions[questionIndex];
  answered = false;
  arena.hidden = gameMode !== "archery";
  mapArena.hidden = gameMode !== "map";
  questionTitle.textContent = question.question;
  quizPrompt.textContent = `Op ontdekking in ${activeArea} · 10 vragen`;
  areaName.textContent = activeArea.toUpperCase();
  progressLabel.textContent = `${questionIndex + 1} / ${ROUND_LENGTH}`;
  progressFill.style.width = `${(questionIndex / ROUND_LENGTH) * 100}%`;
  feedback.textContent = "";
  feedback.classList.remove("wrong");
  nextButton.disabled = true;
  nextButton.hidden = false;
  nextButton.innerHTML = 'Volgende vraag <span aria-hidden="true">→</span>';
  hintButton.disabled = hintsLeft === 0;
  hintButton.textContent = hintsLeft > 0 ? `💡 Hint (${hintsLeft})` : "Geen hints meer";
  answerList.replaceChildren();
  mapMarkers.replaceChildren();

  if (gameMode === "map") {
    startQuestionTimer();
    updateGameStats();
    return;
  }

  question.answers.forEach((answer, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "answer-option target-option";
    option.setAttribute("aria-label", `Doel ${index + 1}: ${answer}`);
    option.innerHTML = `<span class="target-board" aria-hidden="true"><span></span></span><span class="target-answer">${answer}</span><span class="target-key" aria-hidden="true">${index + 1}</span>`;
    option.addEventListener("click", () => shootAnswer(index, option));
    option.addEventListener("focus", () => {
      aimTargetIndex = index;
      aimAtTarget(option);
    });
    answerList.append(option);
  });
  aimTargetIndex = 0;
  aimAtTarget(answerList.firstElementChild);
  startQuestionTimer();
  updateGameStats();
}

function showMapMarker(location, type, x = location.x, y = location.y) {
  const marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  marker.setAttribute("cx", x);
  marker.setAttribute("cy", y);
  marker.setAttribute("r", type === "answer" ? "12" : "9");
  marker.setAttribute("class", `map-feedback-marker map-feedback-marker--${type}`);
  marker.setAttribute("aria-label", type === "answer" ? `Juiste plek: ${location.place}` : "Jouw keuze");
  mapMarkers.append(marker);
}

function chooseMapLocation(event) {
  if (gameMode !== "map" || answered) return;

  const point = worldMap.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const mapPoint = point.matrixTransform(worldMap.getScreenCTM().inverse());
  const question = roundQuestions[questionIndex];
  const distance = Math.hypot(mapPoint.x - question.x, mapPoint.y - question.y);
  const isCorrect = distance <= 24;
  answered = true;
  clearInterval(timerId);
  hintButton.disabled = true;
  showMapMarker(question, "choice", mapPoint.x, mapPoint.y);
  if (isCorrect) {
    showMapMarker(question, "answer");
    correctAnswers += 1;
    streak += 1;
    bestStreak = Math.max(bestStreak, streak);
    const earned = 100 + Math.min(streak - 1, 5) * 25 + Math.max(0, 24 - Math.floor(distance));
    const timeBonus = Math.max(0, timeLeft) * 6;
    score += earned + timeBonus;
    feedback.textContent = `Goed gevonden! ${question.place} ligt hier. +${earned + timeBonus} punten`;
  } else {
    streak = 0;
    showMapMarker(question, "answer");
    feedback.textContent = `Nog niet helemaal. ${question.place} staat op de kaart aangegeven.`;
    feedback.classList.add("wrong");
  }

  updateGameStats();
  nextButton.disabled = false;
  nextButton.innerHTML = questionIndex === ROUND_LENGTH - 1
    ? 'Bekijk je prijs <span aria-hidden="true">🏆</span>'
    : 'Volgende vraag <span aria-hidden="true">→</span>';
}

worldMap.addEventListener("click", chooseMapLocation);

function aimAtPoint(clientX, clientY) {
  const arenaRect = arena.getBoundingClientRect();
  const originX = arenaRect.left + arenaRect.width / 2 - 5;
  const originY = arenaRect.top + arenaRect.height - 42;
  const angle = Math.atan2(clientY - originY, clientX - originX) * (180 / Math.PI);
  aimingBow.style.transform = `rotate(${angle}deg)`;
}

function aimAtTarget(target) {
  if (!target) return;
  const rect = target.getBoundingClientRect();
  aimAtPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
}

arena.addEventListener("pointermove", (event) => {
  if (answered || event.pointerType === "touch") return;
  aimAtPoint(event.clientX, event.clientY);
});

function shootAnswer(selected, button) {
  if (answered) return;
  clearInterval(timerId);
  answered = true;
  hintButton.disabled = true;
  const arenaRect = arena.getBoundingClientRect();
  const targetRect = button.getBoundingClientRect();
  const svgRect = document.querySelector(".arena-archer").getBoundingClientRect();
  const startX = svgRect.left + (48 / 130) * svgRect.width - arenaRect.left;
  const startY = svgRect.top + (45 / 90) * svgRect.height - arenaRect.top;
  const endX = targetRect.left + targetRect.width / 2 - arenaRect.left;
  const endY = targetRect.top + targetRect.height / 2 - arenaRect.top;
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
  aimAtPoint(targetRect.left + targetRect.width / 2, targetRect.top + targetRect.height / 2);

  const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  arrow.setAttribute("class", "flying-arrow");
  arrow.setAttribute("viewBox", "0 0 36 12");
  arrow.setAttribute("aria-hidden", "true");
  arrow.innerHTML = '<path d="M1 6h32M26 1l9 5-9 5"/>';
  arrow.style.left = `${startX}px`;
  arrow.style.top = `${startY}px`;
  arrow.style.transform = `rotate(${angle}deg)`;
  arrow.style.transformOrigin = "0 50%";
  arena.append(arrow);

  const unitX = Math.cos(angle * Math.PI / 180);
  const unitY = Math.sin(angle * Math.PI / 180);
  const endLeft = endX - 36 * unitX;
  const endTop = endY - 6 - 36 * unitY;
  if (typeof arrow.animate === "function") {
    arrow.animate(
      [
        { left: `${startX}px`, top: `${startY}px` },
        { left: `${endLeft}px`, top: `${endTop}px` }
      ],
      { duration: 420, easing: "cubic-bezier(.2,.7,.3,1)", fill: "forwards" }
    );
  }

  shotTimerId = window.setTimeout(() => {
    arrow.remove();
    finishShot(selected, button);
  }, 420);
}

function finishShot(selected, button) {
  const question = roundQuestions[questionIndex];
  const options = [...answerList.children];
  options.forEach((option, index) => {
    option.disabled = true;
    if (index === question.correct) option.classList.add("correct");
  });
  if (selected === question.correct) {
    correctAnswers += 1;
    streak += 1;
    bestStreak = Math.max(bestStreak, streak);
    const earned = 100 + Math.min(streak - 1, 5) * 25;
    const timeBonus = Math.max(0, timeLeft) * 6;
    score += earned + timeBonus;
    feedback.textContent = `Helemaal goed! +${earned + timeBonus} punten${streak > 1 ? ` · ${streak} op een rij!` : ""}`;
  } else {
    streak = 0;
    button.classList.add("incorrect");
    feedback.textContent = `Nog niet helemaal. Het goede antwoord is ${question.answers[question.correct]}.`;
    feedback.classList.add("wrong");
  }
  updateGameStats();
  nextButton.disabled = false;
  nextButton.innerHTML = questionIndex === ROUND_LENGTH - 1
    ? 'Bekijk je prijs <span aria-hidden="true">🏆</span>'
    : 'Volgende vraag <span aria-hidden="true">→</span>';
}

function showResult() {
  clearInterval(timerId);
  arena.hidden = true;
  mapArena.hidden = true;
  progressFill.style.width = "100%";
  progressLabel.textContent = "Klaar!";
  const oldRecord = records[activeArea] || 0;
  const newRecord = score > oldRecord;
  saveRecord(activeArea, score);
  const message = newRecord
    ? "Nieuw record! Wat een geweldige ontdekkingsreiziger ben jij."
    : score >= 750
      ? "Fantastisch gespeeld! Jij kent de kaart op je duimpje."
      : "Goed geoefend! Elke ronde ontdek je weer iets nieuws.";
  questionTitle.textContent = newRecord ? "Een nieuw record!" : "Jouw ontdekkingstocht zit erop!";
  quizPrompt.textContent = `Je avontuur in ${activeArea}`;
  answerList.replaceChildren();
  const medal = score >= 900 ? "🥇" : score >= 600 ? "🥈" : score >= 300 ? "🥉" : "🌱";
  feedback.classList.remove("wrong");
  feedback.innerHTML = `<div class="quiz-result-medal">${medal}</div><div class="quiz-result-score">${score}<small>punten verdiend</small></div><p class="quiz-result-message">${message}<br>Langste reeks: ${bestStreak} goed achter elkaar.</p>`;
  nextButton.disabled = false;
  nextButton.hidden = false;
  nextButton.innerHTML = 'Nog een keer spelen <span aria-hidden="true">↻</span>';
  nextButton.dataset.restart = "true";
  hintButton.hidden = true;
  updateGameStats();
  feedback.insertAdjacentHTML("beforeend", `<p class="quiz-result-accuracy">${correctAnswers} van de ${ROUND_LENGTH} vragen goed beantwoord.</p>`);
}

function startQuiz(area = "Nederland") {
  clearInterval(timerId);
  clearTimeout(shotTimerId);
  activeArea = gameMode === "map" ? "De wereld" : (questions[area] ? area : "Nederland");
  areaSelect.value = activeArea;
  areaSelect.disabled = gameMode === "map";
  roundQuestions = gameMode === "map"
    ? shuffled(mapLocations).slice(0, ROUND_LENGTH).map((location) => ({
      ...location,
      question: `Waar ligt ${location.place} op de wereldkaart?`,
      hint: location.hint
    }))
    : shuffled(questions[activeArea])
    .slice(0, ROUND_LENGTH)
    .map((question) => {
      const answers = shuffled(question.answers);
      return {
        ...question,
        answers,
        correct: answers.indexOf(question.answers[question.correct])
      };
    });
  questionIndex = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  correctAnswers = 0;
  hintsLeft = 2;
  timeLeft = QUESTION_TIME;
  delete nextButton.dataset.restart;
  hintButton.hidden = false;
  renderQuestion();
  if (!dialog.open) dialog.showModal();
}

document.querySelectorAll("[data-start-quiz]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    startQuiz();
  });
});
document.querySelectorAll("[data-area]").forEach((button) => {
  button.addEventListener("click", () => startQuiz(button.dataset.area));
});
areaSelect.addEventListener("change", () => startQuiz(areaSelect.value));
modeSelect.addEventListener("change", () => {
  gameMode = modeSelect.value;
  startQuiz(gameMode === "map" ? "De wereld" : areaSelect.value);
});
nextButton.addEventListener("click", () => {
  if (nextButton.dataset.restart) {
    startQuiz(activeArea);
  } else if (questionIndex < ROUND_LENGTH - 1) {
    questionIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
});
hintButton.addEventListener("click", () => {
  if (answered || hintsLeft === 0) return;
  hintsLeft -= 1;
  const question = roundQuestions[questionIndex];
  feedback.textContent = `Hint: ${question.hint}`;
  hintButton.disabled = hintsLeft === 0;
  hintButton.textContent = hintsLeft > 0 ? `💡 Hint (${hintsLeft})` : "Geen hints meer";
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
fullscreenButton.addEventListener("click", async () => {
  if (!document.fullscreenEnabled) {
    feedback.textContent = "Volledig scherm wordt niet ondersteund door deze browser.";
    feedback.classList.add("wrong");
    return;
  }

  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch (error) {
    console.warn("Volledig scherm kon niet worden geopend.", error);
    feedback.textContent = "Volledig scherm kon niet worden geopend.";
    feedback.classList.add("wrong");
  }
});
document.addEventListener("fullscreenchange", () => {
  const isFullscreen = Boolean(document.fullscreenElement);
  fullscreenButton.textContent = isFullscreen ? "⤢" : "⛶";
  fullscreenButton.setAttribute("aria-label", isFullscreen ? "Volledig scherm sluiten" : "Volledig scherm openen");
  fullscreenButton.title = isFullscreen ? "Volledig scherm sluiten" : "Volledig scherm";
});
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  clearInterval(timerId);
  clearTimeout(shotTimerId);
  if (document.fullscreenElement) {
    document.exitFullscreen().catch((error) => {
      console.warn("Volledig scherm kon niet worden gesloten.", error);
    });
  }
  delete nextButton.dataset.restart;
  answerList.replaceChildren();
  feedback.textContent = "";
});

document.addEventListener("keydown", (event) => {
  if (!dialog.open || answered) return;
  const targets = [...answerList.querySelectorAll(".target-option")];
  if (/^[1-4]$/.test(event.key)) {
    targets[Number(event.key) - 1]?.click();
    return;
  }
  if (event.code === "Space") {
    event.preventDefault();
    targets[aimTargetIndex]?.click();
    return;
  }
  if (["ArrowLeft", "ArrowRight", "a", "d"].includes(event.key)) {
    event.preventDefault();
    const currentIndex = targets.indexOf(document.activeElement);
    const step = event.key === "ArrowLeft" || event.key === "a" ? -1 : 1;
    targets[(currentIndex + step + targets.length) % targets.length]?.focus();
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
