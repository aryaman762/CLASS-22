const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);


    var object_options1 ={
      restitution:1.5

    }

   object1= Bodies.rectangle(200,200,50,50,object_options1);
    World.add(world,object1);

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);

   ellipse(object1.position.x,object1.position.y,50,50);

}
