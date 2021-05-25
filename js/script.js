{
    {
        const selectCurrency = document.querySelector(".js-form__selectCurrency");
        const exchangeRate = document.querySelector(".js-form__exchangeRate");
        const amount = document.querySelector(".js-form__amount");
        const resetButton = document.querySelector(".js-buttons__reset");
        const form = document.querySelector(".js-form");

        const currencyChooser = () => {
            switch (selectCurrency.value) {
                case "3.7940":
                    const rateDollar = +selectCurrency.value;
                    return exchangeRate.value = +rateDollar.toFixed(2);
                case "4.5539":
                    const rateEuro = +selectCurrency.value;
                    return exchangeRate.value = +rateEuro.toFixed(2);
                case "5.2622":
                    const ratePound = +selectCurrency.value;
                    return exchangeRate.value = +ratePound.toFixed(2);
                default:
                    return selectCurrency.value = "chooseOption";
            }
        }

        const currencyCalculator = () => {
            const polishCurrency = document.querySelector(".js-form__polishCurrency");
            switch (selectCurrency.value) {
                case "3.7940":
                    const symbolDollar = "USD";
                    const sumDollar = +polishCurrency.value / +exchangeRate.value;
                    return amount.innerText = `${sumDollar.toFixed(2)} ${symbolDollar}`;
                case "4.5539":
                    const symbolEuro = "EUR";
                    const sumEuro = +polishCurrency.value / +exchangeRate.value;
                    return amount.innerText = `${sumEuro.toFixed(2)} ${symbolEuro}`;
                case "5.2622":
                    const symbolPound = "GBP";
                    const sumPound = +polishCurrency.value / +exchangeRate.value;
                    return amount.innerText = `${sumPound.toFixed(2)} ${symbolPound}`;
                case "chooseOption":
                    const sum = +polishCurrency.value / +exchangeRate.value;
                    return amount.innerText = `${sum.toFixed(2)} W wybranej przez Ciebie walucie`;
                default:
                    return selectCurrency.value = "chooseOption";
            }
        }

        form.addEventListener("input", currencyChooser);

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            currencyCalculator();
        });

        resetButton.addEventListener("click", () => {
            amount.innerText = "";
        });
    }

    {
        const foreignForm = document.querySelector(".js-foreignForm");
        const foreignSelector = document.querySelector(".js-foreignForm__foreignSelector");
        const foreignRate = document.querySelector(".js-foreignForm__foreignRate");
        const foreignSum = document.querySelector(".js-foreignForm__sum");
        const resetForeign = document.querySelector(".js-buttons__resetForeing");

        const foreignCurrencyChooser = () => {
            switch (foreignSelector.value) {
                case "Dolar-amerykański":
                    return foreignRate.value = "3.79";
                case "Euro":
                    return foreignRate.value = "4.55";
                case "Funt-szterling":
                    return foreignRate.value = "5.26";
                default:
                    break;
            }
        }

        const foreignCurrencyCalculator = () => {
            const foreignPLN = document.querySelector(".js-foreignForm__pln");
            switch (foreignSelector.value) {
                case "Dolar-amerykański":
                    const summaryDollar = +foreignPLN.value * +foreignRate.value;
                    return foreignSum.innerText = `${summaryDollar} PLN`;
                case "Euro":
                    const summaryEuro = +foreignPLN.value * +foreignRate.value;
                    return foreignSum.innerText = `${summaryEuro} PLN`
                case "Funt-szterling":
                    const summaryPound = +foreignPLN.value * +foreignRate.value;
                    return foreignSum.innerText = `${summaryPound} PLN`
                default:
                    const summaryGeneral = +foreignPLN.value * +foreignRate.value;
                    return foreignSum.innerText = `${summaryGeneral} PLN`
            }
        }

        foreignForm.addEventListener("input", foreignCurrencyChooser);

        foreignForm.addEventListener("submit", (event) => {
            event.preventDefault();
            foreignCurrencyCalculator();
        });

        resetForeign.addEventListener("click", () => {
            foreignSum.innerText = "";
        });
    }
}