import { Router } from "express";
import {
  getUser, createUser} from "../controllers/userControllers.js";
const router = Router();

export default () => {

  router.route("/")
.get(getUser)
.post(createUser)


  return router;

};
