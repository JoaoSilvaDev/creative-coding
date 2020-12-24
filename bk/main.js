let img;
let flowers = [];
const maxFlowers = 400;
let mousePos;

const minAvoidRange = 20;
const maxAvoidRange = 250;
let avoidRange = 100;
const avoidRangeChangeRate = 10;

const minAvoidStrength = 0.01;
const maxAvoidStrength = 0.5;
let avoidStrength = 0.05;
const avoidStrengthChangeRate = 0.01;

const horizontalDrag = 2;

// debug
let showFps = false;

function preload()
{
    img = loadImage('flower.png')
}

function setup()
{
    createCanvas(windowWidth, windowHeight)
    gravity = createVector(0, 0.01)
    mousePos = createVector(mouseX, mouseY)
    cursor(CROSS);
}

function mouseWheel(event)
{
    dir = (event.delta) > 0 ? -1 : 1;

    if (keyIsDown(SHIFT))
        avoidStrength = constrain(avoidStrength + dir * avoidStrengthChangeRate, minAvoidStrength, maxAvoidStrength);
    else
        avoidRange = constrain(avoidRange + dir * avoidRangeChangeRate, minAvoidRange, maxAvoidRange);
}

function draw()
{
    mousePos = createVector(mouseX, mouseY)

    showFps = keyIsDown(81);

    if(flowers.length < maxFlowers)
        flowers.push(new Flower());

    background(35, 30, 30);

    flowers.forEach(flower => {
        flower.update()
        flower.draw();
    });

    strokeWeight(1 + avoidStrength * 100);
    stroke(255, 255, 255, 10);
    noFill();
    circle(mouseX, mouseY, (avoidRange*2) - (1 + avoidStrength * 100));

    if(showFps)
    {
        stroke(255)
        strokeWeight(1);
        noFill();
        text(frameRate().toFixed(0), 10, 20)
    }
}