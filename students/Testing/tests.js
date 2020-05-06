//This is the testing branch
//npm install mocha -g
//npm install mocha chai --save-dev

var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('chai').assert
var expect  = require('chai').expect;
var request = require('request'); 

http = require("http"),
httpStatus = require("http-status-codes"),

//var main = require('../main');
//var HomePage = require('../HomePage');
//var GradeInput = require('../GradeInput ');
//var QualifiedStudents = require('../QualifiedStudents');


//these tests are incomplete, just a framework right now. Need the associated functions

describe('Check that the webserver is running and reachable', function() {
	//Test input will take place in main.js
	
	it('Main page is up and reachable', function(done){
		request.get('http://localhost:3000/', function(err, res, body) {
			expect(res.statusCode).to.equal(200);
			done();
	}); 	
	});


	it('Grades page is up and reachable', function(done){
		request.get('http://localhost:3000/contact.html', function(err, res, body) {
			expect(res.statusCode).to.equal(200);
			done();
		});		
	});

	it('Courses page is up and reachable', function(done){
		request.get('http://localhost:3000/courses.html', function(err, res, body) {
			expect(res.statusCode).to.equal(200);
			done();		
		});		
	});

	
});

describe('Check that database is reachable', function() {
    //Test input will take place in main.js

	it('Checking that database is reachable', function(){
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
    });
});
describe('Test that name into database is correct', function() {
    //Test input will take place in main.js

	it('Checking name input is valid', function(){
		assert.match(GradeInput.nameInput(), "^[a-zA-Z]+", 'Name input is valid');
	});
});

describe('Test that grade input into database is correct', function() {
    //Test input will take place in main.js
	it('Checking Bounds of CSC141', function(){
		assert.match(GradeInput.csc141Input(), "^[A-F][\+|\-]?|[a-f][\+|\-]?", 'CSC141 input is valid');
	});

	it('Checking Bounds of CSC142', function(){
        assert.match(GradeInput.CSC142Input(), "^[A-F][\+|\-]?|[a-f][\+|\-]?", 'CSC142 input is valid');

	});

	it('Checking Bounds of CSC240', function(){
        assert.match(GradeInput.CSC240Input(), "^[A-F][\+|\-]?|[a-f][\+|\-]?", 'CSC240 input is valid');

	});

	it('Checking Bounds of CSC241', function(){
        assert.match(GradeInput.CSC241Input(), "^[A-F][\+|\-]?|[a-f][\+|\-]?", 'CSC241 input is valid');
	});
});


describe('Test that output GPA is within Bounds', function() {

    //Test input will take place in main.js

	it('Checking GPA is a number format n . n n n ', function(){
		assert.match(GradeInput.outputGPA(), "^[0-9].[0-9][0-9]", 'Value is in Bounds');
	});

	it('Checking GPA is within bounds [Greater than 2.5]', function(){
		assert.ok(GradeInput.outputGPA() >= GradeInput.gpaThreshold, 'Returned Value is >= threshold');
	});
});


describe('Test that output name is within bounds', function() {
    //Test input will take place in main.js

	it('Checking returned name is valid', function(){
		assert.match(GradeInput.outputName(), "^[a-zA-Z]+", 'Returned name is valid');
	});
});