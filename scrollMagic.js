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


const lightBall = {width: "1rem", transform: "translateY(245px)"};
scrollFunction(".the-profession", 240, ".round-light", lightBall);

const lightPhoto = {animation: "electric 5s infinite ease-out"};
const lightPhoto2 = {boxShadow: "0 0 12px cyan, 0 0 24px cyan", border: "2px solid white"};
scrollFunction(".about-me_photo", 20, ".photo-box", lightPhoto2);

const showPhoto = {opacity: "1", zIndex: "12"};
scrollFunction(".about-me_photo", 20, ".photo-box img", showPhoto);

const moveLeftArm = {transform: "translateX(-300px)", opacity: "0"};
scrollFunction(".the-profession", 200, ".left-arm", moveLeftArm);

const moveRightArm = {transform: "translateX(300px)", opacity: "0"};
scrollFunction(".the-profession", 200, ".right-arm", moveRightArm);

const showSocialNetworks = {opacity: "1"};
scrollFunction(".about-me_photo", 20, ".rrss svg", showSocialNetworks);

// mobile version from here ******************************************

const lightBallMobile = {width: "1rem", transform: "translateY(320px)"};
scrollFunction(".trigger-mobile", 550, ".round-light_mobile", lightBallMobile);

const moveLeftArmMobile = {transform: "translateX(-300px)", opacity: "0"};
scrollFunction(".trigger-mobile", 500, ".left-arm_mobile", moveLeftArmMobile);

const moveRightArmMobile = {transform: "translateX(300px)", opacity: "0"};
scrollFunction(".trigger-mobile", 500, ".right-arm_mobile", moveRightArmMobile);

