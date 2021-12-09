import { fadeIn, fadeOut } from "./fadeInFadeOut.js";
const selectElements = document.querySelectorAll(".select-nested-input")
const nestedInputs = [...document.querySelectorAll(".select-nested-input__option")]

const disableAllChildren = (element) => {
    let children = [... element.children]
    
    children.forEach(ele => {
        if (ele.tagName == "INPUT" || ele.tagName == "SELECT" || ele.tagName == "TEXTAREA") {
             ele.setAttribute('disabled', true)
        }
    })
}
const enableAllChildren = (element) => {
    let children = [... element.children]

    children.forEach(ele => {
        if (ele.tagName == "INPUT" || ele.tagName == "SELECT" || ele.tagName == "TEXTAREA") {
             ele.removeAttribute('disabled')
        }
    })
}

export const selectNestedInputHandlder = () => {
    selectElements.forEach(select => {
        let selectOptions = nestedInputs.filter(input => input.dataset.selectName === select.name);
        select.addEventListener("change", function () {
            selectOptions.forEach(optionElement => {
               
                fadeOut(optionElement)
                disableAllChildren(optionElement)
                if (optionElement.dataset.option === select.value) {
                    enableAllChildren(optionElement)
                    fadeIn(optionElement)
                
                }
            })
        })
    });
}


