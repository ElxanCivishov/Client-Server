const ul = document.querySelectorAll(".valyuta-text");
const inputLeft = document.querySelector("#convertLeftValue");
const inputRight = document.querySelector("#convertRightValue");
const leftAmountChange = document.querySelector("#leftAmountChange");
const rightAmountChange = document.querySelector("#rightAmountChange");

let leftValyutaName = "RUB";
let rightValyutaName = "USD";

ul.forEach((item) => {
  item.addEventListener("mouseover", ulMouseOver);
  item.addEventListener("click", selectedValyuta);
});

inputLeft.addEventListener("keyup", getConvertLeftValue);
inputRight.addEventListener("keyup", getConvertRightValue);

function activeMouseOver() {
  if (event.target.parentElement.id === "left-list") {
    ul[0].firstElementChild.style.background = "#833ae0";
  } else if (event.target.parentElement.id === "right-list") {
    ul[1].firstElementChild.nextElementSibling.style.background = "#833ae0";
  }
}

function activeMouseOut() {
  if (event.target.parentElement.id === "left-list") {
    ul[0].firstElementChild.style.background = "#833ae0";
  } else if (event.target.parentElement.id === "right-list") {
    ul[1].firstElementChild.nextElementSibling.style.background = "#833ae0";
  }
}

function ulMouseOver(event) {
  if (event.target.tagName === "LI") {
    event.target.style.background = "#833ae0";
    activeMouseOver();
    ul.forEach((item) => {
      item.removeEventListener("mouseover", ulMouseOver);
      item.addEventListener("mouseout", ulMouseOut);
    });
  }
}

function ulMouseOut(event) {
  if (event.target.tagName === "LI") {
    event.target.style.background = "white";
    activeMouseOut();
    ul.forEach((item) => {
      item.removeEventListener("mouseout", ulMouseOut);
      item.addEventListener("mouseover", ulMouseOver);
    });
  }
}

function selectedValyuta(event) {
  if (event.target.tagName === "LI") {
    ul.forEach((item) => {
      item.removeEventListener("mouseout", ulMouseOut);
      for (let i = 0; i < item.childElementCount; i++) {
        event.target.parentElement.children[i].style.background = "white";
      }
    });
    event.target.style.background = "#833ae0";
    if (event.target.parentElement.id === "left-list") {
      leftValyutaName = event.target.textContent;
    } else if (event.target.parentElement.id === "right-list") {
      rightValyutaName = event.target.textContent;
    }
    getRightAmountChange();
    getLeftAmountChange();
    if (
      event.target.parentElement.id === "left-list" &&
      inputLeft.value !== ""
    ) {
      leftValueFunc(inputLeft.value);
    }
    if (
      event.target.parentElement.id === "right-list" &&
      inputRight.value !== ""
    ) {
      rightValueFunc(inputRight.value);
    }
  }
}

function getLeftAmountChange() {
  fetch(
    `https://api.exchangerate.host/latest?base=${leftValyutaName}&symbols=${rightValyutaName}&amount=${1}`
  )
    .then((res) => res.json())
    .then((d) => {
      switch (rightValyutaName) {
        case "USD":
          leftAmountChange.innerHTML = `1 ${leftValyutaName} = ${d.rates.USD} USD`;
          break;
        case "RUB":
          leftAmountChange.innerHTML = `1 ${leftValyutaName} = ${d.rates.RUB} RUB`;
          break;
        case "EUR":
          leftAmountChange.innerHTML = `1 ${leftValyutaName} = ${d.rates.EUR} EUR`;
          break;
        case "GBP":
          leftAmountChange.innerHTML = `1 ${leftValyutaName} = ${d.rates.GBP} GPB`;
          break;
        default:
          break;
      }
    });
}

function getRightAmountChange() {
  fetch(
    `https://api.exchangerate.host/latest?base=${rightValyutaName}&symbols=${leftValyutaName}&amount=${1}`
  )
    .then((res) => res.json())
    .then((d) => {
      switch (leftValyutaName) {
        case "USD":
          rightAmountChange.innerHTML = `1 ${rightValyutaName} = ${d.rates.USD} USD`;
          break;
        case "RUB":
          rightAmountChange.innerHTML = `1 ${rightValyutaName} = ${d.rates.RUB} RUB`;
          break;
        case "EUR":
          rightAmountChange.innerHTML = `1 ${rightValyutaName} = ${d.rates.EUR} EUR`;
          break;
        case "GBP":
          rightAmountChange.innerHTML = `1 ${rightValyutaName} = ${d.rates.GBP} GPB`;
          break;
        default:
          break;
      }
    });
}

function getConvertLeftValue() {
  let val = inputLeft.value;
  leftValueFunc(val);
}

function leftValueFunc(input) {
  const data = fetch(
    `https://api.exchangerate.host/latest?base=${leftValyutaName}&symbols=${rightValyutaName}&amount=${input}`
  )
    .then((res) => res.json())
    .then((d) => {
      switch (rightValyutaName) {
        case "USD":
          inputRight.value = d.rates.USD;
          break;
        case "RUB":
          inputRight.value = d.rates.RUB;
          break;
        case "EUR":
          inputRight.value = d.rates.EUR;
          break;
        case "GBP":
          inputRight.value = d.rates.GBP;
          break;
        default:
          break;
      }
    });
}

function getConvertRightValue() {
  let val = inputRight.value;
  rightValueFunc(val);
}

function rightValueFunc(input) {
  const data = fetch(
    `https://api.exchangerate.host/latest?base=${rightValyutaName}&symbols=${leftValyutaName}&amount=${input}`
  )
    .then((res) => res.json())
    .then((d) => {
      switch (leftValyutaName) {
        case "USD":
          inputLeft.value = d.rates.USD;
          break;
        case "RUB":
          inputLeft.value = d.rates.RUB;
          break;
        case "EUR":
          inputLeft.value = d.rates.EUR;
          break;
        case "GBP":
          inputLeft.value = d.rates.GBP;
          break;
        default:
          break;
      }
    });
}