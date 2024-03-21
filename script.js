let element = document.getElementById("count-el");
let save = document.getElementById("para");
let count = 0;

function increment() {
    count += 1;
    element.textContent = count;
}

function saved() {
    let str = count + " - ";
    save.textContent += str;
    element.textContent = 0;
    count = 0;
}