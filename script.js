let text=document.querySelector("#text");
let score=0;
function getCircle(){




   let x=Math.random()*window.innerWidth;
   let y=Math.random()*window.innerHeight;


   let circle=document.createElement("div");
   circle.className="circle";

circle.style.left=x+"Px";
circle.style.top=y+"px";

document.body.appendChild(circle)

circle.addEventListener("click",(e)=>{

finalscore=++score;
text.textContent=finalscore;
    circle.remove()
})

setTimeout(() => {
    circle.remove()
}, 1000);




}




setInterval(() => {
    getCircle()
}, 1000);
