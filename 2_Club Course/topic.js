var topic = [
    "Pokémon Let's Go (上)",
    "休息",
    "Pokémon Let's Go (下)",
    "休息",
    "Pokémon 劍盾 (一周目上)",
    "休息",
    "Pokémon 劍盾 (一周目上)"
];

var startDate = new Date();
function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,21);