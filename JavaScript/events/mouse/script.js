/*1. Mouse Events:

click: Triggered when the mouse is clicked.
dblclick: Triggered when the mouse is double-clicked.
mousedown: Triggered when a mouse button is pressed down.
mouseup: Triggered when a mouse button is released.
mousemove: Triggered when the mouse pointer moves.


2. Keyboard Events:

keydown: Triggered when a key is pressed down.
keyup: Triggered when a key is released.
keypress: Triggered when a key is pressed (deprecated).


3. Form Events:

submit: Triggered when a form is submitted.
change: Triggered when the value of an input element changes (for text inputs, checkboxes, radio buttons, etc.).
input: Triggered when the value of an input element is changed (modern alternative to change).
focus: Triggered when an element receives focus.
blur: Triggered when an element loses focus.


4. Window Events:

load: Triggered when the page finishes loading.
unload: Triggered when the page is being unloaded (not commonly used).
resize: Triggered when the window is resized.
scroll: Triggered when the user scrolls the page.


5. Event Delegation:

Events can also be delegated to parent elements using event delegation. This is useful for handling events on dynamically added elements or for minimizing the number of event listeners.
*/

//MOUSE EVENTs
//1st

var a = document.getElementById('myimg').value;

// if(a )

if (onclick(a)){
    function e1(){
            alert("Hie! Its me abhi");
        }
} 
// function e1(){
//     alert("Hie! Its me abhi");
// }

// //2nd
// function e2(){
//     alert("OnClick");
    
// }

// //3rd
// function e3(){
//     alert("ContextMenu");
// }