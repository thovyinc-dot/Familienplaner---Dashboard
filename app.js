// Uhrzeit
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
}
setInterval(updateClock, 1000);
updateClock();

// Jahreszeiten-Hintergrund
const month = new Date().getMonth();
let bg;
if (month <= 1 || month === 11) bg = "winter.jpg";
else if (month <= 4) bg = "spring.jpg";
else if (month <= 7) bg = "summer.jpg";
else bg = "autumn.jpg";

document.body.style.backgroundImage = `url(${bg})`;

// Kalender (vereinfachte Monatsanzeige)
const calendar = document.getElementById("calendar");
calendar.innerText = new Date().toLocaleDateString("de-DE", {
  month: "long",
  year: "numeric"
});

// Platzhalter für API-Anbindung:
// Wetter: OpenWeatherMap
// Nachrichten: NewsAPI / RSS
// Ferien: schulferien.org API

