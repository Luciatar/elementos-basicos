import { fadeIn, fadeOut } from "./fadeInFadeOut.js";
const selectElements = document.querySelectorAll(".select-nested-input")
const nestedInputs = [...document.querySelectorAll(".select-nested-input__option")]

export const selectNestedInputHandlder = () => {
    selectElements.forEach(select => {
        let selectOptions = nestedInputs.filter(input => input.dataset.selectName === select.name);
        select.addEventListener("change", function () {
            selectOptions.forEach(optionElement => {
                fadeOut(optionElement)
                if (optionElement.dataset.option === select.value) {
                    fadeIn(optionElement)
                }
            })
        })
    });
}