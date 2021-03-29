// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided

function birthday(s, d, m) {
    var count = 0
    for(let i = 0; i < s.length; i++) {
        let arr = s.slice(0 + i, m + i)
        if(arr.reduce((a,b) => a+ b) === d) {           
            count++         
        }      
    }
    return count

}

// console.log(birthday([2,2,1,3,2],4,2))