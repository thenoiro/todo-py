import os
from pathlib import Path
from dotenv import load_dotenv
from sqlalchemy import create_engine

dotenv_path = Path(__file__).parent.parent.absolute() / '.env'
load_dotenv(dotenv_path)

DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_NAME = os.getenv('DB_NAME')
DB_PORT = os.getenv('DB_PORT')
DB_HOST = os.getenv('DB_HOST')
SECRENT = os.getenv('SECRET')

DB_URL = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'

engine = create_engine(DB_URL)
