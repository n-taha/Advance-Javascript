const box = document.querySelector("#box")

let style = getComputedStyle(box)

let width = box.clientWidth;
let height = box.clientHeight

console.log(style.marginLeft)