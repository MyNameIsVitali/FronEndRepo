function createTopic(type, className, titleName, place, firstOrLastInElement) {
    const head = document.createElement(type);
    head.setAttribute("class", className);
    const text = document.createTextNode(titleName);
    head.append(text);
    const rootElement = document.querySelector(place);
    rootElement.prepend(head);
}

function createDiv(type, className, enterPlace, firstOrLastInElement) {
    const div = document.createElement(type);
    div.setAttribute("class", className);
    const element = document.querySelector(enterPlace);

    firstOrLastInElement === "prepend"
        ? element.prepend(div)
        : element.append(div);
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
function createTextarea(className, id, textar) {
    const createArea = document.createElement("textarea");
    createArea.setAttribute("class", className);
    if (id !== 0) createArea.setAttribute("id", id);

    if (textar !== undefined) {
        const text = document.createTextNode(textar);
        createArea.append(text);
    }

    return createArea;
}

function enterElement(element, place, firstOrLastInElement) {
    const elem = document.querySelector(place);
    firstOrLastInElement === "prepend"
        ? elem.prepend(element)
        : elem.append(element);
}

export { createButton, createTextarea, enterElement };
