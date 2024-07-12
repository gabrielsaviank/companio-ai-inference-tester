import DocumentService from "../services/documentService.js";


const DocumentS = new DocumentService();


class DocumentController{
    async createMultipleDocumentEntries(req, res) {
        const documents = req.body.documents;

        if(!Array.isArray(documents)){
            res.status(500).json({ error: "Error creating multiple document entries" });
        }

        try {
            const documents = req.body;
            const documentsToInsert = await DocumentS.createMultipleDocumentEntries(documents);

            res.status(201).json(documentsToInsert);
        } catch (error) {
            res.status(500).json({ error: "Error creating multiple document entries" });
        }
    }

    async getDocuments(req, res) {
        try {
            const documents = await DocumentS.getDocuments();

            res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: "Error getting documents" });
        }
    }
}


export default DocumentController;