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

const lightBall = {width: "1rem", transform: "translateY(210px)"};
scrollFunction(".the-profession", 200, ".round-light", lightBall);

const lightPhoto = {animation: "electric 5s infinite ease-out"};
const lightPhoto2 = {boxShadow: "0 0 12px cyan, 0 0 24px cyan", border: "2px solid white"};
scrollFunction(".about-me_photo", 20, ".photo-box", lightPhoto2);

const showPhoto = {opacity: "1", zIndex: "12"};
scrollFunction(".about-me_photo", 20, ".photo-box img", showPhoto);