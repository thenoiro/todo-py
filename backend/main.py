from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine

DB_USER = 'admin'
DB_PASSWORD = '2024#admin'
DB_NAME = 'todopy_db'
DB_PORT = '5432'
DB_HOST = 'localhost'

DB_URL = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'

engine = create_engine(DB_URL)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get('/test')
def get_test():
    return { 'Response': 'Test' }
