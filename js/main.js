let speech = new SpeechSynthesisUtterance();

let input = document.querySelector(".input")
let type = document.querySelector(".type")
let listen = document.querySelector(".listen")

listen.addEventListener("click", () =>{
    speech.text = input.value;
    window.speechSynthesis.speak(speech)
})