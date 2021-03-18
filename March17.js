// Complete the solveMeFirst function in the editor below.

// solveMeFirst has the following parameters:

// int a: the first value
// int b: the second value
// Returns
// - int: the sum of a and b



function solveMeFirst(a, b) {
  return a + b  
}

// console.log(solveMeFirst(7, 3));




// This is a staircase of size n=4 :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer

function staircase(n) {
    let filledArray = new Array(n).fill(' '); //makes an array with n empty strings
    console.log(filledArray)
    while (filledArray.indexOf(' ') !== -1) {
        filledArray.shift();
        filledArray.push('#');
        console.log(filledArray.join("")); // the while loop returns what we want 
        n--;
    }
    return
}

console.log(staircase(10))