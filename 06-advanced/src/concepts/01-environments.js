/**
 * 
 * @param {HTMLDivElement} element 
 */

export const environmentsComponent = (element) => {
    console.log(import.meta.env)
    const html = `variable: `
    element.innerHTML = html
}