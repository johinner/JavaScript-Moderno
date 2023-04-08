import { renderModald } from "../render-modal/render-modal";
import "./render-add-button.css"

/**
 * 
 * @param {HTMLDivElement} element 
 * //@param {() => void}
 */
export const renderAddButton = (element) => {
    const fabButton = document.createElement('button');
    fabButton.innerText = "+";
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    fabButton.addEventListener('click', () => {
        renderModald.showModal()
    })
}