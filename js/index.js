// bannaer轮播图
let a=document.querySelector('.banner');
let b=document.querySelectorAll('.banner .tu img');
let c=document.querySelectorAll('.banner .btn span');
let m=0;
function move(){
    if(m>2){
        m=0;
    }
    for(let x=0;x<b.length;x++){
        b[x].classList.remove(`act`);
        c[x].classList.remove('active');
    }
    b[m].classList.add('act');
    c[m].classList.add('active');
    m++;
}
let n=setInterval(function(){
    move();
},2000)
b[0].onmouseenter=function(){
    clearInterval(n);
}
b[0].onmouseleave=function(){
    n=setInterval(function(){
        move();
    },2000)
}
for(let s=0;s<c.length;s++){
    c[s].onclick=function(){
        m=s;
        move();
    }
}