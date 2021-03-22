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

console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
