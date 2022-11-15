import { noteData } from "./localStore.js";
import { taskList } from "./index.js";

function taskEvent(element) {
    if (element.attrname1.indexOf("elem7") > 0) {
        document
            .getElementById(element.attrname1)
            .addEventListener("click", deleteOneTask, { once: true });
    }
    if (element?.attrname2) {
        if (element.attrname2.indexOf("elem3") > 0) {
            document
                .getElementById(element.attrname2)
                .addEventListener("click", checkTick);
        }
    }
}

function buttonAnswer(button_name, reaction) {
    if (document.querySelector("." + button_name) !== null) {
        document.querySelector("." + button_name).onclick = reaction;
    }
}

function deleteAllTask() {
    taskList.forEach((element) => {
        if (element === undefined) {
            taskList.splice(element, 1);
        }
    });
    taskList.forEach((element) => {
        document.getElementById(element).remove();
    });
    taskIdName = 0;
    localStorage.clear();
}

function getNoteDataIndex(id) {
    for (let i = 0; i < noteData.length; i++) {
        if (noteData[i]?.title) {
            let num = noteData[i].title.indexOf(id);
            if (num !== -1) return i;
        } else console.log("error 1");
    }
}

function deleteOneTask(event) {
    let pos = event.target.id.indexOf("_");
    let idElem = event.target.id.slice(0, pos);
    let myIndex = taskList.indexOf(idElem);
    let locStore = getNoteDataIndex(idElem);
    document.getElementById(idElem).remove();

    if (myIndex !== -1) {
        taskList.splice(myIndex, 1);
    }
    if (locStore !== -1) {
        noteData.splice(locStore, 1);
        localStorage.setItem("notes", JSON.stringify(noteData));
        console.log(noteData);
    }
}
function checkTick(event) {
    let pos = event.target.id.indexOf("_");
    let idElem = event.target.id.slice(0, pos);
    let color = document.getElementById(idElem + "_elem5").style.background;
    let task = getNoteDataIndex(idElem);

    if (color === "white") {
        document.getElementById(idElem + "_elem5").style.background =
            "rgb(96, 214, 126)";
        noteData[task].checkboxState = "true";
    } else {
        document.getElementById(idElem + "_elem5").style.background = "white";
        noteData[task].checkboxState = "false";
    }
    localStorage.setItem("notes", JSON.stringify(noteData));
}

export {
    taskEvent,
    checkTick,
    deleteOneTask,
    getNoteDataIndex,
    deleteAllTask,
    buttonAnswer,
};
