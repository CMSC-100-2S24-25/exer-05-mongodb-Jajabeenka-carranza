import { saveStudent, updateStudent, getUser, getMembers } from "./controller.js";

const router = (app) => {
    app.post("/save-student", saveStudent);
    app.post("/update", updateStudent); // Add the new route for updating a student
    app.get("/user", getUser);
    app.get("/members", getMembers);
};

export default router;