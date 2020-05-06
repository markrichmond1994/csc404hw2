//This displays the list of qualified students by taking input of the GPA threshold , and outputing the list of students that meet this requirment.


"use strict";

var threshold = 2.5; //This is a static variable per Dr. Yang's email
exports.getThreshold = function(){
  return threshold;
};


const GradeInput = require("./GradeInput");

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
