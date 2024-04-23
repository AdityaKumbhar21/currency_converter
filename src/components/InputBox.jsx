import React from 'react'


function InputBox({
    label,   // Label -> from, to
    amount,   // the amount to be displayed on the inputbox
    onAmountChange,  // fn for change in amount
    onCurrenyChange, // fn for change in currency
    currencyOptions = [], // the options array of currencies you want to convert
    selectCurrency = "usd", // the selected currency
    amountDisable = false,  // disabling the field
    currencyDisable = false,
    className = "", // if the user wants to add any extra css classes
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    // This is an onchange which requires a fn, so we have not declared a function yet so to avoid error we will be using the follwing suntax
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled = {currencyDisable}
                    onChange={(e) => onCurrenyChange && onCurrenyChange(e.target.value)}
                >
                        {currencyOptions.map((currency) => {  // mapping on the options array to display all currency options to user
                            <option key = {currency} value={currency}>
                                {currency}
                            </option>
                        })}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
