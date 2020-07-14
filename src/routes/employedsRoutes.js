import { Router } from "express";
import { getEmployeds, createEmployed } from "../controllers/employedsControllers.js";
const router = Router();

export default () => {

  router.route("/")
    .get(getEmployeds)
    .post(createEmployed);

  return router;

};
