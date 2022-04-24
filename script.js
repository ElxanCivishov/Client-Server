const ul = document.querySelectorAll(".valyuta-text");
const inputLeft = document.querySelector("#convertLeftValue");
const inputRight = document.querySelector("#convertRightValue");
ul.forEach((item) => {
  item.addEventListener("mouseover", ulMouseOver);
  item.addEventListener("click", selectedValyuta);
});
let leftValyutaName = "RUB";
let rightValyutaName = "USD";
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
  }
}

inputLeft.addEventListener("keyup", getConvertLeftValue);
function getConvertLeftValue(event) {
  const data = fetch(
    `https://api.exchangerate.host/latest?base=${leftValyutaName}&symbols=${rightValyutaName}&amount=${event.target.value}`
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

inputRight.addEventListener("keyup", getConvertRightValue);
function getConvertRightValue(event) {
  const data = fetch(
    `https://api.exchangerate.host/latest?base=${rightValyutaName}&symbols=${leftValyutaName}&amount=${event.target.value}`
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
