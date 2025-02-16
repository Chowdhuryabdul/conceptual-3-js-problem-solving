function picnicBudget(participents){

    /* validation */
    if(typeof participents !== 'number'){
        return 'give me number'
    }else if( participents < 0){
        return 'provide me integer '
    }

    if(participents <= 100){
      const expensOfFirstGroup = participents * 5000
      return expensOfFirstGroup   
    }else if(participents > 100 && participents < 200 ){
        const expensOfFirstGroup = participents * 5000
        const remainingExpenseOfSecondGroup = (participents - 100) * 4000;
        const total = expensOfFirstGroup + remainingExpenseOfSecondGroup
        return total
    }else {
        const expensOfFirstGroup = 100 * 5000
        remainingExpenseOfSecondGroup = 100 * 4000;
        remainingExpenseOfThirdGroup = (participents - 200) * 3000;
       total = expensOfFirstGroup + remainingExpenseOfSecondGroup + remainingExpenseOfThirdGroup
       return total
    }
}

console.log(picnicBudget(201))