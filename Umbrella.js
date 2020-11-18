class Umbrella {
    constructor(x,y,r){
        this.options = {
            isStatic: true
        }

        this.body = Bodies.circle(x,y,r,this.options);
        World.add(world,this.body);
    }
}