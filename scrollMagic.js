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

const lightBall = {width: "1rem", transform: "translateY(245px)"};
scrollFunction(".the-profession", 240, ".round-light", lightBall);

const lightPhoto = {animation: "electric 5s infinite ease-out"};
const lightPhoto2 = {boxShadow: "0 0 12px cyan, 0 0 24px cyan", border: "2px solid white"};
scrollFunction(".about-me_photo", 20, ".photo-box", lightPhoto2);

const showPhoto = {opacity: "1", zIndex: "12"};
scrollFunction(".about-me_photo", 20, ".photo-box img", showPhoto);

const lightBallMobile = {width: "1rem", transform: "translateY(310px)"};
scrollFunction(".light-container_mobile", 460, ".round-light_mobile", lightBallMobile);

const moveLeftArm = {transform: "translateX(-300px)", opacity: "0"};
scrollFunction(".the-profession", 200, ".left-arm", moveLeftArm);

const moveRightArm = {transform: "translateX(300px)", opacity: "0"};
scrollFunction(".the-profession", 200, ".right-arm", moveRightArm);