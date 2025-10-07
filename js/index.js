//Write your Javascript code here
console.log("Shoppinglist")

function bob(a, b) {
    return a + b
}

function bob_semple(a) {
    console.log("The bob semple factory has produced " + a + " bob semples")
}

bob_semple(bob(2, 3))

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

function newNode() {
    let node = document.createElement("div");
    node.id = "newNode"
    node.textContent = "I am a new node"
    document.body.appendChild(node)
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
    list.appendChild(liElement);
    return list;
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

function deleteListElement(id) {
    let element = document.getElementById(id);
    if(!element) {
        console.log("Element not found.");
        return null;
    }
    element.remove(); //I think this removes it permanently
    return element;

}



let newElement = newListItem("4", "healthy", "MANGO!!!");
console.log(appendlistItem("list", newElement));
changeClassAttributeByID(4, "unhealthy");

setTimeout(deleteListElement, 5000, "4");