import React , {useId} from "react";


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable = false,
  className = "",
}) {

    const amountInputId = useId()
    
 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label  htmlFor ={amountInputId} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id = {amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled = {amountDisable}
                  value = {amount}
                  onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                  //onAmountChange function ha default value pass he kar skte ho kese ne kuch nahi kiya ho to crash kar jaega
                  //agar onAmountChange available hai to Amount change karenge 
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                  disabled ={currencyDisable}
              >
                  
                     {currencyOption.map((currency)=>(
                        //har bar yahi same value repeat hogi
                        //ab pata hai ki yahi value repear hogi to performance me react bht jda hit karta hai
                        //react to pata bhi chalna chaeye ki vo Jo DOM banaya ja rha hai ek he element ko to
                        //1000 bar repeat to nahi kar rha hai is chij ko rokne ke liye key use karte hai
                        //JSX me he loop lag rhe hai 
                        //remember to use keys in loop in react //ID better option hai 
                        <option key ={currency} value={currency}>
                            {currency}
                        </option>
                     ))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;
