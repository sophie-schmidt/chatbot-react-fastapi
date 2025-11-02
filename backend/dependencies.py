from typing import Annotated, List
from fastapi import Depends

from .crud.conversations import messages as messages_fixture
from .schemas.conversation import Message


async def get_messages() -> List[Message]:
    """Dependency that provides access to messages.
    
    Currently returns fixture data, but could be modified to fetch from a database.
    """
    # Convert raw dicts to Pydantic models for validation/serialization
    return [Message(**msg) for msg in messages_fixture]


# Type alias for cleaner route signatures
Messages = Annotated[List[Message], Depends(get_messages)]


# Example usage in routers/conversation.py:
# @router.get("/messages")
# async def read_messages(messages: Messages) -> List[Message]:
#     return messages


"""
from typing import Annotated
from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session

# Database session dependency (when you add SQLAlchemy)
async def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

DB = Annotated[Session, Depends(get_db)]

# Authentication dependency (when you add auth)
async def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
    user = validate_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
        )
    return user

CurrentUser = Annotated[User, Depends(get_current_user)]

"""