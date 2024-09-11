 const person = {
    FullName : function (){
        return this.FirstName + " " + this.LastName 
    }
 }

  const person1 = {
    FirstName : "Mubtasim Ahsan",
    LastName : "Taha"
  };

  let value = person.FullName.call(person1);
  let value1 = person.FullName.call(person1);

   console.log(value);
   console.log(value1);

     // Binding

      const data = {
        FisrtName:"Mubtasim Ahsan",
        LastName:"Taha",
        display : function (){
            console.log(this.FisrtName + " " + this.LastName)
        }
      } 
   