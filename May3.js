// A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

// The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

function saveThePrisoner(n, m, s) {
        while(m != 1){
            if(s > n){
                s = 1
            }
            s +=1
            m --
        }
        return s
}

// console.log(saveThePrisoner(4,6,2))

function _saveThePrisoner(n, m, s) {
        return (m-1 + s)%n || n;
}
    
// console.log(_saveThePrisoner(4,6,2))



// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.

// She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

// Given a range of numbered days, [i..j]  and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by . If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.


function beautifulDays(i, j, k) {
    var myArray = []
    var beautifulDays = 0
    while(i <= j){
        myArray.push(i)
        i++
    }
    myArray.forEach((num)=> {
        if((num - num.toString().split("").reverse().join("")) % k === 0 ) beautifulDays+=1
    })
return beautifulDays
}

console.log(beautifulDays(20,23,6))