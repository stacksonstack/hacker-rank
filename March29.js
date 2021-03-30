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


// Function Description

// Complete the pickingNumbers function in the editor below.

// pickingNumbers has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the length of the longest subarray that meets the criterion

function pickingNumbers(a) {
    let maxcount = 0;
    [...new Set(a)].forEach(x => {
        maxcount = Math.max(maxcount,
            a.reduce((c, v) => c += (v === x || v === x + 1), 0));
    })
    return maxcount;
}

// console.log(pickingNumbers([1,1,2,2,4,4,5,5,5]))
// console.log(pickingNumbers([4,6,5,3,3,1]))
// console.log(pickingNumbers([1, 2, 2, 3, 1 ,2]))