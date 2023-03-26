import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw"
import { renderTodos, renderPending } from "./use-cases";

const ElementIDs = {
    todoList: '.todo-list',
    newTodoInput: '#new-todo-input',
    clearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    pendingCount: '#pending-count'
}

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter())
        renderTodos(ElementIDs.todoList, todos)
        updatePendingCount()
    }

    const updatePendingCount = () => {
        renderPending(ElementIDs.pendingCount)
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos()
    })();

    //Referencias HTML
    const d = document,
        newDescriptionInput = d.querySelector(ElementIDs.newTodoInput),
        todoListUL = d.querySelector(ElementIDs.todoList),
        clearCompletedButton = d.querySelector(ElementIDs.clearCompleted),
        filtersLIs = d.querySelectorAll(ElementIDs.TodoFilters)


    //LIsteners
    newDescriptionInput.addEventListener('keyup', (e) => {
        if (e.keyCode !== 13) return;
        if (e.target.value.trim().length === 0) return;

        todoStore.addTodo(e.target.value);
        displayTodos()
 
        e.target.value = ''
    })

    todoListUL.addEventListener('click', (e) => {
        //seleciona el elemento padre mas cercano especificado
        const element = e.target.closest("[data-id]");
        const elementID = element.getAttribute('data-id');
        todoStore.toggleTodo(elementID)

        //Eliminat un todo
        if (e.target.matches('.destroy'))
            todoStore.deleteTodo(elementID);

        displayTodos();

    })

    clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompletado()
        displayTodos()
    })

    filtersLIs.forEach(element => {
        element.addEventListener('click', (element) => {
            filtersLIs.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch (element.target.dataset.filtro) {
                case "All":
                    todoStore.setFilter(Filters.All)
                    break;
                case "Pending":
                    todoStore.setFilter(Filters.Pending)
                    break;
                case "Completed":
                    todoStore.setFilter(Filters.Complited)
                    break;
            }
            displayTodos()
        })

    })
}