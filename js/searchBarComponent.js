class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.api = this.getAttribute("url");
        this.data = [
            {
                "id": 1,
                "name": "Juana",
                "lastname": "Jonzalez"
            },
            {
                "id": 2,
                "name": "Jose",
                "lastname": "Perez"
            },
            {
                "id": 3,
                "name": "Pedro",
                "lastname": "Gonzalez"
            },
            {
                "id": 4,
                "name": "Maria",
                "lastname": "Suarez"
            },
        ];
        this.filter

        this.render()
        this.shadow.querySelector("input").addEventListener("input", ( event =>{
            let filter = this.shadow.querySelector("#search-input").value.toLowerCase()
            document.dispatchEvent(new CustomEvent('newfilter', { bubbles: true, detail: { text: filter } }))
          
        
            
        }) )
        

        // this.search();
    }


    connectedCallback() {
        this.filter = this.shadow.querySelector("#search-input").value.split(" ")
        console.log(this.shadow.querySelector("input"))
        // this.filter = this.shadow.querySelector("input").value.split(" ")
        

    }

    attributeChangedCallback() {

    }
    



    // search() {
    //     console.log(this.data)
    //    let filter = this.filter
    //     console.log(filter)
    //     for (let i = 0; i < this.data.length; i++) { this.data[i].score = 0 }
    //     console.log(this.data)
    //     console.log("filter::" + filter)
    //     for (let i = 0; i < this.data.length; i++) {
    //         this.data.forEach(object => {
    //             for (const [key, value] of Object.entries(object)) {
    //                 //   if(value === valueToFind){
    //                 //     res.push(item)
    //                 //   }
    //                 for (let j = 0; j < filter.length; j++) {
    //                     console.log("filter.length::"+filter.length)
    //                     if (String(value).toLowerCase().includes(filter[j])) {
    //                         object.score = object.score + 1;
    //                     }
    //                 }
    //                 console.log(this.data[i].name +'::' + this.data[i].score);
    //             }
    //         })
    //     };
    //     this.data.sort(function (a, b) { return b.score - a.score });
    //     console.log(this.data);
    // }

    // filterByObjValue = (arrayOfObj, valueToFind) => {
    //     let res = []
    //     arrayOfObj.forEach(item => {
    //         for (const [key, value] of Object.entries(item)) {
    //             if (value === valueToFind) {
    //                 res.push(item)
    //             }
    //         }
    //     });
    //     return res
    // }

    render() {

        this.shadow.innerHTML =
            `
        <style>
        div{
           margin: 1rem auto;
           width: 100%;
           display: grid;
           place-item: center;

          }
          input{
           box-sizing: border-box;
            width: 100%;
            padding: 20px;
            border-radius: 8px;
          }
        
        </style>
        <div>
            <input id="search-input" type="text" name="" placeholder="Search...">
        </div>`


    }


}

customElements.define('search-bar-component', SearchBar);