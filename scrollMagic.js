const scrollFunction = (trigger, time,  element, animation) => {
    
    let controller = new ScrollMagic.Controller();
    
    let scene = new ScrollMagic.Scene({
        triggerElement: trigger,
        duration: time
    })
        .setTween(element, 1 , animation)
        .addIndicators({name: "aqui (200ms)"})
        .addTo(controller);
}

// para manejar animaciones segun el viewport es mejor manipular los margin y posicion de los objetos desde el css para acercarlos o alejarlos para que encaje la naimacion, ya que manejando las animaciones por media queires atraves de JS las animaciones no fluyen bien

// la animaciones en modo mobile como el viewport es mas alto entonces las animaciones ya se ha ejecutado antes de tiempo, por tanto en mobile las animaciones solo podrian disparase despues del above the fold en su version mobile, para que asi halla espacio para hacer srcoll

const lightBall = {width: "1rem", transform: "translateY(210px)"};
scrollFunction(".the-profession", 200, ".round-light", lightBall);

const lightPhoto = {animation: "electric 5s infinite ease-out"};
const lightPhoto2 = {boxShadow: "0 0 12px cyan, 0 0 24px cyan", border: "2px solid white"};
scrollFunction(".about-me", 20, ".photo-box", lightPhoto2);

const showPhoto = {opacity: "1", zIndex: "12"};
scrollFunction(".about-me_photo", 20, ".photo-box img", showPhoto);