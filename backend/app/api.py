from pydantic import BaseModel

from app.main import app


class SignUpRequestBody(BaseModel):
    username: str
    password: str


@app.post('/auth/sign-up')
def sign_up(request: SignUpRequestBody):
    sign_up_body = request.model_dump()
    print(sign_up_body)
