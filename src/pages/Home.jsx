import { useState, useEffect } from "react";
import "../index.css";

export default function Landing() {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    fetchRate();
  }, []);

  const fetchRate = async () => {
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await res.json();
      const rate = data.rates.EUR;
      setExchangeRate(rate);
      setLastUpdated(data.time_last_update_utc);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  return (
    <section className="landing-section">
      <h1>Get Real-Time Exchange Rates Instantly </h1>
      <p>Stay updated with global currency trends and convert with accuracy.</p>

      <a href="/converter" className="landing-btn">Try Converter →</a>

      <div className="exchange-card">
        {exchangeRate ? (
          <>
            <h2>1 USD = {exchangeRate.toFixed(2)} EUR</h2>
            <p>Last updated: {lastUpdated}</p>
          </>
        ) : (
          <p>Loading exchange info...</p>
        )}
      </div>
    </section>
  );
}
