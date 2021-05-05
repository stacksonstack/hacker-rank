// A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

// The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

function saveThePrisoner(n, m, s) {
  while (m != 1) {
    if (s > n) {
      s = 1;
    }
    s += 1;
    m--;
  }
  return s;
}

// console.log(saveThePrisoner(4,6,2))

function _saveThePrisoner(n, m, s) {
  return (m - 1 + s) % n || n;
}

// console.log(_saveThePrisoner(4,6,2))

// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.

// She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

// Given a range of numbered days, [i..j]  and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by . If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.

function beautifulDays(i, j, k) {
  var myArray = [];
  var beautifulDays = 0;
  while (i <= j) {
    myArray.push(i);
    i++;
  }
  myArray.forEach((num) => {
    if ((num - num.toString().split("").reverse().join("")) % k === 0)
      beautifulDays += 1;
  });
  return beautifulDays;
}

// console.log(beautifulDays(20,23,6))

function _beautifulDays(i, j, k) {
  var beautifulDays = 0;
  while (i <= j) {
    let reversed = i.toString().split("").reverse().join("");
    if ((i - reversed) % k === 0) beautifulDays += 1;
    i++;
  }
  return beautifulDays;
}

// console.log(_beautifulDays(20,23,6))

// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
// Scores are in the same order as the games played.
// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

function breakingRecords(scores) {
  var max = scores[0];
  var min = scores[0];
  var count = [0, 0];
  scores.forEach((score) => {
    if (score > max) {
      max = score;
      count[0] += 1;
    } else if (score < min) {
      min = score;
      count[1] += 1;
    }
  });
  return count;
}

// console.log(breakingRecords([12,24,10,24]))

function _breakingRecords(scores) {
  var max = scores[0];
  var min = scores[0];
  return scores.reduce(
    (acc, curr) => {
      if (curr > max) {
        max = curr;
        acc[0] += 1;
      } else if (curr < min) {
        min = curr;
        acc[1] += 1;
      }
      return acc;
    },
    [0, 0]
  );
}

console.log(_breakingRecords([12, 24, 10, 24]));

// An integer  is a divisor of an integer  if the remainder of .

// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

function findDigits(n) {
  var numArray = n.toString().split("");
  var divisor = 0;
  numArray.forEach((num) => {
    if (n % num === 0) divisor += 1;
  });
  return divisor;
}

// console.log(findDigits(124)) //3
// console.log(findDigits(111)) //3
// console.log(findDigits(10)) //1
