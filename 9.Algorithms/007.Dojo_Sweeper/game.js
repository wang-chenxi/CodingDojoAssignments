var theDojo = [[1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
[3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
[5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
[2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
[6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
[0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
[0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
[2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
[5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
[9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
console.log(theDojo);
function render(theDojo) {
    var ninjasPlaced = 0;

    // // The "I hope it doesn't take too long" method
    // while(ninjasPlaced < 10) {
    //     var randI = Math.floor(Math.random()*10);
    //     var randJ = Math.floor(Math.random()*10);

    //     if(theDojo[randI][randJ] == 0) {
    //         theDojo[randI][randJ]++;
    //         ninjasPlaced++;
    //     }
    // }

    // Kara's approach: Find where we can actually place these ninjas,
    // then as we place them, remove that option.

    // Step 1: Find our zeros
    var zeroIndexes = [];
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            if (theDojo[i][j] == 0) {
                zeroIndexes.push({ i, j });
            }
        }
    }

    var replacedIndexes = [];

    // Step 2: place the ninjas
    while (ninjasPlaced < 10) {
        // Pick a random number to become the index of our zeroIndexes array
        var randIndex = Math.floor(Math.random() * zeroIndexes.length)
        // set that element as coords
        var coords = zeroIndexes[randIndex];
        // coords should look something like: { i: 0, j: 1 }
        replacedIndexes.push(coords);
        // add a ninja to that square
        // console.log(coords);
        theDojo[coords.i][coords.j]++;
        // console.log(theDojo[coords.i][coords.j])

        // now, we need to make sure we don't select that value again. so let's remove 
        // the coords from the array of indexes
        zeroIndexes[randIndex] = zeroIndexes[zeroIndexes.length - 1];
        zeroIndexes.pop();



        // increment ninjasPlaced
        ninjasPlaced++;
    }
    console.log(replacedIndexes);

    console.log(theDojo);

    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    console.log({ i, j });
    // We need to keep track of the sum
    var sumOfNinjas = 0;

    // BONUS: if you click on a spot with a ninja, restart the game!
    if (theDojo[i][j] > 0) {
        dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
        alert("GAME OVER");
        return;
    }


    /* we want to check the array at:
        [i-1][j-1]
        [i-1][j] 
        [i-1][j+1] 
        [i][j-1] 
        [i][j+1] 
        [i+1][j-1] 
        [i+1][j] 
        [i+1][j+1]
    we could just manually add all of those together, but instead let's use some loops!
    */

    // we already have i and j, so let's just create new iterating variables: k and l

    // k is in relation to i
    for (var k = i - 1; k <= i + 1; k++) {
        // now, if either k or l are outside the bounds of their respective arrays, 
        // OR k and l are equal to i and j respectively, we don't want to add anything to our sum
        if (k >= 0 && k < theDojo.length) {
            // and l is in relation to j
            for (var l = j - 1; l <= j + 1; l++) {
                // assuming we're within the bounds of the array
                if (l >= 0 && l < theDojo[k].length && !(k == i && l == j)) {
                    // add the value to sumOfNinjas!
                    sumOfNinjas += theDojo[k][l];
                }
            }
        }
    }

    // alert("There are " + sumOfNinjas + " ninjas around you.");

    // BONUS: draw the number onto the button instead of alerting it!
    element.innerText = sumOfNinjas;
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);