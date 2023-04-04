/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorFunctionsComponent = (element) => {
    
/*     const myGenerator = MyFirstGeneratorFunction();
    console.log(myGenerator.next())
    console.log(myGenerator.next()) */
    const getId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const {value} = getId.next();
        button.innerText = `Click ${value}`
    }

    button.addEventListener('click', renderButton)
}

function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

function* MyFirstGeneratorFunction(){

    yield 'Primer valor'
    yield 'Segundo valor'
    yield 'Tercer valor'

    return 'No hay valores'
}