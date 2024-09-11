const person = {
    FirstName :"Mubtasim Ahsan",
    LastName: "Taha",
    Age: 16,
    prof: "Programmer & Frontend Web Developer",

    //Using Get Method

    get job(){
        return this.prof;
    }
}

  console.log(person.prof);
  console.log(person.job);

  console.log(person.FirstName);