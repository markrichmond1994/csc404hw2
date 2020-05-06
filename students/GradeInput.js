//This will take the grades using a prompt, cacluate the GPA, and add that data to an array

  const MongoDB = require("mongodb").MongoClient,
  dbURL = "mongodb://localhost:27017",
  dbName = "recipe_db";



   uploadData = function(data){
      
      MongoDB.connect(dbURL, (error, client) => {
         if (error) throw error;
         let db = client.db(dbName);
         db.collection("Students")
           .find()
           .toArray((error, data) => {
             if (error) throw error;
             console.log(data);
           });

      db.Students.insert({
         name: data.name,
         csc141: data.csc141,
         csc142: data.csc142,
         csc241: data.csc241,
         csc242: data.csc242,
         gpa: ((ProcessGrade(data.csc141) + ProcessGrade(data.csc142) + ProcessGrade(data.csc241) + ProcessGrade(data.csc242)) /4)
       })
      });
   }
   exports.uploadData = uploadData;


ProcessGrade = function(input){ //Takes the inputted letter grade and resolves to a number
   switch (input.toUpperCase()) {
      case 'A+':
         return 4;
         break;
      case 'A':
         return 4;
         break;
      case 'A-':
         return  3.67;
         break;
      case 'B+':
         return  3.33;
         break;
      case 'B':
         return  3;
         break;
      case 'B-':
         return  2.67;
         break;
      case 'C+':
         return 2.33;
         break;
      case 'C':
         return  2;
         break;
      case 'C-':
         return 1.67;
         break;
      case 'D+':
         return  1.33;
         break;
      case 'D':
          return  1;
         break;
      case 'D-':
         return  .67;
         break;
      case 'F':
         return  0;
         break;
      default:
         return  0;
   }
   
}

exports.outputGPA = function(){
  return gpa;
}

exports.outputName = function(){
  return name;
}


addToDatabase = function(name, gpa){
   db.collection("GPA")
   .insert({
     name: name,
     gpa: gpa
   }, (error, db) => {
     if (error) throw error;
     console.log(db);
   });
 
 
}

exports.printArray = function(){
  console.log(students);
}
