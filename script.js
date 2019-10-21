//#1 
var a = 1, b = 1, c, d;
c = ++a; alert(c);           //2 
//Префиксная форма инкремента возвращает новое увеличенное 
//значение, и это значение присваевается в перменную с
d = b++; alert(d);           //1
//Постфиксная форма инкремента возвращает значение, 
//которое было до увеличения. Это значение присваевается в переменную d
c = (2+ ++a); alert(c);      //5
//Инкрементируется а, потом к 2 прибавляем a,
//и получившееся значение присваиваем переменной с 
d = (2+ b++); alert(d);      //4 
//Постфиксная форма инкремента возвращает старое значение b(2)
//потом к 2 прибавляется b и получившееся значение присваевается переменной d
alert(a);                    //3
//Значение а не менялось после последнего вывода
alert(b);                    //3 
//Была постфиксная форма инкремента b. значение b увеличилось

//#2
var a = 2;
var x = 1 + (a *= 2); //5
//сначала a = a * 2. потом  1 + 4 = 5. x = 5 

//#3
var a = 7, b = 5;

if(a >= 0 && b >= 0)
    console.log(a - b);
else if(a < 0 && b < 0)
    console.log(a * b);
else if((a >= 0 && b < 0) || (a < 0 && b >= 0))
    console.log(a+b);

//#4

var a = 2

switch(a) {
    case 0:
    console.log(0);
    case 1:
    console.log(1);
    case 2:
    console.log(2);
    case 3:
    console.log(3);
    case 4:
    console.log(4);
    case 5:
    console.log(5);
    case 6:
    console.log(6);
    case 7:
    console.log(7);
    case 8:
    console.log(8);
    case 9:
    console.log(9);
    case 10:
    console.log(10);
    case 11:
    console.log(11);
    case 12:
    console.log(12);
    case 13:
    console.log(13);
    case 14:
    console.log(14);
    case 15:
    console.log(15);
}

//#5
function sum(a,b) {
    return a + b;
}

function razn(a,b) {
    return a - b;
}

function multi(a,b) {
    return a * b;
}

function division(a,b) {
    if(b == 0)
    {
        console.log("Делитель не может быть равен нулю");
        return;
    } 
    return a/b;
}

//#6
function mathOperation(x, y, op) {
    var res;
    switch(op){
        case "+":
            res = sum(x, y);
            break;
        case "-":
            res = razn(x, y);
            break;
        case "*":
            res = multi(x, y);
            break;
        case "/":
            res = division(x, y);
            break;
    }
    return res;
}

console.log(mathOperation(30, 10 , "+"));
console.log(mathOperation(30, 10 , "-"));
console.log(mathOperation(30, 10 , "*"));
console.log(mathOperation(30, 10 , "/"));

//#7
console.log(null == 0); //false
console.log(null >= 0); //true 
console.log(null < 0); //false
console.log(null <= 0); //true
console.log(null > 0); //false
//На сколько я понял, с операторами относительного сравнения >, <, >=, <= null преобразуется в число 0

//#8  Функция возведения в степень, с возможностью задания отрицательной степени. (рекурсия)
function power(val, pow) {
    if(val == 0 && pow ==0) //ноль в нулевой степени равен нулю
       return 0;
    if(pow==0) //любое число кроме нуля в нулевой степени равно единице
        return 1;    
    if(pow==1)
        return val;
    if(pow<0)
        return 1/(val * power(val, Math.abs(pow)-1)); // (a в степени -b) = (1 / a в степени b). Math.abs возвращает модуль числа.

    return val * power(val, pow-1);
}

console.log(power(2,4));
console.log(power(2,-4));
console.log(power(2,0));
console.log(power(0,0));