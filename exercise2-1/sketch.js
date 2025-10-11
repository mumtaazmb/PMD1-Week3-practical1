let fillColour;
let x = 10
let y = 10
function setup(){
    createCanvas(600,600)
    fillColour = color(random(255),random(255),random(255))
  
}

function draw(){
    background(255)
    fill(fillColour)
    rect(x,y,550,550) 
    movement()
}


function movement(){
if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      y = y + 5;
    } else if (keyCode === DOWN_ARROW) {
      y = y - 5
    } else if (keyCode === LEFT_ARROW) {
      x = x + 5;
    } else if (keyCode === RIGHT_ARROW) {
      x = x - 5;
    }
  }
}