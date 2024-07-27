
const { GenerativeAI } = require('@hypothetical/generative-ai');

const API_KEY = "AIzaSyBPApdKb6Ug34oJzStDQyvYic2-6jpPyXE";
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    })
    const prompt = 'Write a Story about sun'
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();