var f=void 0,j=!0,k=!1;Trash=function(){this.color;this.height;this.c;this.x;this.y;this.h=0;this.width};function l(e,b){e.c=b!==f?b:Math.floor(Math.random()*m.b.c.length);e.color=m.b.c[e.c].color}function u(e,b,i,q,n){e.x=b;e.y=i;e.width=q;e.height=n}Klocek=function(){this.g=this.f=this.y=this.x=0;this.P=this.w=k;this.F;this.c;this.z=k};
function v(e,b,i){e.P=1;e.F=i;e.z=k;"up"===i?(e=m.a.m,e.h+=1):"right"===i?(e=m.a.l,e.h+=1):"down"===i?(e=m.a.j,e.h+=1):"left"===i&&(e=m.a.k,e.h+=1);m.d.q.push(b);m.v=k;delete m.d.n}
var m=new function(){var e=document.getElementById("game"),b=e.getContext("2d"),i,q,n,o=k,h=this,w=0,x=0,r=0,s=0,y=0,z=0;n={O:function(a,d){r=a;s=d},R:function(){return{x:r,y:s}},$:function(){w=r-y;x=s-z;y=r;z=s;return{x:r,y:s,ca:w,da:x}},Y:function(){z=y=x=w=0}};this.v=k;this.a={};this.b={Q:e.width,I:e.height,J:e.offsetLeft,K:e.offsetTop,T:60,S:170,scrollLeft:document.body.scrollLeft||document.documentElement.scrollLeft,scrollTop:document.body.scrollTop||document.documentElement.scrollTop,o:20,G:20,
B:20,H:e.width-20,Z:e.height-20,p:e.width-40,s:e.height-40,ba:60,c:[{color:"rgb(245,184,0)"},{color:"rgb(50,50,50)"},{color:"rgb(64,118,165)"},{color:"rgb(187,43,48)"}]};var t=0;this.r={add:function(){++t},get:function(){return t},u:function(a){t+=a},reset:function(){t=0},save:function(){}};this.W=function(){var a=this.d.q.length,d=this.d.n,c=this.d.list;for(--a;0<=a;--a){var b=this.d,e=this.d.q[a],g=f;b.list[e].w?(g=b.list[e].F,"up"===g?(g=m.a.m,g.h-=1,0===m.a.m.h&&l(m.a.m)):"right"===g?(g=m.a.l,
g.h-=1,0===m.a.l.h&&l(m.a.l)):"down"===g?(g=m.a.j,g.h-=1,0===m.a.j.h&&l(m.a.j)):"left"===g&&(g=m.a.k,g.h-=1,0===m.a.k.h&&l(m.a.k)),b.q.splice(b.q.indexOf(e),1),delete b.list[e]):(g=b.list[e],b=b.list[e].F,"up"===b?(g.g-=1,0>=g.g&&(g.w=j)):"right"===b?(g.f-=1,g.x+=1,1>=g.f&&(g.w=j)):"down"===b?(g.g-=1,g.y+=1,1>=g.g&&(g.w=j)):"left"===b&&(g.f-=1,1>=g.f&&(g.w=j)),m.r.add())}if(d!==f){a=n.R();c[d].x=a.x;c[d].y=a.y;if(0>c[d].x||!a.C&&0>a.x)c[d].c===this.a.k.c?(v(c[d],d,"left"),h.e.A("left",c[d].x,c[d].y,
c[d].f,c[d].g)):c[d].x=0;if(c[d].x+c[d].f>this.b.p||!a.C&&a.x>this.b.p-c[d].f)c[d].c===this.a.l.c?(v(c[d],d,"right"),h.e.A("right",c[d].x,c[d].y,c[d].f,c[d].g)):c[d].x=this.b.p-c[d].f;if(0>c[d].y||!a.C&&0>a.y)c[d].c===this.a.m.c?(v(c[d],d,"up"),h.e.A("up",c[d].x,c[d].y,c[d].f,c[d].g)):c[d].y=0;if(c[d].y+c[d].g>this.b.s||!a.C&&a.y>this.b.s-c[d].g)c[d].c===this.a.j.c?(v(c[d],d,"down"),h.e.A("down",c[d].x,c[d].y,c[d].f,c[d].g)):c[d].y=this.b.s-c[d].g}this.e.V()};this.X=function(){var a,d=this.d.list.length,
c;b.clearRect(0,0,e.width,e.height);b.save();b.translate(this.b.o,this.b.o);for(a=0;a<d;a++)this.d.list[a]!==f&&this.d.list[a]!==this.d.n&&(c=this.d.list[a],b.save(),b.fillStyle=c.color,c.z===j&&(b.lineJoin="round",b.strokeStyle="rgb(255,100,100)",b.lineWidth=5,b.strokeRect(c.x,c.y,c.f,c.g)),b.fillRect(c.x,c.y,c.f,c.g),b.restore());this.d.n!==f&&(b.save(),c=this.d.list[this.d.n],b.fillStyle=c.color,c.z===j&&(b.lineJoin="round",b.strokeStyle="rgb(255,100,100)",b.lineWidth=5,b.strokeRect(c.x,c.y,c.f,
c.g)),b.fillRect(c.x,c.y,c.f,c.g),b.restore());b.restore();b.save();b.fillStyle=this.a.m.color;b.fillRect(this.a.m.x,this.a.m.y,this.a.m.width,this.a.m.height);b.restore();b.save();b.fillStyle=this.a.l.color;b.fillRect(this.a.l.x,this.a.l.y,this.a.l.width,this.a.l.height);b.restore();b.save();b.fillStyle=this.a.j.color;b.fillRect(this.a.j.x,this.a.j.y,this.a.j.width,this.a.j.height);b.restore();b.save();b.fillStyle=this.a.k.color;b.fillRect(this.a.k.x,this.a.k.y,this.a.k.width,this.a.k.height);b.restore();
a=this.e.i.length;for(--a;0<=a;--a){b.save();b.fillStyle="#f00";b.font=" 20px sans-serif";b.textBaseline="bottom";switch(this.e.i[a].dir){case "up":b.fillText(this.e.i[a].text,this.e.i[a].t.x,this.e.i[a].duration/2);break;case "left":b.fillText(this.e.i[a].text,this.e.i[a].duration/2,this.e.i[a].t.y);break;case "right":b.fillText(this.e.i[a].text,this.b.Q-this.e.i[a].duration,this.e.i[a].t.y);break;case "down":b.fillText(this.e.i[a].text,this.e.i[a].t.x,this.b.I-this.e.i[a].duration/2)}b.restore()}b.save();
b.fillStyle="#555";b.font=" 15px sans-serif";b.textBaseline="bottom";b.fillText("score: "+this.r.get(),22,this.b.I-22);b.restore()};this.N=function(a){var d,c;a.touches===f?(d=window.event?a.pageX:a.clientX+m.b.scrollLeft,c=window.event?a.pageY:a.clientY+m.b.scrollTop):(d=a.touches[0].pageX,c=a.touches[0].pageY,a.preventDefault());d-=m.b.J;d-=m.b.G;c-=m.b.K;c-=m.b.B;n.O(d,c)};this.L=function(a){var d,c;if(o&&(a.touches===f?(d=window.event?a.pageX:a.clientX+m.b.scrollLeft,c=window.event?a.pageY:a.clientY+
m.b.scrollTop):(d=a.touches[0].pageX,c=a.touches[0].pageY,a.preventDefault()),d-=m.b.J,d-=m.b.G,c-=m.b.K,c-=m.b.B,n.O(d,c),0<d&&d<m.b.p&&0<c&&c<m.b.s)){var a=h.d,b,e=a.list;if(m.v===k){b=a.list.length;for(--b;0<=b;--b)if(e[b]!==f&&!e[b].P&&d>e[b].x&&c>e[b].y&&d<e[b].x+e[b].f&&c<e[b].y+e[b].g){e[b].z=j;a.n=b;m.v=j;break}}}};this.M=function(){m.v&&(m.d.list[m.d.n].z=k,delete m.d.n,m.v=k)};var p=[];this.e={i:p,A:function(a,b,c,e,i){var g=m.d.q.length;2===g?(p.push({c:2,dir:a,t:h.e.D(a,b,c,e,i),duration:100,
text:"+20"}),h.r.u(20)):3===g?(p.push({c:3,dir:a,t:h.e.D(a,b,c,e,i),duration:100,text:"+60"}),h.r.u(60)):4===g?(p.push({c:4,dir:a,t:h.e.D(a,b,c,e,i),duration:100,text:"+120"}),h.r.u(120)):5===g?(p.push({c:4,dir:a,duration:100,text:"+300"}),h.r.u(300)):5<g&&(p.push({c:4,dir:a,duration:100,text:"+1000"}),h.r.u(1E3))},V:function(){var a=p.length;for(--a;0<=a;--a)0>--this.i[a].duration&&this.i.splice(a,1)},D:function(a,b,c,e,h){var g,i;switch(a){case "up":g=b+e/2;i=0;break;case "left":g=0;i=c+h/2;break;
case "right":g=0;i=c+h/2;break;case "down":g=b+e/2,i=0}return{x:g,y:i}}};this.loop=function(){h.W();h.X()};this.play=function(){o||(document.body.addEventListener("mousemove",h.N,k),e.addEventListener("mousedown",h.L,k),document.body.addEventListener("mouseup",h.M,k),document.body.addEventListener("touchmove",h.N,k),e.addEventListener("touchstart",h.L,k),document.body.addEventListener("touchend",h.M,k),this.a.m=new Trash,l(this.a.m,0),u(this.a.m,this.b.o,0,this.b.p,this.b.o),this.a.l=new Trash,l(this.a.l,
1),u(this.a.l,this.b.H,this.b.B,this.b.o,this.b.s),this.a.j=new Trash,l(this.a.j,2),u(this.a.j,this.b.o,this.b.H,this.b.p,this.b.o),this.a.k=new Trash,l(this.a.k,3),u(this.a.k,0,this.b.o,this.b.o,this.b.p),i=setInterval(this.loop,1E3/30),q=setInterval(function(){var a=klocek=new Klocek,b=m.b.S,c=m.b.T;a.f=Math.ceil(Math.random()*b);a.f<c&&(a.f=c);a.g=Math.ceil(Math.random()*b);a.g<c&&(a.g=c);a.x=Math.floor(Math.random()*(m.b.p-a.f));a.y=Math.floor(Math.random()*(m.b.s-a.g));a.c=Math.floor(Math.random()*
m.b.c.length);a.color=m.b.c[a.c].color;h.d.list.push(klocek)},1E3),o=j)};this.stop=function(){o?(clearInterval(i),clearInterval(q),o=!o):h.play()};this.reset=function(){clearInterval(i);clearInterval(q);b.clearRect(0,0,e.width,e.height);var a=h.d;a.list.splice(0,a.list.length);a.q.splice(0,a.q.length);delete a.n;n.Y();o=k};this.U=function(){window.addEventListener("keydown",function(a){switch(a.keyCode){case 13:m.play();break;case 27:m.reset();break;case 32:m.stop()}},k);document.getElementById("start").ontouchstart=
function(){m.play()};document.getElementById("pauza").ontouchstart=function(){m.stop()};document.getElementById("reset").ontouchstart=function(){m.reset()};document.getElementById("start").onmousedown=function(){m.play()};document.getElementById("pauza").onmousedown=function(){m.stop()};document.getElementById("reset").onmousedown=function(){m.reset()}};this.aa=function(){b.clearRect(0,0,e.width,e.height);b.fillStyle="#ff8834";b.fillRect(30,40,80,120)}};m.U();
m.d=new function(){this.list=[];this.q=[];this.n};