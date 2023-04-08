import { User } from "./models/user";
import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-button";
import { renderModald } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store"
import { saveUser } from "./use-cases/save-user";

/**
 * 
 * @param {HTMLDivElement} Element 
 */
export const UsersApp = async(element)=> {
    element.innerHTML = 'Loading...'
    await usersStore.loadNextPage()

    renderTable(element)
    renderButtons(element)
    renderAddButton(element)
    renderModald(element, async(userLike) => {
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        renderTable(element);
    })
}