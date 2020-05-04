# CSC404_Homework_1


Homework #1
Test-Driven Design and Node.js Programming
We will begin our journey of applying Software Engineering principles for the
development of a simple web application: an internship approval system.

Eventually, this is a web project with three tabs: Home, Grade Input, and
Qualified Students. The Home tab provides information about how the
internship approval system works; the Grade Input page prompts for the
student name, the letter grades for CSC141, CSC142, CSC240, and CSC241 and
the system computes the Partial GPA based on the four courses and displays the
numeric grade to the first digit after the decimal point; the third tab Qualified
Students shows a list of students whose Partial GPA is greater than or equal to
the threshold 2.5.

Homework#1 does not require each team to implement a website. You may use
the “prompt” module to handle user input data. This is essentially a Rapid
Prototyping and Test-Driven Design phase. For testers, the driving program may
be different from the driving program developers use.

In HW#1, each student needs to participate in a team with 4 to 5 students. Each
student is assigned a role for each homework, and later, changed to another role.
There are four roles: Team Leader, Developer #1, Developer#2, and Tester. The
Team Leader is responsible for the scheduling, coordination, the design and the
final compression of the project code. Each student must submit the same code
in the compressed format and a Word document to answer the questions. Each
The two developers will follow the direction of the Team Leader to complete the
required components of each Homework. The Tester is responsible for the test
design, test data generation.

For team leaders, you need to be responsible for the design of the system, decide
each person’s job responsibilities (who does what), and timeline. You need to set
up a time frame for design, development, integration test. A late penalty of -1/10
per day will only be imposed only to Leaders.

For developers, you need to use all possible programming skills to accommodate
all possible situations. Your code cannot terminate abnormally. You may display
an error message indicating the possible errors. For HW#1, the error message
can be displayed on a console. But in the future, the error message has to be
displayed as a web page. Two or three developers are free to split the job of
development in any way that all will participate in development and no one will
complete more than one component. 

The project can be divided into: main
driving program main.js, one function for receiving data input and computing
the Partial GPA, and one function for displaying all qualified students based on
the Partial GPA if it is equal to or greater than 2.5.
For testers, you need to list all test cases and “hard-code” all test cases inside the
driving main.js and call all other functions with the purpose to find bugs. You
may not need to test the developer’s driving program main.js because you need
to write your own testing driving program main.js and work on testing in a
different environment from the developer’s environment.

For everyone’s report, you need to include a cover sheet with the following:
1. Name of the team: A-Team, I-Team, etc.
2. Team members: all members
3. Roles of each team member (NOT just your role).
4. Date of Submission

The individual report must answer the following questions:
1. Describe the boundaries in this problem.
2. Present one example to demonstrate the normal values of this problem.
3. Present one example to illustrate the “abnormal” values.
4. Present one example to illustrate the concept of “equivalent classes”.
