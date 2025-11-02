# backend/schemas/__init__.py
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .conversation import Message, Conversation

__all__ = ["conversation"]
from . import conversation