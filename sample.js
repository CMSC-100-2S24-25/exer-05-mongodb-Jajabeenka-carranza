import mongoose from "mongoose";
// connection string
await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase");

// Subject model
const Student = mongoose.model("StudentDatabase", {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
}, "studentData")

// the result parameter will contain a single object (the first matching document
//found
// if no matching document was found, result will be null
// let data = await Student.findOne({ fname: "Buck", lname: "Widdocks" });
// console.log(data);

//try catch lang para di maduplicate pag narun twice
// const newStudent = new Student({
//     stdnum: "12345678",
//     fname: "Juan",
//     lname: "dela Cruz",
//     age: 20
// });
// await newStudent.save();

// simple update
// let stud = await Student.findOne({ age: 65});
// stud.fname = "Peter"
// await stud.save();
// updates a single document and returns an object containing the result details
//(NOT the document).
// await Student.updateOne(
//     { age: 17 },
//     {$set: {fname: "John"}}
// );