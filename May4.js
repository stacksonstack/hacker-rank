// Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

// If the book is returned on or before the expected return date, no fine will be charged (i.e. fine = 0 .)
// If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 hackos X (the number of days late).
// If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 hackos X (the number of months late).
// If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 hackos.
// Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be 10,000.

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if(d1 <= d2 && m1 <= m2 && y1 <= y2 || y1 < y2 || (m1 < m2 && y1 <= y2 )) return 0;
    if(d1 > d2 && m1 === m2 && y1 === y2) return Math.abs(15 * (d2-d1))
    if(m1>m2 && y1 === y2) return Math.abs(500 * (m1-m2))
    if(y1 > y2) return 10000
}
console.log(libraryFine(9,6,2015,6,6,2015)) // 45
console.log(libraryFine(9,5,2015,9,6,2015)) // 0
console.log(libraryFine(9,9,2015,9,1,2015)) // 4,000
console.log(libraryFine(9,6,2012,9,6,2010)) // 10,000
console.log(libraryFine(2,7,1014,1,1,1015)) // 0
console.log(libraryFine(28,2,2015,15,4,2015)) // 0
console.log(libraryFine(1,1,2015,31,12,2014)) // 10000