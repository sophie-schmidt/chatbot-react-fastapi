import { Conversation } from "@lib/ConversationEntity";
import { MessageEntity } from "@lib/MessageEntity";
import { MessageBubble } from "@components/messageBubble";

/*
    ChatWindow Component
    Renders the chat messages within a scrollable window.       
*/
export function ChatWindow({ conversation }: { conversation: Conversation | null }) {
    return (
        <div className="message-area px-10 py-10 h-[80vh]  bg-gradient-to-b from-slate-400 to-transparent overflow-auto">
            <div className="w-full h-fit pointer-events-none">
            {conversation?.messages.map((msg: MessageEntity, index: number) => (
                <MessageBubble key={index} message={msg} index={index} />
            ))}
            </div>
        </div>
    );
}
