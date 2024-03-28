import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
  }

  return (
    <>
      <div className="card">
      <h1 style={{color:"gold"}}>QUOTE GENERATOR APP</h1>
      <p>{quote}</p>
        <button onClick={fetchQuote}>Generate new Quote</button>
      </div>
    </>
  );
}

export default App;
