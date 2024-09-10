

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  rectMode(CENTER);
  
  background(20);
  noStroke();

  push();
  translate(width/5, height/2);
  soundwave(vocal);
  pop();

  push();
  translate(2*width/5, height/2);
  soundwave(drum);
  pop();

  push();
  translate(3*width/5, height/2);
  soundwave(bass);
  pop();

  push();
  translate(4*width/5, height/2);
  soundwave(other);
  pop();

}

function soundwave(instrument){
  let barsize = 20;
  let spacing = barsize+10;
  let barshrink;

  let soundheight = map(instrument, 0, 100, 0, 400);
  /*
  rect(-spacing*2, 0, barsize, soundheight/4); // left bar
  rect(-spacing, 0, barsize, soundheight/2); // left bar
  rect(spacing, 0, barsize, soundheight/2); // right bar
  rect(spacing*2, 0, barsize, soundheight/4); // left bar

  rect(0, 0, barsize, soundheight); // main bar
  */

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

  rect(spacing*i, 0, barsize, soundheight/barshrink)
 }
}