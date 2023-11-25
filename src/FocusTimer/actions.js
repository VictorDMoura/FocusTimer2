import state from "./state.js"
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export function reset(){
    state.isRunning = false
    state.isRunning = document.documentElement.classList.remove('running')
    timer.updateDisplay()
}


export function plusFiveTimer(){
    let seconds = Number(el.seconds.textContent)
    
    state.minutes += 5
    if(state.minutes > 60){
        state.minutes = 60
    }
    timer.updateDisplay(state.minutes, seconds)
}

export function minusFiveTimer(){
    let seconds = Number(el.seconds.textContent)

    state.minutes -= 5
    if(state.minutes < 0){
        state.minutes = 0
    }
    timer.updateDisplay(state.minutes, seconds)
    
}

function removeSelected(){
    el.florest.classList.remove('selected')
    el.rain.classList.remove('selected')
    el.coffee.classList.remove('selected')
    el.fire.classList.remove('selected')
        
}

export function themeFlorest(){
    const clicked = el.florest.classList.contains('selected')
    removeSelected()
    el.florest.classList.toggle('selected')
    sounds.themeFlorest.play()
    
    if(clicked){
        el.florest.classList.remove('selected')
        sounds.themeFlorest.pause()        
    } 
}

export function themeRain(){
    const clicked = el.rain.classList.contains('selected')
    removeSelected()
    el.rain.classList.toggle('selected')
    if(clicked){
        el.rain.classList.remove('selected')
        sounds.themeRain.pause()        
    } 
}

export function themeCoffeeShop(){
    const clicked = el.coffee.classList.contains('selected')
    removeSelected()
    el.coffee.classList.toggle('selected')
    if(clicked){
        el.coffee.classList.remove('selected')
        sounds.themeCoffee.pause()        
    } 
}

export function themeFire(){
    const clicked = el.fire.classList.contains('selected')
    removeSelected()
    el.fire.classList.toggle('selected')
    if(clicked){
        el.fire.classList.remove('selected')
        sounds.themeFire.pause()        
    } 

}
