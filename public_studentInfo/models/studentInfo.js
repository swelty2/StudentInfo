const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const StudentInfoSchema = new Schema({
    firstName: String,
    lastName: String
    
});

const StudentInfo = mongoose.model('studentInfo', StudentInfoSchema);

module.exports = StudentInfo;