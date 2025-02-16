function findTheBiggestNumber(number){
    if(!Array.isArray(number)){ /* here we have checked that, is array or not */
        return 'give me an array'
    }
    let biggest = number [0]
    for(let i of number){

        if(typeof i !== 'number'){ /* here we have checked all the elements in the array is number or others? */
            return 'all elements in the array should be number'
        }
        // console.log(i)
        if(i > biggest){
            biggest = i
        }
    }
    return biggest
}

const theArray = [12, 13, 14, 'false', '3', 15, 16, 300];
// const valueOfParameter = findTheBiggestNumber(theArray);
console.log(findTheBiggestNumber(theArray))