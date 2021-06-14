const html_b1=document.querySelector('.html')
const css_b1=document.querySelector('.css')
const js_b1=document.querySelector('.js')
const navbar_design=document.querySelector('#nav_code>p')
const navbar=document.querySelector('#navbar')
const html1=document.querySelector('.html_one')
const css1=document.querySelector('.css_one')
const js1=document.querySelector('.js_one')
const footer_design=document.querySelector('#footer_code>p')
const footer_part=document.querySelector("#footer_code")

html_b1.addEventListener('click',()=>{
    html_b1.style.color="red"
    css_b1.style.color="black"
    js_b1.style.color="black"
    navbar_design.innerText="<html><header><nav><ul><li class = 'nav_elem' id = 'ne-1'> <a href='index.html'> Home </a> </li><li class = 'nav_elem' id = 'ne-2'> <a href='about.html'> About </a> </li><li class = 'nav_elem' id = 'ne-3'> <a href='code.html'> codes </a> </li><li class = 'nav_elem' id = 'ne-4'> <a href='#''> Experiments </a> </li></ul></nav></header><html>"
    navbar_design.style.color="green"

})

css_b1.addEventListener('click',()=>{
    html_b1.style.color="black";
    css_b1.style.color="red"
    js_b1.style.color="black"
    navbar_design.style.color="green"
    navbar_design.innerText="*{box-sizing: border-box; }body{margin: 0 auto;padding: 0;background-color: rgb (236, 248, 219);} header {display: block;background-color: black;height: 10vh;width: 100vw;} nav {display: flex;justify-content: center;align-items: center;height: 100%;width: 100%;}ul {display: flex;justify-content: center;align-items: center;width: 100%;}li {list-style-type: none;}.nav_elem> a {color: white;text-decoration: none;margin-left: 1rem;word-spacing: 1.5rem;font-size: 1.2em;}.nav_elem> a: hover {color: rgb (0, 255, 115);font-size: 1.5em;}@media screen and (max-width: 320px) {header {width: 150vw;}.nav_elem> a {margin-right: 10px;}}"

})

js_b1.addEventListener('click',()=>{
    html_b1.style.color="black";
    css_b1.style.color="black"
    js_b1.style.color="red"
    navbar_design.style.color="green"
    navbar_design.innerText="It has no js code!"
})

html1.addEventListener('click',()=>{
    html1.style.color="red";
    css1.style.color="black"
    js1.style.color="black"
    footer_design.style.color="green"
    footer_design.innerText="<footer><div class='copyright'>All Rights Reserved by Taneristique&#169;</div><span class='toggle'></span></footer>"
    footer_part.style.gridColumn='2/3'

})

css1.addEventListener('click',()=>{
    html1.style.color="black";
    css1.style.color="red"
    js1.style.color="black"
    footer_design.style.color="green"
    footer_design.innerText="footer{height:5vh;background-color:#79646e;display:flex;flex-direction:column;align-items:center;height:max-content;width:100vw}.copyright{color:#e3fac8;height:100%;display:inline-flex;align-items:center;justify-content:center}.toggle:before{content:'☀️'}.toggle.active:before{content:'🌑'}.toggle.animate{animation:animate .3s cubic-bezier(.4,0,.2,1)}@keyframes animate{0%{transform:scale(1)}50%{transform:scale(0)}100%{transform:scale(1)}}@media screen and (width:280px),(height:653px){footer{width:150vw}.content{width:85%}}@media screen and (width:240px),(height:320px){header{width:160vw}footer{width:160vw}.content{width:90%;place-items:center}.container{margin-left:30vw}}@media screen and (width:320px),(height:533px){.content{margin-left:5rem}.container{width:120vw}footer{width:150vw}}"
})

js1.addEventListener('click',()=>{
    html1.style.color="black"
    css1.style.color="black"
    js1.style.color="red"
    footer_design.style.color="green"
    footer_design.innerText="const toggle=document.querySelector('.toggle'),footer=document.querySelector('footer'),copyright=document.querySelector('.copyright'),content=document.querySelector('.content')<,article=document.querySelectorAll('.article');for(toggle.addEventListener('click',()=>{toggle.classList.toggle('active'),null==localStorage.clicked?localStorage.clicked=1:localStorage.clicked+=1;let o=parseInt(localStorage.clicked.length)%2;0==o?(document.body.style.backgroundColor='rgb(236, 248, 219)',document.body.style.color='black',footer.style.backgroundColor='rgb(121, 100, 110)',copyright.style.color='rgb(227, 250, 200)',content.style.backgroundColor='rgb(92, 238, 104)'):1==o&&(document.body.style.backgroundColor='rgb(136, 136, 136)',document.body.style.color='white',footer.style.backgroundColor='rgb(236, 248, 219)',copyright.style.color='black',content.style.backgroundColor='rgb(65, 29, 29)')}),localStorage.clicked.length%2==0?(document.body.style.backgroundColor='rgb(236, 248, 219)',document.body.style.color='black',footer.style.backgroundColor='rgb(121, 100, 110)',copyright.style.color='rgb(227, 250, 200)',content.style.backgroundColor='rgb(92, 238, 104)''):(toggle.classList.toggle('active'),document.body.style.backgroundColor='rgb(136, 136, 136)',document.body.style.color='white',footer.style.backgroundColor='rgb(236, 248, 219)',copyright.style.color='black',content.style.backgroundColor='rgb(65, 29, 29)'),localStorage.clicked.length>=20&&(localStorage.clicked=''),i=0;i<article.length;i++)article[i].style.color='black';"
    footer_part.style.gridColumn='1/2'
    footer_part.style.paddingLeft='0.5em'
    
})