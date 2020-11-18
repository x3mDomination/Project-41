const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var droplet;
var droplets = [];

var walking1IMG,walking2IMG,walking3IMG,walking4IMG,walking5IMG,walking6IMG,walking7IMG,walking8IMG;
var lightning1,lightning2,lightning3,lightning4;
var batIMG,bat;
var person, lightning, frame;
var varFrameCount = 0;
var lightningTime = 0;
var umbrella;

function preload(){
    walking1IMG = loadImage("images/walking/walking_1.png");
    walking2IMG = loadImage("images/walking/walking_2.png");
    walking3IMG = loadImage("images/walking/walking_3.png");
    walking4IMG = loadImage("images/walking/walking_4.png");
    walking5IMG = loadImage("images/walking/walking_5.png");
    walking6IMG = loadImage("images/walking/walking_6.png");
    walking7IMG = loadImage("images/walking/walking_7.png");
    walking8IMG = loadImage("images/walking/walking_8.png");

    lightning1 = loadImage("images/thunderbolt/1.png");
    lightning2 = loadImage("images/thunderbolt/2.png");
    lightning3 = loadImage("images/thunderbolt/3.png");
    lightning4 = loadImage("images/thunderbolt/4.png");

    batIMG = loadImage("images/Bat.gif")
}

function setup(){
   createCanvas(480,600);

   engine = Engine.create();
   world = engine.world;

   person = createSprite(width/2,430);
   person.addImage("1",walking1IMG);
   person.addImage("2",walking2IMG);
   person.addImage("3",walking3IMG);
   person.addImage("4",walking4IMG);
   person.addImage("5",walking5IMG);
   person.addImage("6",walking6IMG);
   person.addImage("7",walking7IMG);
   person.addImage("8",walking8IMG);
   person.scale = 0.5;

   lightning = createSprite(width/2,100);
   lightning.addImage("1",lightning1);
   lightning.addImage("2",lightning2);
   lightning.addImage("3",lightning3);
   lightning.addImage("4",lightning4);
   lightning.scale = 0.5;
   lightning.visible = false;

   createEdgeSprites();

   bat = createSprite(width/2,170);
   bat.addImage("bat",batIMG);
   bat.scale = 0.05;
   bat.velocityX = 5;


   umbrella = new Umbrella(250,370,100);
}

function draw(){
    Engine.update(engine);
    background(30);

    if(bat.x >= 430 || bat.x <= 50){
        bat.velocityX = -bat.velocityX;
    }

    //console.log(frame);
    if(frameCount%4===0){
        varFrameCount++;
        frame = varFrameCount%8;

        if(frame===0){
            person.changeImage("1",walking1IMG);
        }
        else if(frame===1){
            person.changeImage("2",walking2IMG);
        }
        else if(frame===2){
            person.changeImage("3",walking3IMG);
        }
        else if(frame===3){
            person.changeImage("4",walking4IMG);
        }
        else if(frame===4){
            person.changeImage("5",walking5IMG);
        }
        else if(frame===5){
            person.changeImage("6",walking6IMG);
        }
        else if(frame===6){
            person.changeImage("7",walking7IMG);
        }
        else if(frame===7){
            person.changeImage("8",walking8IMG);
        }
    }   

    if(frameCount%90===0){
        lightning.visible = true;
        rand = Math.round(random(1,4));
        switch(rand){
            case 1: lightning.changeImage("1",lightning1);
                break;
            case 2: lightning.changeImage("2",lightning2);
                break;
            case 3: lightning.changeImage("3",lightning3);
                break;
            case 4: lightning.changeImage("4",lightning4);
                break;
            default: break;
        }
        //console.log(rand);
        lightningTime++;
    }

    if(lightningTime > 0){
        lightningTime++;
    }

    //console.log(lightningTime);
    if(lightningTime === 12){
        lightningTime = 0;
        lightning.visible = false;
    }

    if(frameCount%3===0){
        droplet = new Raindrop(random(50,430),0);
        droplets.push(droplet);
    }

    for(var i=0; i<droplets.length; i++){
        droplets[i].display();
        droplets[i].update();
    }

    drawSprites();
    
}   

