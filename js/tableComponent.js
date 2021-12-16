class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.api = 'http://141.94.27.118:8080/api';

        document.addEventListener("newData",( event =>{
            this.loadData();
        }));

        document.addEventListener("newUrl",( event =>{
            this.setAttribute('url', this.api + event.detail.url);
        }));
    }

    static get observedAttributes() { return ['url']; }

    connectedCallback() {
        this.loadData();
    }

    attributeChangedCallback(){
        this.loadData();
    }

    loadData() {
        let url = this.getAttribute('url');
        console.log("getting table...")
        fetch(url, {
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
            this.data = json.data.data;
            this.createTable("users_table", json.data.data);
            console.log(this.data)
            this.tableAddEditButton("users_table")
        }).catch(error =>console.log(error));
    }
    createTable(containerId, arrObj) {
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
    tableAddEditButton(containerId) {
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

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        td, th {
            padding: 0.7em 0.3em;
            text-align: center;
            color: white; }
          
          td {
            word-break: break-all;
            width: 30%; }
          
          th {
            height: 1em;
            color: #6edeef; }
          
          .table-num {
            width: 8%; }
          
          .button-edit {
            width: 10%;
            cursor: pointer; }
          
          .button-edit-color:after {
            background-color: rgba(255, 255, 255, 0.5); }
          
          .button-edit:after {
            width: 20px;
            height: 20px;
            display: inline-block;
            content: '';
            -webkit-mask: url(/svg/edit.svg) no-repeat 50% 50%;
            mask: url(/svg/edit.svg) no-repeat 50% 50%;
            -webkit-mask-size: cover;
            mask-size: cover; }
          
          .button-edit.button-edit-color:hover:after {
            background-color: white;
            position: relative;
            top: -1px; }
          
          table {
            table-layout: fixed;
            width: 100%;
            margin: 30px 0 0 0;
            background: #545f60;
            border-radius: 8px;
            -webkit-box-shadow: 2px 8px 25px -2px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 2px 8px 25px -2px rgba(0, 0, 0, 0.3);
            box-shadow: 2px 8px 25px -2px rgba(0, 0, 0, 0.3);
            border: none; }
            table tr:nth-child(even) td {
              background: #788383; }
            table > tbody > tr:last-child {
              border: none; }
          
        </style>
        <div id="users_table">hola</div> `;      
        
    }

    
}

customElements.define('table-component', Table);