let count = 0;
const countDisplay = document.getElementById("countDisplay");

document.getElementById("plusBtn").addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

document.getElementById("minusBtn").addEventListener("click", function () {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
});

const colours = ["red", "blue", "green", "purple", "orange"];
const colourBox = document.getElementById("colourBox");
const colourBtn = document.getElementById("colourBtn");

colourBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * colours.length);
    colourBox.style.backgroundColor = colours[randomIndex];
});

const quotes = [
    "Semester 1 almost done!",
    "Believe in yourself!",
    "Its Summer enjoy the sun!",
    "You are loved!",
    "You've got this!"
];

document.getElementById("quoteBtn").addEventListener("click", function () {
    const quotesRandom = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").textContent = quotes[quotesRandom];
});