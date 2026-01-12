/* ---------- SAISON-HINTERGRUND ---------- */
const month = new Date().getMonth();
let bg;

if (month <= 1 || month === 11) bg = "winter";
else if (month <= 4) bg = "spring";
else if (month <= 7) bg = "summer";
else bg = "autumn";

document.body.style.backgroundImage =
    `url(https://source.unsplash.com/1920x1080/?${bg},nature)`;

/* ---------- MONAT & KALENDER ---------- */
const now = new Date();
const monthNames = [
    "Januar","Februar","März","April","Mai","Juni",
    "Juli","August","September","Oktober","November","Dezember"
];

document.getElementById("monthTitle").textContent =
    `${monthNames[now.getMonth()]} ${now.getFullYear()}`;

const calendar = document.getElementById("calendar");
const days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

for (let i = 1; i <= days; i++) {
    const d = document.createElement("div");
    d.textContent = i;
    calendar.appendChild(d);
}

/* ---------- LOCAL STORAGE ---------- */
const shopping = document.getElementById("shopping");
const todo = document.getElementById("todo");

shopping.value = localStorage.getItem("shopping") || "";
todo.value = localStorage.getItem("todo") || "";

shopping.oninput = () =>
    localStorage.setItem("shopping", shopping.value);

todo.oninput = () =>
    localStorage.setItem("todo", todo.value);
