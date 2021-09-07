import React, { useState } from "react";

const CoinFlipping = () => {
  const [state, setstate] = useState();
  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }

  function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    return console.log("It took ${attempts} tries to flip five heads");
  }
  console.log(fiveHeadsSync());
  console.log("This is run after the fiveHeadsSync function completes");

  const fiveHeads = new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    if (headsCount == 5 && attempts < 100) {
      resolve(
        `Awesome!, you spent ${attempts} times to get 5 headsCount`,
        setstate(attempts)
      );
    } else {
      reject("reach maximun times!");
    }
  });

  const theCall = () =>
    fiveHeads.then((res) => console.log(res)).catch((err) => console.log(err));
  return (
    <div>
      <h1>Coin Flipping</h1>
      <button onClick={theCall}>Click me</button>
      {state ? (
        <p>Awesome! You spent {state} times to get 5 headsCount</p>
      ) : null}
    </div>
  );
};

export default CoinFlipping;
