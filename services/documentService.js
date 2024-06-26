

class DocumentService {
    constructor(model) {
        this.model = model;
    }

    async createMultipleDocumentEntries(documents) {
        try {
            const result = await this.model.insertMany(documents);

            return result;
        } catch (error) {
            console.error("Error creating multiple document entries:", error);
            throw error;
        }
    }
}

export default DocumentService;