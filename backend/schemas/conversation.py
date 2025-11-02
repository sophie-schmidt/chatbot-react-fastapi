from __future__ import annotations

from typing import List, Optional
from pydantic import BaseModel, Field

# Base Message schema
class Message(BaseModel):
    """Schema for a single chat message."""

    content: str
    is_user: bool
    timestamp: Optional[float] = None

    class Config:
        # Useful when returning ORM objects or using .dict()/json()
        orm_mode = True
        schema_extra = {
            "example": {
                "content": "Hello! How can I assist you today?",
                "is_user": True,
                "timestamp": 1698835200.0,
            }
        }

# Base Conversation schema
# Conversation should also be linked to a user in future implementations

class Conversation(BaseModel):
   """Schema for a chat session conversation."""
   
   id: int
   messages: List[Message] = []
   class Config:
      orm_mode = True