import {fadeIn, fadeOut} from "./fadeInFadeOut.js";

export const tabHandler = () => {
    const tabs = document.querySelectorAll('.tab-group__titles li a');
    const tabsContent= [... document.querySelectorAll('.tab-group__content-element')];
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            let content = tab.hash.replace('#/', '');
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tab.classList.add('active');
            tabsContent.forEach(elem => {
                fadeOut(elem);
            })
            
            fadeIn(document.getElementById(content));
            
        });
    });
}