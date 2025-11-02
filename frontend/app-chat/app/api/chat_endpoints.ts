
import { apiConfig } from "./apiConfig";
import { Conversation } from "@lib/ConversationEntity";

/*  Response interfaces for type safety */
interface ConversationResponse {
  conversation: Conversation;
}
interface AgentResponse {
  response: string;
}

/* Fetches the list of conversations (not implemented) */
async function fetchConversationsList(): Promise<void> {}

/*  Fetches a specific conversation by ID or the current conversation if no ID is provided */
async function fetchConversation(id?:number): Promise<Conversation | null> {

    try {
        const response = await fetch(
            `${apiConfig.API_URL}/session-chat/`
        );
        if (!response.ok) {
        throw new Error("Failed to fetch data");
        }
        const chat:ConversationResponse = await response.json();
        return chat.conversation;

    } catch (error) {
        console.error("Error fetching conversation:", error);
        return null;
    }

}

/* Sends a message to the agent and retrieves the response */
async function sendMessageToAgent(question: string): Promise<string | null> {

    try {
        const response = await fetch(
            `${apiConfig.API_URL}/ask-agent/?question=${question}`,
            { 
                method: 'POST'
            }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const agentResp:AgentResponse = await response.json();
        return agentResp.response;

    } catch (error) {
        console.error("Error fetching agent response:", error);
        return null;
    }

}   


export { fetchConversation, sendMessageToAgent}