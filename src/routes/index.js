import { Router } from "express";
import EmployedRoutes from "./employedsRoutes.js";
import userRoutes from "./userRoutes.js";
const router = Router();

export default () => {

  router.use("/employeds", EmployedRoutes());

  router.use("/user", userRoutes());

  return router;

};
