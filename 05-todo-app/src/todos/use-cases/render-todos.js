import { createTodoHtml } from "./index";
import { Todo } from "../models/todo.model";

let element

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {
    // Elemento no existe
    if (!element)
        element = document.querySelector(elementId);

    if(!element) throw new Error(`Element ${elementId} not found`);

    element.innerHTML = "";

    todos.forEach(todo => {
        element.append(createTodoHtml(todo))
    });
}