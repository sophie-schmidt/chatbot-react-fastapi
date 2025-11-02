# backend/crud/__init__.py
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    # for IDEs and static type checkers only — no runtime import
    from ..schemas.conversation import Message, Conversation

__all__ = ["conversations"]
from . import conversations