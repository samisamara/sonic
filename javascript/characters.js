// This is my first javascript code
console.log("Hello World");

let fname = 'Sami';
console.log(fname);

//alert("This is a test to show the alert tool works");

function charDisplay() {
    let charChoice = document.querySelector("#charChoose").value;
    let charMessage;
    switch(charChoice) {
        case "sonic":
            charMessage = "The Blue Blur";
            break;
        case "tails":
            charMessage = "Sonic's Best Friend";
            break;
        case "knuckles":
            charMessage = "Guardian of the Master Emerald";
            break;
        case "amy":
            charMessage = "Love struck hammer weilder";
            break;
        case "cream":
            charMessage = "The two in one duo";
            break;
        case "shadow":
            charMessage = "The ultimate life form";
            break;
        case "rouge":
            charMessage = "Double agent spy";
            break;
        case "omega":
            charMessage = "Last of the E-100 series robots";
            break;
        case "eggman":
            charMessage = "With the master plan";
            break;
        case "vector":
            charMessage = "Leader of the Chaotix Detective Agency";
            break;
        case "espio":
            charMessage = "Ninja of the Chaotix";
            break;
        case "charmy":
            charMessage = "Junior detective and hyper-active bee";
            break;
        case "big":
            charMessage = "The everyman";
            break;
        case "silver":
            charMessage = "Psychokinetic hedgehog from the future";
            break;
        case "blaze":
            charMessage = "Princess from the Sol dimension";
            break;                       
        default: 
            charMessage = "error";
            break;
    }
    document.querySelector("#charResult").innerHTML = charMessage;
    //alert(charMessage);
}

let charObjList = {
    "charName": "Sonic",
    "charImage": "temp"
};

//array defined globally to avoid character list being resetted everytime
let charList = [];
function charAddToArray() {
    //pulls the value from the user input and stores it in a variable
    let tempChar = document.querySelector("#charNameAdd").value;
    //checks if character name already exists in the list
    let checker = repeatChecker(tempChar, charList);

    //adds input to the existing array if false
    console.log(checker);
    if (checker == false) {
        charList.push(tempChar);
    }
}

//function to check for repeating values
function repeatChecker(char, charList) {
    let repeatChar = false;
    for (let i=0; i<charList.length; i++) {
        if (char == charList[i]) {
            repeatChar = true;
        }
    }
    return repeatChar;
}

function charListDisplay() {
    //outputs array
    document.querySelector("#charFullList").innerHTML = charList.join(", ");
    
}

let adder = document.getElementById("hedgey").innerHTML;
document.getElementById("hedgey").innerHTML = adder.replace("testing", "result");

let newSonicImage = "/character_images/Sonic_Mania_Sonic.png";

let sonic = document.getElementById("sonic");
 
sonic.addEventListener("mouseover", () => {
    sonic.src = newSonicImage;
});

let prevImage = "/character_images/sonic.png"

sonic.addEventListener("mouseout", () => {
    sonic.src= prevImage;
});
