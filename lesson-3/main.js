'use strict';

// HOMEWORK

// створити функцію яка обчислює та повертає площу кола
function getCircleArea(radius) {
    const result = Math.PI * (radius ** 2);
    return `Площа круга с радиусом ${radius} равно - ${result}`;
}
console.log(getCircleArea(9));

// створити функцію яка обчислює та повертає площу циліндру
function getCylinderArea(radius, height) {
    const result = 2 * Math.PI * radius * (radius + height);
    return `Площа цилиндра с радиусом ${radius} и высотой ${height} равно - ${result}`;
}
console.log(getCylinderArea(7, 5));

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function returnMinNumber(arr = [0]) {
    let resultMin = arr[0];
    let resultMax = arr[0];

    arr.forEach(item => {
        if (item > resultMax) {
            resultMax = item;
        } else if (item < resultMin) {
            resultMin = item;
        }
    });

    console.log(`Наибольшее число - ${resultMax}`);
    return `Наименьшее число - ${resultMin}`;
}
console.log(returnMinNumber([-9, -3, -10, 2, 480, 27]));

// створити функцію яка  створює блок з текстом. Текст задати через аргумент
function creativeBlock(text) {
    const block = document.createElement('div');
    block.innerText = text;

    return block;
}
console.log(creativeBlock('text'));

// створити функцію яка  створює ul з трьома елементами li. 
// Текст li задати через аргумент всім однаковий
function createList(text) {
    const list = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.innerText = text;
        list.append(li);
    }
    return list;
}
console.log(createList('pa-ra-pam-pam'));

// створити функцію яка  створює ul з елементами li. 
// Текст li задати через аргумент всім однаковий. 
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList_2(text, number) {
    const list = document.createElement('ul');

    for (let i = 0; i < number; i++) {
        const li = document.createElement('li');
        li.innerText = `${text} - ${i + 1}`;
        list.append(li);
    }
    return list;
}
console.log(createList_2('hello', 5));

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), 
// та будує для них список
function createList_3(arr = []) {
    const list = document.createElement('ul');
    arr.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        list.append(li);
    })
    return list;
}
console.log(createList_3( [1, 'hi', false, 27, '40 years', true] ));



// CLASSWORK

// створити функцію яка приймає масив чисел, 
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sum(arr = []) {
    let result = 0;

    arr.forEach(item => {
        result += item;
    })

    return result;
}
console.log(sum( [1, 2, 10] ));

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function getArithmeticMean(arr = []) {
    let sum = 0

    arr.forEach(item => {
        sum += item;
    })

    return sum / arr.length;
}
console.log(getArithmeticMean( [3, 5, 1, 7] ));

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE: [{ name: 'Dima', age: 13 }, { model: 'Camry' }] ===> [name, age, model]
function getKeys(arr = []) {
    let result = [];

    arr.forEach(item => {
        for (const key in item) {
            result.push(key);
        }
    })
    
    return result;
}
console.log(getKeys( [{ name: 'Dima', age: 13 }, { model: 'Camry' }] ));



// ADDITIONAL

// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// EXAMPLE:
// [1, 2, 3, 4]
// [2, 3, 4, 5]
// результат
// [3, 5, 7, 9]

function sumElementsByIndex(arr1 = [], arr2 = []) {
    let result = [];

    arr1.forEach((item, index) => {
        result.push(item + arr2[index]);
    })
    
    return result;
}
console.log(sumElementsByIndex( [1, 2, 3, 4], [2, 3, 4, 5] ));

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr_1 = ['a', 'b', 'c'];
let subArr_1 = [1, 2, 3];

for (let i = 0; i < subArr_1.length; i++) {
    arr_1.push(subArr_1[i]);
}

// - Дан масив[1, 2, 3].Зробіть з нього новий масив[3, 2, 1].
let arr_2 = [1, 2, 3];
arr_2.reverse();

// - Дан масив[1, 2, 3].Додайте йому в кінець елементи 4, 5, 6.
let arr_3 = [1, 2, 3];
arr_3.push(4, 5, 6);

// - Дан масив[1, 2, 3].Додайте йому в початок елементи 4, 5, 6.
let arr_4 = [1, 2, 3];
arr_4.unshift(4, 5, 6)

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let arr_5 = [1, 2, 3, 4, 5];
let arr_5Result = arr_5.splice(3, 2);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
let arr_6 = [1, 2, 3, 4, 5];
arr_6.splice(3, 2, 'a', 'b', 'c');

// Взяти масив з 10 чисел або створити його. 
// Вивести в консоль тільки ті елементи, значення яких є парними.
let arr_7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr_7.length; i++) {
    if (arr_7[i] % 2 === 0) console.log(arr_7[i]);
}

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr_8 = ['a', 'b', 'c'];
let arr_8Result = '';
for (let i = 0; i < arr_8.length; i++) {
    arr_8Result += arr_8[i];
}

// функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// EXAMPLE:
// foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
function changeIndex(arr = [], num) {
    arr.splice((num + 1), 0, arr.splice(num, 1)[0]);
    return arr;
}
console.log(changeIndex( [9, 8, 0, 4], 0 ));

// Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
function nameСorrection(string) {
    return string.replace(/ +/g, ' ');
}
console.log(nameСorrection('    Harry       Potter      '));

// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1, 0, 6, 0, 3] => [1, 6, 3, 0, 0]
// [0, 1, 2, 3, 4] => [1, 2, 3, 4, 0]
// [0, 0, 1, 0]   => [1, 0, 0, 0]
function numbersFilter(arr = []) {
    let length = arr.length;
    
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            arr.push(arr[i]);
            arr.splice(i, 1);
            length--;
            i--;
        }
    }

    return arr;
}
console.log(numbersFilter([1, 0, 6, 0, 3]));