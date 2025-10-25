'use strict';

function fizzBuzz(num) {
    if(num % 15 === 0) {
        return 'fizzBuzz!';
    }else if(num % 3 == 0) {
        return 'Fizz!'
    }else if(num % 5 == 0) {
        return 'Buzz!';
    }else {
        return num;
    }
}

let i = 1;
while(i <= 30){
    console.log(fizzBuzz(i));
    i += 1;
}

// const result = fizzBuzz(15);
// document.getElementById('fizzBuzz').textContent = result;