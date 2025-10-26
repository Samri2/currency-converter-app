import { useState, useEffect } from "react";
import "../index.css";

export default function Converter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rate, setRate] = useState(null);
  const [result, setResult] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await res.json();
      setCurrencies(Object.keys(data.rates));
      setRate(data.rates[toCurrency]);
    } catch (error) {
      console.error("Error loading rates:", error);
    }
  };

  const convert = async () => {
    try {
      const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await res.json();
      const conversionRate = data.rates[toCurrency];
      setRate(conversionRate);
      const converted = amount * conversionRate;
      setResult(converted.toFixed(2));
    } catch (error) {
      console.error("Error converting:", error);
    }
  };

  return (
    <div className="converter-container">
      <div className="converter-card">
        <h2>Currency Converter </h2>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
        />

        <div className="select-group">
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {currencies.map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>

          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {currencies.map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </div>

        <button className="convert-btn" onClick={convert}>Convert</button>

        {result && (
          <div className="result">
            <p>{amount} {fromCurrency} = {result} {toCurrency}</p>
            <p>Rate: {rate?.toFixed(3)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
