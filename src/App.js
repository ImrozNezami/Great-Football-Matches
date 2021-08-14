import "./styles.css";
import { useState } from "react";
const matches = {
  Club_Football: [
    {
      name: "Liverpool 4 Barcelona 3",
      description: "Most entertaining match of UCL",
      rating: "5"
    },
    {
      name: "Real 3 Bayern 4",
      description: "One of the most competitve match of UCL",
      rating: "4.8"
    },
    {
      name: "Bayern 8 Barcelona 2",
      description: "One of the most shocking match of UCL",
      rating: "4"
    }
  ],
  Country_Football: [
    {
      name: "Germany 7 Brazil 1",
      description: "One of the most setback match",
      rating: "4.3"
    },
    {
      name: "France 4 Croatia 2",
      description: "The fifa world cup final of 2018",
      rating: "4.6"
    },
    {
      name: "England 2 Germany 0",
      description: "Euro 2020 semi-final",
      rating: "4.4"
    }
  ],
  Indian_Football: [
    {
      name: "India 1 Iran 0",
      description: "India performed well in this match",
      rating: "4.1"
    },
    {
      name: "India 1 France 1",
      description: "India shocked everyone by taking a point",
      rating: "4.9"
    },
    {
      name: "India 4 Kenya 0",
      description: "India proved everyone they can play well in football",
      rating: "5"
    }
  ]
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
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.rating}</div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
