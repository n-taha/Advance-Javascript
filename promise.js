// let message = true;

// let MyPromise = new Promise((resolve,reject)=>{
//     if(message){
//         resolve([
//             {Username:"Mubtasim Ahsan Taha"},
//             {Email:"mubtasimtaha@gmail.com"},
//             {Profession:"Programmer & Founder Of Tultul Programmer"},
//             {Age:20}
           
//         ])
//     } 
//     else{
//         reject("You Are Not Bangladeshi ! So , Go Out From Here")
//     }
// })

// MyPromise.then((success)=>{
//     console.log(success)
// })

// MyPromise.catch((error)=>{
//     console.log(error)
// })


let message = true;

let TahaPromise = new Promise((resolve,reject)=>{
         if (message){
            resolve([
                {Username:"Mubtasim Ahsan Taha"},
                {Profession:"Programmer And Founder Of Tultul Programmer"}
            ])
         }
         else{
            reject("You Are Not Bangladeshi! So Go Out From Here")
         }
})

  TahaPromise.then((Successful)=>{
     console.log(Successful)
  })

  TahaPromise.catch((Error)=>{
    console.log(Error)
  })