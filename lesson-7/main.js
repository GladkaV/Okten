'use strict';

// Зробити свій розпорядок дня.
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
// І так далі

// 1 - Promise

// function wakeUp(oclock) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oclock <= 7) {
//                 console.log('Доброе утро!');
//                 resolve('Пора браться за дела.');
//             } else {
//                 console.log('Проспала!');
//                 reject('Во всем виноват ретроградный меркурий!');
//             }
//         }, 300);
//     })
// }

// function haveBreakfast() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('"Поесть" - как смысл жизни!');
//             resolve('Прием пищи');
//         }, 1500);
//     })
// }

// function takeShower() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Гель для душа с запахом ванили');
//             resolve('Обязательно спеть "Червону руту"');
//         }, 1000);
//     })
// }

// wakeUp(7)
//     .then((value) => {
//         console.log(value);

//         return haveBreakfast();
//     })
//     .then((value) => {
//         console.log(value);

//         return takeShower();
//     })
//     .then((value) => {
//         console.log(value);

//         // return (и т.д.)
//     })
//     .catch((error) => {
//         console.error(error);
//     })


// 2 - async await

// function wakeUp(oclock) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (oclock <= 7) {
//                 console.log('Доброе утро!');
//                 resolve('Пора браться за дела.');
//             } else {
//                 console.log('Проспала!');
//                 reject('Во всем виноват ретроградный меркурий!');
//             }
//         }, 300);
//     })
// }

// function haveBreakfast() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('"Поесть" - как смысл жизни!');
//             resolve('Прием пищи');
//         }, 1500);
//     })
// }

// function takeShower() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Гель для душа с запахом ванили');
//             resolve('Обязательно спеть "Червону руту"');
//         }, 1000);
//     })
// }

// async function myMorning () {
//     try {
//         const awakening = await wakeUp(7);
//         console.log(awakening);

//         const task_1 = await haveBreakfast();
//         console.log(task_1);

//         const task_2 = await takeShower();
//         console.log(task_2);
//     } catch ( error) {
//         console.error(error);
//     }
// }
// myMorning();