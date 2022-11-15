import { task } from "./taskList.js";
import { taskList } from "./index.js";
import { taskEvent } from "./action.js";
import { noteData } from "./localStore.js";

const actualDate = new Date();

function createTree(yourarrayElements) {
    yourarrayElements.forEach((element) => {
        for (const key in element) {
            if (Object.hasOwnProperty.call(element, key)) {
            }
        }
        {
            const oneElem = document.createElement(element.type);
            oneElem.setAttribute(element.attr, element.attrname);
            if (element?.text) {
                const text = document.createTextNode(element.text);
                oneElem.append(text);
            }
            const rootElement = document.querySelector(
                "." + element.parentsName
            );
            rootElement.append(oneElem);
        }
    });
}

function createTaskArea(tree_topic_elements, task_number) {
    const note = {
        title: "task",
        text: "text",
        checkboxState: "false",
        time: "12.12.2022",
    };
    tree_topic_elements.forEach((element) => {
        tasknameGenerate(element, task_number);

        if (element?.taskNumber) element.taskNumber = String(task_number);
        taskList[task_number] = "task" + task_number;
        const oneTask = document.createElement(element.type);

        if (element?.attr) oneTask.setAttribute(element.attr, element.attrname);

        if (element?.attr1) {
            oneTask.setAttribute(element.attr1, element.attrname1);
        }

        if (element?.attr2) {
            oneTask.setAttribute(element.attr2, element.attrname2);
        }

        if (element?.text) {
            if (element.attrname1.indexOf("elem8") > 0) {
                note.time = timeStamp(actualDate);
                const text = document.createTextNode(timeStamp(actualDate));
                oneTask.append(text);
            } else {
                const text = document.createTextNode(element.text);
                oneTask.append(text);
            }
        }

        if (element?.parentId) {
            const number = document.querySelector("#" + element.parentId);
            number.append(oneTask);
        } else if (element?.parentsName) {
            const rootElement = document.querySelector(
                "." + element.parentsName
            );
            rootElement.append(oneTask);
        }

        saveTask(element, note);

        if (element.attrname1.indexOf("elem5") > 0) {
            let actualText = document.getElementById("just_write").value;
            const ptext = document.createTextNode(actualText);
            oneTask.append(ptext);
            document.getElementById("just_write").value = null;
            document.getElementById(element.attrname1).style.background =
                "white";
        }

        taskEvent(element);
    });
    noteData[task_number] = note;
    localStorage.setItem("notes", JSON.stringify(noteData));
}

function tasknameGenerate(element, taskNumber) {
    for (const key in element) {
        if (Object.hasOwnProperty.call(element, key)) {
            if (element[key].indexOf("task") === 0) {
                let pos = element[key].indexOf("_");
                if (pos === -1) {
                    element[key] = "task" + taskNumber;
                } else {
                    element[key] =
                        "task" + taskNumber + element[key].slice(pos);
                }
            }
        }
    }
}

function timeStamp(element) {
    let time = "time";
    element.getDate() < 10
        ? (time = "0" + element.getDate())
        : (time = element.getDate());
    element.getMonth() < 10
        ? (time += ".0" + element.getMonth())
        : (time += "." + element.getMonth());
    time += "." + element.getFullYear();
    return time;
}

function saveTask(element, writeNote) {
    if (element?.taskNumber) writeNote.title = element.attrname1;

    if (element.attrname1.indexOf("elem5") > 0)
        writeNote.text = document.getElementById("just_write").value;
}

function createTask() {
    let strLength = document.getElementById("just_write").value;
    if (strLength.length > 0) createTaskArea(task, taskIdName++);
}

function getMaxTaskNumber(data) {
    let max_number = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i]?.title) {
            let idElem = data[i].title.slice("task".length);
            if (idElem > max_number) max_number = idElem;
        }
    }
}

export {
    createTree,
    createTaskArea,
    tasknameGenerate,
    createTask,
    getMaxTaskNumber,
};
