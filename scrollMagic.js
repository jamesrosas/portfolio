const scrollFunction = (trigger, time,  element, animation) => {
    
    let controller = new ScrollMagic.Controller();
    
    let scene = new ScrollMagic.Scene({
        triggerElement: trigger,
        duration: time
    })
        .setTween(element, 1 , animation)
        // .addIndicators({name: "aqui (200ms)"})
        .addTo(controller);
}

const blurHeaderNav = { backdropFilter: "blur(20px)"}
scrollFunction(".glass-trigger", 10, "header", blurHeaderNav);

const fragmentMove = {transform: "scale(0.2) rotate(180deg)"};
scrollFunction(".glass-trigger", 240, ".fragment", fragmentMove);


const lightBall = {width: "1rem", transform: "translateY(245px)"};
scrollFunction(".glass-trigger", 240, ".round-light", lightBall);

const lightPhoto = {animation: "electric 5s infinite ease-out"};
const lightPhoto2 = {boxShadow: "0 0 12px cyan, 0 0 24px cyan", border: "2px solid white"};
scrollFunction(".light-photo_trigger", 20, ".photo-box", lightPhoto2);

const cyberFrame = { filter: "drop-shadow(0 0 5px cyan)" }
scrollFunction(".light-photo_trigger", 40, ".marco-photo", cyberFrame);

const showPhoto = {opacity: "1", zIndex: "12"};
scrollFunction(".light-photo_trigger", 20, ".photo-box img", showPhoto);

const moveLeftArm = {transform: "translateX(-300px)", opacity: "0"};
scrollFunction(".glass-trigger", 200, ".left-arm", moveLeftArm);

const moveRightArm = {transform: "translateX(300px)", opacity: "0"};
scrollFunction(".glass-trigger", 200, ".right-arm", moveRightArm);

const showSocialNetworks = {opacity: "1"};
scrollFunction(".light-photo_trigger", 20, ".rrss svg", showSocialNetworks);

const skillsBar = { width: "100%"};
scrollFunction(".skills-container", 280, ".animate-bar", skillsBar);

// tablet version from here ******************************************

const lightBallTablet = {width: "1rem", transform: "translateY(490px)"};
scrollFunction(".trigger-mobile", 550, ".round-light_tablet", lightBallTablet);

// mobile version from here ******************************************

const lightBallMobile = {width: "1rem", transform: "translateY(320px)"};
scrollFunction(".trigger-mobile", 550, ".round-light_mobile", lightBallMobile);


const moveLeftArmMobile = {transform: "translateX(-300px)", opacity: "0"};
scrollFunction(".trigger-mobile", 500, ".left-arm_mobile", moveLeftArmMobile);

const moveRightArmMobile = {transform: "translateX(300px)", opacity: "0"};
scrollFunction(".trigger-mobile", 500, ".right-arm_mobile", moveRightArmMobile);

const skillsBarMobile = { height: "100%"};
scrollFunction(".skills-container", 450, ".animate-bar_mobile", skillsBarMobile);

const toolsBarMobile = { height: "100%"};
scrollFunction("#tools", 450, ".animate-bar_mobile2", toolsBarMobile);


