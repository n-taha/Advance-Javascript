 const framework = document.querySelector("#framework");
 const button = document.querySelector("#button");
 const select = document.querySelector("#select");
 const btn = document.querySelector("#button2")

  button.addEventListener("click" , (event)=>{
     event.preventDefault();

     if(framework.value == ""){
        alert("Input Field Is Empty");
        return;
     }
    
    let option = new Option(framework.value , framework.value);
    
    select.add(option , undefined);

    framework.value = "";

  });

   btn.addEventListener("click" , (e)=>{
        e.preventDefault();

        let selected1 = [];

        for(let i = 0 ; i < select.options.length ; i++){
            selected1[i] = select.options[i].selected
        };

        let index = select.options.length;

        while(index--){
            if(selected1[index]){
                select.remove(index)
            }
        }
   })