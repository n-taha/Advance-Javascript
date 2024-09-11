const app = document.querySelector("#app");
let lang = ["Javascript" , "Typescript" , "Python" , "C" , "C++" , "C#"]

let nodes = lang.map((proLang)=>{
    let li = document.createElement('li');
     li.textContent = proLang
    return li
})

app.append(...nodes)