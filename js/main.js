
import { logoHandler } from "./logo.js";
import { tabHandler } from "./tabHandler.js";
import { formHandler } from "./formHandler.js";
import { ckeditorIni } from "./ckEditor.js"
import { selectNestedInputHandlder } from "./selectNestedInput.js"
import { getTable } from "./table.js"
import "./tableComponent.js"
import "./modalBoxComponent.js"

window.onload = function () {
    logoHandler();
    tabHandler();
    formHandler();
    ckeditorIni();
    selectNestedInputHandlder();
    getTable()
    // setInterval(() => {
        // modalBox("Parametros opcionales")
        // modalBox("hi this is a test", 2000, "center")
        // modalBox("Guardado correctamente!", 5000, "right", "succes")
        // modalBox("Detalles del evento.<br>Enviando...", 5000, "left", "info")
        // modalBox("Conraseña poco segura!", 5000, "top", "warning")
        // modalBox("Usuario o contraseña incorrectos.", 5000, "bot", "danger")
        // modalBox("We have every color...<br>as long as its black", 5000, "top-right", "inverse")
        // modalBox("Looks clean!", 5000, "top-left", "faded")
        // modalBox("mas posiciones que colores", 5000, "bot-right")
        // modalBox("mas posiciones que colores", 5000, "bot-left")
    // }, 5500);
   
};

