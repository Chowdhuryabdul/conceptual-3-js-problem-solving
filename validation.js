function details(info){
    /* so i need check here the valdation */
    /* 1. i need to validate that input is a object */
    if/* (typeof info !== 'object' || !info.name || !info.age) */
    (typeof info !== 'object'){ /* it is checking all the parts if one of the get worng then it will show this message */
        return 'thik thak object daw'
    }else if (!info.name || !info.age){
        return 'must contain name and age property'
    }else if ( typeof info.name !== 'string' || typeof info.age !== 'number'){ /* now we will chek the data type */
        return 'tahole thik thak string and number daw'
    }else if ( info.age <= 0){
        return 'provide the positive number'
    }
    
    return `my name is : ${info.name}. my age is : ${info.age}`; /* this is called template syntex method. it is a object */
}
// console.log(details({name : 'Abdul', age : 34}));
// console.log(details('xyx')); /* as my inpput is not correct as object form then it will print my name is : undefined. my age is undefined */
// console.log(details({name : 'Abdul'})); /* i got this one is printed - my name is : Abdul. my age is : undefined */
// console.log(details({name : 'Abdul', age : 34}))
// console.log(details({name : 'Abdul', age : 'hasan'})) /* now we will chek the data type. it prints - my name is : Abdul. my age is : hasan */
console.log(details({name : 'Abdul', age : - 34}))