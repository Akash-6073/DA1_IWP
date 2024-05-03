const tigerReserves = [
    "Akash",
    "Barali",
    "Bali",
    "Bhamini",
    "Chakra",
    "Chandi",
    "Chitti",
    "Dash",
    "Indira",
    "Jagat",
    "Johar",
    "Kali",
    "Kamala",
    "Kanha",
    "Leela",
    "Magali",
    "Maharaj",
    "Mira",
    "Rani",
    "Ranveer",
    "Vijay",
    "Yash",
    "Shakti",
    "Bagh",
    "Junglee",
    "Aarav",
    "Airavat",
    "Yudh",
    "Vayu",
    "Rohini"

];

const tigerReserveList = document.getElementById("tiger-reserves");

tigerReserves.forEach(reserve => {
    const listItem = document.createElement("li");
    listItem.textContent = reserve;
    tigerReserveList.appendChild(listItem);
});
