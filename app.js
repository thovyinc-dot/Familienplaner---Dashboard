function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleTimeString("de-DE", { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

function setSeasonBackground() {
    const m = new Date().getMonth();
    let bg;
    if (m <= 1 || m === 11) bg = "winter";
    else if (m <= 4) bg = "spring";
    else if (m <= 7) bg = "summer";
    else bg = "autumn";

    document.getElementById("background").style.backgroundImage =
        `url(https://source.unsplash.com/1920x1080/?${bg},nature)`;
}
setSeasonBackground();

function buildCalendar() {
    const now = new Date();
    const days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    let html = "<div class='calendar'>";
    for (let i=1;i<=days;i++) {
        html += `<span>${i}</span>`;
    }
    html += "</div>";
    document.getElementById("calendar").innerHTML = html;
}
buildCalendar();

document.getElementById("news").textContent =
    "Internationale Nachrichten: Wirtschaft stabilisiert sich – Wetterlage beruhigt sich – Wissenschaft meldet neue Durchbrüche – Weitere Meldungen folgen …";

