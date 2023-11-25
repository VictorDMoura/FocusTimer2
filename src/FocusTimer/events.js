import { controls, themes } from "./elements.js";
import * as actions from "./actions.js"

export function registersConstrols(){
    controls.addEventListener('click', (e) =>{
        const action = e.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }
        actions[action]()
    })    
}


export function themeControls(){
    themes.addEventListener('click', (e) => {
        const action = e.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }
        actions[action]()
    })
}