let animation;
let posX = -210;
let posY = -210;
let scale = 1;
let rotateLT = 345;
let rotateLB = 115;
let rotateBack = false;
let rotateBackLB = false;
let rotateRT = 5;
let rotateRB = 360;
let rotateBackRT = false;
let rotateBackRB = false;
const animationStart = Date.now();
let progress = 0;
let animate;

const mainHeader = document.querySelector(".main-header");
const header = document.querySelector(".header");
const img1 = document.getElementsByClassName("img1");
const img2 = document.getElementsByClassName("img2");
const img3 = document.getElementsByClassName("img3");
const img4 = document.getElementsByClassName("img4");

function rotateLeftTop() {
    rotateLT -= 0.5;
    if (rotateLT === 300) {
        rotateBack = true;
    }
    img1[0].style.transform = `rotate(${rotateLT + "deg"})`
}

function rotateLeftTopBack() {
    rotateLT += 0.5;
    img1[0].style.transform = `rotate(${rotateLT + "deg"})`
}

function rotateLeftBottom() {
    rotateLB += 0.5;
    if (rotateLB === 160) {
        rotateBackLB = true;
    }
    img4[0].style.transform = `rotate(${rotateLB + "deg"})`
}

function rotateLeftBottomBack() {
    rotateLB -= 0.5;
    img4[0].style.transform = `rotate(${rotateLB + "deg"})`
}

function rotateRightBottom() {
    rotateRB -= 0.5;
    if (rotateRB === 315) {
        rotateBackRB = true;
    }
    img3[0].style.transform = `rotate(${rotateRB + "deg"})`
}

function rotateRightBottomBack() {
    rotateRB += 0.5;
    img3[0].style.transform = `rotate(${rotateRB + "deg"})`
}

function rotateRightTop() {
    rotateRT += 0.5;
    if (rotateRT === 50) {
        rotateBackRT = true;
    }
    img2[0].style.transform = `rotate(${rotateRT + "deg"})`
}

function rotateRightTopBack() {
    rotateRT -= 0.5;
    img2[0].style.transform = `rotate(${rotateRT + "deg"})`
}

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
    if (rotateLT > 300 && !rotateBack) {
        rotateLeftTop();
    }

    if (rotateLB < 160 && !rotateBackLB) {
        rotateLeftBottom();
    }

    if (rotateRT < 50 && !rotateBackRT) {
        rotateRightTop();
    }

    if (rotateBackRB && rotateRB < 360) {
        rotateRightBottomBack();
    }
}

function rotatePicturesBack() {    
    if (rotateBack && rotateLT < 345) {
        rotateLeftTopBack();
    }

    if (rotateBackLB && rotateLB > 115) {
        rotateLeftBottomBack();
    }

    if (rotateBackRT && rotateRT > 5) {
        rotateRightTopBack();
    }

    if (rotateRB > 315 && !rotateBackRB) {
        rotateRightBottom();
    }
}

function animateBillBoard(timestamp) {
    cancelAnimationFrame(animation);

    animateHeader();

    if (timestamp > 1000) {
        animateMainHeader();
        rotatePicturesOutside();
        rotatePicturesBack();
    }

    if (timestamp < 2000) {
        requestAnimationFrame(animateBillBoard);
    } else {
        cancelAnimationFrame(animateBillBoard);
    }
}

animate = requestAnimationFrame(animateBillBoard);