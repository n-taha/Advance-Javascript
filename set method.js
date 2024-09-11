const people = {
    Name : "Mubtasim Ahsan Taha",
    Email : "mubtasimtaha@gmail.com",
    age : 16 ,
    Profession : "Programmer & Frontend Web Developer",

    //using set method 
   set new(newmail){
     this.Email = newmail
   }
}

 people.new = "taha90743@gmail.com";
  console.log(people.Email);
  console.log(people);