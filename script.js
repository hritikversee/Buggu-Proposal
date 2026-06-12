const intro=
document.getElementById(
"intro"
);

const question=
document.getElementById(
"question"
);

const success=
document.getElementById(
"success"
);

const flash=
document.getElementById(
"flash"
);

openBtn.onclick=()=>{

intro.style.opacity=0;

setTimeout(()=>{

intro.style.display=
"none";

question.style.opacity=1;

question.style.pointerEvents=
"all";

},700);

};

function move(){

no.style.position=
"fixed";

no.style.left=

Math.random()
*
(
innerWidth

150
)
+
"px";

no.style.top=

Math.random()
*
(
innerHeight

120
)
+
"px";

}

no.onmouseover=
move;

no.ontouchstart=
(e)=>{

e.preventDefault();

move();

};

yes.onclick=()=>{

flash.style.opacity=1;

createHearts();

setTimeout(()=>{

question.style.opacity=0;

success.style.opacity=1;

success.style.pointerEvents=
"all";

flash.style.opacity=0;

},1200);

};

function createHearts(){

for(
let i=0;
i<90;
i++
){

let h=
document.createElement(
"div"
);

h.innerHTML=
"💗";

h.style.cssText=`

position:fixed;

left:
${
Math.random()
*100
}
vw;

top:
100vh;

font-size:
${
20+
Math.random()
*40
}
px;

transition:
2.5s;

pointer-events:none;

z-index:1000;

`;

document.body.appendChild(
h
);

setTimeout(()=>{

h.style.transform=
"translateY( -130vh ) rotate( 720deg )";

h.style.opacity=0;

},20);

}

}

const layer=
document.querySelector(
".heart-bg"
);

function bgHeart(){

let h=
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
