import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Alok Bank ATM</h1>
      <input
        type="number"
        placeholder="enter ₹ to withdraw"
        id="amount"
      ></input> <br/>
      <button id="clickButton">Click for Money</button>
      <hr />
      <h3>Denominations Fetched</h3>
      <p>
        ₹ 2000 x <span id="two-thousand"></span>
      </p>
      <p>
        ₹ 500 x <span id="five-hundred"></span>
      </p>
      <p>
        ₹ 200 x <span id="two-hunred"></span>
      </p>
      <p>
        ₹ 100 x <span id="hundred"></span>
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
