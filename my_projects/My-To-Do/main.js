let input = document.querySelector(".task");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let div = document.createElement("div");
let deleteAll = document.getElementById("delete-all");
let tsk = document.querySelector(".me-to");
let a = document.getElementById("a");
let counter = 0;
// localStorage.clear()

let arrayOf = [];

if (window.localStorage.getItem("tasks")) {
    arrayOf = JSON.parse(window.localStorage.getItem("tasks"));
    readData(arrayOf)
}


add.onclick = function () {
    if (input.value != "") {
        let task = {
            title: input.value,
        }
        arrayOf.push(task);
        window.localStorage.setItem("tasks", JSON.stringify(arrayOf));
        readData(arrayOf);
        input.value = "";
    }
};

function readData(arrayOf) {
    tasks.innerHTML = '';
    for (let i = 0; i < arrayOf.length; i++) {
        let task = {
            id: i,
        }
        let div = `
        <div class="me-to" >${arrayOf[i].title} <span onclick="addding(${task.id})" id="a"></span> <input type="checkbox" class="check"> <button id="${i}" class="addd" onclick="deleted(${task.id})">delete</button></div>
        `
        tasks.innerHTML += div;
    }
    if (arrayOf.length > 1) {
        deleteAll.style.display = "block";
    } else {
        deleteAll.style.display = "none";
    }
}

function deleted(id) {
    arrayOf.splice(id, 1);
    readData(arrayOf);
    localStorage.tasks = JSON.stringify(arrayOf);
    if (arrayOf.length > 1) {
        deleteAll.style.display = "block";
    } else {
        deleteAll.style.display = "none";
    }
}



deleteAll.onclick = function () {
    localStorage.removeItem("tasks");
    tasks.innerHTML = "";
    arrayOf = [];
    if (arrayOf.length > 1) {
        deleteAll.style.display = "block";
    } else {
        deleteAll.style.display = "none";
    }
};


function addding(id) {
    
};