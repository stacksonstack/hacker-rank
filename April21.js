// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

function kangaroo(x1, v1, x2, v2) {
    var match = false
    var kangaroo1 = x1
    var kangaroo2 = x2
    if(x2 > x1 || x1>x2 && v1 == v2) return "NO"
    else if(x2>x1 && v2>v1) return "NO"
    else if(x1>x2 && v1>v2) return "NO"
    while(match === false){
        kangaroo1 += v1
        kangaroo2 += v2
        if(kangaroo1 === kangaroo2) match === true 
        if(kangaroo1 > kangaroo2 ) break
    }
    return match === true ? "YES" : "NO"
} //this version doesn't cover all edge cases

// console.log(kangaroo(2,1,1,2)) // YES
// console.log(kangaroo(0,2,5,3)) // NO
// console.log(kangaroo(21,6,47,3)) //NO

function _kangaroo(x1, v1, x2, v2) {
    if ((x1 < x2) && (v1 < v2))
        return "NO"
    else {
        if ((v1 != v2) && ((x2 - x1) % (v1 - v2)) == 0)
            return "YES"
        else
            return "NO"
}

// console.log(_kangaroo(2,1,1,2)) // YES
// console.log(_kangaroo(0,2,5,3)) // NO
// console.log(_kangaroo(21,6,47,3)) // NO     

