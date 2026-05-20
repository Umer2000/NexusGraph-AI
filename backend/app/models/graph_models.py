from pydantic import BaseModel
from typing import List


class Entity(BaseModel):
    name: str
    type: str


class Relationship(BaseModel):
    source: str
    target: str
    relationship: str


class GraphExtractionResult(BaseModel):
    entities: List[Entity]
    relationships: List[Relationship]