import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import UseCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setamount] =useState("")
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setconvertedAmount] = useState("")

  const currencyInfo = UseCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setamount(convertedAmount)
  }

  const convert = ()=>{setconvertedAmount(amount * currencyInfo[to])}

  return (
    <>
      <div
        id="0"
        className="w-full h-screen flex felx-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://tse2.mm.bing.net/th/id/OIP.wvpjNVj9GECd9HflQC1EYQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3)`,
        }}
      >
        <div id="1" className="w-full">
          <div
            id="2"
            className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-2xl bg-white/30"
          >
            <form
              id="3"
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div id="4-i" className="w-full mb-1">
                <InputBox label="From"
                amount={amount}
                onAmountChange={(amt)=>setamount(amt)}
                currencyOptions={options}
                onCurrencyChange={(currency)=>setFrom(currency)}
                selectedCurrency={from}
                />
              </div>
              <div id="4-ii" className="relative w-full h-0.5">
                <button
                  id="5"
                  type="button"
                  className="  absolute left-1/2 -translate-x-1/2 -translate-y-0.5 border-2 border-black bg-blue-500  rounded-md"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div id="4-iii" className="w-full mb-1">
                <InputBox label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency => setTo(currency))}
                selectedCurrency={to}
                amountDisable/>
                
              </div>
              <button
                id="4-iv"
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
