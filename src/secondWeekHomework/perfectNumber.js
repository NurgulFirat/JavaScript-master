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