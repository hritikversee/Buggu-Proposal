const intro=document.getElementById("intro");
const question=document.getElementById("question");
const success=document.getElementById("success");
openBtn.onclick=()=>{intro.style.opacity=0;setTimeout(()=>{intro.style.display="none";question.style.opacity=1;question.style.pointerEvents="all"},500)};
function move(){no.style.position="fixed";no.style.left=Math.random()*(innerWidth-140)+"px";no.style.top=Math.random()*(innerHeight-100)+"px"}
no.onmouseover=move;
no.ontouchstart=(e)=>{e.preventDefault();move()}
yes.onclick=()=>{
for(let i=0;i<80;i++){
let h=document.createElement("div");
h.textContent="💗";
h.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:100vh;font-size:${20+Math.random()*30}px;transition:2s`;
document.body.appendChild(h);
setTimeout(()=>{h.style.transform="translateY(-120vh) rotate(720deg)";h.style.opacity=0},50)
}
question.style.opacity=0;
setTimeout(()=>{question.style.display="none";success.style.opacity=1;success.style.pointerEvents="all"},1000)
}