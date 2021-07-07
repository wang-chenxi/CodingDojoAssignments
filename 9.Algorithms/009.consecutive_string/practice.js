// Algo1
/* 
    Given in an alumni interview in 2021.
    String Encode
    You are given a string that may contain sequences of consecutive characters.
    Create a function to shorten a string by including the character,
    then the number of times it appears. 


    If final result is not shorter (such as "bb" => "b2" ),
    return the original string.
    
    const str1 = "aaaabbcddd";
    const expected1 = "a4b2cd3";
    
    const str2 = "";
    const expected2 = "";
    
    const str3 = "a";
    const expected3 = "a";
    
    const str4 = "bbcc";
    const expected4 = "bbcc";
    
    const str5 = "aaaabbcdddaaa";
    const expected5 = "a4b2cd3a3";

    const str6 = "aabbbaaaaccdddd";
    const expected6 = "a2b3a4c2d4";

    const str7 = "hellowoooorld"
    const expected7 = "hel2owo4rld";


*/

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs only if the
 * character occurs more than one time.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 * 
 *
*/

// example:
// const str1 = "aaaabbcddd";
//               -
//     result = "a4b2cd3"
//     count = 1

function encodeStr(str) {
    var result = "";
    var count = 1;
    for (var i = 0; i < str.length; i++) {
        if ((str.charAt(i) != str.charAt(i - 1))) {
            if (count != 1) {
                result += count;
                count = 1;
            } result += str.charAt(i);
        } else {
            count++;
        }
    }
    if (count > 1) {
        result += count;
    }
    if (result.length == str.length) {
        return str;
    }
    return result;
}

console.log(encodeStr("aaaabbcddd"));
console.log(encodeStr("aabbbaaaaccdddd"));
console.log(encodeStr("a"));
console.log(encodeStr(""));
console.log(encodeStr("bb"));
// ask about edge cases during interview



// Algo 2
/* 
    String Decode  

    const str1 = "a3b2cd3";
    const expected1 = "aaabbcddd";

    const str2 = "a3b2c12d10";
    const expected2 = "aaabbccccccccccccdddddddddd";

    HINT: isNaN(someValue)
    Example: isNaN("yes") => true
    isNaN("8") => false
*/
/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */


function decodeStr(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).isNaN) {
            result += str.charAt(i);
        } else {
            var j = str.charAt(i);
            var x = str.charAt(i - 1);
            for (j; j > 0; j--) {
                result += x;
            }
        }
    }
    return result;
}


console.log(decodeStr("a3b2cd3"));
console.log(decodeStr("a3b2cd"));
console.log(decodeStr(""));
console.log(decodeStr("a10"));