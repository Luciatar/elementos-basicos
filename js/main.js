const formEle= document.querySelector("#crud__user-form")
const submitButt= document.querySelector(".crud__store-button")
let client = new ClientJS();
let fingerprint = client.getFingerprint(); // Get Client's Fingerprint
submitButt.addEventListener("click", function(e) {
    submitForm()
    e.preventDefault()
})


function submitForm() {
    const formData= new FormData(formEle)
    formData.append("finguerprint", fingerprint)
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }
}

