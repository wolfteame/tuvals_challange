from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

import requests
import json

app = FastAPI()



origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    item_name: str | None = "Unknown"
    item_price: float | None = 0


@app.get("/all_items/items")
def GET_all_items():
    res = requests.get("http://localhost:8000/all_items/items")
    return json.loads(res.text)
    

@app.post("/add_item")
def POST_add_item(item: Item):
    requests.post(f"http://localhost:8000/add_item/{item.item_name}/{item.item_price}")




app.mount("/", StaticFiles(directory="build",html=True), name="static")

