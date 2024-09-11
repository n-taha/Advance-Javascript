//  let data = fetch("https://jsonplaceholder.typicode.com/users");

//     data.then((res)=>{
//         return res.json()
//     }).then((read)=>{
//         console.log(read)
//     })

 async function data() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const names = await response.json()
    console.log(names)
 }
  data()

  alert("Hello World")