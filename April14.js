// Given a number n, for each interger i in the range from 1 to n, print one value per line as follows:
// - if i is a multiple of both 3 and 5, print FizzBuzz.
// - if i is a multiple of only 3, print Fizz.
// - if i is a multiple of only 5, print Buzz.
// - if i is not a multiple of 3 or 5, print the value 

function fizzBuzz(n) {
    var string = ""
    for(let i =1; i <= n; i++){
        if(i%3 === 0 && i% 5===0) string += 'FizzBuzz\n'
        else if(i%3===0) string += 'Fizz\n'
        else if(i%5==0) string += 'Buzz\n'
        else string += `${i}\n`
    }
    return console.log(string)
}

// fizzBuzz(15) 


// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line.
function plusMinus(arr) {
    let d = arr.reduce((acc, curr)=> {
        if (curr > 0) acc['1']+= 1 
        else if (curr < 0) acc['-1'] += 1
        else acc['0'] += 1
        return acc
    },{'1': 0, '-1': 0, '0': 0})
    // arr= [-4, 3, -9, 0, 4, 1]
    // 0.500000
    // 0.333333
    // 0.166667
    return(`${d['1']/arr.length}\n`, `${d['-1']/arr.length}\n`, `${d['0']/arr.length}`  )
    
}

// console.log(plusMinus([-4,3,-9,0,4,1])) // 0.5 \n 0.33333 \n , 0.166667


