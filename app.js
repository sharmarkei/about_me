'use strict'

alert('Hello! Let\'s play a little game!');

var user = prompt('First things first, What\'s you\'re name?');
console.log('user name:' + user);

alert('Thanks ' + user + ' ! Let\'s get started!')

var shoe = prompt('What are my favorite shoe brand?(Vans/Nike/Asics?)').toUpperCase();
console.log("questionOne shoes:" + shoe);

if (shoe === 'VANS'){
  alert('Nope! You\'re wrong.');
} else if (shoe === 'NIKE') {
  alert('Yup, that\'s the one!');
} else if (shoe === 'ASICS') {
  alert('I wouldn\'t be caught dead wearing them!');
} else {
  alert('What are those?')
}
var house = prompt('Do I have my own place?').toUpperCase();
console.log('own house:' + house);

if (house === 'Y' || house === 'YES') {
  alert('I wish! Still at momma\'s house.');
} else if (house === 'N' || house === 'NO'){
  alert('Hopefully after I get a job with what I learned at CF!')
}
var height = prompt('Am I taller than 6 feet?').toUpperCase();
console.log('my height:' + height);

if(height === 'Y' || height === 'YES') {
  alert('Only if I keep drinking my milk!');
} else if(height === 'N' || height === 'NO') {
  alert('Yeaaa, I\'m just an average joe');
} else{
  alert('Dude, only answer Y/N')
}
var computer = prompt('Do I use a Mac computer?').toUpperCase();
console.log('type computer:' + computer);

if(computer === 'Y' || computer === 'YES'){
  alert('Apple squad!')
} else{
  alert('PC\'s are etinct.')
}

var workout = prompt('Do I workout?').toUpperCase();
console.log('my workout:' + workout);

if(workout === 'Y' || workout === 'YES') {
  alert('After starting CF');
} else {
  alert('Yea, I like that sedentary lifestyle.');
}

var drink = prompt('Do I drink water?').toUpperCase();
console.log('choice drink:' + drink);

if(drink === 'Y' || drink === 'YES'){
  alert('Water? What\'s that? Strictly soda!');
} else {
  alert('Soda only!');
}
var sumTing = prompt("choice one of these(hi, hello, hey)").toUpperCase();
console.log('answer sumTing:' + sumTing);

 while (sumTing != 'HEY'){
   prompt('Try again!')
   var sumTing = prompt("choice one of these(hi, hello, hey)").toUpperCase();
 }
 alert('Correct!')
