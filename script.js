const cars = [
  { name: "Tesla Model S", price: "₹90L", img: "images\\audi.jpg" },
  { name: "BMW M4", price: "₹1.2Cr", img: "images\\bmw.jpg" },
  { name: "Audi R8", price: "₹2Cr", img: "images\\audi.jpg" },
  { name: "Mustang GT", price: "₹80L", img: "images\\mustang.jpg" }
];

const container = document.getElementById("cars");

cars.forEach((car, i) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${car.img}" alt="${car.name}">
    <h3>${car.name}</h3>
    <p>${car.price}</p>
    <button onclick="buyCar('${car.name}')">Buy Now</button>
  `;

  container.appendChild(card);

  setTimeout(() => {
    card.classList.add("show");
  }, i * 200);
});

function buyCar(name) {
  alert("You selected " + name);
}

function scrollToCars() {
  document.getElementById("cars").scrollIntoView({
    behavior: "smooth"
  });
}
