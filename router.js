import { saveStudent, getUser, getMembers } from "./controller.js";

const router = (app) => {
    app.post("/save-student", saveStudent);
    app.get("/user", getUser);
    app.get("/members", getMembers);
};

export default router;