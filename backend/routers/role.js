import Express from "express";
import role from "../controllers/role.js";
const router = Express.router()

//http://localhost:3001/api/role/registerRole
router.post("/registerRole", role.registerRole);

export default router