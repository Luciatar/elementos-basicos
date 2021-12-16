import { getFingerprint } from './clientId.js';
import "./modalBoxComponent.js"
export let renderForm = () => {

    let loginForm = document.getElementById("login-form");
    let loginButton = document.getElementById("login-button");

    if (loginButton) {
        loginButton.addEventListener("click", (event) => {
            // const formData = new FormData(loginForm);
            // for (var pair of formData.entries()) {
            //     console.log(pair[0] + ', ' + pair[1]);
            // }
            event.preventDefault();

            let url = loginForm.action; //cambiado form.action por loginForm.action
            let data = new FormData(loginForm);
            data.append("fingerprint", getFingerprint());

            let sendPostRequest = async () => {
                let request = await fetch(url, {
                    method: 'POST',
                    body: data
                })
                    .then(response => {
                        if (!response.ok) throw response;


                        return response.json();
                    })
                    .then(json => {
                        localStorage.setItem('token', json.data);
                        let text= data.get("email") + " logged in";
                        document.dispatchEvent(new CustomEvent('modalbox', { bubbles: true, detail: {msg: text, displaytime: 5000, position: "bottom-right", color: "success"} } ))
                        
                    })
                    .catch(error => {
                        if (error.status == '400') {
                            error.json().then(jsonError => {
                                let errors = jsonError.data;
                                console.log(errors)
                                // Object.keys(errors).forEach((key) => {
                                //     let errorMessage = document.createElement('li');
                                //     errorMessage.textContent = errors[key];
                                //     console.log(errorMessage)
                                // })
                            })
                        }

                        if (error.status == '500') {
                            console.log(error);
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

        });
    }
};

renderForm()