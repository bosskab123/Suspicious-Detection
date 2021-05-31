from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel
import uvicorn

app = FastAPI()

@app.get('/')
def index():
    return {'data': {'name':'boss'}}

@app.get('/blog')
def index(limit=10, published : bool = True, sort: Optional[str] = None):

    if published:
        return {'data': f'{published} {limit} blogs'}
    else:
        return {'data': f'{published} {limit} blogs'}

@app.get('/blog/{id}')
def show(id: int):

    return {'data': id}

@app.get('/blog/{id}/comments')
def comments(id):

    return {'data'}

class Blog(BaseModel):
    title: str
    body: str
    published: Optional[bool]

@app.post('/blog')
def  create_blog(req: Blog):
    return {'data': f"Blog is created with title as {req.title}"}

# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=9000)