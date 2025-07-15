import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,//
    currencyOptions,
    onCurrencyChange,
    selectedCurrency,
    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
   
    const amountInputId = useId() //whenever i call it. it generates one random id using this useId and store it in amountInputId 
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor="{amountInputId}" className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id="{amountInputId}"
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>onAmountChange(Number(e.target.value)) && onAmountChange}
                    disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e)=>onCurrencyChange(e.target.value)&&onCurrencyChange}
                    disabled={currencyDisable}
                >
                    
                    {
                        currencyOptions.map((currency)=>(<>
                            <option key={currency} value={currency}>
                            {currency}
                            </option></>))
                    }
                        {/* <option value="usd">
                            usd
                        </option> */}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
