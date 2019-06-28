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


//add students to db
var name1 = new StudentInfo({
    firstName: 'Jade',
    lastName: 'Smith'
});

var name2 = new StudentInfo({
    firstName: 'Jade',
    lastName: 'Jhnson'
});
var name3 = new StudentInfo({
    firstName: 'Will',
    lastName: 'Smith'
});
var name4 = new StudentInfo({
    firstName: 'Jane',
    lastName: 'Smith'
});
name1.save();
name2.save();
name3.save();
name4.save();



 
app.get('/', function (request, response) {
    
    var path = process.cwd();
    const StudentInfo = require('./../models/studentInfo');
    
    
 
    var params = request.query;
    console.log(params);
    
    var data;
    var students = [];
    var found;
    
    
StudentInfo.find({ }, function (err, data) {
    
    for(var i= 0; i <data.length; i++)
        {
            students.push(data[i]);
            if (data[i].firstName == params.firstName) {
                console.log("Name found in db");
                found = params.firstName;
                
       response.render('index', { StudentInfo: StudentInfo, students:students, found:found});
            } else {
                console.log("Name not found in db");
                found = '';

       response.render('index', { StudentInfo: StudentInfo, students:students, found:found});
            }
        }

  
 });

    

});





