// variables
var a = 4;
var b = 3;
var c = a+b;
//altering pre existing variables
a += 8;
a -= 8;
a *= 2;
a /= 2;

var lName = "Samara";
var fName = "Sami";

var fistLetterOffName = fName[0];
var secondLetterOffName = fName[1];
var lastLetterOffName = fName[fName.length - 1];

var lNameLength = lName.length;

var quoteMessage = "there are \"quotes\" in this message"

console.log("Hello");
console.log(c+1);
console.log(fName + " " + lName);
console.log(quoteMessage);
console.log(lNameLength);
console.log(fistLetterOffName);
console.log(secondLetterOffName);
console.log(lastLetterOffName);

var tesArr = [1, 2, 3, 4, 5];

console.log("Choose two numbers to add:");
var number1;

// object example
var videogame = {
    "gameName": "Sonic Frontiers",
    "gameYear": 2022,
    "gameType": "Open World"
};

var testGame = videogame.gameName;



function addTwoNums(num1, num2) {
   var output =  "";
   output = num1+num2;
   console.log(output);
}