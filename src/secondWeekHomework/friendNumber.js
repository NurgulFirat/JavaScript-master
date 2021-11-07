//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function friendNumber(number1, number2){
    let sum1 = 0
    let sum2 = 0
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            sum1 = sum1 + i
        }        
    }
    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            sum2 = sum2 + i  
        }              
    }
    if (number1 == sum2 && number2 == sum1) {
        console.log(number1 + " and " + number2 + " is friend number.")
    }
    else{
        console.log(number1 + " and " + number2 + " is not friend number.")
    }
}
friendNumber(220,284) //is friend number
friendNumber(100, 250) //is not friend number