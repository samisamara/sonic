var quoteMessage = "there are \"quotes\" in this message";

var tesArr = [1, 2, 3, 4, 5];

// object example
var videogame = {
    "gameName": "Sonic Frontiers",
    "gameYear": 2022,
    "gameType": "Open World"
};

var testGame = videogame.gameName;

//example of replacing one word with another in a text element
let errorFix = document.getElementById("spelling").innerHTML;
document.getElementById("spelling").innerHTML = errorFix.replace("speeling", "fixed spelling");

//example of hoisting. Note that variables are declared before they are even created
first = 4;
second = 5;
var first, second;
var testing = function(a, b) {
    var result = a + b;
    return result;
}

console.log(testing(first, second));

// const blogs = [
//     { title: 'My favorite foods', likes: 30 },
//     { title: 'top ten favorite videogames', likes: 50 }
// ];

//example of making an object
let user = {
    name: "Mike",
    age: 30,
    email: "mike@yahoo.com",
    location: "New York",
    //example of making an array of objects. This can also work inside another object, as seen here
    blogs: [
        { title: 'My favorite foods', likes: 30 },
        { title: 'top ten favorite videogames', likes: 50 }
    ],
    //example of making functions for object
    login() {
        console.log("The user logged in");
    },
    logout() {
        console.log("The user logged out");
    },
    logBlogs() {
        console.log("this user has written the following blogs:");
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};
console.log(user);
user.age = 35;
console.log(user.age);
//example of using made functions for objects
user.login();
user.logout();
user.logBlogs();

//fix this later
let charList = document.getElementById("characterList");
let characterList = [
    { charName: 'Sonic', charColor: 'blue', charType: 'speed' },
    { charName: 'Tails', charColor: 'yellow', charType: 'fly' },
    { charName: 'Knuckles', charColor: 'red', charType: 'power' },
    { charName: 'Amy', charColor: 'pink', charType: 'speed' },
    { charName: 'Cream', charColor: 'peach', charType: 'fly' },
    { charName: 'Big', charColor: 'purple', charType: 'power' },
    { charName: 'Shadow', charColor: 'black', charType: 'speed' },
    { charName: 'Rouge', charColor: 'white', charType: 'fly' },
    { charName: 'E123-Omega', charColor: 'red', charType: 'power' },
    { charName: 'Espio', charColor: 'purple', charType: 'speed' },
    { charName: 'Vector', charColor: 'green', charType: 'power' },
    { charName: 'Charmy', charColor: 'orange', charType: 'fly' },
]
charList.innerHTML = characterList;

//example of adding information from an object list to an html element
let divChanging = document.querySelector('#divChanger');
console.log(divChanging);
//divChanging.innerHTML += '<h2>This is a new H2, transformed from javascript</h2>';
const content = document.querySelector('.content');
const people = ['sonic', 'tails', 'knuckles'];
//the => code is a call back function. This only works with nodes, such as arrays
people.forEach(person => {
    //the `<p>${person}</p>` code is a template string
    content.innerHTML += `<p>${person}</p>`
});

//example of changing the attribute values (the apple hyperlink) and the text of an element
const link = document.querySelector('#googleLink');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.apple.com');
link.innerText = 'This was a link to google, but is now a link to apple.com'

//example of changing the value of an attribute (like changing an id name)
const mssg = document.querySelector('#textChanging');
console.log(mssg.getAttribute('id'));
mssg.setAttribute('id', 'success');
console.log(mssg.getAttribute('id'));
mssg.setAttribute('style', 'color: green;');

//example of a random number generator
const random = Math.random();
console.log(Math.round(random * 12));

//example of function with parameters
function addTwoNums(num1, num2) {
   var output =  "";
   output = num1+num2;
   console.log(output);
};

//example of adding and removing CSS attributes to an element in an html file
const title = document.querySelector('h3');
console.log(title.style);
console.log(title.style.color);
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';

//example of adding or removing a class to an html element
const pChange = document.querySelector('#errorToSuccess');
console.log(pChange.classList);
pChange.classList.add('error');
console.log(pChange.classList);
pChange.classList.remove('error');
pChange.classList.add('success');
console.log(pChange.classList);

//this piece of code collects all h4 elements
//it then groups them all together under, and checks each one's inner text
//if the h4 element includes the word 'error', it will add class error to the element
//if the h4 element includes the word 'success', it will add class success to the element
const h4Collection = document.querySelectorAll('h4');
h4Collection.forEach(h4Singular => {
    console.log(h4Singular.innerText);
    if (h4Singular.innerText.includes('error')) {
        h4Singular.classList.add('error');
    };
    if (h4Singular.innerText.includes('success')) {
        h4Singular.classList.add('success');
    };
});

//example of toggle, which will add a class if the class isn't already added, and vice versa
const toggleTester = document.querySelector('h5');
toggleTester.classList.toggle('success');

let speedList = document.getElementById('speedTypes');
let flyList = document.getElementById('flyTypes');
let powerList = document.getElementById('powerTypes');
characterList.forEach(charOrganize => {
    if (charOrganize.charType == "speed") {
        speedList.innerHTML += `<p>${charOrganize.charName}</p>`;
    };
    if (charOrganize.charType == "fly") {
        flyList.innerHTML += `<p>${charOrganize.charName}</p>`;
    };
    if (charOrganize.charType == "power") {
        powerList.innerHTML += `<p>${charOrganize.charName}</p>`;
    };
});
speedList.style.color = '#3061E3';
flyList.style.color = 'yellow';
powerList.style.color = 'red';

// example of parent-child relationship
// also example of Array.from tool, which turns anything you want into an array
// in this case, we are turning everything taken from the article tag querySelector
const article = document.querySelector('article');
Array.from(article.children).forEach((child) => {
    child.classList.add('article-element');
});

//example of finding the parent of an element
const title2 = document.querySelector('#parentFinding');
console.log(title2.parentElement);
//by adding another ".parentElement" to the code, we can find the parent of the parent
//this process can be duplicated over and over until reaching the root (html)
console.log(title2.parentElement.parentElement);

// these two lines are example of finding the next and previous siblings in a tree
console.log(title2.nextElementSibling);
console.log(title2.previousElementSibling);

//chaining
console.log(title2.nextElementSibling.parentElement.children);

//this is an example of an event listener
const toDoListButton = document.querySelector('#toDoListButton');
toDoListButton.addEventListener('click', () => {
    console.log("You clicked me!");
});

// example of adding elements to an html page
// appending adds an item to the bottom of a list, prepending adds to the top
const ul = document.querySelector("#toDoList");
toDoListButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Something new to do';
    li.classList.add('liStuff');
    //ul.append(li);
    ul.prepend(li);
});


