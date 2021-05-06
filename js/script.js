let form = document.querySelector(".js-form");
let polishCurrency = document.querySelector(".js-form__polishCurrency");
let selectCurrency = document.querySelector(".js-form__selectCurrency");
let exchangeRate = document.querySelector(".js-form__exchangeRate");
let amount = document.querySelector(".js-amount");
let resetButton = document.querySelector(".js-buttons__reset");

let foreignForm = document.querySelector(".js-foreignForm");
let foreignSelector = document.querySelector(".js-foreignForm__foreignSelector");
let foreignRate = document.querySelector(".js-foreignForm__foreignRate");
let foreignSum = document.querySelector(".js-foreignForm__sum");
let foreignPLN = document.querySelector(".js-foreignForm__pln");
let resetForeign = document.querySelector(".js-buttons__resetForeing");

form.addEventListener("input", () => {
    switch (selectCurrency.value) {
        case "3.7940":
            let rateDollar = +selectCurrency.value;
            exchangeRate.value = +rateDollar.toFixed(2);
            break;
        case "4.5539":
            let rateEuro = +selectCurrency.value;
            exchangeRate.value = +rateEuro.toFixed(2);
            break;
        case "5.2622":
            let ratePound = +selectCurrency.value;
            exchangeRate.value = +ratePound.toFixed(2)
            break;

        default:
            selectCurrency.value = "chooseOption"
            break;
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    switch (selectCurrency.value) {
        case "3.7940":
            let symbolDollar = "USD";
            let sumDollar;
            sumDollar = +polishCurrency.value / +exchangeRate.value;
            amount.innerText = `${sumDollar.toFixed(2)} ${symbolDollar}`;
            break;
        case "4.5539":
            let symbolEuro = "EUR";
            let sumEuro;
            sumEuro = +polishCurrency.value / +exchangeRate.value;
            amount.innerText = `${sumEuro.toFixed(2)} ${symbolEuro}`;
            break;
        case "5.2622":
            let symbolPound = "GBP";
            let sumPound;
            sumPound = +polishCurrency.value / +exchangeRate.value;
            amount.innerText = `${sumPound.toFixed(2)} ${symbolPound}`;
            break;
        case "chooseOption":
            let sum;
            sum = +polishCurrency.value / +exchangeRate.value;
            amount.innerText = `${sum.toFixed(2)} W wybranej przez Ciebie walucie`;
            break;
        default:
            selectCurrency.value = "chooseOption";
            break;
    }

});

resetButton.addEventListener("click", () => {
    amount.innerText = "";
});

foreignForm.addEventListener("input", () => {
    switch (foreignSelector.value) {
        case "Dolar-amerykański":
            foreignRate.value = "3.79";
            break;
        case "Euro":
            foreignRate.value = "4.55";
            break;
        case "Funt-szterling":
            foreignRate.value = "5.26";
            break;
        default:
            break;
    }
});

foreignForm.addEventListener("submit", (event) => {
    event.preventDefault();
    switch (foreignSelector.value) {
        case "Dolar-amerykański":
            let summaryDollar = +foreignPLN.value * +foreignRate.value;
            foreignSum.innerText = `${summaryDollar} PLN`;
            break;
        case "Euro":
            let summaryEuro = +foreignPLN.value * +foreignRate.value;
            foreignSum.innerText = `${summaryEuro} PLN`
            break;
        case "Funt-szterling":
            let summaryPound = +foreignPLN.value * +foreignRate.value;
            foreignSum.innerText = `${summaryPound} PLN`
            break;
        default:
            let summaryGeneral = +foreignPLN.value * +foreignRate.value;
            foreignSum.innerText = `${summaryGeneral} PLN`
            break;
    }
});

resetForeign.addEventListener("click", () => {
    foreignSum.innerText = "";
});