const nums = [1, 2, 3, 1];

// Time = O(n^2)
// Space = O(1)
const containsDuplicates_1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};

const result = containsDuplicates_1(nums);
// console.log(result);

// Time = O(n log n)
// Space = O(1)
const containsDuplicates_2 = (arr) => {
  arr.sort((a, b) => a - b);
  let first = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[first] === arr[i + 1]) {
      return true;
    } else if (arr[first] !== arr[i + 1]) {
      first++;
    }
  }
  return false;
};

const result_2 = containsDuplicates_2(nums);
// console.log(result_2);

const containsDuplicate_3 = (arr) => {
  const duplicates = {};
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (duplicates.hasOwnProperty(currentNum)) return true;
    duplicates[currentNum] = currentNum;
  }
  return false;
};

const result_3 = containsDuplicate_3(nums);
console.log(result_3);

module.exports = { containsDuplicates_1 };
