"use strict";

const HomePage = require("./HomePage");
const GradeInput = require("./GradeInput");
const QualifiedStudents = require("./QualifiedStudents");


let ValidGrades = ["A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F","Z"];
let invalidGrades = ["A+","A++","A+++","-A","--A","---A","G","1","111","124124124124","-412398234908234","sdfjkldfs#$(#$_#dfls","-FDKLJDFsdfkjsdf","           asdfsdfasdffsd        ", "           1321234234"];

let ValidNames = ["Mark Cameron Richmond","Si Hu","Zachary Colangelo","Abcdefghijklmnop Qrstuvwxyzabcdefghijklmnopshidbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"];
let invalidNames = [""," ","1","111","124124124124","-412398234908234","sdfjkldfs#$(#$_#dfls","-FDKLJDFsdfkjsdf","           asdfsdfasdffsd        ", "           1321234234"];

