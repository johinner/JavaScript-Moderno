import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponent } from './src/concepts/01-environments'
import {callbacksComponent} from './src/concepts/02-callbacks'
import { promiseComponet } from './src/concepts/03-promises'
import { promiseRaceComponent } from './src/concepts/04-promise-race'
import { asyncComponent } from './src/concepts/05-async'
import { asyncAwaitComponent } from './src/concepts/06-async-await'
import { forAwaitComponent } from './src/concepts/07-for-await'
import { generatorFunctionsComponent } from './src/concepts/08-generators'
import { generatorsAsyncComponent } from './src/concepts/09-generators-async'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
     
    </div>
  </div>
`
const element = document.querySelector('.card')
//environmentsComponent(element);
//callbacksComponent(element);
//promiseComponet(element);
//promiseRaceComponent(element)
//asyncComponent(element);
//asyncAwaitComponent(element)
//forAwaitComponent(element)
//generatorFunctionsComponent(element)
generatorsAsyncComponent(element)
