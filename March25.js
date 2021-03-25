// Function Description

// Complete the getMoneySpent function in the editor below.

// getMoneySpent has the following parameter(s):

// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget
// Returns

// int: the maximum that can be spent, or -1 if it is not possible to buy both items

function getMoneySpent(keyboards, drives, b) {
  let combinations = [];
  keyboards.map((keyboard) => {
    drives.map((drive) => {
      combinations.push(drive + keyboard);
    });
  });
  let underBudget = combinations.filter((combo) => combo <= b);
  return underBudget.length != 0 ? Math.max(...underBudget) : -1;
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
  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);

  if (catA === catB) return "Mouse C";
  return catA > catB ? "Cat B" : "Cat A";
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
  let maxHeight = Math.max(...height);
  return maxHeight <= k ? 0 : maxHeight - k;
}

// console.log(hurdleRace(1, [1,2,3,3,2])) //2

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// Example

// a = [1, 2, 3]
// b = [3, 2, 1]
// For elements *0*, Bob is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

// Function Description

// Complete the function compareTriplets in the editor below.

// compareTriplets has the following parameter(s):

// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating
// Return

// int[2]: Alice's score is in the first position, and Bob's score is in the second.

function compareTriplets(a, b) {
  return a.reduce(
    (acc, curr, index) => {
      if (curr > b[index]) {
        acc[0] += 1;
      } else if (curr < b[index]) {
        acc[1] += 1;
      }
      return acc;
    },
    [0, 0]
  );
}

// console.log(compareTriplets([1, 2, 3], [1, 2, 4])); // [0,1]
