/* ===== UHR ===== */
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
}
setInterval(updateClock, 1000);
updateClock();

/* ===== WETTER (OPEN-METEO, KEIN API-KEY) ===== */
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.5&longitude=9.7&current_weather=true")
    .then(r => r.json())
    .then(d => {
        const w = d.current_weather;
        document.getElementById("weatherTemp").textContent = `${Math.round(w.temperature)}°C`;
        document.getElementById("weatherDesc").textContent = " Wetter";
        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${w.weathercode < 3 ? "01" : "03"}d.png`;

        setBackground(w.weathercode);
    });

/* ===== HINTERGRUND ===== */
function setBackground(code) {
    const month = new Date().getMonth();
    let season =
        month <= 1 || month === 11 ? "winter" :
        month <= 4 ? "spring" :
        month <= 7 ? "summer" : "autumn";

    let weather =
        code < 3 ? "sunny" :
        code < 50 ? "cloudy" :
        "rain";

    document.body.style.backgroundImage =
        `url(https://source.unsplash.com/1920x1080/?${season},${weather},nature)`;
}

/* ===== KALENDER ===== */
const now = new Date();
document.getElementById("monthTitle").textContent =
    now.toLocaleDateString("de-DE", { month: "long", year: "numeric" });

const days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
const cal = document.getElementById("calendar");
for (let i = 1; i <= days; i++) {
    const d = document.createElement("div");
    d.textContent = i;
    cal.appendChild(d);
}

/* ===== NEWS ===== */
fetch("https://api.allorigins.win/raw?url=https://rss.cnn.com/rss/edition_world.rss")
    .then(r => r.text())
    .then(t => {
        const titles = [...t.matchAll(/<title><!\[CDATA\[(.*?)\]\]><\/title>/g)]
            .slice(1,6).map(m => m[1]).join("   •   ");
        document.getElementById("news").textContent = titles;
    });

/* ===== LOCAL STORAGE ===== */
["shopping","todo"].forEach(id => {
    const el = document.getElementById(id);
    el.value = localStorage.getItem(id) || "";
    el.oninput = () => localStorage.setItem(id, el.value);
});
