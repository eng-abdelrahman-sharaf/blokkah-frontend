import axios from "axios";

async function getCustomChatbotResponse(userMessage) {
    try {
        const response = await axios.post(openaiEndpoint, {
            model: "gpt-4",
            messages: [
                {
                    role: "system", 
                    content: "You are a knowledgeable assistant named Ayedh. You give detailed explanations and prefer formal language."
                },
                {
                    role: "user", 
                    content: userMessage
                }
            ],
            max_tokens: 200,
            temperature: 0.5,
            top_p: 0.9,
            frequency_penalty: 0.2,
            presence_penalty: 0.1
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        const chatbotMessage = response.data.choices[0].message.content;
        console.log("Ayedh:", chatbotMessage);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
}

// Example usage:
getCustomChatbotResponse("Tell me about artificial intelligence.");
