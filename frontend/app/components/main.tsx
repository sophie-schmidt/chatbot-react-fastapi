'use client';

import { useState } from "react";

import { UserInfoHeader } from "@components/userInfoHeader";
import { ChatWindow } from "@components/chatWindow";
import { InputToAgent } from "@components/InputToAgent";

import { Conversation } from "@lib/ConversationEntity";
import { ConversationStore } from "@stores/conversationStore";
import { MessageEntity } from "@lib/MessageEntity";

/*
    Main Component
    The main chat interface component that manages conversation state and user interactions.
*/  
export function Main({initialConversation}: {initialConversation:Conversation | null}) {
    const [conversation, setConversation] = useState(initialConversation);
    const [waitForAgent, setWaitForAgent] = useState(false);

    const updateConversation = async (userInput: string) => {
        setWaitForAgent(true);

        // Add user message to conversation with timestamp
        const conv = await ConversationStore.addMessage({
            content: userInput,
            is_user: true,
            timestamp: Math.floor(Date.now() / 1000)
        } as MessageEntity);
        setConversation(conv); 

        ConversationStore.postQuestionToAgent$(userInput).then((response) => {
            const updatedConversation = ConversationStore.getConversation$();
            updatedConversation.then((conv) => {
                setConversation(conv);
                setWaitForAgent(false);
            });
        });
    };
    
    return (
        <div className="basis-4/6">

            <div className="h-full">
                <UserInfoHeader />
                <ChatWindow conversation={conversation} />
            </div>  

             <div className="bg-gray-100 fixed bottom-0 w-full pl-4">
                <InputToAgent onAction={updateConversation} disabled={waitForAgent} />
            </div> 

        </div>
    );
}