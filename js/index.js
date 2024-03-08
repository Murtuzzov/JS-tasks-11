//П Е Р В А Я   Ч А С Т Ь

//ЗАДАЧА No1 | написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое
//больше, чем второе; и 0 – если числа равны.
//let number1 = 1
//let number2 = 3

//function comparisonFunction(num1, num2){
//  if(num1<num2){
//    return -1;
//  }if(num1>num2){
//    return 1;
//  }if(num1===num2){
//    return 0;
//  }

//}
//const result = comparisonFunction(number1, number2)
//console.log(result)

/////////////
//ЗАДАЧА No3 | написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.

//function concatFunction(num1, num2, num3){
//  let newStr = ${num1}${num2}${num3}
//  return newStr;
//}
//let result = concatFunction(7,6,5)
//console.log(parseInt(result))

/////////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No4 | написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата

//function squareFn(num1, num2){
//  if(num1, num2){
//    let sum = num1*num2;
//    return Площадь прямоугольника равна ${sum};
//  }
// if(num1){
//   let sum = num1*num1
//   return Площадь квадрата равна ${sum};
//  }
//}
//const result = squareFn(45);
//console.log(result)

//////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No5 | написать функцию, которая проверяет, является ли переданное ей число совершенным.
//Совершенное число – это число,
//равное сумме всех своих собственных делителей.
// function perfectNumFn(num) {
//   let sum = 0;
//   for (let i = 1; i < num; i += 1) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   if (sum === num) {
//     return `${num} является совершенным числом.`;
//   } else {
//     return `${num} не является совершенным числом.`;
//   }
// }
// const result = perfectNumFn(6);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////

// ЗАДАЧА No7 | написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс».

// function dateFn(hour, minutes, seconds) {
//   hour = hour < 10 ? "0" + hour : hour.toString();
//   minutes = minutes < 10 ? "0" + minutes : minutes.toString();
//   seconds = seconds < 10 ? "0" + seconds : seconds.toString();
//   return `${hour}:${minutes}:${seconds}`;
// }

// const result = dateFn(5, 2, 4);
// console.log(result);
