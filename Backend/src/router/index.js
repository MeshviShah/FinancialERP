//const ClientRouter = require("./client.router")
import { AuthRouter } from "./auth.router.js";
import { ClientRouter } from "./client.router.js";
import { DocumentRouter } from "./document.router.js";
import { EventRouter } from "./event.router.js";
import { Event_TypeRouter } from "./event_type.router.js";
import { FirmRouter } from "./firm.router.js";
import { TokenRouter } from "./token.router.js";
import { RoleRouter } from "./role.router.js";
import { ServiceRouter } from "./service.router.js";
import { Service_categoryRouter } from "./service_category.router.js";
import { TaskRouter } from "./task.router.js";
import { Task_statusRouter } from "./task_status.router.js";
import { UserRouter } from "./user.router.js";
import { TenderRouter } from "./tender.router.js";
import { auth } from "../middleware/auth.js";

const router = (app) => {
  app.use("/user",auth, UserRouter); //User
  app.use("/firm", FirmRouter); //Firm
  app.use("/role", RoleRouter); //Role
  app.use("/event_type", Event_TypeRouter);
  app.use("/event", EventRouter);
  app.use("/task_status", Task_statusRouter);
  app.use("/task",auth, TaskRouter);
  app.use("/service_category", Service_categoryRouter);
  app.use("/service", ServiceRouter);
  app.use("/document",auth, DocumentRouter);
  app.use("/client",auth, ClientRouter);
  app.use("/", AuthRouter);
  app.use("/token", TokenRouter);
   app.use("/tender", TenderRouter);
};

export { router };
