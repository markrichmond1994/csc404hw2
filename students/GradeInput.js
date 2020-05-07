//This will take the grades using a prompt, cacluate the GPA, and add that data to an array
var button = document.getElementById("clickMe").onclick = calcGPA();
button.addEventListener('click', checkGrades, false);

//add grade input to array
var x = 0;
var y = 0;
var csc141 = document.getElementById('1').value;
var csc142 = document.getElementById('2').value;
var csc241 = document.getElementById('3').value;
var csc242 = document.getElementById('4').value;
var gpa = 0;
var grades = Array();
var names = Array();

const gradeMap = {
   'A': 4.0,
   'A-': 3.67,
   'B+': 3.33,
   'B': 3.0,
   'B-': 2.67,
   'C+': 2.33,
   'C': 2.0,
   'C-': 1.67,
   'D+': 1.33,
   'D': 1.0,
   'D-': 0.67,
   'F': 0,
}

function calcGPA() {
   var grade1 = gradeMap[csc141];
   var grade2 = gradeMap[csc142];
   var grade3 = gradeMap[csc241];
   var grade4 = gradeMap[csc242];
   gpa = (grade1 + grade2 + grade3 + grade4)/4
   if (gpa > 2.5) {
      grades[x] = gpa;
      names[y] = document.getElementById('fullName').value;
      x++;
      y++;
   }
 }

function displayQualStudents() {
  var out = "";
  var i = 0;
  for (i = 0; i < grades.length; i++) {
    out + names[i] + ": " + grades[i] + ", ";
  }
  return out;
}

 //MongoDB code below
  const MongoDB = require("mongodb").MongoClient,
  dbURL = "mongodb://localhost:27017",
  dbName = "recipe_db";

MongoDB.connect(dbURL, (error, client) => {
  if (error) throw error;
  let db = client.db(dbName);
  db.collection("Students")
    .find()
    .toArray((error, data) => {
      if (error) throw error;
      console.log(data);
    });
});

   uploadData = function(data){
      db.Students.insert({
         name: data.name,
         csc141: data.csc141,
         csc142: data.csc142,
         csc241: data.csc241,
         csc242: data.csc242,
         gpa: ((ProcessGrade(data.csc141) + ProcessGrade(data.csc142) + ProcessGrade(data.csc241) + ProcessGrade(data.csc242)) /4)
       })
   }
   exports.uploadData = uploadData;

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