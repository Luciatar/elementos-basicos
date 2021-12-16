import { getFingerprint } from "./clientId.js";
import { ckEditorsFormDataAppendAll } from "./ckEditor.js";


export const formHandler = () => {

    const form = document.getElementById("crud__user-form");
    const submitButton = document.getElementById("submit");
    const formElements = [...document.getElementsByClassName("crud__user-form-input")]
    formElements.forEach(element => {
        if (element.tagName == "INPUT" || element.tagName == "SELECT") {
            element.addEventListener("click", function () {
                element.classList.remove("invalid-input")
            })
        }
    });
    submitButton.addEventListener("click", function (e) {

        e.preventDefault()

        if (submitButton) {


            let url = form.action;

            let data = new FormData(form);
            data.append("fingerprint", getFingerprint());
           
              console.log(data.get("name"))
            let sendPostRequest = async () => {
                
               
                let request = await fetch(url, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    method: 'POST',
                    body: data
                })
                    .then(response => {
                        if (!response.ok) throw response;

                       
                        return response.json();
                    })
                    .then(json => {
                     
                        let text = `Usuario ${data.get("name")} ha sido creado con exito.`
                        console.log(text)
                        form.dispatchEvent(new CustomEvent('modalbox', { bubbles: true, detail: {msg: text, color: "info"} }))
                       
                        form.dispatchEvent(new CustomEvent('modalbox', { bubbles: true, detail: {msg: text, displaytime: 2000, position:"bottom", color: "danger"} }))
                        form.dispatchEvent(new CustomEvent('modalbox', { bubbles: true, detail: {msg: text, displaytime: 2000, position:"top", color: "warning"} }))

                    })
                    .catch(error => {

                        if (error.status == '400') {

                            error.json().then(jsonError => {
                               
                                let errors = jsonError.data;

                                Object.keys(errors).forEach((key) => {
                                    
                                    document.querySelector(`[name=${key}]`).classList.add("invalid-input")
                                    document.querySelector(`[name=${key}]`).placeholder = errors[key][0];
                                })


                            })
                        }

                        if (error.status == '500') {

                            error.forEach(element => {
                                console.log(element);
                            });


                        }
                    });

                // En caso de usar Axios

                // let request = await axios.post(url, json)
                // .then(response => {
                //     console.log(response);
                // })
                // .catch(error => {

                //     if(error.response.status == '400'){

                //         let errors = error.response.data.data;      
                //         let errorMessage = '';

                //         Object.keys(errors).forEach( (key) => {
                //             let errorMessage = document.createElement('li');
                //             errorMessage.textContent = errors[key];
                //             console.log(errorMessage)
                //         })

                //         console.log(errorMessage);
                //     }

                //     if(error.response.status == '500'){
                //         console.log(error);
                //     }
                // });
            };

            sendPostRequest();
        }
    })
}