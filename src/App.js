import "./App.css";
import {useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const newButtonColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setColor(newButtonColor)}
        style={{ backgroundColor: disabled? 'grey' : color }}
      >
        Change to {newButtonColor}
      </button>
      <input
        id="disable-button-checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
        type="checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
