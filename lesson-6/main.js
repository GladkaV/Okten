'use strict';

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(function (value) {
        let listUl = document.querySelector('.list_1');

        value.forEach(item => {
            let li = document.createElement('li');

            if (item.userId === 1) {
                li.innerHTML = `id - ${item.id} <br/>
                    title - ${item.title}`;
                    listUl.append(li);
            }
        });
    })


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(function (value) {
        console.log(value);
        let listUl = document.querySelector('.list_2');

        value.forEach(item => {
            let li = document.createElement('li');

            if (item.postId < 4) {
                console.log(item);
                li.innerHTML = `name - ${item.name} <br/>
                    email - ${item.email}`;
                listUl.append(li);
            }
        });
    })