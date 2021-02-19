class ball{
    constructor(x,y,height,angle){
var options={
    'resitution':0.8,
    'friction':1.0,
    'density':1.0
}
 this.body=Bodies.rectangle(x,y,width,height,options)  ;
 this.width=width;
 this.height=height;
 this.image=loadImage(ball.png)
}
display (){
    var angle=this.body.angle;
    Push();
    translate(this.body.position.x.this.body.position.y);
    angle(angle);
    imageMode=(CENTER)
    image(this.image,0,0,this.width,this.height )
    pop();
}
}