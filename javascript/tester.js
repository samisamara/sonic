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

// console.log(testing(first, second));

// const blogs = [
//     { title: 'My favorite foods', likes: 30 },
//     { title: 'top ten favorite videogames', likes: 50 }
// ];

//example of making an object
// let user = {
//     name: "Mike",
//     age: 30,
//     email: "mike@yahoo.com",
//     location: "New York",
//     //example of making an array of objects. This can also work inside another object, as seen here
//     blogs: [
//         { title: 'My favorite foods', likes: 30 },
//         { title: 'top ten favorite videogames', likes: 50 }
//     ],
//     //example of making functions for object
//     login() {
//         // console.log("The user logged in");
//     },
//     logout() {
//         // console.log("The user logged out");
//     },
//     logBlogs() {
//         // console.log("this user has written the following blogs:");
//         this.blogs.forEach(blog => {
//             // console.log(blog.title, blog.likes);
//         })
//     }
// };
// console.log(user);
// user.age = 35;
// console.log(user.age);
//example of using made functions for objects
// user.login();
// user.logout();
// user.logBlogs();

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
// console.log(divChanging);
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
// console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.apple.com');
link.innerText = 'This was a link to google, but is now a link to apple.com'

//example of changing the value of an attribute (like changing an id name)
const mssg = document.querySelector('#textChanging');
// console.log(mssg.getAttribute('id'));
mssg.setAttribute('id', 'success');
// console.log(mssg.getAttribute('id'));
mssg.setAttribute('style', 'color: green;');

//example of a random number generator
const random = Math.random();
// console.log(Math.round(random * 12));

//example of function with parameters
function addTwoNums(num1, num2) {
   var output =  "";
   output = num1+num2;
//    console.log(output);
};

//example of adding and removing CSS attributes to an element in an html file
const title = document.querySelector('h3');
// console.log(title.style);
// console.log(title.style.color);
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';

//example of adding or removing a class to an html element
const pChange = document.querySelector('#errorToSuccess');
// console.log(pChange.classList);
pChange.classList.add('error');
// console.log(pChange.classList);
pChange.classList.remove('error');
pChange.classList.add('success');
// console.log(pChange.classList);

//this piece of code collects all h4 elements
//it then groups them all together under, and checks each one's inner text
//if the h4 element includes the word 'error', it will add class error to the element
//if the h4 element includes the word 'success', it will add class success to the element
const h4Collection = document.querySelectorAll('h4');
h4Collection.forEach(h4Singular => {
    // console.log(h4Singular.innerText);
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
// console.log(title2.parentElement);
//by adding another ".parentElement" to the code, we can find the parent of the parent
//this process can be duplicated over and over until reaching the root (html)
// console.log(title2.parentElement.parentElement);

// these two lines are example of finding the next and previous siblings in a tree
// console.log(title2.nextElementSibling);
// console.log(title2.previousElementSibling);

//chaining
// console.log(title2.nextElementSibling.parentElement.children);

//this is an example of an event listener
const toDoListButton = document.querySelector('#toDoListButton');
toDoListButton.addEventListener('click', () => {
    // console.log("You clicked me!");
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
        // console.log(e.target);
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
    if (e.target.tagName === "LI") {
        e.target.remove();
    };
});

// example of having an element react to being copied
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    // console.log('OI! my content is copyright');
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
    // console.log(e.target.value, form.username.value); <- those both do the same thing. Either way works.
    // console.log(e);
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'usernameSuccess');
    } else {
        form.username.setAttribute('class', 'usernameError');
    }
});

const scores = [10, 30, 15, 25, 50, 40, 5];
// example of filtering an array based on a condition.
// this method is nondestructive, meaning nothing in the original array actually gets changed
// in order to update this, we have to make a new array that holds the new filtered list 
const filteredScores = scores.filter((score) => {
    return score > 20;
});

// console.log(filteredScores);

const members = [
    {name: 'sonic', premium: true},
    {name: 'tails', premium: true},
    {name: 'knuckles', premium: false},
    {name: 'amy', premium: true},
    {name: 'cream', premium: false}
];

// similar to last array filter example, we sort by if premium == true or false
const premiumMembers = members.filter(member => member.premium);
// console.log(premiumMembers);

