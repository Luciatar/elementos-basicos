import { fadeIn, fadeOut } from "./fadeInFadeOut.js";

document.addEventListener("modalbox", function (e) {
    modalBox( e.detail.msg,  e.detail.displaytime, e.detail.position, e.detail.color )
})

export const modalBox = (message, milliseconds, position, color) => {
    
    message = message || "undefined message"
    milliseconds = typeof milliseconds  === "number" ? milliseconds : 5000;
    position = position || "center"
    color = color || "primary"

    const div = document.createElement("div")
    div.innerHTML = message
    div.classList.add("modal-box")
    div.classList.add(position)
    div.classList.add(color)
    div.classList.add("opacity-0")
    document.querySelector("body").appendChild(div)
    fadeIn(div)

    setTimeout(() => {
        
        fadeOut(div)
        setTimeout(() => {
            div.remove()
        }, 250);
    }, milliseconds)
    
}