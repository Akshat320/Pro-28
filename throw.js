class Chain{

    constructor(bodyA, bodyB)
    {
            var option = {
                bodyA: bodyA,
                bodyB: bodyB,
                stiffness: 0.4,
                length: 10
                 
               }
               
           this.chain = Matter.Constraint.create(option);
           World.add(world,this.chain);
       
    }

    fly()
  {
      this.chain.bodyA = null;
  }
       
        display()
       {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
      
     line(pointA.x+20,pointA.y+50,pointB.x+25,pointB.y+50);
     }
    
}