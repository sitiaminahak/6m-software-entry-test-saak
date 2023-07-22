/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
  let tmp = x;
	x = y;
	y = tmp;
	if (typeof y != "number" && typeof x !="number"){
		return -1;
	}else {
		console.log(x,y);
	}
}

// Task 2: Add code here
let values = swap(4,5);
module.exports = swap;
