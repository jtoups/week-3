

/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task



## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.
===================== */

Array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

_.each(Array1, function(value){
  if (value%5 ===0 && value%3 === 0){
    console.log("Fizzbuzz");
  }
  else if (value%3 === 0) {
    console.log("Fizz");
  }
  else if (value%5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(value);
  }
});

restaurantData = [[39.955664, -75.202548, "New Dehli"], [39.947819, -75.222882, "Dock Street Pizza"],[39.943829, -75.167866, "Rex 1516"]];
// for(i=0; i< restaurantData.length;i++){
// L.marker([restaurantData[i][0],restaurantData[i][1]]).addTo(map).bindPopup(restaurantData[i][2]);
// };

_.each(restaurantData, function(i){
  L.marker([restaurantData[i][0],restaurantData[i][1]]).addTo(map).bindPopup(restaurantData[i][2]);
});
// var myArray = [1, 10, 100, 1000];
//
// _.each(myArray, function(value, key, list) {
//   console.log(value, key, list);
// });
//
// for(var i = 1; i<101; i++){
//   // console.log(i)
//   if(i%5 === 0 && i%3 === 0){
//     console.log("FizzBuzz");
//   }
//   else if(i%3 === 0){
//     console.log("Fizz");
//   }
//   else if(i%5 === 0) {
//     console.log("Buzz")
//   }
//   else {
//     console.log(i)
//   }
// };
