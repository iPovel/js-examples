//задача 1
//число является простым, если оно больше 1 и делится без остатка только на 1 и на себя
var n = 0;
while(n <= 100){
    if(isPrime(n))
        console.log(n);
    
    n++;
}

function isPrime(number){
    var i = 2;
    if(number <= 1)
        return false;
    while(i < number){
        if(number % i == 0)
            return false;

        i++;
    }
    return true;
}

//задача 2
var shop = [], sum = 0;
for(var i = 0; i < 10; i++){
    shop[i] = parseInt(Math.random() * 700 + 300);
    sum += shop[i];
}

console.log("сумма: " + sum);

//задача 3

function countBasketPrice(basket){
    var sum = 0;
    for(var product in basket){
        sum += basket[product];
    }

    return sum;
}

console.log("сумма: " + countBasketPrice(shop));

//задача 4
for(var i = 0; i <= 9; console.log(i++)){};

//задача 5
for(var i = 0; i <= 20; i++){
    var str = "";
    for(var k = 0; k < i; k++){
        str += "x";
    }
    console.log(str);
}