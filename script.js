const intro =
document.getElementById("intro");

const question =
document.getElementById("question");

const success =
document.getElementById("success");

openBtn.onclick=()=>{

intro.style.opacity=0;

setTimeout(()=>{

intro.style.display="none";

question.style.opacity=1;

question.style.pointerEvents="all";

},500);

};

const no =
document.getElementById("no");

function move(){

const x=
Math.random()
*
(window.innerWidth-150);

const y=
Math.random()
*
(window.innerHeight-100);

no.style.position="fixed";

no.style.left=
x+"px";

no.style.top=
y+"px";

}

no.addEventListener(
"mouseover",
move
);

no.addEventListener(
"touchstart",
e=>{

e.preventDefault();

move();

}
);

yes.onclick=()=>{

flash.style.opacity=1;

createHearts();

setTimeout(()=>{

flash.style.opacity=0;

question.style.opacity=0;

success.style.opacity=1;

success.style.pointerEvents="all";

},1000);

}

function createHearts(){

for(
let i=0;
i<80;
i++
){

const h=
document.createElement(
"div"
);

h.innerHTML=
"💗";

h.style.position=
"fixed";

h.style.left=
Math.random()*100
+"vw";

h.style.top=
"100vh";

h.style.fontSize=
(
20+
Math.random()*30
)
+"px";

h.style.transition=
"2.4s";

document.body.appendChild(h);

setTimeout(()=>{

h.style.transform=
`translateY(-120vh)
rotate(720deg)`;

h.style.opacity=0;

},50);

}

}
