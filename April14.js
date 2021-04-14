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
