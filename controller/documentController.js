import DocumentService from "../services/documentService.js";


const DocumentS = new DocumentService();


class DocumentController{
    async createMultipleDocumentEntries(req, res) {
        const documents = req.body.documents;

        if(!Array.isArray(documents)){
            res.status(500).json({ error: "Error creating multiple document entries" });
        }

        try {
            // Check this
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

    async predictDocumentEntry(req, res) {
        const document = req.body.document;

        if(!document) {
            res.status(500).json({ error: "Must provide a document" });
        }

        try {
            const documentToPredict = await DocumentS.predictDocumentEntries(document);

            res.status(201).json(documentToPredict);
        } catch (error) {
            res.status(500).json({ error: "Error creating multiple document entries" });
        }
    }
}


export default DocumentController;