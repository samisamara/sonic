
function gameChoose() {
    let gameImage;
    console.log("this is the result");
    let gameName = document.querySelector("#gameChoice").value;
    console.log(gameChoice);
    console.log("this is the result");
    switch(gameName) {
        case "sonic_3":
            gameName.scr=("/game_images/sonic_3.jpg");
            console.log(document.querySelector("#gameImage"));
            console.log("this is the sonic 3 example");
        break;
        case "sonic_adventure_2_battle": 
            gameName = document.getElementById("sonic_adventure_2_battle");
        break;
        case "sonic_generations":
            gameImage = document.getElementById("sonic_generations");
        break;
    }
}

document.getElementById("changingColor").onkeydown = function() {colorChanger()};
function colorChanger() {
    document.getElementById("changingColor").style.background = document.getElementById("changingColor").value;
}


//object example
let obPerson = {
    name: "Sami",
    age: 22,
    dob: "05/16/1999"
};

    /*switch(gameName) {
        case "sonic_3":
        gameImage = document.getElementById("sonic_3");
        break;
        case "sonic_adventure_2_battle": 
        gameImage = document.getElementById("sonic_adventure_2_battle");
        break;
        case "sonic_generations":
        gameImage = document.getElementById("sonic_generations");
        break;
    }*/


function timeFunction() {
    document.querySelector("#timeDisplay").innerHTML = Date();
};

let gameRelease = [
    { "gameTitle": "Sonic the Hedgehog 3 and Knuckles", "yearRelease": 1994 },
    { "gameTitle": "Sonic Adventure 2 Battle", "yearRelease": 2001 },
    { "gameTitle": "Sonic Generations", "yearRelease": 2011 }
];




