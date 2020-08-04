"use strict";

// ------ #1

let totalParagraph = document.querySelector(".total");

let buttons = document.querySelectorAll(".btn");

let totalDue = 0;

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    let amount = parseInt(item.getAttribute("data-amount"));
    totalDue += amount;
    totalParagraph.innerText = `Total:$${totalDue}`;
  });
});

// ------ #2

let form = document.querySelector(".money-form");

let coinContainer = document.querySelector(".coin-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(form);
  let number = data.get("amount");
  let type = data.get("type");
  for (let i = 0; i < number; i++) {
    let newCoin = document.createElement("div");
    newCoin.classList.add(type, "coin");
    newCoin.innerText = type;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
  form.reset();
});

// ------ #3

let bulb = document.querySelector(".bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onButton.addEventListener("click", () => {
  bulb.classList.add("light");
});

offButton.addEventListener("click", () => {
  bulb.classList.remove("light");
});
toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("light");
});
toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("light");
});
endButton.addEventListener("click", () => {
  bulb.remove();
});
