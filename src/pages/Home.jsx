import React, { useState, useEffect } from "react";

export default function Home() {
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => setRate(data.rates["EUR"]))
      .catch((err) => setError("Failed to fetch exchange rate"));
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Get Real-Time Exchange Rates Instantly 💹</h1>
        <p>Stay updated with global currency trends and convert with accuracy.</p>
        <a href="/converter" className="cta-button">Try Converter →</a>
      </div>

      <div className="exchange-card">
        {error ? (
          <p>{error}</p>
        ) : rate ? (
          <>
            <h2>1 USD = {rate} EUR</h2>
            <p>Last updated: {new Date().toUTCString()}</p>
          </>
        ) : (
          <p>Loading exchange rate...</p>
        )}
      </div>
    </section>
  );
}
