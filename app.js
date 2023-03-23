import mongoose from "mongoose";
await mongoose.connect(
    'mongodb://127.0.0.1:27017/ICS',                            //mongodb address
    { useNewUrlParser: true, useUnifiedTopology: true }         
);

const Student = mongoose.model('students', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
})

//Create
// let data = await Student.findOne({ age: 17 } );

// const newStudent = new Student({
//     stdnum: "12345678",
//     fname: "Juan",
//     lname: "Dela Cruz",
//     age: 30
// });

//Updates single record
// let updateStudent = await Student.find({age: 20});
// updateStudent.fname = "Joana";
// let data = await updateStudent.save();


//Update one
// let updateStudent = await Student.updateOne(
// {age: 17},
// {$set: {fname: "John"}}
// );


//Update many
// let updateStudent = await Student.updateMany(
//     {age: 17},
//     {$set: {fname: "John"}}
//     );

// Delete
// let data = await Student.deleteMany({age:17});
    
console.log(data);
process.exit();