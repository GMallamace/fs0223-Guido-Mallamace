import { Todo } from "./models/todo"
import axios from "axios"

export async function getTodos():Promise<Todo[]>{
    return await (await fetch('assets/db.json')).json()
    
}
export async function getTodosWithAxios():Promise<Todo[]>{
    const ris = (await axios.get<Todo[]>('assets/db.json')).data
    return ris
}