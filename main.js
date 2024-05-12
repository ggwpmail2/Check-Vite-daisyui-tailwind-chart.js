import "./src/assets/css/style.scss";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <h1>Hello Vite!</h1>
//   </div>
// `;
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOMContentLoaded");
// });

if (localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) 
{
    document.querySelector("html").dataset.theme = "dark";
    document.querySelector(".dark-mode-switch").checked = true;
    localStorage.theme = "dark";
} else {
    document.querySelector("html").dataset.theme = "winter";
    document.querySelector(".dark-mode-switch").checked = false;
    localStorage.theme = "winter";
}
//https://jsonplaceholder.typicode.com/posts/
fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: "GET",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((response) => response.json())
.then((data) => {
    let dates=new Date();
    console.log(dates);
    showPosts(data);
    let button = `
    <div class="my-8 text-center">
        <button onclick="addPosts()" class="btn btn-primary text-3xl">Подгрузить ещё посты</button>
    </div>
    `;
    document.querySelector("#app").innerHTML+=button;
})

function showPosts(data) {
    let img_url = 'https://placehold.co/600x400';
    const take_f10 = data.slice(0,8);
    const posts = take_f10.map((single_post) => { 
        //console.log(single_post);
        return `
        <div class="card bg-base-100 shadow-lg">
            <figure><img src="${img_url}" alt="${single_post.title}" /></figure>
            <div class="card-body">
                <h2 class="card-title">${single_post.title}</h2>
                <p>${single_post.body}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">CLICK</button>
                </div>
            </div>
        </div>
    `; });
    const html = `${posts.join("")}`;
    let card_flex = document.createElement('section');
    card_flex.classList.add('card_flex');
    card_flex.innerHTML = html;
    document.querySelector("#app").appendChild(card_flex);
    let dates=new Date();
    console.log(dates);
}

