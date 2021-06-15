const ex_button=document.querySelector('#pr1')
let log = document.getElementById('log')
function promise(){
    let x=parseInt(prompt('Can you write the answer of 2**7 in number format?'))
    let p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{if(x==128)resolve("well done correct answer!")
                        reject('Wrong answer!!!')},1000)
    })
    p1.catch((reason)=>{log.innerHTML=reason})
    p1.then((value)=>{log.innerHTML=value})
}
ex_button.addEventListener('click',promise)