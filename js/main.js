
import { logoHandler } from "./logo.js";
import { tabHandler } from "./tabHandler.js";
import { formHandler } from "./formHandler.js";
import { ckeditorIni } from "./ckEditor.js"
import { selectNestedInputHandlder } from "./selectNestedInput.js"
import { getTable } from "./table.js"
import "./tableComponent.js"

window.onload = function () {
    logoHandler();
    tabHandler();
    formHandler();
    ckeditorIni();
    selectNestedInputHandlder();
    getTable()
   
};