// map method: this method makes a new array from an array after altering it in someway
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const salePrices = prices.map((price) => {
    return price/2;
});
// console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];
const saleProducts = products.map((product) => {
    if (product.price > 30) {
        return {name: product.name, price: product.price/2};
    }
    else {
        return product;
    }
});
// console.log(saleProducts);

// reduce method: this method adds how many of an array matches the argument and displays the total number using recurrsion
const points = [10, 20, 60, 70, 90, 30];
const result = points.reduce((acc, curr) => {
    if (curr > 50) {
        acc++;
    }
    return acc;
}, 0);
// console.log(result);

// another example of reduce method, this time with object lists
const playerScores = [
    {player: 'vector', score: 50},
    {player: 'espio', score: 30},
    {player: 'charmy', score: 50},
    {player: 'vector', score: 60},
    {player: 'espio', score: 30},
    {player: 'charmy', score: 68},
    {player: 'vector', score: 90},
    {player: 'espio', score: 51},
    {player: 'charmy', score: 45},
    {player: 'vector', score: 50},
    {player: 'espio', score: 30},
    {player: 'charmy', score: 73},
    {player: 'vector', score: 55},
    {player: 'espio', score: 30},
    {player: 'charmy', score: 78},
    {player: 'vector', score: 40},
    {player: 'espio', score: 56},
    {player: 'charmy', score: 98}
    
];
const vectorTotal = playerScores.reduce((acc, curr) => {
    if (curr.player === 'vector') {
        acc += curr.score;
    }
    return acc;
}, 0);
// console.log(vectorTotal);

// find method: finds the first array element that meets the specified condition. Does not contiue when one is found.
const nums = [10, 5, 0, 40, 60, 10, 20, 70];
const firstHighScore = nums.find((num) => {
    return num > 50;
});

// console.log(firstHighScore);

const charNames = ['Sonic', 'Tails', 'Knuckles', 'Amy', 'Cream', 'Cheese', 'Big', 'Shadow', 'Rouge', 'E123-Omega', 'Vector', 'Espio', 'Charmy', 'Silver', 'Blaze', 'Eggman', 'Marine', 'Gemerl'];
// console.log(charNames);
// examples of sorting a list by alphabetical or reverse alphabetical order:
// charNames.sort();
// charNames.reverse();

const robots = [
    {name: 'Gamma', score: 30},
    {name: 'Omega', score: 45},
    {name: 'Emerl', score: 40},
    {name: 'Gemerl', score: 45},
    {name: 'Metal Sonic', score: 60},
    {name: 'Zero', score: 20},
];

// for numbers, objects, or anything more than names, there are more steps involved.
// this method uses recursion to sort through an array.
robots.sort((a, b) => {
    if (a.score > b.score) {
        return -1;
    }
    else if (b.score > a.score) {
        return 1;
    }
    else {
        return 0;
    }
});
// console.log(robots);

const listNums = [10, 50, 20, 5, 35, 70, 45];
// this works the exact same way as the robots example. If a is bigger, it comes first. If b is bigger, it comes first.
// if they are equal, nothing is changed
listNums.sort((a, b) => a - b);
// console.log(listNums);

const electronics = [
    {name: 'headphones', price: 200},
    {name: 'speaker', price: 150},
    {name: 'microphone', price: 100},
    {name: 'iphone', price: 900},
    {name: 'ipad', price: 1200},
    {name: 'xbox', price: 400},
    {name: 'playstation', price: 500}
];
 
// example of chaining array methods
// first we are filtering array by items who's price is 400 or more
const filtered = electronics.filter(electronic => electronic.price >= 400);
//this the map function lets us map to an array of strings
const promos = filtered.map(electronic => {
    return `the ${electronic.name} is ${electronic.price / 2} dollars`;
});

// this is a more efficient version of the method above. Sometimes we can include .map in the same line as .filter
// side note: seperating the function into different lines and indent by every method chained on is a standard way of making code
// more legible
const promotions = electronics
    .filter(electronic => electronic.price >= 400)
    .map(electronic => `the ${electronic.name} is ${electronic.price / 1.2} dollars`);
// console.log(promos);
// console.log(promotions);

