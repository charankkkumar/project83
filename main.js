var lastx,lasty;
color="black";
width_of_line=2;
canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var abc=screen.width;
var newwidth=screen.width-70;
var newheight=screen.height-300;
if (abc<992)
{
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstrt",ts);
function ts(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    console.log(color);
    console.log(width_of_line);
    lastx=e.touches[0].clientX-canvas.offsetLeft;
    lasty=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",tm);
function tm(e)
{
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop
    console.log(color);
    console.log(width_of_line);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(current_x,current_y);
        ctx.stroke()

lastx=current_x;
lasty=current_y;}

function ClearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)};