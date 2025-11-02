import { Conversation } from "@lib/ConversationEntity";
import { MessageEntity } from "@lib/MessageEntity";

import { fetchConversation, sendMessageToAgent } from "@api/chat_endpoints";

/*
    ConversationStore
    Manages the state and operations related to conversations and messages.
*/

/* Retrieves the current conversation from the backend */
async function getConversation$(): Promise<Conversation | null> {
    return await fetchConversation();
}

/* Posts a question to the agent and retrieves the response */ 
async function postQuestionToAgent$(question: string): Promise<string | null> {
    return sendMessageToAgent(question);
}

/* Adds a message to the current conversation */
async function addMessage(message:MessageEntity) {
    const conversation = await getConversation$();
    if (conversation) {
        conversation.messages.push(message);
    }
    return conversation;
}

/* Caches the conversation locally (not implemented) */
function putConversationCache(conversation: Conversation) {
    // TODO: implement if needed
}

/* ConversationStore object exposing conversation management functions */
export const ConversationStore = {
    getConversation$,
    postQuestionToAgent$,
    addMessage
};