//Log out a message to show you've got JavaScript running

console.log("Script running!");


//Define a variable `myName` and log it out

let myName = "Danny";
console.log(myName);


//Define a function `getVowelCount()`
function getVowelCount(aString) {
    let lowerCaseString = aString.toLowerCase();
    let modifiedString1 = lowerCaseString.replaceAll("a","");
    let modifiedString2 = modifiedString1.replaceAll("e","");
    let modifiedString3 = modifiedString2.replaceAll("i","");
    let modifiedString4 = modifiedString3.replaceAll("o","");
    let modifiedString5 = modifiedString4.replaceAll("u","");
    let modifiedString6 = modifiedString5.replaceAll("y","");
    let number = lowerCaseString.length - modifiedString6.length;
    return(number)
}



//Define a variable `numVowelsInName` and log it out

let numVowelsInName = getVowelCount(myName);
console.log(numVowelsInName);


//Create a variable `h1Elememt` that refers to the `<h1>` element in the DOM.
//Then change the text of that element

let h1Elememt = $("h1");
h1Elememt.text("Interactive Pet Viewer");


//Create a variable `footerElement` that refers to the `<footer>`, then
//change the HTML content of that element

let footerElement = $("footer");
footerElement.html('<small>All images from <a href="https://unsplash.com/">unsplash.com</a></small>')


//Change the CSS `display` property of the `#cats` element
//Add the `active` class to the `#btnShowDogs` element

let cats = $('#cats');
cats.css('display','none');

let btnShowDogs = $('#btnShowDogs');
btnShowDogs.addClass('active');

//Add an event listener to the buttons to respond to click events.
//The listener's function will toggle the `#dogs` and `#cats` divs,
//and toggle which button has the `active` class

// $("btn-group").on('click',toggle()) (?)

//Change the `cursor` CSS property of the images




//Add the `data-bs-toggle` and `data-bs-target` attributes to the images




//Ad an event listener to the modal for `show.bs.modal` events.
//The listener's function will replace the modal's image `src` and
//`alt` attributes with the values from the clicked image.