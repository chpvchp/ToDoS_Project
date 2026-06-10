from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class ToDoS(BaseModel):
    title: str


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_headers=["*"],
    allow_methods=["*"]
)

list_todo = []
id_todo = 0

@app.get("/todos")
def get_todo():
    global list_todo
    return list_todo

@app.post("/todos")
def create_todo(todo: ToDoS):
    global list_todo, id_todo
    new_todo = {
        "id": id_todo,
        "title": todo.title
    }
    id_todo += 1
    list_todo.append(new_todo)
    return new_todo

@app.delete("/todos/{id_todo}")
def delete_todo(id_todo: int):
    global list_todo
    list_todo = [todo for todo in list_todo if todo["id"] != id_todo]
    return list_todo

@app.put("/todos/{id_todo}")
def edit_todo(id_todo: int, todo: ToDoS):
    global list_todo
    
    todo_edit = {
        "id": 0,
        "title": "none"
    }
    
    for todo_ in list_todo:
        if todo_["id"] == id_todo:
            todo_["title"] = todo.title
            todo_edit["id"] = id_todo
            todo_edit["title"] = todo.title
            
    return todo_edit