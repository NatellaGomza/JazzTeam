//animation
let animate;

// header properties
let posX = -210;
let posY = -210;
let scale = 1;

// pictures properties
let rotateImg1 = 345;
let rotateImg2 = 360;
let rotateImg3 = 5;
let rotateImg4 = 115;

const mainHeader = document.querySelector(".main-header");
const header = document.querySelector(".header");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");

function animateHeader() {
    if (posY < 42) {
        posY += 3;
        header.style.top = posY + "px";
    }

    if (posY >= 42 && scale < 2.1) {
        scale += 0.02;
        header.style.transform = `scale(${scale})`
    }
}

function animateMainHeader() {
    if (posX <= 55) {
        posX += 5;
        mainHeader.style.left = posX + "px";
    }
}

function rotatePicturesOutside() {
    rotateImg1 -= 0.5;
    img1.style.transform = `rotateZ(${rotateImg1 + "deg"})`;

    rotateImg2 += 0.5;
    img2.style.transform = `rotateZ(${rotateImg2 + "deg"})`;

    rotateImg3 -= 0.5;
    img3.style.transform = `rotateZ(${rotateImg3 + "deg"})`;

    rotateImg4 += 0.5;
    img4.style.transform = `rotateZ(${rotateImg4 + "deg"})`;
}

function rotatePicturesBack() {
    rotateImg1 += 0.5;
    img1.style.transform = `rotateZ(${rotateImg1 + "deg"})`;

    rotateImg2 -= 0.5;
    img2.style.transform = `rotateZ(${rotateImg2 + "deg"})`;

    rotateImg3 += 0.5;
    img3.style.transform = `rotateZ(${rotateImg3 + "deg"})`

    rotateImg4 -= 0.5;
    img4.style.transform = `rotateZ(${rotateImg4 + "deg"})`;
}

function animateBillBoard(timestamp) {
    cancelAnimationFrame(animateBillBoard);

    animateHeader();

    if (timestamp > 1000) {
        animateMainHeader();
    }

    if (timestamp > 1000 && timestamp < 1500) {
        rotatePicturesOutside();
    }

    if (timestamp > 1500 && timestamp < 2000) {
        rotatePicturesBack();
    }

    if (timestamp < 2200) {
        requestAnimationFrame(animateBillBoard);
    } else {
        cancelAnimationFrame(animateBillBoard);
    }
}

animate = requestAnimationFrame(animateBillBoard);