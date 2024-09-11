// Storing Variable With Using Class ;
   class people{
    constructor(name , prof , age , gender){
        this.name = name;
        this.prof = prof;
        this.age = age;
        this.gender = gender;
    }

   }

   const user1 = new people("Mubtasim Ahsan Taha" , "Programmer & Frontend Web Developer" , 16 , "Male");
   const user2 = new people("Ibtesim Ahsan Tuhan" , "Student" , 9 , "Male");
   const user3 = new people("Md. Ahsan Habib" , "Service Man" , 42 , "Male");
   const user4 = new people("Sanjida Shobnom" , "Housewife" , 38 , "Female");

   console.log(user1);
   console.log(user2);
   console.log(user3);
   console.log(user4);