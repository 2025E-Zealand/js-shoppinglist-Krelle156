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
    node.classList.add(className);
    node.textContent = text;
    return node;
}

function appendlistItem() {

}



console.log(newListItem("5", "healthy", "Milk"));