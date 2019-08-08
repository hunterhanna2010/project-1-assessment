document.addEventListener('DOMContentLoaded', function() {
    console.log('we are live');
})

//event listeners
let add = document.getElementById('add').addEventListener('submit', function(e) {
    console.log('we are adding');
})
let subtract = document.getElementById('subtract').addEventListener('submit', function(e) {
    console.log('we are subtracting');
})

//let number = document.createElement('h1')
let numAdd = document.getElementById('add').value;
let numSubtract = document.getElementById('subtract').value;
let numValue = Number ('user-input');

var number = 0;
function numAdd(){
     number++;
     document.getElementById('number-output').h1 = number;
}

function numSubtract() {
    number--;
    document.getElementById('number-output').h1 = number;
}