class Poly{
    constructor(x,y){
        var options = {
            'friction':1,
            'density':1,
            'restitution':0.1
        }
        this.body = Bodies.circle(x,y,30,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,30);
    }
}