// Date() captures the moment in time in which the file is loaded. Dates are always going to be considered as objects
// there are several ways to get the date in different formats. Check below for examples
const now = new Date();
// console.log(now);
// console.log(typeof now);
// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// timestamps
// console.log('timestamp:', now.getTime());

// date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// create a date element that isn't the present
// we can use several different date formats
const before = new Date('Feburary 1 2019 7:30:59');
// console.log(now.getTime(), before.getTime());

// diff is the difference in time between Feburary 1 2019 7:30:59 and this exact moment
const diff = now.getTime() - before.getTime();
// console.log(diff);

// here, we are dividing diff by 1000, which gets us the number of seconds, then 60, which gets the number of minutes
const mins = Math.round(diff / 1000 / 60);
// console.log(mins);
// dividing mins by 60 gives us the hours since there are 60 minutes in an hour
const hours = Math.round(mins / 60);
// dividing hours by 24 gives us the hours, since there are 24 hours in a day
const days = Math.round(hours / 24);
// console.log(mins, hours, days);
// console.log(`the blog was written ${days} days ago`);

// converting timestamps into date objects
const timestamp = 1675938474900;
// console.log(new Date(timestamp));

// this is examples of working with dates in javascript
// this specifically uses date-fns, which makes working with dates much easier
// in order to use date-fns, you must link it using a script tag in the html page
// these are examples of different methods and formattings found on date-fns
// const timenew = new Date();
// console.log(dateFns.isToday(timenew));
// console.log(dateFns.format(timenew, 'YYYY'));
// console.log(dateFns.format(timenew, 'h'));

// this block of code is an example of asycnhronis programming. The first two console logs fire first and then second.
// the setTimeout function begins, and while that is waiting 2 seconds to fire, console logs 3 and 4 begin.
// in the console, the code shows up as 1, 2, 3, 4, 'the callback function fired' because
// setTimeout needed 2 seconds to do anything, letting console logs 3 and 4 begin as it was preparing.
// this is not generally asynchronis programming, this is just an idea of how it works
// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log('the callback function fired');
// }, 2000);
// console.log(3);
// console.log(4);

// by putting the block of code in a variable (in this case, getTodos) we are able to reuse this code whenever we want
// we are naming the parameter callback, so we can make callback be something different each time if we wanted to
const getTodos = (resource, callback) => {

    return new Promise((resolve, reject) => {
    // this is an example of HTTP requests, which will also require Asynchronis code
    // this describes what type of request is
    const request = new XMLHttpRequest();
    // the readystatechange event is when there is a state change in the request
    // in short, state changes are different phases. There are 4 phases in total
    // readyState is the current request is in
    // to view more info of what the states mean, check the MDN guide on XMLHttpRequests online
    // state 4 is the most important, because this is where you can actually take the data and do stuff with it
    // responseText is the property that contains the reponse data
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        // readyState 4 is when the request is complete
        // there are several different response codes (statuses) all with their own meaning. 200 is when there are no problems
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText);
            // JSON stands for "javascript object notation"
            // the JSON.parse() lets us take in a JSON string and convert it to objects
            const data = JSON.parse(request.responseText)
            // callback(undefined, data);
            resolve(data);
        }
        // if the request is finished but there is a problem, this code will be fired instead. This way, if there is a problem, it will tell us what the problem is
        else if (request.readyState === 4) {
            // console.log('could not fetch the data. Error code: ' + request.status);
            // callback('could not fetch data', undefined);
            reject('error getting resource');
        }
    });
    // this describes where to get the request from
    request.open('GET', resource);
    // the code above just sets up the request. This code here actually makes the request
    request.send();
    });

};

// This is a single promise, not linked to anything else
// getTodos('/json/characters.json').then(data => {
//     console.log('promise resolved', data);
// }).catch((err) => {
//     console.log('promise rejected:', err)
// });

