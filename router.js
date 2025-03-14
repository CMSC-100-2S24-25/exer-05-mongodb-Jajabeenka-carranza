import { getUser, getMembers } from "./controller.js";

const router = (app) => {
    app.get("/user", getUser);
    app.get("/members", getMembers);
};

export default router;