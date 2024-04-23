import { useEffect, useState } from "react";


// Defining a custom hook , a hook is nothing but a function that returns an array.
// We are designing a custom hook to get the information of the currency.

function useCurrencyInfo(currency) {
    const api_url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  
    const [data, setData] = useState({}); // declaring the data with empty object 


    useEffect(() => {
        fetch(api_url)
        .then((res) => res.json())  // we will be getting a string response from the api, so converting it to json first
        .then((res) => setData(res[currency]) ); // getting the object for the specific currency like: usd, inr, etc.
    }, [currency]); // will be invoking this whenever the currency is changed 


    return data;  // returning the object data
}

export default useCurrencyInfo;