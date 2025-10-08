let nextHealthy = false;

function randomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function randomizeNode(id) {
    let node = document.getElementById(id)
    if(!node) {
        console.log("Node with id " + id + " not found.")
        return null
    }
    node.style.backgroundColor = randomRgb()
    node.style.color = randomRgb()
    return node
}

const funkyTimers = {};

function startColorAnimation(id, intervalMs = 200) {
    randomizeNode(id);
    funkyTimers[id] = setInterval(() => {
        randomizeNode(id);
    }, intervalMs);
}

function newListItem(id, className, text) {
    let node = document.createElement("li");
    node.id = id;
    node.setAttribute("class", className);
    node.textContent = text;
    return node;
}

function appendlistItem(id, liElement) {
    let list = document.getElementById(id);
    if(!list) {
        console.log("List with id " + id + " not found.");
        return null;
    }
    if(liElement.tagName !== "LI") {
        console.log("Element is not a list item.");
        return null;
    }
    if(list.tagName !== "UL" && list.tagName !== "OL") {//Assignment says only list elements appended to lists
        console.log("Element is not a list.");
        return null;
    }
    list.appendChild(liElement);
    return list;
}

function deleteListElement(id) {
    let element = document.getElementById(id);
    if(!element) {
        console.log("Element not found.");
        return null;
    }
    if(element.tagName !== "LI") {
        console.log("Element is not a list item."); //Assignment says only list items...
        return null;
    }
    element.remove(); //I think this removes it permanently
    return element;
}

function changeClassAttributeByID(id, newClass) {
    let element = document.getElementById(id);
    if(!element) {
        console.log("Element not found.");
        return null;
    }
    element.setAttribute("class", newClass);
    return element;
}

function nextUniqueID() {
    let listElements = document.getElementsByTagName("li");
    let nextId = 0;
    listElements = Array.from(listElements);
    for(let item of listElements) {
        let itemId = parseInt(item.id);
        if(itemId >= nextId) {
            nextId = itemId + 1;
        }
    }
    return nextId;
}

document.getElementById("BUTTON!").addEventListener("click", () =>{
    let text = document.getElementById("textField1").value;
    let newElement = newListItem(nextUniqueID().toString(), nextHealthy? "healthy" : "unhealthy", text);
    if(newElement.classList.contains("unhealthy")) {
        startColorAnimation(newElement.id);
    }
    appendlistItem("list", newElement);
});

document.getElementById("HealthButton").addEventListener("click", () => {
    nextHealthy = !nextHealthy;
});

let testElement = document.getElementById("1");
testElement.addEventListener("click", () => {
    testElement.setAttribute("hidden", "true");
});



let newElement = newListItem("4", "healthy", "MANGO!!!");
console.log(appendlistItem("list", newElement));
changeClassAttributeByID(4, "unhealthy");

setTimeout(deleteListElement, 5000, "4");
setTimeout(deleteListElement, 5000, "list");