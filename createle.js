// let element = document.createElement(htmlTag)
// console.log(element);

// let element1 = document.createElement('div')
// div.innerHTML = <h1> Hello World </h1>
//  console.log("div")

//Work 2

let div = document.createElement("div");
 div.id = "content";
 div.className = "note"
  let h1 = document.createElement("h1");
   h1.textContent = "This Is H1 TAg Coming From JS Dom";
    div.appendChild(h1);
      document.body.appendChild(div)