/* MODE */
// const findMode = (arr) => {
//   const modeArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j) {
//         if (arr[i] === arr[j]) {
          
//         }
//       }
//     }
//   } return modeArr;
// };

// const array1 = [1, 2, 3, 3, 2, 4, 5, 6, 7];

// // console.log(array1);
// // console.log(array1.sort((a, b) => b - a));
// let newObject = {};

// const counts = {};
// const sampleArray = [1, 2, 3, 4, 5, 6, 3, 5, 2, 5, 2];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)
// const count = {};
// const modeCount = (array) => {
//   array.forEach(function(x) {count[x] = (count[x] || 0) + 1;});       
//   console.log(Object.values(count));                                  
//   return count;
// };

//console.log(modeCount(array1));


// MEAN //

// const meanFinder = (array) => {
//   let total = 0;
//     array.forEach(arg => {total += arg});    //works like a dream.. much easier than mode
//     let mean = (total / array.length); 
//   return mean;
// };

//console.log(meanFinder(array1));

// const object1 = {
//   1: 1,
//   2: 2,
//   3: 2,
//   4: 1,
//   5: 2,
//   6: 1,
//   7: 1
// };


const count = {};
const modeCount = (array) => {
  array.forEach(function(x) {count[x] = (count[x] || 0) + 1;});       //counting the occurrences in the array                                  
  return count;
};

// const modeFinder = (object) => {
//   const mode = Math.max(...Object.values(object));
//   const allModes = [];
//   for (const [key, value] of Object.entries(object)) {
//     if (value === mode) {                                             //finding the mode/modes
//       allModes.push(key);
//     } 
//   } console.log(allModes);
//   return allModes;
// };

// //modeFinder(object1);
// const array1 = [1, 2, 3, 3, 2, 4, 5, 6, 7];
// const allModes = [];

// const firstMode = (array, array2) => {          
//   let lowest = array.length;
//   for (let i = 0; i < array.length; i++) {                             //ensuring the mode is the true mode
//     if (array.lastIndexOf(array2[i]) < lowest) {
//       lowest = array2[i];
//     }
//   } console.log(lowest);
// };

// const findMode = (array) => {
//   modeCount(array);
//   modeFinder(count);
//   firstMode(array1, allModes);
// };

// findMode(array1);


// if array1[i] === array2[i] {
//   array1.lastIndexOf(array1[i])
// }

const array4 = [1, 2, 3, 6, 6, 6, 6, 6, 8];

const testing = (array) => {
  for (let i = 0; i < array.length; i++) {
  console.log(array.lastIndexOf(array[i]))
  }
};
testing(array4);