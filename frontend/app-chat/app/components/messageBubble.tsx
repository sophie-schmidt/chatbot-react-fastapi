import { MessageEntity } from "../lib/MessageEntity";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import Moment from 'moment';

/*
    MessageBubble Component
    Renders an individual chat message bubble with styling based on the sender.
*/
export function MessageBubble({ message, index }: { message: MessageEntity; index: number }) {
    return (
        <div className={`relative flex ${message.is_user ? 'send-chat justify-end' : 'receive-chat justify-start'}`}>
            <div className={`mb-2 text-base max-w-[80%] rounded font-light`}>
                <div className={`px-2 py-2 mb-1 text-sm w-fit rounded font-light ${message.is_user ? 'bg-violet-400 text-white' : 'bg-violet-200 text-slate-500'}`}><p>{message.content}</p></div>
                <div className="flex items-end justify-end text-xs text-gray-400">
                    { message.timestamp ?  Moment.unix(message.timestamp).format('LTS')  : (<FontAwesomeIcon icon={faSpinner} spin/>)}
                </div>
            </div>
        </div>
    );
}