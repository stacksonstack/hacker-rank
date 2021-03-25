// Function Description

// Complete the getMoneySpent function in the editor below.

// getMoneySpent has the following parameter(s):

// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget
// Returns

// int: the maximum that can be spent, or -1 if it is not possible to buy both items

function getMoneySpent(keyboards, drives, b) {
    let combinations = []
    keyboards.map((keyboard) =>  {
        drives.map((drive)=>{
            combinations.push(drive+keyboard)
        })
    })
    let underBudget = combinations.filter((combo)=> combo <=b)
    return underBudget.length !=0 ? Math.max(...underBudget) : -1
}

// console.log(getMoneySpent([40,50,60],[5,8,12],60))
// console.log(getMoneySpent([40,50,60],[50,80,120],60))




// Function Description

// Complete the catAndMouse function in the editor below.

// catAndMouse has the following parameter(s):

// int x: Cat 's position
// int y: Cat 's position
// int z: Mouse 's position
// Returns

// string: Either 'Cat A', 'Cat B', or 'Mouse C'
