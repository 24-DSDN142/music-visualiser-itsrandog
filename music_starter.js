let firstrun = true;
let gif;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  rectMode(CENTER);
  background(20);
  noStroke();

  if (firstrun == true) {
    gif = loadImage("circles.gif"); // loads gif

    firstrun = false;
  }

  push();
  scale(1.3); // fit gif to canvas
  image(gif, 0, 0);
  pop();
  fill(20, 100);
  rect(width/2, height/2, width, height);

  fill(255); // make soundwaves white
  // vocal sound bars
  push();
  translate(width/5, height/2);
  soundwave(vocal);
  pop();

  // drum sound bars
  push();
  translate(2*width/5, height/2);
  soundwave(drum);
  pop();

  // bass sound bars
  push();
  translate(3*width/5, height/2);
  soundwave(bass);
  pop();

  // other sound bars
  push();
  translate(4*width/5, height/2);
  soundwave(other);
  pop();

  // fade out at end of song
  let fadeout = map(counter, 16078, 16330, 0, 255)
  if (counter >= 16078) {
    fill(20, fadeout);
    rect(width/2, height/2, width, height);
  }

}

function soundwave(instrument){
  let barsize = 20; // width of sound bars
  let spacing = barsize+10; // evenly spaces out the sound bars
  let barshrink;
  let soundheight = map(instrument, 0, 100, 0, height-20); // makes sound bars grow and shrink based of volume levels

  // makes each bar smaller the further from the center it is
  for (let i = -5; i <= 5; i++) {
    if (i == 0) {
      barshrink = 1
    } else if (i == 1 || i == -1) {
      barshrink = 2
    } else if (i == 2 || i == -2) {
      barshrink = 4
    } else if (i == 3 || i == -3) {
      barshrink = 8
    } else if (i == 4 || i == -4) {
      barshrink = 16
    } else if (i == 5 || i == -5) {
      barshrink = 32
    }
    rect(spacing*i, 0, barsize, soundheight/barshrink); // draws the sound bars
  }
}