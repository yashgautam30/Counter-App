let element = document.getElementById("count-el");
let save = document.getElementById("para");
let sum = document.getElementById("sum");

let total = 0;
let count = 0;

function increment() {
    count += 1;
    element.textContent = count;
}

function saved() {
    let str = " - " + count;
    total += count;
    save.textContent = str + save.textContent;
    sum.textContent = total;
    element.textContent = 0;
    count = 0;
}