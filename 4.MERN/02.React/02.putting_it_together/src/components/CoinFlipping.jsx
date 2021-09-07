import React from "react";

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
      reject("not have 5 heads yet");
    }
  }
  resolve("It took ${attempts} tries to flip five heads");
});

fiveHeads.then((res) => console.log(res)).catch((err) => console.log(err));

const CoinFlipping = () => {
  return (
    <div>
      <h1>Coin Flipping</h1>
      <button onClick={fiveHeads}>Click me</button>
    </div>
  );
};

export default CoinFlipping;
