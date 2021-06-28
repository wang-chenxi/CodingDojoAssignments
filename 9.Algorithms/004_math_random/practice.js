// Dice Roller
// Using what we've learned about the Math library in js, complete the following
// function that should return a value between 1 through 6 at random (1 and 6 inclusive)
function d6() {
    var roll = Math.floor(Math.random() * 6) + 1; // remember, this is going to be anywhere between 0 (inclusive) and 1 (not inclusive)
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by 
// randomly choosing a response
function oracle() {
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    var randomSelect = lifesAnswers[Math.floor(Math.random() * lifesAnswers.length)];
    console.log(randomSelect);
}

oracle();