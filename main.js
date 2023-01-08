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


const array1 = [100, 200, 300, 300, 200, 300, 200, 666, 700];
const array2 = [200, 300]
let allModes = [];
const count = {};
let trueMode = 0;

const modeCount = (array) => {
  array.forEach(function(x) {count[x] = (count[x] || 0) + 1;});       //counting the occurrences in the array                                  
  return count;
};

const modeFinder = (object) => {
  const mode = Math.max(...Object.values(object));
  for (const [key, value] of Object.entries(object)) {
    if (value === mode) {                                             //finding the mode/modes
      allModes.push(key);
    } 
  } return allModes;
};

//findMode(array1);

function compareNumbers(a, b) {
  return a - b;
};
//idea: loop through the array of modes and get the last index of i in the original array

const firstMode = (array, array2) => {
  let modeArray = [];
  array2.forEach(i => modeArray.push(array.lastIndexOf(i)));
  modeArray.sort(compareNumbers);
  let trueModeIndex = modeArray[0];
  let trueMode = array[trueModeIndex]
  console.log(trueMode);
  return trueMode;
};
firstMode(array1, array2)
  // const findMode = (array) => {
  //   modeCount(array);
  //   modeFinder(count);
  //   console.log(allModes);
  //   console.log(array);
  //   firstMode(array, allModes);
  //   console.log(trueMode);
  // };

  findMode(array1, array2);