class Caminante2 {
  constructor(){
this.img1 = loadImage('imagen/cuadrado1.png');
this.img2 = loadImage('imagen/cuadrado2.png');
this.t1=height-750;
this.x1=random(0,width*14);
this.y1=random(100,height*10);
this.elColor2 = color(random(255), random(255), random(255) );
//this.x2= width*10;
//this.y2=height*6;

  }
  saltar(){
    this.x1=random(0,width*14);
    this.y1=random(100,height*10);
    this.elColor2 = color(random(255), random(255), random(255) );
  }
  cambiarColor(nuevoColor){
    this.elColor2 = nuevoColor;
}
dibujar() {
  this.m=random(5, 8);//en mi computadora se ve un poquito lento pero se podria cambiar por (5,8) 
  
  //noStroke();
  //tint(this.r, this.g, this.b, 400);
  tint(this.elColor2);
  image(this.img1,this.x1,this.y1,this.t1/2,this.t1);
  //tint(this.r2, this.g2, this.b2, 300);
  tint(this.elColor2);
  image(this.img2,this.x1,this.y1,this.t1/2,this.t1);
  //rect(this.x1,this.y1,this.t1/2,this.t1);
  //noStroke();
  //rect(this.x2,this.y2,this.t1/2,this.t1);
}
mover(){

  if (this.y1>height) {
    this.y1=0;
    this.x1=random(height);
    //this.x2=width/5-(this.t1/4);
    //this.y2=this.y1;
  }

  this.y1 +=this.m;
  //this.x2 +=this.m;
  
}

}