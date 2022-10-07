import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import fruits from "../mockData/fruits.json";

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

function FruitForm({ fruits }) {
  const [name, setName] = useState("");
  const [sweetness, setSweetness] = useState(1);
  const [color, setColor] = useState(COLORS[0]);
  const [seeds, setSeeds] = useState("yes");
  const [valErrors, setValErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const errors = [];
    if (name.length < 3) errors.push("Name must be 3 or more characters");
    if (name.length > 20) errors.push("Name must be 20 characters or less");
    fruits.forEach((fruit) => {
      if (fruit.name === name) errors.push("Name already exists.");
    });

    if (sweetness < 1 || sweetness > 10)
      errors.push("Sweetness must be between 1 and 10");
    setValErrors(errors);
  }, [name, sweetness]);

  const onSubmit = (e) => {
    // e.preventDefault();
    // setHasSubmitted(true);
    const finalObj = {
      name,
      sweetness,
      color,
      seeds,
    };
    console.log(finalObj);
    history.push("/");
    // setName("");
    // setSweetness(1);
    // setColor(COLORS[0]);
    // setSeeds("yes");
  };
  return (
    <form className="fruit-form" onSubmit={onSubmit}>
      <h2>Enter a Fruit</h2>
      <ul className="errors">
        {valErrors.length > 0 &&
          valErrors.map((err) => <li key={err}>{err}</li>)}
      </ul>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        Select a Color
        <select onChange={(e) => setColor(e.target.value)} value={color}>
          {COLORS.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          onChange={(e) => setSweetness(e.target.value)}
          value={sweetness}
        />
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          onChange={() => setSeeds("no")}
          checked={seeds === "no" ? true : false}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          onChange={() => setSeeds("yes")}
          checked={seeds === "yes" ? true : false}
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={valErrors.length > 0 ? true : false}
        // onClick={onSubmit}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
