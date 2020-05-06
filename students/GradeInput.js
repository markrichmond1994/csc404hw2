//This will take the grades using a prompt, cacluate the GPA, and add that data to an array


var gpa;
var name;
let students = [];

var csc141 = {Value: 0};
var csc142 = {Value: 0};
var csc240 = {Value: 0};
var csc241 = {Value: 0};

exports.students = students;
getGrades = function(){

   var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, space, or dashes',
        required: true
      },
      csc141: {
        pattern: /[A-F][\+|\-]?|[a-f][\+|\-]?/, //Idk if we want to open this can or worms or not
        message: 'Grade should be a letter grade',
        required: true
      },
      csc142: {
        pattern: /[A-F][\+|\-]?|[a-f][\+|\-]?/,
        message: 'Grade should be a letter grade',
        required: true
      },
      csc240: {
        pattern: /[A-F][\+|\-]?|[a-f][\+|\-]?/,
        message: 'Grade should be a letter grade',
        required: true
      },
      csc241: {
        pattern: /[A-F][\+|\-]?|[a-f][\+|\-]?/,
        message: 'Grade should be a letter grade',
        required: true
      },
      addmore:{
         pttern: /[y|z]|[Y|Z]/,
        message: 'Enter more Students? (y/n)',
        required: true
      }
    }
  }
  var flag = true;
  var prompt = require('prompt');
  prompt.start();

  prompt.get(schema, function (err, result){
   processPrompt(result.csc141,csc141);
   processPrompt(result.csc142,csc142);
   processPrompt(result.csc240,csc240);
   processPrompt(result.csc241,csc241);
    gpa = ((csc141.Value + csc142.Value + csc240.Value + csc241.Value)/4);
    name = result.name;
    addToArray(name,gpa);
    if (result.addmore.toUpperCase() == "Y"){
      flag = true;
      getGrades();
   }
   else{
      flag = false;
      var QualifiedStudents = require('./QualifiedStudents'); 
      QualifiedStudents.outputGPA();
   }
    
    
  })
    
   }
  exports.getGrades = getGrades;


processPrompt = function(input,output){ //Takes the inputted letter grade and resolves to a number
   switch (input.toUpperCase()) {
      case 'A+':
         output.Value = 4;
         break;
      case 'A':
         output.Value = 4;
         break;
      case 'A-':
         output.Value = 3.67;
         break;
      case 'B+':
         output.Value = 3.33;
         break;
      case 'B':
         output.Value = 3;
         break;
      case 'B-':
         output.Value = 2.67;
         break;
      case 'C+':
         output.Value = 2.33;
         break;
      case 'C':
         output.Value = 2;
         break;
      case 'C-':
         output.Value = 1.67;
         break;
      case 'D+':
         output.Value = 1.33;
         break;
      case 'D':
         output.Value = 1;
         break;
      case 'D-':
         output.Value = .67;
         break;
      case 'F':
         output.Value = 0;
         break;
      default:
         output.Value = 0;
   }
   
}
exports.processPrompt = processPrompt;


exports.outputGPA = function(){
  return gpa;
}

exports.outputName = function(){
  return name;
}

addToArray = function(name, gpa){
students.push([name,gpa]);
//console.log("test output\n");
//console.log(students);
}
exports.addToArray = addToArray; //export statement for debug


exports.printArray = function(){
  console.log(students);
}
