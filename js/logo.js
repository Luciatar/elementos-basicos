
export const logoHandler = () => {


    const LOGO = document.querySelector('#logo svg');

    const LOGOPATHS = Array.from(LOGO.querySelectorAll("path")).reverse();
    const ROOT = document.documentElement;

    drawLogo();


    function drawLogo() {
        let iColor = randomColorHSL(40, 80);
        for (let i = 0; i < LOGOPATHS.length; i++) {
            let path = LOGOPATHS[i];
            let color = randomColorHSL(40, 80)
            path.setAttribute('stroke', color)
            if (i == 0) {
                setRoot("--light", color)
            }
            if (i == 6 || i == 7) {
                path.setAttribute('stroke', iColor)
            }
            setTimeout(function () {
                path.classList.add('drawn')
            }, 100 * i);

        }
    }


    // function resize() {
    //     LOGOPATHS.forEach(function(path) {
    //         path.classList.toggle('drawn')
    //         path.setAttribute( 'stroke-dashoffset', '50' );

    //     }, this);

    //     setTimeout(function() {
    //         drawLogo();
    //     }, );

    // }



    function resizedWindow() {
        drawLogo();
    }

    var rezTimer;
    window.onresize = function () {
        LOGOPATHS.forEach(function (path) {
            path.classList.remove('drawn')
            path.setAttribute('stroke-dashoffset', '50');

        }, this);
        clearTimeout(rezTimer);
        rezTimer = setTimeout(resizedWindow, 700);
    };

    function randomColorHSL(saturation, lightness) {
        let hue = Math.floor(Math.random() * 360);
        let hsl = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";

        return hsl;
    }




    function setRoot(property, value) {
        ROOT.style.setProperty(property, value);
    }
}


