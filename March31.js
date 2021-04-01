// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

function divisibleSumPairs(n, k, ar) {
  var counter = 0;
  for (var i = 0; i < ar.length; i++) {
    for (var j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        counter++;
      }
    }
  }
  return counter;
}

// console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])); //3

function divisibleSumPairsRefactored(n, k, ar) {
  var count = 0;

  ar.forEach((el, index)=>{
    ar.slice(index + 1, n).forEach((item) => {
        if ((item + el) % k === 0) {
          count++;
        }
      })
  })
  return count 
}

// console.log(divisibleSumPairsRefactored(6, 5, [1, 2, 3, 4, 5, 6])); //3


// Function Description

// Complete the viralAdvertising function in the editor below.

// viralAdvertising has the following parameter(s):

// int n: the day number to report
// Returns

// int: the cumulative likes at that day

function viralAdvertising(n) {
    let totalLikes = 0
    let shared = 5
    let liked = 0 
    for(var i =0; i < n ; i++){
        liked = Math.floor(shared/2)
        totalLikes += liked
        shared = liked * 3
    }
  return totalLikes
}

// console.log(viralAdvertising(5)) // 24

// Function Description

// Complete the beautifulDays function in the editor below.

// beautifulDays has the following parameter(s):

// int i: the starting day number
// int j: the ending day number
// int k: the divisor
// Returns

// int: the number of beautiful days in the range

function beautifulDays(i, j, k) {
    let days = 0
    while(i<=j){
        let reversed = i.toString().split('').reverse().join('')
        if((i-reversed)%k === 0) days++
        i++
    }
    return days
}

console.log(beautifulDays(20,23,6))

