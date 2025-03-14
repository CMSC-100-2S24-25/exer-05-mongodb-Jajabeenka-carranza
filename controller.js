import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase");

const Student = mongoose.model("StudentDatabase", {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
}, "studentData");

const saveStudent = async (req, res) => {
    try {
        const { stdnum, fname, lname, age } = req.body;

        //create new student instance
        const newStudent = new Student({
            stdnum,
            fname,
            lname,
            age
        });

        const savedStudent = await newStudent.save();

        //return success response
        res.send({ inserted: true, student: savedStudent });
    } catch (error) {
        console.error(error);
    }
};

const updateStudent = async (req, res) => {
    try {
        const { fname } = req.body;

        const result = await Student.updateOne(
            { fname: fname }, //find the student by first name
            { $set: { lname: "Parker" } } //automatically update the last name to "Parker"
        );

        if (result.modifiedCount > 0) {
            res.send({ updated: true, message: "Last name set to Parker." });
        } else {
            res.send({ updated: false, message: "No student found with the given first name." });
        }
    } catch (error) {
        console.error(error);
    }
};

const removeUser = async (req, res) => {
    try {
        const { stdnum } = req.body;

        //remove the student by their student number
        const result = await Student.deleteOne({ stdnum: stdnum });

        if (result.deletedCount > 0) {
            res.send({ deleted: true, message: "Student deleted successfully." });
        } else {
            res.send({ deleted: false, message: "No student found with the given student number." });
        }
    } catch (error) {
        console.error(error);
    }
};

const removeAllUsers = async (req, res) => {
    try {
        //remove all students from the database
        const result = await Student.deleteMany({});

        if (result.deletedCount > 0) {
            res.send({ deleted: true, message: "All students deleted successfully." });
        } else {
            res.send({ deleted: false, message: "No students found to delete." });
        }
    } catch (error) {
        console.error(error);
    }
};


const getUser = async (req, res) => {
    try {
        const user = await Student.find({ stdnum: req.query.stdnum });
        res.send(user);
    } catch (error) {
        console.error(error);
    }
};

const getMembers = async (req, res) => {
    try {
        const members = await Student.find({});
        res.send(members);
    } catch (error) {
        console.error(error);
    }
};

export { saveStudent, updateStudent, removeUser, removeAllUsers, getUser, getMembers };