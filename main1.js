img = "";
status = "";
object = [];

function preload()
{
 img = loadImage('bedroom.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}
 
function draw()
{
    image(img, 0, 0, 640, 420);
 if(status != "")
 {
    for (i = 0; i < objects.length; i++){
         document.getElementById("status").innerHTML = "Status : Object Detected";

         fill("#FF0000");
         percent = floor(objects[i].confidence * 100);
         text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
         notFill();
         stroke("FF0000");
         rect(object[i].x, object[i].y, object[i].width, object[i].height);
    } 
  }

    fill("#409CED");
    text("BED", 45, 75);
    notFill();
    stroke("#409CED");
    rect(30, 60, 450, 350);


}

function gotResult(error, results) 
{
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}