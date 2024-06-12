let timer;
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

const header1 = document.getElementsByClassName("header1");
const header2 = document.getElementsByClassName("header2");
const img1 = document.getElementsByClassName("img1");
const img2 = document.getElementsByClassName("img2");
const img3 = document.getElementsByClassName("img3");
const img4 = document.getElementsByClassName("img4");

function moveRight() {
    posX += 5;
    header1[0].style.left = posX + "px";
}

function moveDown() {
    posY += 3;
    header2[0].style.top = posY + "px";
}

function zoomInFont() {
    scale += 0.02;
    header2[0].style.transform = `scale(${scale})`
}

function rotateLeftTop() {
    rotateLT -= 0.5;
    if(rotateLT === 300) {
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
    if(rotateLB === 160) {
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
    if(rotateRB === 315) {
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
    if(rotateRT === 50) {
        rotateBackRT = true;
    }
    img2[0].style.transform = `rotate(${rotateRT + "deg"})`
}

function rotateRightTopBack() {
    rotateRT -= 0.5;
    img2[0].style.transform = `rotate(${rotateRT + "deg"})`
}

function rotateRight() {

}

function animateH1() {
    cancelAnimationFrame(timer);

    if (posY < 42) {
        moveDown();
    }

    if (posY >= 42 && scale < 2.1) {
        zoomInFont();
    }

    if (posY >= 42 && scale >= 2.1 && posX <= 55) {
        moveRight();

    }

    if (posY >= 42 && scale >= 2.1 && posX <= 60) {
        if (rotateLT > 300 && !rotateBack) {
            rotateLeftTop();
        }
        if (rotateBack && rotateLT < 345) {
            rotateLeftTopBack();
        }
        if (rotateLB < 160 && !rotateBackLB) {
            rotateLeftBottom();
        }
        if (rotateBackLB && rotateLB > 115) {
            rotateLeftBottomBack();
        }
        if (rotateRT < 50 && !rotateBackRT) {
            rotateRightTop();
        }
        if (rotateBackRT && rotateRT > 5) {
            rotateRightTopBack();
        }
        if (rotateRB > 315 && !rotateBackRB) {
            rotateRightBottom();
        }
        if (rotateBackRB && rotateRB < 360) {
            rotateRightBottomBack();
        }

    }

    timer = requestAnimationFrame(animateH1);
}