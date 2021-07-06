/* 
    Acronyms
    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
    Do it with .split first if you need to, then try to do it without
    SPLIT EXAMPLE:
    var str = "Hello world"
    str.split(" ") => ["Hello", "world"]


    var str1 = " there's no free lunch - gotta pay yer way. ";
    var expected1 = "TNFL-GPYW";
    
    var str2 = "Live from New York, it's Saturday Night Live!";
    var expected2 = "LFNYISNL";

    HINT:
    .toUpperCase()

    * Turns the given str into an acronym.
    * - Time: O(?).
    * - Space: O(?).
    * @param {string} str A string to be turned into an acronym.
    * @returns {string} The given str converted into an acronym.
*/

//solution 1
function acronym(str) {
    var arr = str.split(" ");
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        result += arr[i].charAt(0).toUpperCase();
    }
    return result;
    //console.log(result);
}

//solution 2
function acronym(str) {
    var newStr = "";
    if (str.charAt(0) != " ") {
        newStr += str.charAt(0).toUpperCase();
    }
    for (var i = 0; i < str.length - 1; i++) {
        if (str.charAt(i) == " ") {
            newStr += str.charAt(i + 1).toUpperCase();
        }
    }
    console.log(newStr);
    return newStr;
}


acronym(" there's no free lunch - gotta pay yer way. ");
acronym("Live from New York, it's Saturday Night Live!");

/* 
    String: Reverse
    Given a string,
    return a new string that is the given string reversed

    var str1 = "creature";
    var expected1 = "erutaerc";

    var str2 = "dog";
    var expected2 = "god";


    * Reverses the given str.
    * - Time: O(?).
    * - Space: O(?).
    * @param {string} str String to be reversed.
    * @returns {string} The given str reversed.
*/
function reverseString(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}

console.log(reverseString("creature"));
console.log(reverseString("dog"));