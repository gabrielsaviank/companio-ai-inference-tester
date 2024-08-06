import { Router } from "express";
import DocumentController from "../controller/documentController.js";

const router = Router();

const DocumentCont = new DocumentController();

router.get('/documents', DocumentCont.getDocuments);
router.post('/documents/create-multiple', DocumentCont.createMultipleDocumentEntries);
router.post('document/predicted-entries', DocumentCont.predictDocumentEntry);

export const documentRoutes = router;