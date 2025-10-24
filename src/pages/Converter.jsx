// src/pages/Converter.jsx
import { useEffect, useState } from "react";
import CurrencySelector from "../components/CurrencySelector";
import AmountInput from "../components/AmountInput";
import ConversionResult from "../components/ConversionResult";

export default function Converter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => setCurrencies(Object.keys(data.rates)))
      .catch((err) => console.error(err));
  }, []);

  const handleConvert = () => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        const rate = data.rates[toCurrency];
        setResult(amount * rate);
      })
      .catch((err) => alert("Error fetching conversion data"));
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Currency Converter 💹
      </h1>

      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md space-y-4">
        <CurrencySelector
          label="From"
          currencies={currencies}
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        />

        <CurrencySelector
          label="To"
          currencies={currencies}
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />

        <AmountInput value={amount} onChange={(e) => setAmount(e.target.value)} />

        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Convert
        </button>

        {result && (
          <ConversionResult
            from={fromCurrency}
            to={toCurrency}
            amount={amount}
            result={result}
          />
        )}
      </div>
    </div>
  );
}