// This is an example of chaining promises together.
// First, getTodos is called with the characters JSON file as the parameter.
// .then() uses data from characters as a parameter, and then passes it into a function that displays it
// within the first .then() we return getTodos, but with the games JSON file as a parameter
// a second .then() is used to display this data, since this part takes place in the first .then(), which means we will need another .then() immedietly afterwards. This .then() displays the next set of JSON data, that being the games data. 
// Within this section, we return getTodos a third time, with the gemstones JSON data as the parameter. 
// Just like the second .then(), we add another .then() to take care of the work for the gemstones JSON data.
// At the very end, we have a .catch() with err (error) as the parameter. This method is automatically called if any of the 3 todos contains an error.
// getTodos('/json/characters.json').then(data => {
//     console.log('promise 1 resolved', data);
//     return getTodos('/json/games.json');
// }).then(data => {
//     console.log('promise 2 resolved', data);
//     return getTodos('/json/gemstones.json');
// }).then(data => {
//     console.log('promise 3 resolved', data);
// }).catch((err) => {
//     console.log('promise rejected:', err)
// });




//better example of asynchronis code. console logs 1 and 2 fires, getTodos starts, but 3 and 4 fire first while getTodos is processing
// console.log(1);
// console.log(2);
// calling getTodos function
// when we do callbacks from a network, convention is to always do error first, then data second
// getTodos('/json/characters.json', (err, data) => {
//     // console.log('callback fired');
//     // if there is an error
//     if (err) {
//         console.log(err); 
//     }
//     else {
//         console.log(data);
//     }
// });
// console.log(3);
// console.log(4);

// promise example
// promises have two types of outcomes: either they are resolved or rejected (error)
const getSomething = () => {
    // in a promise, we automatically get access to two parameters inside the promise function: resolve and reject
    return new Promise((resolve, reject) => {
        //fetch something
        // resolve('some data');
        // reject('some error');
    });
}

// a promise is essentially saying if you pass a function in .then(), then it will find the function when it resolves the promise
// .then() 
// getSomething().then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// });

// this code is an easier version of the code above
// .catch() catches any errors
getSomething().then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// REMINDER -- A promise is basically saying "At some point I will either resolve if there is success, or reject if there is an error"

// fetch api example
// in the previous example, if there was an error in the file we are pulling from, it shows as resolved instead of rejected
// This is because the .catch() only activates on network errors. 
// fetch('/json/characters.json').then((response) => {
//     console.log('resolved', response);
//     // If we view the response for the fetch request, we will see a method option named "json()"
//     // We can use this json() method to get the data needed from response, which here is the characters.json data
//     // It takes the data and parses it so we can use it inside our code easily
//     // This returns a promise, meaning we cannot assign response.json() to a const. Instead, return the method
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.log('rejected', err);
// });
// REMEMBER THE 3 STEPS OF FETCHING APIS:
// First: we fetch the data
// Second: we take the respose and return response.json, which returns a promise
// Third: we add .then() at the end while passing the data as a parameter, that way we can actually do stuff with that data
// PLUS we can add a .catch() at the end, which gives us an error message

// THIS CODE [ const getGames = async () => {} ] is just an ordinary function 
// By adding async in front of the paranthesis, we turn this function into what is known as an asynchronis function.
// Whenever we call an asynchronis function, that always returns a promise, regardless of what is inside
const getGames = async () => {
    // In async functions, we do not need to add a .then() method
    // Instead, we can assign the fetch to a const, and the fetch will return a promise
    // The await key word stops the fetch from assigning a value to the variable until the promise has been resolved
    // This WOULD block the rest of the code from being processed, but remember, we placed this all within an async function, meaning this code gets processed somewhere else in the browser, meanwhile, the rest of the code gets processed as normal
    const response = await fetch('/json/games.json');
    // This is how we throw our own customized errors. In this case, it is if there is a problem fetching
    if (response.status !== 200) {
        throw new Error('cannot fetch the data bro!');
    }
    const data = await response.json();
    return data;
};
// remember that any async function returns a promise, so just typing "getGames();" will only result in a promise 
// getGames()
// .then(data => console.log('resolved', data))
// .catch(err => console.log('rejected', err.message));
// adding .message to the end of err lets us see 


// Local Storage

// local storage is located in the root of the console. In short, localStorage is infered, so we dont have to type     windows.localStorage, we can just type localStorage

