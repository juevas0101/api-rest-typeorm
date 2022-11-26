import { Router } from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectCotroller } from "./controllers/SubjectController";

const routes = Router();

routes.post("/subject", new SubjectCotroller().create);
routes.post("/room", new RoomController().create);

export default routes;

