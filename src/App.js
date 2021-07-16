import "./styles.css";
import { useState } from "react";
const matches = {
  Club_Football: ["Liverpool 4 Barcelona 3", "Real 3 Bayern 4"],
  Country_Football: ["Germany 7 Brazil 1", "France 4 Croatia 2"],
  Indian_Football: ["India 1 Iran 0", "India 1 France 1"]
};
var matchtype = Object.keys(matches);

export default function App() {
  var [selectmatch, match1] = useState([]);
  function clickgenerator(match) {
    match1(matches[match]);
  }

  return (
    <div className="App">
      <h1> Great F⚽️⚽️tball Matches</h1>
      <h3>Explore some of the exciting football matches</h3>
      <div>
        {matchtype.map(function (match) {
          return <button onClick={() => clickgenerator(match)}>{match}</button>;
        })}
      </div>
      <hr />
      <div>
        {selectmatch.map(function (item) {
          return (
            <li key={item}>
              <div>{item}</div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
