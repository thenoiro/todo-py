from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)


class SignUpRequestBody(BaseModel):
    username: str
    password: str


@app.post('/auth/sign-up')
def sign_up(request: SignUpRequestBody):
    sign_up_body = request.model_dump()
    print(sign_up_body)
