import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="container">
      <h1>Alok Bank ATM</h1>
      <label htmlFor="input">Amount(₹)</label> <br />
      <input type="number" placeholder="enter amount" id="amount"></input>
      <br />
      <button id="clickButton">WITHDRAW</button>
      <hr />
      <div id="results">
        <h3>Denominations Fetched</h3>
      </div>
      <hr />
      <p id="final"></p>
      <button id="reset">RESET</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
