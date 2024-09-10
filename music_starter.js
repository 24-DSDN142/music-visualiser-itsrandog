

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  rectMode(CENTER);
  
  background(20);

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

  let soundheight = map(instrument, 0, 100, 1, 400);

  rect(-spacing*2, 0, barsize, soundheight/4); // left bar
  rect(-spacing, 0, barsize, soundheight/2); // left bar
  rect(spacing, 0, barsize, soundheight/2); // right bar
  rect(spacing*2, 0, barsize, soundheight/4); // left bar


  rect(0, 0, barsize, soundheight); // main bar
}