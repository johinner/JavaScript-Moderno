/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseRaceComponent = (element) => {
    element.innerHTML = "Loadind..."
    
    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        midiumPromise(),
        fastPromise(),
        fastPromise(),
        midiumPromise(),
        slowPromise(),
    ]).then(renderValue);

}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("Slow Promise")
    }, 2000)
})


const midiumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("Midium Promise")
    }, 1500)
})


const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("Flast Promise")
    }, 1000)
})