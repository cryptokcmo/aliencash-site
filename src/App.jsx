import React from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="stars"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <nav className="navbar">
        <div className="brand">👽 Alien Cash</div>
        <a className="navBtn" href="#buy">Launch on Pump</a>
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
            The chillest alien meme coin in the galaxy. Cold air, green cash,
            and zero panic.
          </p>

          <div className="buttons">
            <a href="#buy" className="mainBtn">Enter the AC Room</a>
            <a href="#tokenomics" className="ghostBtn">Tokenomics</a>
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
        <h2>Ready for Pump?</h2>
        <p>Drop your link after launch.</p>
        <a className="mainBtn" href="#" onClick={(e) => e.preventDefault()}>
          Pump.fun Coming Soon
        </a>
      </section>

      <footer>Made in the AC Room 👽💸</footer>
    </div>
  );
}