// example of changing properties of an element through event listeners or removing them out right
// "e" is a parameter automatically given to us when an event happens
// e contains information about the event that happened
// this does not need to be called e. This can be named whatever we want
// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log(e.target);
//         //e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//         //this line of code stops event bubbling from this point
//         e.stopPropagation();
//     });
// });

// Example of event bubbling. 
// When an event occurs, the event bubbles up the DOM to the parent of where the event occured
// The event listener then checks for an event in the parent target.
// If there is an event, the event takes action.
// This process gets repeated all the way to the root of the file (HTML).
// This is also an example of event delegation
// This is essentially a pattern to handle events properly
// Instead of adding an event listener to each and every similar target,
// we can add an event listener to a parent element and call out an event on a
// particular target using e target properly
ul.addEventListener('click', e => {
    //console.log('event in UL');
    if (e.target.tagName === "LI") {
        e.target.remove();
    };
});

// example of having an element react to being copied
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('OI! my content is copyright');
});

// this is an example of an element reacting to mouseposition within it.
// offsetX and offsetY are how far away the mouse is from the top right of the element
// use console.log(e) to see other information about the elements
const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

// this is an example of the entire webpage reacting to the user scrolling up and down
// the output is very similar to the mousemove example above
document.addEventListener('wheel', e => {
    //console.log(e.pageX, e.pageY);
});

const popupButton = document.querySelector('.popup-button');
const popup = document.querySelector('.popup-wrapper');
const popupCloser = document.querySelector('.popup-close');
popupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

popupCloser.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// this is an example of a regular expression. 
// These are extremly helpful when making sure user inputted data is valid
// this must begin and end in forward slashes -> /enterPhraseRequirementsHere/
// ^ demands the phrase is in the beginning
// $ demands the phrase is in the end
// [a-z] searches or matches within these range of characters
// You can add more to search for like this -> [a-zA-Z0-9]
// To search for a certain range of numbers, type immedietly after the brackets: {4,10} or {7,} or {,25}
form.addEventListener('submit', e => {
    // the default action of a submit button is to refresh the page. The line below stops that unintended action
    e.preventDefault();

    // to pull information from a text box in a form: form.idNameHere.value
    const username = form.username.value;
    // validation
    if(usernamePattern.test(username)) {
        //feedback good info
        feedback.textContent = 'that username is valid!';
    }
    else {
        //feedback help info
        feedback.textContent = 'username must contain letters only & be between 6-12 characters long';
    }
});

// live feedback
form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value); <- those both do the same thing. Either way works.
    console.log(e);
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'usernameSuccess');
    } else {
        form.username.setAttribute('class', 'usernameError');
    }
});







