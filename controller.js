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

        // Create a new student instance
        const newStudent = new Student({
            stdnum,
            fname,
            lname,
            age
        });

        const savedStudent = await newStudent.save();

        // Return success response
        res.send({ inserted: true, student: savedStudent });
    } catch (error) {
        console.error(error);
        res.status(500).send({ inserted: false, error: "An error occurred while saving the student." });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await Student.find({ stdnum: req.query.stdnum });
        res.send(user);
    } catch (error) {
        res.status(500).send({ error: "An error occurred while fetching the user." });
    }
};

const getMembers = async (req, res) => {
    try {
        const members = await Student.find({});
        res.send(members);
    } catch (error) {
        res.status(500).send({ error: "An error occurred while fetching the members." });
    }
};

export { saveStudent, getUser, getMembers };