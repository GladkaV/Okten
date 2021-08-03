'use strict';

const JSONUser = new URL(location).searchParams.get('user');
const user = JSON.parse(JSONUser);

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(posts => {
        let listPosts = document.querySelector('.user-posts');
        let btnPosts = document.querySelector('.user-btn');

        btnPosts.onclick = () => {
            listPosts.innerHTML = '';

            posts.forEach(post => {
                let li = document.createElement('li');
                li.innerHTML = `${post.title}`;
                listPosts.append(li);

                let btnLink = document.createElement('a');
                btnLink.target = '_blank';
                btnLink.href = `post-details.html?post=${JSON.stringify(post)}`;
                btnLink.innerText = `details`;
                li.append(btnLink);
            });
        }
        
    })

    
document.querySelector('.user').innerHTML = `
                <div class="user__1">
                    id:
                </div>
                <div>
                    ${user.id}
                </div>
                <div class="user__1">
                    name:
                </div>
                <div>
                    ${user.name}
                </div>
                <div class="user__1">
                    username:
                </div>
                <div>
                    ${user.username}
                </div>
                <div class="user__1">
                    phone:
                </div>
                <div>
                    ${user.phone}
                </div>
                <div class="user__1">
                    website:
                </div>
                <div>
                    ${user.website}
                </div>
                <div class="user__1">
                    email:
                </div>
                <div>
                    ${user.email}
                </div>
                <div class="user__1 main">
                    company
                </div>
                <div class="user__2">
                    bs:
                </div>
                <div>
                    ${user.company.bs}
                </div>
                <div class="user__2">
                    catchPhrase:
                </div>
                <div>
                    ${user.company.catchPhrase}
                </div>
                <div class="user__2">
                    name:
                </div>
                <div>
                    ${user.company.name}
                </div>
                <div class="user__1 main">
                    address
                </div>
                <div class="user__2">
                    city:
                </div>
                <div>
                    ${user.address.city}
                </div>
                <div class="user__2 main">
                    geo
                </div>
                <div class="user__3">
                    lat:
                </div>
                <div>
                    ${user.address.geo.lat}
                </div>
                <div class="user__3">
                    lng:
                </div>
                <div>
                    ${user.address.geo.lng}
                </div>
                <div class="user__2">
                    street:
                </div>
                <div>
                    ${user.address.street}
                </div>
                <div class="user__2">
                    suite:
                </div>
                <div>
                    ${user.address.suite}
                </div>
                <div class="user__2">
                    zipcode:
                </div>
                <div>
                    ${user.address.zipcode}
                </div>`;