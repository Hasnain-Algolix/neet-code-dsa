const s = 'anagram';
const t = 'nagaram';

const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const countS = {};
  const countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = 1 + (countS[s[i]] || 0);
    countT[t[i]] = 1 + (countT[t[i]] || 0);
  }

  for (const c in countS) {
    if (countS[c] !== (countT[c] || 0)) return false;
  }

  return true;
};

const result1 = validAnagram(s, t);
// console.log('result1: ', result1);

const validAnagram_2 = (s, t) => {
  if (s.length !== t.length) return false;

  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  if (sortedS === sortedT) return true;

  return false;
};

const result2 = validAnagram_2(s, t);
// console.log('result2: ', result2);
