import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const X_URL = "https://x.com/AlienCashAC";

const TOKEN_CA = "G2cgQKqjJ7cco71P1bEzY2WFHm8ioqM83e7RwYrBpump";

const PUMP_URL =
  "https://pump.fun/G2cgQKqjJ7cco71P1bEzY2WFHm8ioqM83e7RwYrBpump";

export default function App() {
  const [marketCap, setMarketCap] = useState("G2cgQKqjJ7cco71P1bEzY2WFHm8ioqM83e7RwYrBpump");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function getMarketCap() {
      try {
        const res = await fetch(
          `https://api.dexscreener.com/token-pairs/v1/solana/G2cgQKqjJ7cco71P1bEzY2WFHm8ioqM83e7RwYrBpump`
        );

        const data = await res.json();
        const bestPair = data?.[0];

        if (!bestPair) {
          setMarketCap("Not live yet");
          return;
        }

        setMarketCap(
          bestPair.marketCap
            ? `$${Number(bestPair.marketCap).toLocaleString()}`
            : "Market cap loading"
        );

        setPrice(
          bestPair.priceUsd ? `$${Number(bestPair.priceUsd).toFixed(8)}` : ""
        );
      } catch {
        setMarketCap("Market cap unavailable");
      }
    }

    getMarketCap();

    const timer = setInterval(getMarketCap, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <div className="stars"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <nav className="navbar">
        <div className="brand">👽 Alien Cash</div>

        <div className="navLinks">
          <a className="ghostSmall" href={X_URL} target="_blank" rel="noreferrer">
            X
          </a>

          <a className="navBtn" href={PUMP_URL} target="_blank" rel="noreferrer">
            Launch on Pump
          </a>
        </div>
      </nav>

      <main className="hero">
        <motion.div
          className="heroText"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="badge">ALIEN LEGAL TENDER</p>

          <h1>
            Stay Cool.
            <br />
            Stack <span>$AC</span>.
          </h1>

          <p className="sub">
            The chillest alien coin in the galaxy. Cold air, green cash, and
            zero panic.
          </p>

          <div className="buttons">
            <a
              href={PUMP_URL}
              target="_blank"
              rel="noreferrer"
              className="mainBtn"
            >
              Enter the AC Room
            </a>

            <a href="#tokenomics" className="ghostBtn">
              Tokenomics
            </a>
          </div>
        </motion.div>

        <motion.div
          className="imageWrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img src="/alien-cash.png" alt="Alien Cash" />
        </motion.div>
      </main>

      <section className="cards" id="tokenomics">
        <div className="card">
          <h3>👽 Name</h3>
          <p>Alien Cash</p>
        </div>

        <div className="card">
          <h3>💸 Ticker</h3>
          <p>$AC</p>
        </div>

        <div className="card">
          <h3>❄️ Vibe</h3>
          <p>Stay cool. Stack AC.</p>
        </div>
      </section>

      <section className="buy" id="buy">
        <h2>Live AC Room</h2>
        <p>Current Market Cap</p>

        <div className="mcBox">
          <span>{marketCap}</span>

          {price && <small>Price: {price}</small>}

          <small>CA: {TOKEN_CA}</small>
        </div>

        <div className="buttons centerButtons">
          <a className="mainBtn" href={PUMP_URL} target="_blank" rel="noreferrer">
            Buy on Pump.fun
          </a>

          <a className="ghostBtn" href={X_URL} target="_blank" rel="noreferrer">
            Follow X
          </a>
        </div>
      </section>

      <footer>Made in the AC Room 👽💸</footer>
    </div>
  );
}