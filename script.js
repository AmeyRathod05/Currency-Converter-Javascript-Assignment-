let api = "https://v6.exchangerate-api.com/v6/e3e6dbe0c864b4fd18eb78a8/latest/USD";

const sourceDropDown = document.getElementById("source-currency-select");

const targetDropDown = document.getElementById("target-currency-select");

//dropdown with currency-codes 
currency_list.forEach((currency)=>{
    const option = document.createElement("option");
    option.value = currency;option.text = currency;
    sourceDropDown.add(option);
});

currency_list.forEach((currency)=>{
    const option = document.createElement("option");
    option.value = currency;option.text = currency;
    targetDropDown.add(option);
});


sourceDropDown.value = "USD";
targetDropDown.value = "INR";

let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const sourceCurrency = sourceDropDown.value;
    const targetCurrency = targetDropDown.value;

    if(amount.length != 0){
        fetch(api)
        .then((resp)=> resp.json())
        .then((data) => {
            let sourceExchangeRate = data.conversion_rates[sourceCurrency];
            
            let targetExchangeRate = data.conversion_rates[targetCurrency];

            const convertedAmount = (amount / sourceExchangeRate) * targetExchangeRate;

            result.innerHTML = `${amount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
        });
    }else{
        alert("please fill in the amount");
    }
};

document.querySelector("#convert-button").addEventListener("click", convertCurrency);

window.addEventListener("load", convertCurrency);