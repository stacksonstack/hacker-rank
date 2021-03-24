// Function Description

// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.
// Input Format

// The first line contains two space-separated integers denoting the respective values of s and t.
// The second line contains two space-separated integers denoting the respective values of a and b.
// The third line contains two space-separated integers denoting the respective values of m and n.
// The fourth line contains  space-separated integers denoting the respective distances that each apple falls from m point a.
// The fifth line contains  space-separated integers denoting the respective distances that each orange falls from n point b.

function countApplesAndOranges(s, t, a, b, apples, oranges) {}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  apples = apples.map((apple) => a + apple);
  oranges = oranges.map((orange) => b + orange);
  let orangeCount = oranges.filter((n) => s <= n && n <= t).length;
  let appleCount = apples.filter((n) => s <= n && n <= t).length;
  return `${appleCount} \n${orangeCount}`
}

// console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])); // 1 , 2




// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// Examples

// grade4 = 84 round to 85 (85 - 84 is less than 3)
// grade = 29 do not round (result is less than 40)
// grade = 57 do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

function gradingStudents(grades) {
    return grades.map((grade) => {
        if(grade >= 38){
            if(grade%5 == 3 ) return grade+=2
            if(grade%5 == 4 ) return grade+=1
        }
        return grade
    })
}

// console.log(gradingStudents([73, 67, 38, 33])) //75, 67, 40 , 33






// return YES if k can be found in the arr array otherwise return NO

function findNumber(arr, k) {
    let filtered = arr.filter((num)=> num === k)
    if(filtered.length > 0){
        return "YES"
    }else{return "NO"}
}

// console.log(findNumber([1,4,7,44,6,77,4,55,5], 79)) //NO




//Return the all the odd numbers between and including l ana r

function oddNumbers(l, r) {
    let odd = []
    for(let i = l; i <= r; i++){
        if(i%2 != 0){
            odd.push(i) 
        }
    }
    return odd
}


// console.log(oddNumbers(2,5)) // 3,5


// function max(text){
//     let textArray = [...text]
//     let textObj = {}
//     textArray.map((letter, index) => {
//         textObj[letter] ? textObj[letter].instance +=1  : textObj[letter] = {instance: 1, index: index}
//     })
//     let uniqueArray = [...new Set(textArray)]
//     let highestInstance = 0
//     uniqueArray.forEach((letter) => highestInstance = Math.max(highestInstance , textObj[letter].instance)) 
//     let filteredText = uniqueArray.filter((letter) => highestInstance === textObj[letter].instance)
//     return filteredText[0]
// }


// console.log(max("abcdefgab"))


// function Inversion(arr){
// let arrayLength = arr.length
//    var counter = 0;
//     for(var i=1; i < arrayLength - 1; i++){
//         console.log("loop")
//         var small = 0;
//         var great = 0;
//         for(var j=i+1; j < arrayLength; j++ ){
//             if(arr[i]> arr[j]){
//                 small+=1
//             }
//         }
//         for(var m=i-1; m >= 0; m--){
//             if(arr[i] < arr[m]){
//                 great+=1
//             }
//         }
//         counter += great * small
//     }
//     return counter
// }

// console.log(Inversion([5,3,4,2,1]))