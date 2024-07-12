import DocumentService from "../services/documentService.js";
import * as natural from "natural";
import path from "path";
import {fileURLToPath} from "url";
import fs from "fs";
import tf from '@tensorflow/tfjs-node';


const documentS = new DocumentService();
const tokeniser = new natural.WordTokenizer();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export async function preprocessItemSamplesIntake() {
    try {
        const tokenIndex = {};
        const documents = await documentS.getDocuments();

        const descriptions = documents.map((item) => item.item_description.toLowerCase());
        const tokenisedDescriptions = descriptions.map((desc) => tokeniser.tokenize(desc));

        const allTokens = [...new Set(tokenisedDescriptions.flat())];
        allTokens.forEach((token, idx) => (tokenIndex[token] = idx));

        const saveDir = path.join(__dirname, '/tokens');

        if (!fs.existsSync(saveDir)) {
            fs.mkdirSync(saveDir, {recursive: true});
        }
        fs.writeFileSync(path.join(saveDir, 'tokenisedData.json'), JSON.stringify({allTokens, tokenIndex}));

        const vectorisedText = (text) => {
            const vector = Array(allTokens.length).fill(0);

            text.forEach((token) => {
                if(tokenIndex[token] !== undefined) {
                    vector[tokenIndex[token]] = 1;
                }
            });
            return vector;
        }

        const features = tokenisedDescriptions.map(vectorisedText);
        const quantities = documents.map((item) => item.quantity);
        const prices = documents.map((item) => item.price);

        // Mind the gap lad, we'll have 3 types of categories, and Debit and Credit;
        const X = features.map((feature, idx) => [...feature, quantities[idx], prices[idx]]);
        const yAccountCode = documents.map((item) => parseInt(item.account_code, 10));
        const yTaxPercentage = documents.map((item) => item.tax_percentage);

        const numSamples = X.length;
        const numFeatures = X[0].length;


        const numAccountClasses = Math.max(...yAccountCode) + 1;
        const numTaxClasses = Math.max(...yTaxPercentage) + 1;

        const yAccountOneHot = tf.oneHot(yAccountCode, numAccountClasses);
        const yTaxOneHot = tf.oneHot(yTaxPercentage, numTaxClasses);

        return {
            X: tf.tensor2d(X, [numSamples, numFeatures]),
            yAccount: yAccountOneHot,
            yTax: yTaxOneHot,
        };
    } catch (exception) {
        console.error(
            'An error occurred during the preprocessing of data for training the AI model for automatic invoice classification:',
            exception.message,
        );
    }
}