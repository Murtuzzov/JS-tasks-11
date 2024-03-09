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

//В Т О Р А Я   Ч А С Т Ь

//ЗАДАЧА No1 |  подсчет количества свойств в объекте:
//напишите функцию, которая принимает объект и возвращает количество его свойств.

// const userObject = {
//   name: "Damien",
//   age: 26,
//   height: 1.85,
//   weight: 70,
// };

// function propertyCounting(obj) {
//   let count = 0;
//   count += Object.entries(obj).length;
//   return `Количество свойств объекта равен ${count}`;
// }

// const result = propertyCounting(userObject);
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No2 | проверка наличия ключа:
//напишите функцию, которая принимает объект и ключ,
//и возвращает true, если этот ключ существует в объекте, и false в противном случае.

// const userObject = {
//   name: "Damien",
//   age: 26,
//   height: 1.85,
//   weight: 70,
// };

// function presenceOfKey(obj, objKey) {
//   if (Object.keys(obj).includes(objKey)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const result = presenceOfKey(userObject, "name");
// console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No3 | получение значений объекта:
//напишите функцию, которая принимает объект
// и возвращает массив значений его свойств.

// const userObject = {
//   name: "Damien",
//   age: 26,
//   height: 1.85,
//   weight: 70,
// };

// function propertyValue(obj) {
//   const values = Object.values(obj);
//   return values;
// }

// const result = propertyValue(userObject);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No4 | объединение объектов:
//напишите функцию, которая принимает два объекта
// и возвращает новый объект, содержащий свойства обоих объектов.
// const userObject = {
//   name: "Damien",
//   age: 26,
//   height: 1.85,
//   weight: 70,
// };

// const userMarks = {
//   mathematics: 5,
//   physics: 5,
//   chemistry: 4,
//   computerScience: 5,
// };

// function mergingObj(obj1, obj2) {
//   const newObj = {
//     ...obj1,
//     ...obj2,
//   };
//   return newObj;
// }

// const result = mergingObj(userObject, userMarks);
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No5 | фильтрация объекта:
//напишите функцию, которая принимает объект
// и возвращает новый объект, содержащий только те свойства,
// у которых значения являются числами.
// const userObject = {
//   name: "Damien",
//   country: "Canada",
//   age: 26,
//   height: 1.85,
//   weight: 70,
//   mathematics: 5,
//   physics: 5,
//   chemistry: 4,
//   computerScience: 5,
// };

// function filterFunction(obj) {
//   let newObj = {};
//   for (value in obj) {
//     if (typeof obj[value] === "number") {
//       newObj[value] = obj[value];
//     }
//   }
//   return newObj;
// }

// const result = filterFunction(userObject);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////

// Задача No6 | сортировка объекта:
//напишите функцию, которая принимает объект и возвращает новый объект
// с отсортированными свойствами по алфавиту.

//Z-Z-Z-Z-Z-Z-Z-Z-Z

//ЗАДАЧА No7 | суммирование числовых свойств:
//напишите функцию, которая принимает объект
//и возвращает сумму всех его числовых свойств.
// const userObj = {
//   name: "Damien",
//   country: "Canada",
//   age: 26,
//   height: 1.85,
//   weight: 70,
//   mathematics: 5,
//   physics: 5,
//   chemistry: 4,
//   computerScience: 5,
// };

// function sumFunction(obj) {
//   let sum = 0;

//   for (let values in obj) {
//     if (typeof obj[values] === "number") {
//       sum += obj[values];
//     }
//   }
//   return sum;
// }

// const result = sumFunction(userObj);
// console.log(result);

//////////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No8 | проверка наличия числовых свойств:
//напишите функцию, которая принимает объект и возвращает true,
//если в объекте есть хотя бы одно числовое свойство,
// и false в противном случае.
// const userObject = {
//   name: "Damien",
//   age: 26,
//   height: 1.85,
//   weight: 70,
// };

// function presenceOfNumber(obj) {
//   for (let property in obj) {
//     if (typeof obj[property] === "number") {
//       return true;
//     }
//   }
//   return false;
// }

// const result = presenceOfNumber(userObject);
// console.log(result);

///////////////////////////////////////////////////////////////////////////

//ЗАДАЧА No9 | удаление свойств объекта:
//напишите функцию, которая принимает объект и массив ключей
// и удаляет соответствующие свойства из объекта.

// const userObject = {
//   name: "Damien",
//   age: 26,
//   height: 1.85,
//   weight: 70,
// };

// const arr = ["height", "weight"];

// function deleteFn(obj, arr) {
//   for (let key in obj) {
//     for (let element of arr) {
//       if (key === element) {
//         delete obj[key];
//       }
//     }
//   }
//   return obj;
// }

// const result = deleteFn(userObject, arr);
// console.log(result);

///////////////////////////////////////////////////////////////////////

//ЗАДАЧА No10 | преобразование объекта в массив:
//напишите функцию, которая принимает объект и возвращает массив массивов,
//каждый из которых содержит ключ и значение одного свойства объекта.

// const userObject = {
//   name: "Damien",
//   age: 26,
//   height: 1.85,
//   weight: 70,
// };

// function ObjInArr(obj) {
//   return Object.entries(obj);
// }

// const result = ObjInArr(userObject);
// console.log(result);

