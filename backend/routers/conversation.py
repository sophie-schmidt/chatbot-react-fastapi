from fastapi import APIRouter

from crud.conversations import generic_answer, add_message, get_conversation as _get_new_conversation

import time, random


router = APIRouter()

# Endpoint to get the current conversation
@router.get("/session-chat/")
async def get_conversation():
    return {"conversation": _get_new_conversation()}

# Endpoint to ask the agent a question
@router.post("/ask-agent/")
async def ask_agent(question: str):
    # Add user question to conversation
    add_message(question)
    # Simulate thinking time
    time.sleep(random.randint(2, 10))
    # Add generic answer to conversation
    add_message(generic_answer, isUser=False)

    return {"response": generic_answer}