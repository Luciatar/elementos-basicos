class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.api = this.getAttribute("url");
        this.data
        this.score = []
        this.filteredData 
        this.filter

        document.addEventListener("newData", (event => {
            this.loadData();
        }));
        document.addEventListener("newUrl", (event => {
            this.setAttribute('url', this.api + event.detail.url);
        }));
        document.addEventListener("newfilter", (event => {
            this.filter = event.detail.text.split(" ")
            this.filter = this.filter.filter(word => word.length > 0)
            this.filteredData = this.data
            if (this.filter.length > 0) {
                this.search()
            }
         
            this.render()
        }));


    }

    static get observedAttributes() { return ['url']; }

    connectedCallback() {

        this.loadData();
    }

    attributeChangedCallback() {
        this.loadData();
    }

    loadData() {
        let url = this.getAttribute('url');
        fetch(url, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            },

        }).then(response => {

            if (!response.ok) throw response;

            return response.json();
        }).then(json => {
            this.data = json.data;
    
            this.filteredData = this.data
            this.render()
            // this.tableAddEditButton("users_table")
        }).catch(error => console.log(error));
    }

    createTable() {
        const table = document.createElement("table");
        const tableHead = document.createElement("tr");
        var keys = Object.keys(this.data[0]);
        keys.forEach(key => {
            let newTh = document.createElement("th");
            newTh.innerText = key[0].toUpperCase() + key.substring(1)
            tableHead.appendChild(newTh);
        });
        table.appendChild(tableHead);
        this.filteredData.forEach((row) => {
            let newRow = document.createElement("tr")
            for (const [key, value] of Object.entries(row)) {
                let newTd = document.createElement("td")
                newTd.innerText = value
                // console.log(`${key}: ${value}`);
                newRow.appendChild(newTd)
            }
            let button = document.createElement("td");
            button.classList.add("button-edit", "button-edit-color")
            // console.log(`${key}: ${value}`);
            button.addEventListener("click", async function () {
                console.log(row.id)
                document.dispatchEvent(new CustomEvent('showElement', {
                    detail: {
                        url: this.getAttribute('url') + '/' + row.id,
                    }
                }));
            })
            newRow.appendChild(button)
            table.appendChild(newRow);
        });
        let button = document.createElement("td");
        button.classList.add("button-edit")
        table.children[0].appendChild(button)
        return table;
    }

    search() {
        this.filteredData=[]
        let filter = this.filter
        for (let i = 0; i < this.data.length; i++) {
            this.score[i] = { place: i, score: 0 }
            for (const [key, value] of Object.entries(this.data[i])) {
                for (let filterWordIndex = 0; filterWordIndex < filter.length; filterWordIndex++) {
                    let lowerCaseValue = String(value).toLowerCase()
                    if (lowerCaseValue.includes(filter[filterWordIndex])) {
                        this.score[i].score += 10;
                    }
                    let splitValue = lowerCaseValue.split("")
                }
            }
        };
        this.score.sort(function (a, b) { return b.score - a.score });
        this.score = this.score.filter(entrie => entrie.score > 0)
        this.score.forEach(element => {
            this.filteredData.push(this.data[element.place])
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
            }
          
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
          
        .button-edit.button-edit-color{
            cursor: pointer;
        }
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
          
        </style>`
        this.shadow.appendChild(this.createTable())
    }


}

customElements.define('table-component', Table);