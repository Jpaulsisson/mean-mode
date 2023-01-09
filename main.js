// MEAN //
const test = [500, 300, 400, 500, 300, 350, 325, 300];
const meanFinder = (array) => {
  let total = 0;
    array.forEach(arg => {total += arg}); 
    let mean = (total / array.length);
  return mean;
};

/*  MODE  */
let allModes = [];
const count = {};
const modeCount = (array) => {
  array.forEach(function(x) {count[x] = (count[x] || 0) + 1;});                                 
  return count;
};

const modeFinder = (object) => {
  const mode = Math.max(...Object.values(object));
  for (const [key, value] of Object.entries(object)) {
    if (value === mode) {  
      allModes.push(key);
    }
  } return allModes;
};

const realMode = (array) => {
  modeCount(array);
  modeFinder(count);                     //FULLY FUNCTIONAL THROUGHOUT
  let trueMode = allModes.length;
    for (let i = 0; i < allModes.length; i++) {
      if (allModes.lastIndexOf(allModes[i]) < trueMode) {
        trueMode = allModes[i];
      } 
    }; return trueMode;
};
/* COMBINED */

const statsFinder = (array) => {
  let answer = [];
  let mean = meanFinder(array);
  let trueMode = realMode(array);       // WORKS TO GIVE MEAN AND FIRST
  answer[0] = mean;                     //OCCURRING MODE EVERY TIME
  answer[1] = trueMode;
  return answer;
};
console.log(statsFinder(test));