import { clientId } from "./clientId.js";
import {  ckEditorsFormDataAppendAll } from "./ckEditor.js";
export const formHandler = () => {
    const formEle = document.querySelector("#crud__user-form")
    const submitButt = document.querySelector(".crud__store-button")

    submitButt.addEventListener("click", function (e) {
        submitForm()
        // e.preventDefault()
    })


    function submitForm() {
        const formData = new FormData(formEle);
        formData.append("fingerprint", clientId());
        ckEditorsFormDataAppendAll(formData);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
    }
}