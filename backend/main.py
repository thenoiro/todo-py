import os
import psycopg2

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from jose import jwt
from time import time

from sqlalchemy.orm import Session
from sqlalchemy import (
  create_engine,
  text,
  MetaData,
  Table,
  Column,
  Integer,
  String,
  ForeignKey,
)


########################## CONSTANTS ##########################

DB_USER = 'admin'
DB_PASSWORD = '2024#admin'
DB_NAME = 'todopy_db'
DB_PORT = '5432'
DB_HOST = 'localhost'
DB_URL = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'

SECRET = 'SECRET'
EXPIRE = 1000 * 60 * 15


########################## DB ##########################

engine = create_engine(DB_URL)
metadata = MetaData()

table_users = Table(
    'users',
    metadata,
    Column('id', Integer, primary_key=True),
    Column('username', String(30)),
    Column('password', String(30)),
)

table_todos = Table(
    'todos',
    metadata,
    Column('id', Integer, primary_key=True),
    Column('user_id', ForeignKey('users.id'), nullable=False),
    Column('content', String(200), nullable=False),
)

metadata.create_all(engine)

########################## APP ##########################

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)


########################## TYPES ##########################

class SignUpRequestBody(BaseModel):
    username: str
    password: str


########################## API ##########################

@app.post('/auth/sign-up')
def sign_up(request: SignUpRequestBody):
    sign_up_body = request.model_dump()
    print(sign_up_body)

    with Session(engine) as session:
        create_user_request = text("""
            INSERT INTO users (username, password)
            VALUES (:username, :password)
        """)

        session.execute(create_user_request, sign_up_body)
        session.commit()
