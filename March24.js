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
