// const app = document.querySelector("#app")

// app.insertAdjacentHTML("beforebegin" , "<h1>This Is Come From begin method by js dom</h1>");
// app.insertAdjacentHTML("afterbegin" , "<li>Home Page</li>");
// app.insertAdjacentHTML("beforeend" , "<li>About Us</li>");
// app.insertAdjacentHTML("afterend" , "<h2>This Is Come From Js Dom By End Method</h2>")

  const app = document.querySelector("#app")

  let li = document.createElement("li")
  li.textContent = "Home page 5"

  app.replaceChild(li,app.firstElementChild)