import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import "./render-buttons.css";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev ';

    const currentPageLable = document.createElement("span");
    currentPageLable.id = 'current-page'
    currentPageLable.innerText = usersStore.getCurrentPage();

    element.append(prevButton, currentPageLable, nextButton);

    nextButton.addEventListener("click", async() => {
        await usersStore.loadNextPage();
        currentPageLable.innerHTML = usersStore.getCurrentPage()
        renderTable(element);
    })

    prevButton.addEventListener("click", async() => {
        await usersStore.loadPreviousPage();
        currentPageLable.innerHTML = usersStore.getCurrentPage()
        renderTable(element);
    } )
}