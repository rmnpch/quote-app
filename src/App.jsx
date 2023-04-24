import "./App.css";
import React from "react";

export default function App() {
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  const [quoteState, setQuote] = React.useState({
    quote: "With great powers",
    author: "Uncle Ben",
  });
  const [bgColor, setBgColor] = React.useState(colors[0]);

  function changeBgColor() {
    let nextColor = null;
    do {
      nextColor = colors[Math.floor(Math.random() * colors.length)];
    } while (nextColor === bgColor);
    setBgColor(nextColor);
  }

  React.useEffect(() => {
    changeBgColor();
    console.log("useEffect");
  }, [quoteState]);

  function getQuote() {
    const api = "https://quotable.io/random";
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setQuote({ quote: data.content, author: data.author });
      });
  }

  let stylesBg = { backgroundColor: bgColor };
  let stylesFont = { color: bgColor };

  return (
    <main style={stylesBg}>
      <div className="App" id="quote-box">
        <section style={stylesFont} id="text" className="quote">
          <i className="fa fa-quote-left"> </i>
          {quoteState.quote}
        </section>
        <section style={stylesFont} id="author" className="author">
          - {quoteState.author}
        </section>
        <footer>
          <span className="social">
            <button style={stylesBg} id="tweet-quote">
              <a href="twitter.com/intent/tweet" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </button>

            <button style={stylesBg} id="tumblr-quote">
              <a href="twitter.com/intent/tweet" target="_blank">
                <i className="fa fa-tumblr"></i>
              </a>
            </button>
          </span>
          <button style={stylesBg} id="new-quote" onClick={getQuote}>
            New Quote
          </button>
        </footer>
      </div>
    </main>
  );
}
