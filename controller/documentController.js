import DocumentService from "../services/documentService.js";


const DocumentS = new DocumentService();


class DocumentController{
    async createMultipleDocumentEntries(req, res) {
        try {
            const documents = req.body;
            const result = await DocumentS.createMultipleDocumentEntries(documents);

            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: "Error creating multiple document entries" });
        }
    }
}


export default DocumentController;