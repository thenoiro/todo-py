from sqlalchemy import ForeignKey
from sqlalchemy.orm import (
  DeclarativeBase,
  Mapped,
  String,
  List,
  mapped_column,
  relationship,
)


tables = {
    'users': 'users',
    'todos': 'todos',
}
schemas = {
    'Users': 'Users',
    'Todos': 'Todos',
}


class Base(DeclarativeBase):
    pass


class Users(Base):
    __tablename__ = tables.users

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(30))
    password: Mapped[str] = mapped_column(String(30))
    todos: Mapped[List[schemas.Todos]] = relationship(back_populates=tables.todos)


class Todos(Base):
    __tablename__ = tables.todos

    id: Mapped[int] = mapped_column(primary_key=True)
    content: Mapped[str] = mapped_column(String(100))
    user: Mapped[Users] = relationship(back_populates=tables.users)
    user_id = mapped_column(ForeignKey(f'{tables.users}.id'))
