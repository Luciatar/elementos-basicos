import {fingerPrint} from "./fingerPrint.js";
export const formHandler = () => {
    const formEle= document.querySelector("#crud__user-form")
    const submitButt= document.querySelector(".crud__store-button")

    submitButt.addEventListener("click", function(e) {
        submitForm()
        e.preventDefault()
    })
    
    
    function submitForm() {
        console.log(fingerPrint());
        // const formData= new FormData(formEle)
        // formData.append("fingerprint", fingerPrint())
        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
    }

}