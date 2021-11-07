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