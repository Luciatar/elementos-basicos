const speed= 200
export const fadeOut = (element) => {
    
    element.classList.add('fade');
    element.classList.add('opacity-0');
    setTimeout(() => {
        element.classList.add('d-none');
    }, speed);
}

export const fadeIn = (element) => {
    setTimeout(() => {
        element.classList.remove('d-none');
    
        element.classList.add('fade');
        setTimeout(() => {
            element.classList.remove('opacity-0');
        }, 0);
    }, speed+1);
   
}