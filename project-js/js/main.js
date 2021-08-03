'use strict';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let list = document.querySelector('.users');
        
        users.forEach(user => {
            let li = document.createElement('li');
            li.innerText = `${user.id} - ${user.name}`;

            let red = Math.floor(Math.random() * 255) + 170;
            let green = Math.floor(Math.random() * 255) + 50;
            let blue = Math.floor(Math.random() * 255) + 50;
            li.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

            list.append(li);

            let btnLink = document.createElement('a');
            btnLink.target = '_blank';
            btnLink.href = `user-details.html?user=${JSON.stringify(user)}`;
            btnLink.innerText = `details`;
            li.append(btnLink);
        })
    })