import { Todo } from "../todos/models/todo.model"

export const Filters = {
    All: 'all',
    Complited: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('piedra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
     loadStore();
    console.log('initStore ;)')
}

const getTodos = (filter = Filters.All) => {
    switch(filter){
        case Filters.All:
            return [...state.todos];

        case Filters.Complited:
            return state.todos.filter(todo => todo.done); 

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);

        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return

    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter
}

const saveStateTolocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state))
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if(!description) throw new Error('Description is required');
    state.todos.push(new Todo(description))

    saveStateTolocalStorage();
}

const toggleTodo = (todoId) => {
  
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId){
            todo.done = !todo.node
        }
        return todo;
    })

    saveStateTolocalStorage()
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
    saveStateTolocalStorage()
}

const deleteCompletado = () => {
    state.todos = state.todos.filter(todo => !todo.done)
    saveStateTolocalStorage()
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter
    saveStateTolocalStorage()
}

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    initStore,
    getTodos,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompletado,
    setFilter,
    getCurrentFilter,
}