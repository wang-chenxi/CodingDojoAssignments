/*
    Given a sorted array of page numbers where a term appears,
    produce an index string.

    Consecutive pages should form ranges separated by a hyphen.

    EXAMPLE:

    var input = [1, 5, 6, 7, 8, 9, 10, 14, 22, 23, 24, 25, 27];

    var output = "1, 5-10, 14, 22-25, 27";
*/

function bookIndex(pages) {
    var output = "";

    for (var i = 0; i < pages.length; i++) {
        var j = i;
        while (pages[j] + 1 == pages[j + 1]) {
            j++;
        }
        if (j == i) {
            output += pages[i];
        } else if (j > i) {
            output += pages[i] + "-" + pages[j];
            i = j;
        }
        if (j < pages.length - 1) {
            output += ",";
        }
    }
    return output;
}
console.log(bookIndex([1, 5, 6, 7, 8, 9, 10, 14, 17, 22, 23, 24, 25, 27]));
console.log(bookIndex([1]));
