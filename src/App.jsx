import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  
  const[amount, setAmount] = useState(0)  // The amount that user is going to enter
  const[from, setFrom] = useState("usd") // the from
  const[to, setTo] = useState("inr") // the to
  const[convertedAmount, setConvertedAmount] = useState(0) // the converted amount

  const currencyInfo = useCurrencyInfo(from)  // extracting data from the hook
  const options = Object.keys(currencyInfo) // extracting all the keys and stroing it in options array

  const imgUrl =" https://img.freepik.com/free-vector/digital-rupee-concept-background-with-rupee-symbol_1017-36812.jpg?t=st=1713845218~exp=1713848818~hmac=e715f881dced906dc9e5067484685cb9f0fe9f2c61637103be0a81c3f5083c9c&w=1060"


  // swap function to intialize swap fucntionality
  const swap = () =>{
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // the convert functionality
  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('${imgUrl}')`,
      }}
  >
  <div className="w-full">
    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <form
          onSubmit={(e) => {
              e.preventDefault();
              convert()  // invoking the conver after form submition
              
          }}
        >
          <div className="w-full mb-1">
              <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onAmountChange={(currency) =>  setAmount(currency) } // updating the input value as user changes the amount
                  onCurrenyChange={(amount) => setAmount(amount) }
                  selectCurrency={from}   
              />
          </div>
          <div className="relative w-full h-0.5">
              <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
              >
                  swap
              </button>
          </div>
          <div className="w-full mt-1 mb-4">
              <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency) }
                  selectCurrency={to}   
              />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
      </form>
    </div>
  </div>
</div>
);
}

export default App
