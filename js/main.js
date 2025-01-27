
let input = document.querySelector(".input")
let type = document.querySelector(".type")
let listen = document.querySelector(".listen")

let speech = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (type.options[i] = new Option(voice.name, i)));
}
type.addEventListener("change", ()=>{
    speech.voice = voices[type.value];
})

listen.addEventListener("click", () => {
    speech.text = input.value;
    window.speechSynthesis.speak(speech)
});
