function convertFahrToCelsius(f){   
    let c = (f - 32) * 5/9;
    c = c.toFixed(4)
    return (!isNaN(f) ? console.log(c) : Array.isArray(f) ? console.log(`${JSON.stringify(f)} is not a valid number but a/an array.`): console.log(`${JSON.stringify(f)} is not a valid number but a/an ${typeof(f)}.`))

}
convertFahrToCelsius(0) 
convertFahrToCelsius("0")
convertFahrToCelsius('yi')
convertFahrToCelsius([1,2,3])
convertFahrToCelsius({temp: 0})

function checkYuGiOh(n){
    let numbers = []
    if (isNaN(n)){
       console.log(`invalid parameter: ${JSON.stringify(n)}`)
    }
    else{
        for (let i = 1; i <= parseInt(n); i++) {
            (i % 30 == 0) ? numbers.push('yu-gi-oh')
                :(i % 10 == 0) ? numbers.push('yu-oh')
                :(i % 6 == 0) ? numbers.push('yu-gi')                                                                                       
                :(i % 2 == 0) ? numbers.push('yu')
                :(i % 3 == 0) ? numbers.push('gi')
                :(i % 5 == 0) ? numbers.push('oh'):
                numbers.push(i)
        }
        console.log(numbers)
    }
}

checkYuGiOh(10)
checkYuGiOh("5")
checkYuGiOh("fizzbuzz is meh") 