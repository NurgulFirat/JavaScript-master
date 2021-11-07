//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let sayac = 0;
        for (let j = 1; j <= numbers[i]; j++) {
            if (numbers[i] % j == 0){
                sayac++
            }
        }
        if(sayac == 2){
            console.log(numbers[i] + " is prime.");
        }else {
            console.log(numbers[i] + " is not prime.");
        }
    }    
}
findPrime(5,13,24,2,28);

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

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function perfectNumber(){
    let sum
    for (let i = 2; i < 1000; i++) {
        sum = 0
        for (let j = 1; j <= (i/2); j++) {
            if (i % j == 0) {
                sum = sum + j
            }            
        }
        if (i == sum) {
            console.log(i)
        }        
    }
}
perfectNumber()

//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function findPrime2(){
 
    for (let number = 2; number <= 1000; number++) {
        let control = 0; 
        for (let i = 2; i < number; i++) {
            if (number % i == 0) 
            {
                control = 1;
                break;
            }           
        }
        if (control == 1) {
            //console.log(i + " asal değildir.")
        }
        else{
            console.log(i + " is prime.")
        }        
    }
}
findPrime2()