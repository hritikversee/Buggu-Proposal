const intro =
document.getElementById(
"intro"
);

const question =
document.getElementById(
"question"
);

const success =
document.getElementById(
"success"
);

const flash =
document.getElementById(
"flash"
);

const openBtn =
document.getElementById(
"openBtn"
);

const yes =
document.getElementById(
"yes"
);

const no =
document.getElementById(
"no"
);

openBtn.addEventListener(
"click",
()=>{

intro.style.opacity=0;

setTimeout(()=>{

intro.style.display=
"none";

question.style.opacity=1;

question.style.pointerEvents=
"all";

},700);

}
);

function move(){

no.style.position=
"fixed";

no.style.left=

Math.random()
*
(
window.innerWidth

150
)
+
"px";

no.style.top=

Math.random()
*
(
window.innerHeight

120
)
+
"px";

}

no.addEventListener(
"mouseover",
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

flash.style.opacity=1;

createHearts();

setTimeout(()=>{

question.style.opacity=0;

question.style.pointerEvents=
"none";

success.style.opacity=1;

success.style.pointerEvents=
"all";

flash.style.opacity=0;

},1000);

}
);

function createHearts(){

for(
let i=0;
i<90;
i++
){

let h =
document.createElement(
"div"
);

h.innerHTML=
"💗";

h.style.cssText=`

position:fixed;

left:
${Math.random()*100}vw;

top:100vh;

font-size:
${18+Math.random()*40}px;

transition:2.6s;

pointer-events:none;

z-index:999;

`;

document.body.appendChild(
h
);

setTimeout(()=>{

h.style.transform=
"translateY(-130vh) translateX( ${ (Math.random()-0.5) *300 }px ) rotate(720deg)";

h.style.opacity=0;

},30);

setTimeout(()=>{

h.remove();

},3000);

}

}

const layer =
document.querySelector(
".heart-bg"
);

function bgHeart(){

let h =
document.createElement(
"div"
);

h.className=
"bg-heart";

h.innerHTML=
"💗";

h.style.left=
Math.random()
*
100
+
"%";

h.style.fontSize=
(
12+
Math.random()
*18
)
+
"px";

h.style.animationDuration=
(
14+
Math.random()
*16
)
+
"s";

layer.appendChild(
h
);

setTimeout(()=>{

h.remove();

},30000);

}

for(
let i=0;
i<18;
i++
){

setTimeout(
bgHeart,
i*400
);

}

setInterval(
bgHeart,
1200
);h.style.fontSize=
(
12+
Math.random()
*20
)
+
"px";

h.style.animationDuration=
(
12+
Math.random()
*18
)
+
"s";

layer.appendChild(
h
);

setTimeout(()=>{

h.remove();

},30000);

}

for(
let i=0;
i<16;
i++
){

setTimeout(
bgHeart,
i*500
);

}

setInterval(
bgHeart,
1100
);
