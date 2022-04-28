var link;
let Cooper;
function preload() {
Cooper = loadFont('CooperHewitt-Heavy.otf');

}


function setup() {

    // Create a canvas
    createCanvas(displayWidth, displayHeight, WEBGL);

    // Set the background-color
    background('green');

  textFont(Cooper);
  textSize(width / 3);
  textAlign(CENTER, CENTER);

    // Create a anchor object using createA() function
    link = createA("https://open.spotify.com/artist/580s1iRXsLJVprfnxcZbUp?si=EFueycMoRwy_r2MIjtF_9Q",
                "spotify", "_blank")

    // Position the anchor objects
    link.position(100, 80);

    link = createA("https://www.instagram.com/macehorse/",
                "instagram", "_blank")

    // Position the anchor objects
    link.position(10, 50);

    // Position the anchor objects
    link.position(50, 65);

    link = createA("https://www.youtube.com/channel/UCgUJj7L6KrRscQnDIUSwKLQ",
                "youtube", "_blank")

    // Position the anchor objects
    link.position(90, 40);

    link = createA("https://soundcloud.com/macylame",
                "soundcloud", "_blank")

    // Position the anchor objects
    link.position(150, 70);

}
function draw() {
  fill(255, 204, 0);
  rect(500, 400, 200, 200);
describe('white rect with black outline in mid-right of canvas');
  
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('please click on the links', 0, 0);

fill('#fae');
triangle(500, 400, 700, 400, 600, 300);
describe('white triangle with black outline in mid-right of canvas');

textSize(20);
textWrap(WORD);
text('what a mess we are', random(0), 10, 100);

cursor('https://moisturizer.gallery/images/cursor.png');

textAlign(CENTER);
if(mouseIsPressed) {
 if(mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) {
  //  background(255, 0,0);
   fill(255, 255, 0);
   textSize(60);
   text("click on one of the links please", 500, 100);
  fill(0, 255, 0);
 }
 } else {
  // background(220);
   fill(0);
   textSize(25);
   text('thank you for coming', 200, 125);
  fill(255);
 }
   rect(500, 400, 200, 200);

 }

