'use strict';

// ADDITIONAL

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти
//  наступного вигляду. Конструктор повинен приймати значення для кожної властивості,
//  в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//          street: 'Kulas Light',
//          suite: 'Apt. 556',
//          city: 'Gwenborough',
//          zipcode: '92998-3874',
//          geo: {
//              lat: '-37.3159',
//              lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//          name: 'Romaguera-Crona',
//          catchPhrase: 'Multi-layered client-server neural-net',
//          bs: 'harness real-time e-markets'
//     }
// }
class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id,
        this.name = name,
        this.username = username,
        this.email = email,
        this.address = {
            street,
            suite,
            city,
            zipcode,
            geo: {
                lat,
                lng
            }
        }
        this.phone = phone, 
        this.website = website
        this.company = {
            name: companyName,
            catchPhrase,
            bs
        }
    }
}

let user = new User(
    1, 
    'Leanne Graham', 
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets'
)
console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -span
//  -div

//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
class DescriptionTags {
    constructor(titleOfTag, action, ...arr) {
        this.titleOfTag = titleOfTag,
        this.action = action,
        this.attrs = [],

        this.sortAttrs(arr);
    }
    sortAttrs(arr) {
        arr.forEach(item => {
            this.attrs.push({ titleOfAttr: item[0], actionOfAttr: item[1]})
        })
    }
}

let tagDiv = new DescriptionTags(
    'div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    ['align', 'Задает выравнивание содержимого тега <div>.'],
    ['title', 'Добавляет всплывающую подсказку к содержимому.'],
    );
console.log(tagDiv);


// HOMEWORK

// Створити функцію, яка генерує масив рандомних числових цілих значень.
// Діапазон можна було визначити через аргументи.
function randomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumbers(5, 9));

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
function sortRandomNumbers(num) {
    let result = [];

    for (let i = 0; i < num; i++) {
        let item = randomNumbers(1, 20);
        result.push(item);
    }

    return result.sort((a, b) => {
        return a - b;
    })
}
console.log(sortRandomNumbers(8));

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. 
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
function filterRandomNumbers(num) {
    let result = [];

    for (let i = 0; i < num; i++) {
        let item = randomNumbers(1, 20);
        result.push(item);
    }

    return result.filter((item) => {
        return item % 2 === 0;
    });
}
console.log(filterRandomNumbers(8));

// створити масив рандомних цілих числових значень(або згенерувати, за допомоги попередньої функції).
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
function stringRandomNumber(num) {
    let result = [];

    for (let i = 0; i < num; i++) {
        let item = randomNumbers(1, 20);
        result.push(item);
    }

    return result.map(item => {
        return String(item);
    });
}
console.log(stringRandomNumber(8));

// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати, залишивши тільки об'єкти з парними id (filter) 
// та Відсортувати його по id. по зростанню (sort)
class People {
    constructor (id, name, surname, email, phone) {
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
    }
}

let users = [];
for (let i = 10; i > 0; i--) {
    let user = new People(i, `name ${i}`, `surname ${i}`, `email ${i}`, `phone ${i}`)
    users.push(user);
}

 let filterUsers = users
 .filter(item => {
    return item.id % 2 === 0;
 })
 .sort((item1, item2) => {
     return item1.id - item2.id;
 })

console.log(filterUsers);


// CLASSWORK

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив(Client[]).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    constructor (id, name, surname, email, phone, order) {
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone,
        this.order = order
    }
}

let clients = [
    new Client(1, 'Virtor', 'surname1', 'email1', '222', ['lime', 'banana']),
    new Client(2, 'Vika', 'surname2', 'email2', '444', ['pear', 'plum', 'apple', 'avocado']),
    new Client(3, 'Dima', 'surname3', 'email3', '333', ['melon', 'peach', 'orange']),
    new Client(4, 'Oleg', 'surname3', 'email3', '111', ['lime']),
    new Client(5, 'Anya', 'surname5', 'email5', '000', []),
    new Client(6, 'Nastya', 'surname6', 'email6', '666', ['lime', 'banana', 'pear', 'plum', 'apple', 'avocado']),
    new Client(7, 'Ira', 'surname7', 'email7', '999', ['melon', 'peach', 'orange', 'apricot', 'cherry', 'cucumber', 'pepper', 'onion', 'coconut']),
    new Client(8, 'Olya', 'surname8', 'email8', '777', ['melon', 'peach', 'orange', 'apricot', 'cherry', 'cucumber', 'pepper']),
    new Client(9, 'Olya', 'surname9', 'email9', '888', ['lime', 'melon', 'peach', 'orange', 'apricot', 'cherry', 'cucumber', 'pepper']),
    new Client(10, 'Dima', 'surname10', 'email10', '555', ['melon', 'peach', 'orange', 'lime', 'banana',]),
]

let filterClients = clients.sort((item1, item2) => {
    return item1.order.length - item2.order.length;
})
console.log(filterClients);

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
// максимальна швидкість, об'єм двигуна.додати в об'єкт функції:
// --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// --info() - яка виводить всю інформацію про автомобіль
// --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// --changeYear(newValue) - змінює рік випуску на значення newValue
// --addDriver(driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model,
        this.producer = producer,
        this.year = year,
        this.maxSpeed = maxSpeed,
        this.engineCapacity = engineCapacity
    }
    drive () {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }
    info () {
        return `модель - ${this.model}, виробник - ${this.producer}, рік випуску -  ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed;
        return `максимальна швидкість - ${this.maxSpeed}`;
    }
    changeYear (newValue) {
        return this.year = newValue;
    }
    addDriver (name, year, status) {
        return this.driver = {
            name: name,
            year: year,
            status: status,
        }
    }
}

let ford = new Car('ford', 'Ford Motor Company', 2010, 180, 2990);
console.log(ford);

// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor (name, year, size) {
        this.name = name,
        this.year = year,
        this.size = size
    }
}

let ladies = [
    new Cinderella('Virtoriia', 22, 39),
    new Cinderella('Maria', 18, 37),
    new Cinderella('Valya', 35, 40),
    new Cinderella('Anya', 16, 36),
    new Cinderella('Diana', 27, 38),
    new Cinderella('Ira', 49, 41),
    new Cinderella('Inna', 5, 32),
    new Cinderella('Nastya', 23, 43),
    new Cinderella('Larisa', 53, 35),
    new Cinderella('Dasha', 17, 37.5),
]

class Prince {
    constructor (name, year, findSize) {
        this.name = name,
        this.year = year,
        this.findSize = findSize
    }
}

let boy = new Prince('Alex', 25, 38);

for (let i = 0; i < ladies.length; i++) {
    if (ladies[i].size === boy.findSize) console.log(ladies[i])
}

ladies.find(item => {
    if (item.size === boy.findSize) return console.log(item);
})