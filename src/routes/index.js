import { Router } from "express";
import EmployedRoutes from "./employedsRoutes.js";
const router = Router();

export default () => {

  router.use("/employeds", EmployedRoutes());

  return router;

};
