import { tree_topic_elements, task } from "./taskList.js";
import { createButton, createTextarea, enterElement } from "./func_elements.js";
import { restoreLocalStorage, noteData } from "./localStore.js";
import { createTree, createTask } from "./todo_main_func.js";
import { deleteAllTask, buttonAnswer } from "./action.js";

window.taskIdName = 0;
export const taskList = [];

//--------------------------------------------------------------------//
createTree(tree_topic_elements);
enterElement(
    createButton("deleteAll", 0, "Delete"),
    ".block_content",
    "prepend"
);
enterElement(
    createTextarea("write_text", "just_write", "Enter text"),
    ".block_content",
    "append"
);
enterElement(createButton("add", 0, "Add"), ".block_content", "append");
buttonAnswer("add", createTask);
buttonAnswer("deleteAll", deleteAllTask);
restoreLocalStorage(noteData, task, taskIdName);
