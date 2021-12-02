const root = document.documentElement;

export const fadeOut = (element, speed) => {
    root.style.setProperty('--fade-speed', speed + "ms");
    element.classList.add('fade');
    element.classList.add('opacity-0');
    setTimeout(() => {
        element.classList.add('d-none');
    }, speed);
}

export const fadeIn = (element, speed) => {
    element.classList.remove('d-none');
    root.style.setProperty('--fade-speed', speed + "ms");
    element.classList.add('fade');
    setTimeout(() => {
        element.classList.remove('opacity-0');
    }, 0);
}