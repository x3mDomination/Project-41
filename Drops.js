class Raindrop {

    constructor(x,y){
        this.options = {
            restitution: 0.5
        }
        this.body = Bodies.circle(x,y,5,this.options);
        this.x = this.body.position.x;
        this.y = this.body.position.y;

        World.add(world, this.body);
    }

    display(){
        if(this.body!==null){
            this.x = this.body.position.x;
            this.y = this.body.position.y;
            ellipseMode(CENTER);
            fill("blue");
            noStroke();
            ellipse(this.x,this.y,10,10);
        }
    }

    update(){
        if(this.y >= height){
            //Body.setPosition(this.body,{x:random(50,430), y:0});
            this.body = null;
        }
    }
}