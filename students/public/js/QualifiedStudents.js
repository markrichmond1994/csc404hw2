//This displays the list of qualified students by taking input of the GPA threshold , and outputing the list of students that meet this requirment.


"use strict";

var threshold = 2.5; //This is a static variable per Dr. Yang's email
exports.getThreshold = function(){
  return threshold;
};

exports.outputGPA = function(){
  console.log(threshold);
};

const GradeInput = require("./Grades");

for (var i = 0; i < GradeInput.students.length; i++)
{
  if (GradeInput.students.gpa[i] > 2.5)   //not sure if valid syntax for comparison because students is an array of objects
  {
    console.log(GradeInput.students[i]);
  }
  else
    continue;
}
