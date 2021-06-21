// Define a user and use all the details and define an address as an object with properties such as street number, suburb, city, Country using OOP.
// Display each detail on the console or table format.

class User {
   constructor(name, surname, age, gender, height, haircol){
     this.name = name;
     this.surname = surname;
     this.age = age;
     this.gender = gender;
     this.height = height;
     this.haircol = haircol;



   }
   
      getUserDetails(na, sur, ag, gen, hei, hair){
        
       return na+ " " +sur+ " is "+ag+" years old, "  +gen+ " Who's " +hei+ "m tall. With " +hair+ " hair color.";
   }
  
} 

   var P = new User();

   console.table(P.getUserDetails("Rinae", "Tshivhinda", 24, "male", 1.96, "Blonde"));

class Address extends User {
   constructor(streetn, surbub, city, country){
     super();
     this.streetn = streetn;
     this.surbub = surbub;
     this.city = city;
     this.country = country;

   }
   
      getAddressDetails(streetn, surbub, city, country){
        
       return "street number is"+ " "+ streetn + " " + surbub + " "+ city +" "+ country;
   }
  
} 

 const Addre = new Address();
 console.table(Addre.getAddressDetails( 344, "Kent Avenue, ", "Randburg, " , "South Africa" ));

 