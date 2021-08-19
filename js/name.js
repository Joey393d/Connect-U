'use strict';
console.log('name.js file is connected');

//name display
let NameVar = localStorage.getItem('name');
document.getElementById('namedisplay').innerHTML = 'Hello ' + NameVar + '!';
