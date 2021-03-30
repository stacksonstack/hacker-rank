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



// Function Description

// Complete the timeInWords function in the editor below.

// timeInWords has the following parameter(s):

// int h: the hour of the day
// int m: the minutes after the hour
// Returns

// string: a time string as described

function timeInWords(h, m) {
    let numInWords = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
                  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
                  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
                  15: 'quarter', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen',
                  19: 'nineteen', 20: 'twenty', 21: 'twenty one', 22: 'twenty two',
                  23: 'twenty three', 24: 'twenty four', 25: 'twenty five',
                  26: 'twenty six', 27: 'twenty seven', 28: 'twenty eight',
                  29: 'twenty nine', 30: 'half'}
    if(m == 0) return `${numInWords[h]} o' clock`
    else if(m == 15 || m ==30) return `${numInWords[m]} past ${numInWords[h]}`
    else if(m >= 1 && m <= 30) return m===1?  `${numInWords[m]} minute past ${numInWords[h]}` : `${numInWords[m]} minutes past ${numInWords[h]}`
    else if(m <= 59 && m > 30){
        let minutes = 60 - m
        if(minutes == 15) return `${numInWords[minutes]} to ${numInWords[h+1]}`
        return minutes===1?  `${numInWords[minutes]} minute to ${numInWords[h+1]}` : `${numInWords[minutes]} minutes to ${numInWords[h+1]}`
    }
}

console.log(timeInWords(5,0)) //five o' clock
console.log(timeInWords(5,1)) //one minute past five
console.log(timeInWords(5,15)) // quarter past five
console.log(timeInWords(5,30)) // half past five
console.log(timeInWords(5,40)) // twenty minutes to six
console.log(timeInWords(5,45)) // quarter to six
