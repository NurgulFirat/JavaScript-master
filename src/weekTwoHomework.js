function findPrime(...numbers){
    let control = false
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % i == 0) {  
            console.log(numbers[i] + " asaldır.")           
        } else {
            console.log(numbers[i] + " asal değildir.")
        }
    }
}

//findPrime(5,15,23,45,56)
//findPrime(3,10,23,2,41,43,2)
findPrime(3,5,2)