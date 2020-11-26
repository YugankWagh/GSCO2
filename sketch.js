var thickness, wall;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);

 speed=Math.round(random (55,90))
 weight=Math.round(random(400,1500))
 thickness= Math.round(random(22,83)) 

 bullet = createSprite(50, 200, 50, 5);
 bullet.velocityX= speed;
 bullet.shapeColor= color(255)
 
 wall = createSprite(1500, 200, thickness, height/2)
 wall.shapeColor= color(80,80,80)

}

function draw() {
  background(0);  
  
  
  
  if (hasCollided(bullet, wall)) 
  {
    bullet.velocityX=0;
  var damge=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if (damge>10) 
  {
    wall.shapeColor= "red"
  }
  
  if (damge<10) 
  {
    wall.shapeColor= "green"
  }
 

}
drawSprites();
}

function hasCollided(bullet, wall) {
  bulletRightEdge= bullet.x + bullet.width;
  wallLeftEdge= wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;


}