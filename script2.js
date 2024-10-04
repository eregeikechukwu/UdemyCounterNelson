"use strict";

let array = [];
// let arraye = "";
let arraye = 0;

let dayJob = Number(prompt("How many hours of lecture do you want to cover?"));
function calcTime() {
  let minutes = 0;

  arraye = document.querySelector(".input").value;

  console.log(arraye);

  const inputArray = arraye.split(" ");
  console.log(inputArray);

  array = [];

  console.log(array);
  for (let i = 0; i < inputArray.length; i++) {
    let number = parseInt(inputArray[i]);
    if (inputArray[i]) {
      array.push(number);
    }
  }
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    minutes = array[i] + minutes;
  }

  console.log(`MINUTES: ${minutes}`);

  const remainingMinutes = minutes % 60; //this is the code to get the remainder if the minutes are more than do

  console.log(`remainingMinutes: ${remainingMinutes}`);

  const hour = minutes / 60;

  console.log(`HOUR: ${hour}`);

  const daysRemaining = Math.trunc(hour / dayJob);

  const days = function (daysRA) {
    console.log(`DYSREMANING: ${daysRemaining}`);

    if (remainingMinutes > 30) {
      const daysR = `${daysRA + 1} days remaining`;
      console.log("DAYSR:", daysR);
      return daysR;
      // document.querySelector(".dleft").textContent = daysR;
    } else {
      const daysR = `${daysRA} days remaining`;
      console.log("DAYSR:", daysR);
      return daysR;
      // document.querySelector(".dleft").textContent = daysR;
    }
    // return daysRemaining;
  };

  const lectureDays = function (hour) {
    if (hour < dayJob) {
      return `You have ${array.length} lectures for today`;
    } else {
      return `You have ${array.length} lectures for ${daysRemaining}days`;
    }
  };

  console.log("LECTUREGAYS", lectureDays(hour));
  document.querySelector(".Lcontent").textContent = lectureDays(hour);

  if (hour > dayJob) {
    document.querySelector(".dleft").textContent = days(daysRemaining);
    console.log(days(daysRemaining));
  }

  if (minutes > 60) {
    const timef = `${Math.trunc(hour)} ${
      hour > 1 ? `hours` : "hour"
    }, ${remainingMinutes} minutes`;

    console.log("TIMEF1", timef);
    document.querySelector(".courset").textContent = timef;
  } else {
    const timef = `${minutes} minutes`;
    console.log('TIMEF"'.timef);
    document.querySelector(".courset").textContent = timef;
  }
}

document.querySelector(".button").addEventListener("click", function () {
  if (dayJob) {
    calcTime();
  } else {
    document.querySelector(".content").textContent =
      "Reload the page and answer the prompt!";
  }
});
// document.querySelector(".button").addEventListener("click", function () {

function init() {
  array = [];
  document.querySelector(".dleft").textContent = ":";
  document.querySelector(".Lcontent").textContent = ":";
  document.querySelector(".courset").textContent = ":";
  document.querySelector(".message").textContent =
    "Lets Calculate your quota today!!";
  arraye = "";
  document.querySelector(".input").value = "";
  // dayJob = Number(prompt("How many hours of lecture do you want to cover?"));
}
document.querySelector(".btn").addEventListener("click", init);
