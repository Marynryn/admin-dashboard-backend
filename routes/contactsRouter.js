import express from "express";

import { isIdValid } from "../middlewares/index.js";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContacts,
  updateStatusContact,
} from "../controllers/contactsControllers.js";
import { protect } from "../middlewares/usersMiddlewares.js";

const contactsRouter = express.Router();
contactsRouter.use(protect);

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isIdValid, getOneContact);

contactsRouter.delete("/:id", isIdValid, deleteContact);

contactsRouter.post("/", createContact);

contactsRouter.put(
  "/:id",
  isIdValid,

  updateContacts
);

export default contactsRouter;
