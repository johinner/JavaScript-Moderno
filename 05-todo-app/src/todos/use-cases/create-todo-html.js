import { Todo } from "../models/todo.model"
/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHtml = (todo) => {
    if(!todo) throw new Error ("A TODO object is requireed")

    const html = `<h1>${todo.description}</h1>`
    //console.log(todo)

    const liElement = document.createElement('li');
    liElement.innerHTML = html;

    return liElement;
}