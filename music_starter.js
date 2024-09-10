

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  rectMode(CENTER);
  
  background(20);

  push();
  translate(width/2, height/2);
  soundwave(vocal, drum, bass, other);
}

function soundwave(vocal, drum, bass, other){
  let barsize = 20;

  let vocalheight = map(vocal, 0, 100, 1, 200);

  rect(0, 0, barsize, vocalheight);
}