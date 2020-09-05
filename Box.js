class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
 
  }

};

function score(){
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();

}