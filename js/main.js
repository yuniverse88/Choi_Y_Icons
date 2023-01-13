console.log('Javascript is running!');

/* loger js block comment
const is a type of variable- abit of memory that can hold

JS uses Any valid Css selector to make a connection to any elements on the page - it works the same way as Css selector do, because It's Using Css selector to find matchinh element.

the document is the DOM - the web page and all of its elements

querySelector is the method (function) that makes the connection between JS and the DOM (the elements)
*/

//step 1- make the connection to the element you want to  interact with 
const jpgGraphic = document.querySelector("#bitmap");

const svgGraphic = document.querySelector("#vector");

function logID() {
    console.log('click on this element:', this.id);
    console.log(2+2)
}

// step2 - deciede how you want the user to interact with the object you creat in step 1
jpgGraphic.addEventListener('click', logID);

svgGraphic.addEventListener('click', logID);