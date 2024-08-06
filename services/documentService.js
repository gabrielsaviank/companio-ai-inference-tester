

class DocumentService {
    constructor(model) {
        this.model = model;
    }

    async createMultipleDocumentEntries(documents) {
        if (!documents) {
            console.error("No documents provided");
            throw new Error("No documents provided");
        }

        try {
            const result = await this.model.insertMany(documents);

            return result;
        } catch (exception) {
            console.error("Error creating multiple document entries:", exception);
            throw exception;
        }
    }

    // Use this to train
    async getDocuments() {
        try {
            const documents = await this.model.find();
            return documents;
        } catch (exception) {
            console.error("Error fetching documents:", exception);
            throw exception;
        }
    }

    async predictDocumentEntries(document) {
        if (!document) {
            console.error("No document provided");
            throw new Error("No document provided");
        }

        try {
            const documentToPredict = null;
            // const result = await this.model.insertMany(documents);

            return documentToPredict;
        } catch (exception) {
            console.error("Error creating multiple document entries:", exception);
            throw exception;
        }
    }
}

// const documentService = new DocumentService(Document);
export default DocumentService;