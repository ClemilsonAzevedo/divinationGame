// Variables Declarations
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const hide = "hide"
const random = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")
let xAttempts = 1;

// Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// callback Function
function handleTryClick(event){
  
  // Don´t do it this event
  event.preventDefault()

// Callback Function
  if(Number(inputNumber.value) == random){
    screen1.querySelector("p").innerText = `Divine a number 0 - 10 `
    
    toggleScreen()
  
    screen2.querySelector("h2").innerText = `You hit ${xAttempts} attempts`
  }else{
    screen1.querySelector("p").innerText = `Error, Try Again`
  }

  inputNumber.value = ""
  xAttempts ++
}

// CallBack Function
function handleResetClick(){
  toggleScreen()
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}