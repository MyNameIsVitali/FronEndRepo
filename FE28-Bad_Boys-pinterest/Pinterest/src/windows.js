import { createAllLi } from "./users.js";
let pictureWrap = document.querySelector(".picture-list");
let choiceMenu = document.querySelector("#choiceMenu");
let reportWindow = document.querySelector("#reportWindow");
let addWindow = document.querySelector("#addWindow");
let bodyElem = document.querySelector("body");
let dialogElems = document.querySelectorAll("dialog");
let choiceBoard = { idbutton: "", boardName: "" };
let deskElement = document.querySelector(".drop-list");
let ulConteiner = document.querySelector(".picture-list");
function foundElement(element) {
    let str = element.idbutton;
    let str1 = str.slice(14);
    console.log(str1);
    users_base.forEach((element1) => {
        if (element1.id === str1) {
            element1.board = element.boardName;
            console.log(element1);
        }
    });
    ulConteiner.innerHTML = "";
    createAllLi(users_base, deskElement.value);
}

export default () => {
    // event на родителя ul, который вызовет окно
    pictureWrap.addEventListener("click", (event) => {
        let target1 = event.target;
        choiceBoard.idbutton = target1.id;
        choiceMenu.show();
        reportWindow.close() || addWindow.close();
    });

    //event внутри модального окна
    dialogElems.forEach((value) => {
        value.addEventListener("click", (event) => {
            let target = event.target;
            if (target.classList.value === "choice_menu_btn_add") {
                choiceMenu.close();
                addWindow.show();
            }
            if (target.classList.value === "choice_menu_btn_report") {
                reportWindow.show();
                choiceMenu.close();
            }
            if (target.classList.value === "report_btn_cancel") {
                reportWindow.close();
            }

            if (target.classList.value === "report_btn_send") {
                choiceBoard.boardName = "Delete";
                foundElement(choiceBoard);

                reportWindow.close();
            }
            if (target.classList.value === "add_item_text") {
                choiceBoard.boardName = target.id;
                foundElement(choiceBoard);
                addWindow.close();
            }
        });
    });

    // event на кпоку ESC, чтобы окна по нажатию закрывались
    bodyElem.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            choiceMenu.close() || addWindow.close() || reportWindow.close();
        }
    });
};
