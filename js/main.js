
import {logoHandler} from "./logo.js";
import {tabHandler} from "./tabHandler.js";
import {formHandler} from "./formHandler.js";
import '../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js'
import {ckeditorIni} from "./ckEditor.js"
import {selectNestedInputHandlder} from "./selectNestedInput.js"
logoHandler();
tabHandler();
formHandler(); 
ckeditorIni();
selectNestedInputHandlder();
