const juiceArray = document.querySelectorAll(".juice-wrapper");
const title = document.querySelector("h1");
const description = document.querySelector(".juice-info");
const juiceWheel = document.querySelector(".juice-wheel");
const fruitsWheel = document.querySelector(".fruits-wheel");
const juiceText = document.querySelector(".juice-text");

let currentJuice = juiceArray[0];
let deg = -45;

const juiceData = [
  {
    name: "Orange Juice",
    descriptioN:
      "Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges. It comes in several different varieties, including blood orange, navel oranges, valencia orange, clementine, and tangerine.",
    backgroundColor:
      "linear-gradient(90deg, rgba(167,162,244,1) 0%, rgba(112,112,143,1) 35%, rgba(166,149,13,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    name: "Plum Juice",
    descriptioN:
      "A luscious elixir extracted from ripe plums. Bursting with rich flavor and natural sweetness, it delivers a refreshing and satisfying experience. Indulge in the succulent essence of plums while enjoying the numerous health benefits it offers.",
    backgroundColor:
      "linear-gradient(90deg, rgba(2,19,45,1) 4%, rgba(120,109,181,1) 49%, rgba(230,132,132,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    name: "Kiwi Juice",
    descriptioN:
      "A vibrant and tangy elixir extracted from ripe kiwis. Packed with essential nutrients, it offers a refreshing and invigorating experience. The perfect balance of sweetness and tanginess makes it a popular choice for a healthy and flavorful beverage.",
    backgroundColor:
      "linear-gradient(90deg, rgba(9,111,55,1) 0%, rgba(39,196,129,1) 49%, rgba(47,209,232,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    name: "Strawberry Juice",
    descriptioN:
      "Strawberry Juice is a refreshing fresh fruit juice that is full of vitamin C and antioxidants and lot of invigorating flavor. Apart from fresh and ripe strawberries, this recipe also uses lime juice to make it tantalizing.",
    backgroundColor:
      "linear-gradient(90deg, rgba(101,18,18,1) 0%, rgba(186,44,44,1) 49%, rgba(235,134,80,1) 100%, rgba(0,212,255,1) 100%)",
  },
];

juiceArray.forEach((element, index) => {
  element.addEventListener("click", () => {
    document.querySelector("main").style.background =
      juiceData[index].backgroundColor;
    deg = deg - 90;
    juiceWheel.style.transform = `rotate(${deg}deg)`;
    fruitsWheel.style.transform = `rotate(${deg}deg)`;
    title.innerHTML = juiceData[index].name;
    description.innerHTML = juiceData[index].descriptioN;
    currentJuice.classList.remove("activePhoto");
    element.classList.add("activePhoto");
    currentJuice = element;
    juiceText.classList.add("fade-in");
    setTimeout(() => {
      juiceText.classList.remove("fade-in");
    }, 1000);
  });
});
