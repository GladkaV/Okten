'use strict';

// Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
document.forms.getName.addEventListener('submit', (e) => {
    let nameInput = getName.name.value;
    localStorage.setItem('name', JSON.stringify(nameInput));
})


// Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let goods = [];
document.forms.products.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasProduct = true;

    let product = {
        name: products.name.value,
        quantity: products.quantity.value,
        price: products.price.value,
        src: products.src.value
    };

    if (goods.length === 0) goods.push(product);
    
    // проверяю на наличие товара в массиве
    if (goods.length > 0) {
        goods.find(item => {
            if (JSON.stringify(item) === JSON.stringify(product)) {
                return hasProduct = false;
            }
        })
    }

    if (hasProduct) {
        goods.push(product);
        localStorage.setItem('goods', JSON.stringify(goods));
    }

    console.log(goods);
})

// tasks with object 'users'
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// З масиву users за допомогою циклу витягнути адреси користувачів і записати(скопіювати) їх в інший порожній масив.
let usersAddress = [];
for (let i = 0; i < users.length; i++) {
    usersAddress.push(users[i].address);
}

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
// розділивши всі властивості по своїм блокам, блок з адресою зробити окремим блоком, з блоками для кожної властивості
let wrapUsersDiv = document.querySelector('.wrap-users');
for (const item of users) {
    console.log(item);
    let div = document.createElement('div');
    div.style = 'max-width: 700px; border-bottom: 1px solid #000; margin-bottom: 10px';
    div.innerHTML = `<div>
                        name - ${item.name},
                        age - ${item.age},
                        status - ${item.status}
                    </div>
                    <div>
                        city - ${item.address.city},
                        country - ${item.address.country},
                        street - ${item.address.street},
                        houseNumber - ${item.address.houseNumber}
                    </div>`;
    wrapUsersDiv.append(div);
}