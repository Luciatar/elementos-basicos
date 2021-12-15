let url = "http://141.94.27.118:8080/api/users";
let data = new FormData();

export const getTable = async () => {
    console.log("getting table...")
    return await fetch(url, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },

    }).then(response => {
        // console.log(response);
        // console.log(response.json);
        if (!response.ok) throw response;

        // console.log(response.json);
        return response.json();
    }).then(json => {
        // console.log(json.data);
        createTable("users_table", json.data);
        tableAddEditButton("users_table")
    }).catch(error => {
        // console.log(error);
        if (error.status == "400") {
            error.json().then(jsonError => {
                let errors = jsonError.data;
                console.log(errors);
            })
        }
    })
}

export const getUser = async (id) => {
    console.log("getting user...")
    const userUrl = `${url}/${id}`
    return await fetch(userUrl, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },

    }).then(response => {
        // console.log(response);
        // console.log(response.json);
        if (!response.ok) throw response;

        // console.log(response.json);
        return response.json();
    }).then(json => {
        // console.log(json.data);
        
        return response.json();

    }).catch(error => {
        // console.log(error);
        if (error.status == "400") {
            error.json().then(jsonError => {
                let errors = jsonError.data;
                console.log(errors);
            })
        }
    })
}

function createTable(containerId, arrObj) {
    const container = document.getElementById(containerId);
    const table = document.createElement("table");
    const tableHead = document.createElement("tr");
    var keys = Object.keys(arrObj[0]);
    keys.forEach(key => {
        let newTh = document.createElement("th");
        newTh.innerText = key[0].toUpperCase() + key.substring(1)
        tableHead.appendChild(newTh);
    });
    table.appendChild(tableHead);
    arrObj.forEach((row) => {
        let newRow = document.createElement("tr")
        for (const [key, value] of Object.entries(row)) {
            let newTd = document.createElement("td")
            newTd.innerText = value
            // console.log(`${key}: ${value}`);
            newRow.appendChild(newTd)
        }
        table.appendChild(newRow);
    });
    container.appendChild(table);
}

function tableAddEditButton(containerId) {
    const container = document.getElementById(containerId);
    const table = container.querySelector("table");
    const rows = table.querySelectorAll("tr");

    rows.forEach((row, index) => {
        if (index == 0) {
            let newTd = document.createElement("td");
            newTd.classList.add("button-edit")
            // console.log(`${key}: ${value}`);
            row.appendChild(newTd)
            return;
        }
        const userId = row.childNodes[0].textContent

        let newTd = document.createElement("td");
        newTd.classList.add("button-edit", "button-edit-color")
        // console.log(`${key}: ${value}`);
        newTd.addEventListener("click", async function () {
            getUser(userId) 
              
                // console.log(response);
                // console.log(response.json);
            setFormFieldsUserData("crud__user-form", )
            
        })
        row.appendChild(newTd)
    });
}

function setFormFieldsUserData(formId, userData) {
    const form = document.querySelector("#" + formId)
    console.log("showing")
    for (const [key, value] of Object.entries(userData)) {
        console.log("showing key:"+ key)
        console.log(`${key}: ${value}`);
    
    }

}