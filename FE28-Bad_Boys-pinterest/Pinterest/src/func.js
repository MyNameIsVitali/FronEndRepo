export { reset_board, createLi };

function reset_board(element) {
    element.forEach((users_source) => {
        users_source.board = "Выбрать доску";

        let wallArray = users_source.wallpaper.split("");
        let arrLength = users_source.wallpaper.length;

        let index = wallArray.lastIndexOf("/");
        let cutArray = wallArray.slice(index + 1, arrLength);
        users_source.search = "#" + cutArray.join("");
    });
}

function createLi(users_source) {
    createElem(
        "li",
        "picture-list-content",
        "picture-list-content" + users_source.id,
        "#alllist",
        "append"
    );

    createElem(
        "div",
        "picture-img",
        "picture-img" + users_source.id,
        "#" + "picture-list-content" + users_source.id,
        "append"
    );

    createImg(
        "picture-pinterest",
        "picture-pinterest" + users_source.id,
        users_source.wallpaper,
        "#" + "picture-img" + users_source.id,
        "append"
    );

    createElem(
        "div",
        "overlay",
        0,
        "#" + "picture-img" + users_source.id,
        "append"
    );

    createButton(
        "picture-button",
        "picture-button" + users_source.id,
        "...",
        "#" + "picture-img" + users_source.id,
        "append"
    );

    createElem(
        "div",
        "picture-user",
        "picture-user" + users_source.id,
        "#" + "picture-list-content" + users_source.id,
        "append"
    );

    createElem(
        "div",
        "user-img",
        "user-img" + users_source.id,
        "#" + "picture-user" + users_source.id,
        "append"
    );

    createImg(
        "user-avatar",
        "user-avatar" + users_source.id,
        users_source.avatar,
        "#" + "user-img" + users_source.id,
        "append"
    );

    createPtext(
        "user-text",
        "user-text" + users_source.id,
        users_source.search,
        "#" + "picture-user" + users_source.id,
        "append"
    );
}

function createElem(
    type,
    className,
    id_name,
    enterPlace,
    firstOrLastInElement
) {
    const tag = document.createElement(type);

    if (className !== undefined) tag.setAttribute("class", className);
    if (id_name !== 0) tag.setAttribute("id", id_name);
    const element = document.querySelector(enterPlace);

    firstOrLastInElement === "prepend"
        ? element.prepend(tag)
        : element.append(tag);
}

function createImg(className, id_name, link, enterPlace, firstOrLastInElement) {
    const tag = document.createElement("img");

    if (className !== undefined) tag.setAttribute("class", className);
    if (id_name !== undefined) tag.setAttribute("id", id_name);
    tag.setAttribute("src", link);
    const element = document.querySelector(enterPlace);

    firstOrLastInElement === "prepend"
        ? element.prepend(tag)
        : element.append(tag);
}

function createButton(
    className,
    id_name,
    text_but,
    enterPlace,
    firstOrLastInElement
) {
    const tag = document.createElement("button");

    if (className !== undefined) tag.setAttribute("class", className);
    if (id_name !== undefined) tag.setAttribute("id", id_name);

    if (text_but !== undefined) {
        const text = document.createTextNode(text_but);
        tag.append(text);
    }
    const element = document.querySelector(enterPlace);

    firstOrLastInElement === "prepend"
        ? element.prepend(tag)
        : element.append(tag);
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
