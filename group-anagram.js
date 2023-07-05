const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

function groupAnagrams(strs) {
  let res = {};

  for (let s of strs) {
    let count = Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    let key = count.join(',');
    if (res[key]) {
      res[key].push(s);
    } else {
      res[key] = [s];
    }
  }

  return Object.values(res);
}

const res = groupAnagrams(strs);
// console.log('res', res);
