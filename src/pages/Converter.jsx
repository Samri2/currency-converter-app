import React, { useState, useEffect } from "react";

export default function Converter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
      .catch(() => setError("Failed to load exchange rates"));
  }, []);

  const convert = () => {
    if (!rates[from] || !rates[to]) {
      setError("Invalid currency selection");
      return;
    }
    const converted = (amount / rates[from]) * rates[to];
    setResult(`${amount} ${from} = ${converted.toFixed(2)} ${to}`);
  };

  return (
    <div className="converter-container">
      <h1>Currency Converter 💱</h1>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="currency-select">
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {Object.keys(rates).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <button onClick={() => { const t = from; setFrom(to); setTo(t); }}>🔁</button>

        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {Object.keys(rates).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <button onClick={convert} className="convert-btn">Convert</button>

      {error && <p className="error">{error}</p>}
      {result && <h2>{result}</h2>}
    </div>
  );
}
