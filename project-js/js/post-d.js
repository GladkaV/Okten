'use strict';

const JSONPost = new URL(location).searchParams.get('post');
const post = JSON.parse(JSONPost);

document.querySelector('.post').innerHTML = `<div class="post-l">userId</div>
                                            <div>${post.userId}</div>
                                            <div class="post-l">id</div>
                                            <div>${post.id}</div>
                                            <div class="post-l">title</div>
                                            <div>${post.title}</div>
                                            <div class="post-l">body</div>
                                            <div>${post.body}</div>`;

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        let listComments = document.querySelector('.post-comments');

        comments.forEach(comment => {
            let li = document.createElement('li');
            li.innerHTML = `<div class="comment-fw">postId</div>
                            <div>${comment.postId}</div>
                            <div class="comment-fw">id</div>
                            <div>${comment.id}</div>
                            <div class="comment-fw">name</div>
                            <div>${comment.name}</div>
                            <div class="comment-fw">email</div>
                            <div>${comment.email}</div>
                            <div class="comment-fw">body</div>
                            <div>${comment.body}</div>`;
            listComments.append(li);
        });
    })