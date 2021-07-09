//Algo 1
/* 
    String: Is Palindrome
    Create a function that returns a boolean whether the string is a strict palindrome. 
        - palindrome = string that is same forwards and backwards
    
    Do not ignore spaces, punctuation and capitalization
*/

// const str1 = "a x a";
// const expected1 = true;

// const str2 = "racecar";
// const expected2 = true;

// const str3 = "Dud";
// const expected3 = false;

// const str4 = "oho!";
// const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */

// "a x a"
// l:    -
// r:    -
// "a x ba"
// l:   -
// r:      -

function isPalindrome(str) {
    var l = 0, r = str.length - 1;
    while (l < r) {
        if (str.charAt(l) != str.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

function isPalindrome(str) {
    var l = 0, r = str.length - 1;
    while (l < r && str.charAt(l) == str.charAt(r)) {
        l++;
        r--;
    }
    return l >= r;
}

console.log(isPalindrome("a x a"))
console.log(isPalindrome(" "))
console.log(isPalindrome("Dud"))
console.log(isPalindrome("oho!"))
console.log(isPalindrome("a x  a"))


//2

/* 
    Longest Palindrome
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
    Strings longer or shorter than complete words are OK.
    All the substrings of "abc" are:
    a, ab, abc, b, bc, c
*/

// const { isPalindrome } = require("./isPalindrome");

// const str1 = "what up, daddy-o?";
// const expected1 = "dad";

// const str2 = "uh, not much";
// const expected2 = "u";

// const str3 = "Yikes! my favorite racecar erupted!";
// const expected3 = "e racecar e";

// const str4 = "";
// const expected4 = false;

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
// break -> while, for
function longestPalindromicSubstring(str) {
    if (str.length == 0) {
        return false;
    }
    var maxLength = 1;
    var str_at_max = str.charAt(0);
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            var l = i;
            var r = j;
            while (l < r && str.charAt(l) == str.charAt(r)) {
                l++;
                r--;
            }
            if (l >= r && j - i + 1 > maxLength) {
                maxLength = j - i + 1;
                str_at_max = str.slice(i, j + 1);
            }
        }
    }
    return str_at_max;
}

// when we use sub function isPalindrome, if it return false when detecting different characters, it won't finish the whole function?


console.log(longestPalindromicSubstring("what up, daddy-o?"))
console.log(longestPalindromicSubstring("uh, not much"))
console.log(longestPalindromicSubstring("Yikes! my favorite racecar erupted!"))