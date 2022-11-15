let start_stop = 0;
let counter = 0;
let timerID;

function enterElement(element, place, firstOrLastInElement) {
    const elem = document.querySelector(place);
    firstOrLastInElement === "prepend"
        ? elem.prepend(element)
        : elem.append(element);
}

//---------------------Reaction--------------------------------------//
function buttonAnswer(button_name, reaction) {
    if (document.querySelector("." + button_name) !== null) {
        document.querySelector("." + button_name).onclick = reaction;
    }
}

function createButton(className, id, butText) {
    const button = document.createElement("button");
    button.setAttribute("class", className);
    if (id !== 0) button.setAttribute("id", id);

    if (butText !== undefined) {
        const text = document.createTextNode(butText);
        button.append(text);
    }

    return button;
}

function createPtext(
    className,
    id_name,
    text_name,
    enterPlace,
    firstOrLastInElement
) {
    const tag = document.createElement("p");

    if (className !== undefined) tag.setAttribute("class", className);
    if (id_name !== undefined) tag.setAttribute("id", id_name);

    if (text_name !== undefined) {
        const text = document.createTextNode(text_name);
        tag.append(text);
    }
    const element = document.querySelector(enterPlace);

    firstOrLastInElement === "prepend"
        ? element.prepend(tag)
        : element.append(tag);
}

function counStartStop() {
    document.getElementById("st_but").addEventListener("click", but_event());
}

function but_event() {
    let butText = document.getElementById("st_but");
    let ptext = document.createTextNode("");
    document.getElementById("st_but").innerText = null;

    if (start_stop === 0) {
        start_stop = 1;
        ptext = document.createTextNode("Stop");
        timerID = setInterval(time_count, 1000);
    } else {
        start_stop = 0;
        ptext = document.createTextNode("Start");
        clearInterval(timerID);
        console.log("stop");
    }
    butText.append(ptext);
}

function time_count() {
    let elem = document.getElementById("time_count");
    elem.innerText = null;
    elem.innerText = ++counter + "s";
}
//-------------------------------------------------------------------------------//

enterElement(
    createButton("start", "st_but", "Start"),
    ".block_content",
    "prepend"
);
createPtext("count", "time_count", "Run me", ".block_content", "append");

buttonAnswer("start", counStartStop);
