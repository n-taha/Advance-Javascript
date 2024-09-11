const app = document.querySelector("#app");
let data = ["HTML" , "CSS" , "JAVASCRIPT" , "DOM" , "BOM" , "REACT JS" , "WEB API", "TYPESCRIPT"];

 let node = data.map((skill)=>{
    let li = document.createElement("li")
    li.textContent = skill
    return li
 })

 app.prepend(...node)