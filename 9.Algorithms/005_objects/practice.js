var pokemon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// Using the array of pokemon (provided above) and loops, complete the following:
1. console.log the pokemon objects whose id is evenly divisible by 3 Hint: %

    function idDividedBy3(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id % 3 == 0) {
                console.log(arr[i]);
            }
        }
    }

idDividedBy3(pokemon);

//  2. console.log the pokemon objects that have more than one type


function MoreThanOneType(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].types.length > 1) {
            console.log(arr[i]);
        }
    }
}

MoreThanOneType(pokemon);

// 3. console.log the names of the pokemon whose only type is "poison"

function poisonType(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].types == "poison") {
            //if (arr[i].types.length == 1 && arr[i].types[0] == "poison") {
            console.log(arr[i].name);
        }
    }
}

poisonType(pokemon);

var mon = {
    name: "Pikachu"
}
if (mon == { name: "Pikachu" }) {
    console.log("true");
}
//reference vs value


//  4. console.log the first type of all the pokemon whose second type is "flying"

function secondTypeFlying(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].types[1] == "flying") {
            console.log(arr[i].types[0]);
        }
    }
}

secondTypeFlying(pokemon);


// Bonus: console.log the reverse of the names of the pokemon whose only type is poison.

var pokemon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

function reverse(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].types == "poison") {
            console.log(pokemon[i].name.split("").reverse().join(""));
        }
    }
}

reverse(pokemon);

Lyrics:
//if you got a big array let me search it
for (var i = 0; i < pokemon.length; i++) {
    //to find out your types I gotta compare it
    if (pokemon[i].types == "poison") {
        //put my string down
        console.log(pokemon[i].name);
        //split it
        console.log(pokemon[i].name.split(""));
        //and reverse it
        console.log(pokemon[i].name.split("").reverse());
        //join it
        console.log(pokemon[i].name.split("").reverse().join(""));
    }
}


//console.log(pokemon[i].name.split("").reverse().join(""));
