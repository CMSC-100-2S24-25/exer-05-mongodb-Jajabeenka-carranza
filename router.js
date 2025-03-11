// import { homepage } from "./controller.js";
import {homepage, findStudents, findSubjectsPost} from "./controller.js";

const router = (app) => {
    app.get("/", homepage);
    app.get("/find-students",findStudents);
    app.post("/find-students-post",findSubjectsPost)
}

export default router;