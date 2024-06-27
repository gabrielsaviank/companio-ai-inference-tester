import { Router } from "express";
import DocumentController from "../controller/documentController.js";

const router = Router();

const DocumentCont = new DocumentController();

router.post('/documents/create-multiple', DocumentCont.createMultipleDocumentEntries);

export const documentRoutes = router;