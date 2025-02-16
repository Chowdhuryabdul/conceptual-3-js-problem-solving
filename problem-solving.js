function anaVori(ana){
    if(typeof ana !== 'number' || ana < 0){
        return 'give me a integer number'
    }
    const vori = ana * 0.0625
    return vori
}

// console.log(anaVori('40'))
// console.log(anaVori(-40))
console.log(anaVori(40))

function pandaCost(singara, somusa, jilapi){
if (typeof singara !== 'number' || typeof somusa !== 'number' || typeof jilapi !== 'number'){
    return 'give me proper number'
}else if( singara < 0 || somusa < 0 || jilapi < 0){
    return 'all parameters should be positve number'
}

 const singarPricePerPeice = 7;
//  const SingaraCost = singarPricePerPeice * singara;
 const somusaPricePerPeice = 10;
//  const SomusaCost = somusaPricePerPeice * somusa;
 const jilapiPricePerPeice = 15;
//  const JilapiCost = jilapiPricePerPeice * jilapi;
//  const totalExpens = SingaraCost + SomusaCost + JilapiCost

 const totalExpens = singarPricePerPeice * singara + somusaPricePerPeice * somusa + jilapiPricePerPeice * jilapi;
 return totalExpens
}


// console.log(pandaCost(2, 3))
console.log(pandaCost(2, 3, -4))
// console.log(pandaCost(2, 3))