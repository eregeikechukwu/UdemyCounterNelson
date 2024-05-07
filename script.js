"use strict";

const inputArray = document.querySelector(".input").value;
console.log(inputArray);

function calcTime(array) {
  let minutes = 0;

  for (let i = 0; i < array.length; i++) {
    minutes = array[i] + minutes;
  }

  const remainingMinutes = minutes % 60; //this is the code to get the remainder if the minutes are more than do

  const hour = minutes / 60;
  const days = function (hours) {
    const daysRemaining = Math.trunc(hour / 3);

    if (remainingMinutes > 30) {
      console.log(`${daysRemaining + 1} days remaining`);
    } else {
      console.log(`${daysRemaining} days remaining`);
    }
    document.querySelector(".dleft").textContent = daysRemaining;

    // return daysRemaining;
  };

  const lectureDays = function (hour) {
    if (hour < 3) {
      return `I have ${array.length} lectures for today`;
    } else {
      return `I have ${array.length} lectures for ${days(hour) + 1}days`;
    }
  };

  const hhh = lectureDays(hour);
  document.querySelector(".courset").textContent = hhh;
  console.log(hhh);

  if (hour > 3) {
    days(hour);
  }

  if (minutes > 60) {
    return `${Math.trunc(hour)} ${
      hour > 1 ? `hours` : "hour"
    }, ${remainingMinutes} minutes`;
  } else {
    return `${minutes} minutes`;
  }
}

document.querySelector(".button").addEventListener("click", calcTime);
document.querySelector(".button").addEventListener("click", function () {
  console.log(inputArray);
});
// let array = [20, 55, 8, 9, 6, 66];
let array = [];

console.log(calcTime(array));
// console.log(calcTime(inputArray));
