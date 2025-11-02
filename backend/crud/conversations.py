from typing import List
from schemas.conversation import Message, Conversation

import time

intro_message = "Bonjour! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui?"  
generic_answer = "Je suis désolé, mais je ne suis connecté à aucun modèle pour l'instant."

conversationID = 1
conversation = None

# Resets the conversation and increments the ID for a new session
def reset_conversation() -> None:
    global conversation
    global conversationID

    conversationID += 1
    conversation = Conversation(id=conversationID, messages=[])

    add_message(intro_message, False)

# Retrieves the current conversation
def get_conversation() -> Conversation:
    return conversation

# Adds a message to the conversation
def add_message(question: str, isUser: bool = True) -> Message:
    message = Message(
        content=question, is_user=isUser, timestamp=time.time()
    )
    conversation.messages.append(message)
    return message

# Initialize the first conversation on module load
reset_conversation()


