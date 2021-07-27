'use strict';

// HOMEWORK

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((value) => {
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

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then((value) => {
        let listUl = document.querySelector('.list_2');

        value.forEach(item => {
            let li = document.createElement('li');

            if (item.postId < 4) {
                li.innerHTML = `name - ${item.name} <br/>
                    email - ${item.email}`;
                listUl.append(li);
            }
        });
    })


// CLASSWORK

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста.при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then((value) => {
        let listUl = document.querySelector('.list_3');

        value.forEach(item => {
            let li = document.createElement('li');

            if (item.id < 10) {
                li.innerText = `title - ${item.title}`;
                listUl.append(li);

                let button = document.createElement('button');
                button.innerText = 'show posts';
                button.onclick = function () {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments/`)
                        .then(response => response.json())
                        .then(value => {
                            let listUlComments = document.querySelector('.list_3-comments');
                            listUlComments.innerHTML = '';

                            value.forEach(item => {
                                let li = document.createElement('li');
                                li.innerText = `${item.name}`;
                                listUlComments.append(li);
                            })
                        })
                }
                li.append(button);
            }
        });
    })

// ADDITIONAL 

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let listUl = document.querySelector('.list_4');
let listUlPosts = document.querySelector('.list_4-posts');
let listUlComments = document.querySelector('.list_4-comments');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        value.forEach(item => {
            let li = document.createElement('li');
            li.innerText = `name - ${item.name}`;
            listUl.append(li);

            let button = document.createElement('button');
            button.innerText = `show posts`;
            button.onclick = () => {
                getPosts(item.id)
            };
            li.append(button);
        })
    })

function getPosts(id) {
    listUlPosts.innerHTML = '';
    listUlComments.innerHTML = '';

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(value => {
            value.forEach(item => {
                let li = document.createElement('li');
                li.innerHTML = `userId - ${item.userId} <br/>
                                title - ${item.title}`;
                listUlPosts.append(li);

                let button = document.createElement('button');
                button.innerText = `show coments`;
                button.onclick = () => {
                    getComments(item.id)
                };
                li.append(button);
            })
        })
}

function getComments(id) {
    listUlComments.innerHTML = '';
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(value => {
            value.forEach(item => {
                let li = document.createElement('li');
                li.innerHTML = `postId - ${item.postId} <br/>
                                name - ${item.name}`;
                listUlComments.append(li);
            })
        })
}