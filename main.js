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