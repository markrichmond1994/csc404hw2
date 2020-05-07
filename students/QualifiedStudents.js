//This displays the list of qualified students by taking input of the GPA threshold , and outputing the list of students that meet this requirment.


"use strict";
let studentData = [];

exports.studentData = studentData;

var threshold = 2.5; //This is a static variable per Dr. Yang's email
exports.getThreshold = function(){
  return threshold;
};


const GradeInput = require("./GradeInput");

/*function returnQualified(){  
  console.log(qualifiedStudents.toString());
  return qualifiedStudents.toString();
}
*/

function returnQualified(){
  let qualifiedStudents = [];
  for (i = 0; i < studentData.length; i++){
    if(studentData[i][5] >= threshold){
      //console.log(studentData[i]);
      //console.log(studentData[i][5]);
      qualifiedStudents.push(studentData[i][0]);
      //console.log(qualifiedStudents.toString());
      //console.log("yes");
      //return studentData[i][0].toString(); //this is the only way I can get anything to display on the page.
    }
  } //nothing after here runs and I don't know why
  console.log("test");
  console.log(qualifiedStudents.toString());
  return qualifiedStudents.toString();
}
exports.returnQualified = returnQualified;


exports.outputGPA = function(){
for (var i = 0; i < GradeInput.students.length; i++)
{
  if (GradeInput.students[i][1] > 2.5)   //not sure if valid syntax for comparison because students is an array of objects
  {
    console.log("Student: " + GradeInput.students[i][0] + " GPA: " + GradeInput.students[i][1]);
  }
  else
    continue;
    //console.log("Does not qualify\n");

}


}
