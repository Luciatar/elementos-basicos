
import {logoHandler} from "./logo.js";
import {tabHandler} from "./tabHandler.js";
import {formHandler} from "./formHandler.js";
import '../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js'

logoHandler();
tabHandler();
formHandler(); 

ClassicEditor
    .create( document.querySelector( '#editor1' ) )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );