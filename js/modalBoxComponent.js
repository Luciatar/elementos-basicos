document.querySelector("body").appendChild(document.createElement("modal-box"));

class ModalBox extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.speed = 200
        this.shadow.innerHTML =
            `
        <style>
        .modal-box.primary {
            color: white;
            background: #0275d8;
        }
        
        .modal-box.success {
            color: white;
            background: #5cb85c;
        }
        
        .modal-box.info {
            color: white;
            background: #5bc0de;
        }
        
        .modal-box.warning {
            color: white;
            background: #f0ad4e;
        }
        
        .modal-box.danger {
            color: white;
            background: #d9534f;
        }
        
        .modal-box.inverse {
            color: white;
            background: #292b2c;
        }
        
        .modal-box.faded {
            color: black;
            background: #f7f7f7;
        }
        
        .modal-box {
            position: fixed;
            padding: 3vw;
            background: #6cddef;
            margin: 2vw;
            font-size: 1.7vw;
            border-radius: 5px;
            filter: opacity(0.94);
            z-index: 100;
            -webkit-box-shadow: 2px 8px 25px -2px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 2px 8px 25px -2px rgba(0, 0, 0, 0.3);
            box-shadow: 2px 8px 25px -2px rgba(0, 0, 0, 0.3);
        }
        
        .modal-box.center {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        .modal-box.top {
            top: 0;
            left: 50%;
            transform: translate(-50%, 0%);
        }
        
        .modal-box.bottom {
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
        }
        
        .modal-box.right {
            top: 50%;
            right: 0%;
            transform: translate(0%, -50%);
        }
        
        .modal-box.left {
            top: 50%;
            left: 0;
            transform: translate(0%, -50%);
        }
        
        .modal-box.top-right {
            top: 0%;
            right: 0%;
        }
        
        .modal-box.top-left {
            top: 0%;
            left: 0%;
        }
        
        .modal-box.bottom-right {
            bottom: 0%;
            right: 0%;
        }
        
        .modal-box.bottom-left {
            bottom: 0%;
            left: 0%;
        }
        .fade{
            transition: 200ms opacity ease-in
        }
        .opacity-0{
             opacity: 0
        }
        .d-none{
            display: none !important
        }
        </style>`;

        document.addEventListener("modalbox", (e => {
            this.newModalBox(e.detail.msg, e.detail.displaytime, e.detail.position, e.detail.color)
        }));
    }
    
    fadeOut = (element) => {
        element.classList.add('fade');
        element.classList.add('opacity-0');
        setTimeout(() => {
            element.classList.add('d-none');
        }, this.speed);
    }

    fadeIn = (element) => {
        setTimeout(() => {
            element.classList.remove('d-none');
            element.classList.add('fade');
            setTimeout(() => {
                element.classList.remove('opacity-0');
            }, 0);
        }, this.speed + 1);
    }

    newModalBox = (message, milliseconds, position, color) => {
        message = message || "undefined message"
        milliseconds = typeof milliseconds === "number" ? milliseconds : 5000;
        position = position || "center"
        color = color || "primary"
        const div = document.createElement("div")
        div.innerHTML = message
        div.classList.add("modal-box")
        div.classList.add(position)
        div.classList.add(color)
        div.classList.add("opacity-0")
        document.querySelector("body").appendChild(div)
        this.fadeIn(div)
        setTimeout(() => {
            this.fadeOut(div)
            setTimeout(() => {
                div.remove()
            }, 250);
        }, milliseconds)
    }
}

customElements.define('modal-box', ModalBox);