// store data in local storage
// local storage is important, because this lets us store information without losing it, if the user refreshed or closed out of the website. Local storage stores information in the browser, which lets us come back to it later
// everything stored in local storage must be a string. Think of it like JSON data, however numbers will automatically be converted into strings
// to do so, you must type localStorage.setItem('key', 'value');
localStorage.setItem('name', 'Dr. Eggman');
localStorage.setItem('age', 50);

// get data from local storage
// to pull data from localStorage, we have to type local.Storage.getItem('key name');
let villainName = localStorage.getItem('name');
let age = localStorage.getItem('age');
// console.log(villainName, age);

// updating data
// to update an already existing stored item, all we have to do is redefine it as if we were storing it for the first time
localStorage.setItem('name', 'Mephilis');
// this is a faster way of setting a new value for already existing ones:
localStorage.age = 200;
// here, we are setting villainName again since it's value was defined before we updated name. 
villainName = localStorage.getItem('name');
age = localStorage.getItem('age');
// console.log(villainName, age);

// ^ If we were to comment out everything above except for console.log(villainName, age), the result will still be Mephilis and 200. This is because local storage will stay on the browser even if we get rid of the code. The only reason why Dr. Eggman and 50 would reappear after uncommenting the code for it is because we are redefining data that is already there.

// delete data from local storage
// this is an example of how to get rid of a single item in local storage
localStorage.removeItem('name');
// here we are updating villainName to match the local storage. The new value is null because we removed name
villainName = localStorage.getItem('name');
// console.log(villainName);
// this is how we remove everything in local storage
localStorage.clear();
villainName = localStorage.getItem('name');
age = localStorage.getItem('age');
// console.log(age, villainName);

const teams = [
    { teamName: 'Team Sonic', speed: 'Sonic', fly: 'Tails', power: 'Knuckles' },
    { teamName: 'Team Rose', speed: 'Amy', fly: 'Cream', power: 'Big' },
    { teamName: 'Team Dark', speed: 'Shadow', fly: 'Rouge', power: 'Omega' },
    { teamName: 'Team Chaotix', speed: 'Speed', fly: 'Charmy', power: 'Vector' }
];

// Whenever we store data in local storage, we have to do so using JSON methods. This means everything must be turned into JSON string format. JSON provides several different methods we are able to utilize. It even turns single quotes into double quotes for us.
// To turn everything into JSON compatible strings, we have to use the stringify method. This is an example of that:
// console.log(JSON.stringify(teams));

localStorage.setItem('teams', JSON.stringify(teams));
// here, we are storing the stringified object into a variable
const stored = localStorage.getItem('teams');
// to turn it back into an array, we have to use JSON.parse() to turn it back
// console.log(JSON.parse(stored));



// !!--------- OBJECT ORIENTED JAVASCRIPT -----------!!

// Object oriented programming is one of the most important aspect there is to learn in JavaScript.

// classes are a blueprint to make an object. Whether the object is a new user, or a food item on a list, classes are the way to go. This gives javascript much needed simplicity. Anytime we create anything that can be replicated, use a class

