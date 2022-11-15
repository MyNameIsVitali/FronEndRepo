import { taskList } from "./index.js";
import { taskEvent } from "./action.js";
import { tasknameGenerate } from "./todo_main_func.js";

const noteDataJson = localStorage.getItem("notes") || "[]";
export const noteData = JSON.parse(noteDataJson);

function restoreLocalStorage(saveData, List, task_number) {
    let id;
    let name;
    for (let i = 0; i < saveData.length; i++) {
        tasknameGenerate(saveData[i], i);
    }

    for (let i = 0; i < saveData.length; i++) {
        document.getElementById("just_write").value = null;
        const note = {};
        List.forEach((element) => {
            tasknameGenerate(element, i);

            if (element?.taskNumber) {
                note.title = element.attrname1;
                name = element.attrname1;
                element.taskNumber = String(i);
            }
            taskList[i] = "task" + i;

            const oneTask = document.createElement(element.type);

            if (element?.attr)
                oneTask.setAttribute(element.attr, element.attrname);

            if (element?.attr1)
                oneTask.setAttribute(element.attr1, element.attrname1);

            if (element?.attr2) {
                oneTask.setAttribute(element.attr2, element.attrname2);
                if (element.attrname2.indexOf("elem3") > 0) {
                    id = element.attrname2;
                }
            }

            if (element?.text) {
                if (element.attrname1.indexOf("elem8") > 0) {
                    const text = document.createTextNode(saveData[i].time);
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

            if (element.attrname1.indexOf("elem5") > 0) {
                let actualText = saveData[i].text;
                note.text = saveData[i].text;
                const ptext = document.createTextNode(actualText);
                oneTask.append(ptext);

                if (saveData[i].checkboxState === "true") {
                    document.getElementById(
                        element.attrname1
                    ).style.background = "rgb(96, 214, 126)";
                    document.getElementById(id).checked = true;
                } else {
                    document.getElementById(
                        element.attrname1
                    ).style.background = "white";
                }
            }

            taskEvent(element);
        });
    }
    if (saveData.length > 0) taskIdName += saveData.length;
}

export { restoreLocalStorage };
