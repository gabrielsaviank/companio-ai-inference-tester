

class DocumentService {
    constructor(model) {
        this.model = model;
    }

    async createMultipleDocumentEntries(documents) {
        try {
            const result = await this.model.insertMany(documents);

            return result;
        } catch (exception) {
            console.error("Error creating multiple document entries:", exception);
            throw exception;
        }
    }


    async getDocuments() {
        try {
            const documents = await this.model.get();
            return documents
        } catch (exception) {
            console.error("Error creating multiple document entries:", exception);
            throw exception
        }
    }
}

export default DocumentService;