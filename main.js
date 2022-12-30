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

const array1 = [2, 1, 4, 3, 5, 6, 3, 5, 2, 5, 2];

// // console.log(array1);
// // console.log(array1.sort((a, b) => b - a));
// let newObject = {};

// const counts = {};
// const sampleArray = [1, 2, 3, 4, 5, 6, 3, 5, 2, 5, 2];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)
const count = {};
const modeCount = (array) => {
  array.forEach(function(x) {count[x] = (count[x] || 0) + 1;});
  console.log(Object.values(count));
  return count;
};

console.log(modeCount(array1));
