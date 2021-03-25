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

// int x: Cat 's position   7  2
// int y: Cat 's positionc  9   3
// int z: Mouse 's position 5    1
// Returns

// string: Either 'Cat A', 'Cat B', or 'Mouse C'

function catAndMouse(x, y, z) {
    const catA = Math.abs(x - z)
    const catB = Math.abs(y - z)

    if(catA === catB) 
        return 'Mouse C';
    return catA > catB ? "Cat B" : "Cat A"
}

// console.log(catAndMouse(2,5,4))


// Function Description

// Complete the hurdleRace function in the editor below.

// hurdleRace has the following parameter(s):

// int k: the height the character can jump naturally
// int height[n]: the heights of each hurdle
// Returns

// int: the minimum number of doses required, always 0 or more


function hurdleRace(k, height) {
    let maxHeight = Math.max(...height)
    return maxHeight <= k ? 0 : maxHeight - k
}

console.log(hurdleRace(1, [1,2,3,3,2])) //2