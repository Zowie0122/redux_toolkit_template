import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDrink,
  allDrinksSeletor,
  duplicatedDrinkSeletor
} from "../store/reducers/drinks";

export default function Drinks() {
  const dispatch = useDispatch();

  const allDrinks = useSelector(allDrinksSeletor);
  const duplicatedDrink = useSelector(duplicatedDrinkSeletor);
  const [newDrink, setNewDrink] = useState("");

  return (
    <div>
      <h1>Hello I am Drinks Component, and I am sync.</h1>
      <div>
        <p>The current drinks we have:</p>
        <ul>
          {allDrinks.map((drink, i) => (
            <li key={i}>{drink}</li>
          ))}
        </ul>
        <p>The duplicated drinks we have:</p>
        <ul>
          {duplicatedDrink.map((drink, i) => (
            <li key={i}>{drink}</li>
          ))}
        </ul>
        <label>
          Drinks:
          <input
            type="text"
            name="drinks"
            value={newDrink}
            onChange={(e) => {
              setNewDrink(e.target.value);
            }}
          />
        </label>
        <button onClick={() => dispatch(addDrink(newDrink))}>Add</button>
      </div>
    </div>
  );
}
