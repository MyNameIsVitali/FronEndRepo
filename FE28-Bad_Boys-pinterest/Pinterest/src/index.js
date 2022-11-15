import { createAllLi } from "./users.js";
import { reset_board } from "./func.js";
import dialogWindow from "./windows.js";

window.users_base = [];
async function getUser() {
    if (localStorage.getItem("user") === null) {
        let resp = await fetch("./usersdata.json");
        users_base = await resp.json();
        reset_board(users_base);
    } else {
        const usersDataJson = localStorage.getItem("user") || "[]";
        users_base = await JSON.parse(usersDataJson);
    }
    createAllLi(users_base, "Выбрать доску");
    dialogWindow();
    window.addEventListener("unload", () => {
        const usersDataJson = JSON.stringify(users_base);
        localStorage.setItem("user", usersDataJson);
    });
}
getUser();

let ulConteiner = document.querySelector(".picture-list");
let deskElement = document.querySelector(".drop-list");
let searchElement = document.querySelector(".search-header");

deskElement.addEventListener("input", () => {
    ulConteiner.innerHTML = "";
    searchElement.value = "";
    createAllLi(users_base, deskElement.value);
});

searchElement.addEventListener("input", () => {
    ulConteiner.innerHTML = "";

    if (searchElement.value) {
        createAllLi(users_base, searchElement.value);
    } else {
        createAllLi(users_base, deskElement.value);
    }
});
