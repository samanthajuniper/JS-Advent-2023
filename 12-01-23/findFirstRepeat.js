// In the toy factory of the North Pole, each toy has a unique identification number.
// However, due to an error in the toy machine, some numbers have been assigned to more than one toy.
// Find the first identification number that has been repeated, where the second occurrence has the smallest index!
// In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.

// Examples
// const giftIds = [2, 1, 3, 5, 3, 2]
// const firstRepeatedId = findFirstRepeated(giftIds)
// console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

// const giftIds2 = [1, 2, 3, 4]
// const firstRepeatedId2 = findFirstRepeated(giftIds2)
// console.log(firstRepeatedId2) -1
// It is -1 since no number is repeated

//Solution
// Cognitive Complexity: 6, lower is better

const findFirstRepeated = (gifts) => {
    const giftMap = {};
    let finalResult;

    gifts.map((gift) => {
    if(giftMap[gift] && !finalResult){
        finalResult = gift
    } else {
        giftMap[gift] = 1
    }
    })

    return finalResult ? parseInt(finalResult) : -1
}