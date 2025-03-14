import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase", {
    useNewUrlParser: true, useUnifiedTopology: true
});

const Student = mongoose.model("Student", {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

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

export { getUser, getMembers };