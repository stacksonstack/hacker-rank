// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example
// arr = [1,1,2,2,3]
// There are two each of types 1 and 2, and one sighting of type 3 . Pick the lower of the two types seen twice: type 1.


function migratoryBirds(arr) {
    let birdObj = {}
    arr.map((bird)=> {
        birdObj[bird] ? birdObj[bird].instance +=1 : birdObj[bird] = {instance : 1}
        })
    let uniqueArray = [...new Set(arr)]
    let highestInstance = 0
    uniqueArray.forEach((id)=> highestInstance = Math.max(highestInstance, birdObj[id].instance) )
    let filteredArray = uniqueArray.filter((id)=> highestInstance === birdObj[id].instance)
    return filteredArray.sort()[0]
}

// console.log(migratoryBirds([1,1,2,2,3]))


// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

function bonAppetit(bill, k, b) {
    let totalBill = bill.reduce((acc, curr) => acc + curr)
    let uneatenFood = bill[k]
    let amountDue = (totalBill - uneatenFood) / 2
    return amountDue === b ? console.log("Bon Appetit") : console.log(b - amountDue)
}


console.log(bonAppetit([2,4,6], 2, 6))



// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs

function sockMerchant(n, ar) {


}