class User {
    // constructors are required whenever we have a class. This is what lets us set parameters and use that to create new objects. It is important to have a constructors method in there, because this was lets us use the 'this' keyword
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() {
        // whenever we make a class method, we want to be able to use multiple methods at once (chain methods)
        // To do this, we have to return the object in each method
        console.log(`${this.username} logged in`);
        return this;
    }
    logout() {
        console.log(`${this.username} is a game made by SEGA`);
        return this;
    }
    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

// what happens everytime the 'new' keyword is used
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

// class inheritance
// class inheritance lets us create a new Class that extends previous classes
// For an example, a user can log in and log out, but an admin can do all of that AND as delete other users
class Admin extends User {
    // you only need to add a constructor to an extended class if we are going to add additional properties
    // here, we added another parameter compared to the original User class: title. This parameter is unique to Admin class
    constructor(username, email, title) {
        // to include any parameters from the original class, we use super() and include any parameter names inside it.
        super(username, email);
        this.title = title;
    }
    deleteUser(user) {
        // just like previous arrow functions, we can call our parameter whatever we want as long as the name is not taken
        users = users.filter(u =>  u.username !== user.username);
    }
}

const userOne = new User('tails', 'electricmiles@chaos.net');
const userTwo = new User('eggman', 'thegreategg@egg.net');
const userThree = new Admin('Big', 'bigthecat@froggy.net', 'OS Manager');
// console.log(userOne, userTwo);
// userOne.login();
// userTwo.login();
// userOne.incScore();
// userOne.incScore();
// userTwo.login().logout().incScore();
let users = [userOne, userTwo, userThree];
// console.log(users);
// example of an admin deleting a user
// userThree.deleteUser(userTwo);
// console.log(users);
// console.log(userThree);

// ^ This is the very foundation of object oriented programming. OOP is very important in javascript
// Everytime we create a class for new objects, we define the properties of each object type
// Any functions we create for it are required to be located inside the prototype model, which is found in every object
// Thankfully, the class tool does this for us automatically. 
// However, it is still important to learn this, because this is what is happening under the hood. 
// It is important to learn for debugging, or looking at other people's code.


// firebase testing
// the following example is before firebase 9, which changes a lot.

const list = document.querySelector('#SA-Stages');
const button = document.querySelector('#unsubscribe');
const addStage = (stage, id) => {
    let html = `
    <li data-id="${id}" class="stageElement">
        <div>${stage.name}</div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;

    list.innerHTML += html;
}

const deleteStage = (id) => {
    const stages = document.querySelectorAll('.stageElement');
    stages.forEach(stage => {
        if (stage.getAttribute('data-id') === id) {
            stage.remove();
        }
    })
}

// get documents
// this block of code is a one time retrieval. 
// This way has it's uses, but for this example we want a way to grab the data everytime there is a change.
// db.collection('SADX-Stages').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         addStage(doc.data(), doc.id);
//     });
// }).catch(err => {
//     console.log(err);
// });

// unlike the previous example, here, this code activates every time there is a change in the collection in firestore.
// This method works in real time.
// whenever set up a snapshot listener, it returns a function. By storing that function in const unsub, if we were to ever
// invoke unsub, it would cancel the real time listener, and unsubscribes from changes
const unsub = db.collection('SADX-Stages').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if (change.type === 'added') {
            addStage(doc.data(), doc.id);
        } else if (change.type === 'removed') {
            deleteStage(doc.id);
        }
    })
});

// add documents
const stageAdder = document.querySelector("#stageAdder");
stageAdder.addEventListener('submit', e => {
    e.preventDefault();
    
    const stage = {
        name: stageAdder.stage.value
    };
    db.collection('SADX-Stages').add(stage).then(() => {
        console.log('stage added');
    }).catch(err => {
        console.log(err);
    });
});

// deleting data
list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('SADX-Stages').doc(id).delete().then(() => {
            console.log('stage deleted');
        }).catch(err => {
            console.log(err);
        });
    }
});

// unsub from database changes
button.addEventListener('click', () => {
    unsub();
    console.log('unsubscribed from collection changes');
});

// Spread Operator example. The "..." is used to grab the contents of a pre-existing array or object to add to 
// a new array with additional values. 
// it is important to add the ... because if you do not, then the new array will count the old array as one value.
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
// console.log(newNumbers);

// example of Spread for objects
const person = {
    name: 'Ian'
};
const newPerson = {
    ...person,
    age: 25
};
// console.log(newPerson);

// Rest Operator example. The rest operator takes in an argument using ... followed by whatever we want to name the arguments
// we then return the results of our method. This example is a filter method unrelated to the rest/spread operator
// the result are sent to a new array or object. 
const filter = (...args) => {
    return args.filter(element => element === 1);
}
// console.log(filter(1, 2, 3));

// Destructuring exmample
// Destructuring is a simple method of pulling a single element from an array or object properties and storing it in a variable
// This first example is grabbing the first 2 array elements
const destNums = [1, 2, 3];
[destNum1, destNum2] = destNums;
// console.log(destNum1, destNum2);
// This second example is grabbing the first and third elements in an array
[destNm1, , destNm3] = destNums;
// console.log(destNm1, destNm3);

// This is an example of the map function, which is a built in function for arrays
// map() will take a function as an input and executes the function on each element in the array.
const numArray = [1, 2, 3];
const doubleNumArray = numbers.map(num => {
    return num * 2;
});
console.log(numArray);
console.log(doubleNumArray);




