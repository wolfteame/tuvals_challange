from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from DB_Request import sql_request


app = FastAPI()

origins = [
    "http://localhost:5000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/all_items/items")
def GET_all_items():
    db = sql_request()
    return db.get_table("items")
    

@app.post("/add_item/{item_name}/{item_price}")
def POST_add_item(item_name,item_price):
    db = sql_request()
    db.add_new_item(table_name="items",new_item_name=item_name ,new_item_price=item_price)



