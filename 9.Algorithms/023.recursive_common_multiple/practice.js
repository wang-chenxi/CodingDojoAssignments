/* 
  recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest number (not zero) 
  that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the lowest common one
  then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60
  75
  75 is the first common
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
//solution 1
function lowestCommonMult(a, b, num1 = a, num2 = b) {
  console.log(num1, num2);
  if (num1 == num2) {
    console.log("==");
    console.log(num1, num2);
    return num1;
  }
  if (num1 > num2) {
    console.log("num1>");
    console.log(num1, num2);
    return lowestCommonMult(a, b, num1, num2 += b);
  }
  else if (num1 < num2) {
    console.log("num1<");
    console.log(num1, num2);
    return lowestCommonMult(a, b, num1 += a, num2);
  }
}

var results = lowestCommonMult(num2A, num2B);
console.log(results);


// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129

/* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const str1 = "1?0?";
const expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 */
// solution 1 

function binaryStringExpansion(str, solutions = [], partial = "") {
  const index = str.indexOf('?')

  if (index < 0) {
    solutions.push(partial + str)
  } else {
    const front = str.slice(0, index)
    const back = str.slice(index + 1)
    const prefix = partial + front
    binaryStringExpansion(back, solutions, prefix + "0")
    binaryStringExpansion(back, solutions, prefix + "1")
  }
  return solutions
}

console.log(binaryStringExpansion(str1));

//solution 2
function binaryStringExpansion(str, rtnArry = []) {
  for (var index in str) {
    if (str[index] == "?") {
      binaryStringExpansion(str.replace("?", "0"), rtnArry);
      binaryStringExpansion(str.replace("?", "1"), rtnArry);
    }
  }
  if (!str.includes("?")) {
    if (!rtnArry.includes(str)) {
      rtnArry.push(str); //good string, push
    }
  }
  return rtnArry;
}
console.log(binaryStringExpansion("1?0?"));