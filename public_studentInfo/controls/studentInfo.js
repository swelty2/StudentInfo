var express = require('express');
var app = module.exports = express();


const mongoose = require('mongoose');

//es6 promise
mongoose.Promise = global.Promise;
//asynch.wait
//use callback function


//connect to DB (creates if doesnt exist)
mongoose.connect('mongodb://localhost/student');



mongoose.connection.once('open', function(){
    
console.log('connection has been made, now make Students!'); 
}).on('error', function(error){
    console.log('Connection error: ', error);
});

const StudentInfo = require('./../models/studentInfo');

app.get('/', function (request, response) {
      const StudentInfo = require('./../models/studentInfo');

  //get data objects - this can be outside of this call if needed somewhere else.
  var studentObj = require('./../models/student');

  //get the request query
  var studentReqParams = request.query;

  //printing debug message to the console
  console.log("query string is ");
  console.log(studentReqParams);


  if ((Object.keys(studentReqParams).length != 0)) {
    console.log('request with query string was sent');


    studentObj.setFirstName(studentReqParams.firstName);
    studentObj.setLastName(studentReqParams.lastName);
    studentObj.setDegree(studentReqParams.degree);
    studentObj.setProgram(studentReqParams.program);
    student = studentObj.getStudentInfo();
    //printing debug message to the console
    //notice that when the request comes from the form submission it will alwas have parameters
    //what changes is whether values for those parameters are set or were left empty
    console.log("student data object is ");
    console.log(student);

    //ready to send response. Pass the data to the correct view
    response.render('main', { student: student });
  }
  else {
    console.log('request with query string was sent');
    var path = process.cwd();
    console.log("path from where node was started" + path);
    response.sendFile(path + '/views/index.html');
  }
        //add user to db from form submission
   var name1 = new StudentInfo({
    firstName: request.query.firstName,
    lastName:  request.query.lastName
});
    name1.save();
});

app.get('/:firstName/:lastName/:degree/:program', function (request, response) {
    

    
  var sentFirstName = request.params.firstName;
  var sentLastName = request.params.lastName;
  var sentDegree = request.params.degree;
  var sentProgram = request.params.program;

  var studentObj = require('./../models/student');

  studentObj.setFirstName(sentFirstName);
  studentObj.setLastName(sentLastName);
  studentObj.setDegree(sentDegree);
  studentObj.setProgram(sentProgram);
  student = studentObj.getStudentInfo();

    console.log('User added: ' + name1);
  console.log("student data object is ");
  console.log(studentObj);
        



   response.render('main', { student: studentObj });
 });
   