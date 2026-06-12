const intro=document.getElementById("intro");
const question=document.getElementById("question");
const success=document.getElementById("success");

const openBtn=document.getElementById("openBtn");
const yes=document.getElementById("yes");
const no=document.getElementById("no");

const flash=document.getElementById("flash");

question.style.display="none";
success.style.display="none";

openBtn.addEventListener("click",()=>{

intro.style.transition=".8s";

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

question.style.display="flex";

requestAnimationFrame(()=>{

question.style.opacity="1";

question.style.pointerEvents="all";

});

},700);

});

function move(){

no.style.position="fixed";

no.style.left=
Math.random()
*
(
window.innerWidth

140
)
+
"px";

no.style.top=
Math.random()
*
(
window.innerHeight

100
)
+
"px";

}

no.addEventListener(
"mouseenter",
move
);

no.addEventListener(
"touchstart",
(e)=>{

e.preventDefault();

move();

}
);

yes.addEventListener(
"click",
()=>{

flash.style.opacity="1";

burst();

setTimeout(()=>{

question.style.display="none";

success.style.display="flex";

success.style.opacity="1";

flash.style.opacity="0";

},1200);

}
);

function burst(){

for(let i=0;i<90;i++){

const h=
document.createElement(
"div"
);

h.innerHTML="💗";

h.style.cssText=`

position:fixed;

left:${Math.random()*100}vw;

top:100vh;

font-size:${20+Math.random()*30}px;

transition:2s;

pointer-events:none;

z-index:999;

`;

document.body.appendChild(h);

setTimeout(()=>{

h.style.transform=
"translateY(-140vh) translateX(${(Math.random()-.5)*300}px) rotate(720deg)";

h.style.opacity=0;

},50);

setTimeout(()=>{

h.remove();

},2500);

}

}

const layer=
document.querySelector(
".heart-bg"
);

function heart(){

const h=
document.createElement(
"div"
);

h.className=
"bg-heart";

h.innerHTML=
"💗";

h.style.left=
Math.random()*100+"%";

h.style.fontSize=
(
14+
Math.random()*18
)
+
"px";

h.style.animationDuration=
(
14+
Math.random()*12
)
+
"s";

layer.appendChild(h);

setTimeout(()=>{

h.remove();

},26000);

}

for(let i=0;i<16;i++){

setTimeout(
heart,
i*500
);

}

setInterval(
heart,
1000
);
