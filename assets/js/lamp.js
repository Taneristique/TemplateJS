   
   const toggle=document.querySelector(".toggle")
   const footer=document.querySelector('footer')
   const copyright=document.querySelector('.copyright')
   const content=document.querySelector('.content')
   const article=document.querySelectorAll('.article')
    toggle.addEventListener('click',()=>{
        toggle.classList.toggle('active')
        if(localStorage['clicked']==null){
            /*Actually when you use a var and localStorage together it does not 
            work because variable's value change to first declaration on the code
            page.So I decided using only localStorage.This statement will assigne 
            our localStorage's value to 1.If it is null(not defined in this case).
            But keep in mind any value you assigned to local variable will be auto
            converted to string format*/
            localStorage['clicked']=1
        }
        else{/*If it is not null everytime we clicked on toogle element a new value
            will add to old value.This way we will change length of our local storage
             */
            localStorage['clicked']+=1
        }
        let bg_var=parseInt(localStorage['clicked'].length)%2/*This is how we will 
        use var instead of assigning a variable's value to localStorage,we will assigne 
        localStorage's value to variable.But keep in mind 
        if  you write if(parseInt(localStorage['clicked'].length)%2==0){} and 
        else if(parseInt(localStorage['clicked'].length)%2==1) for the following two 
        if,else if statement.This will work too.But using variable seems more clear
        and short to me.
        */
        if(bg_var==0){ 
        /*This way we manipulate dom elements when 
        parseInt(localStorage['clicked'].length)%2=0 */
            document.body.style.backgroundColor="rgb(236, 248, 219)"
            document.body.style.color="black"
            footer.style.backgroundColor="rgb(121, 100, 110)"
            copyright.style.color="rgb(227, 250, 200)"
            content.style.backgroundColor="rgb(92, 238, 104)"
        }
        else if(bg_var==1){
        /*This way we manipulate dom elements when 
        parseInt(localStorage['clicked'].length)%2=0 */
            document.body.style.backgroundColor='rgb(136, 136, 136)'
            document.body.style.color="white"
            footer.style.backgroundColor="rgb(236, 248, 219)"
            copyright.style.color="black"
            content.style.backgroundColor="rgb(65, 29, 29)"
        }
    })

    if(localStorage['clicked'].length%2==0){/*This will continue our dom manipulation if mod=0*/
        document.body.style.backgroundColor="rgb(236, 248, 219)"
        document.body.style.color="black"
        footer.style.backgroundColor="rgb(121, 100, 110)"
        copyright.style.color="rgb(227, 250, 200)"
        content.style.backgroundColor="rgb(92, 238, 104)"
}
    else{/*This will continue our dom manipulation if mod=1,reason why we do this even if we have
        localStorage value, page preferences will change when user changed page due to the fact that
        we had assigned all the conditions in addEventlistener and they are valid when user clicked toggle element and toggle is activated.But with 
        help of these 2 conditions we will continue to save our page preferences outside of local scope even if we defined them in local scope.*/
        toggle.classList.toggle('active')
        document.body.style.backgroundColor='rgb(136, 136, 136)'
        document.body.style.color="white"
        footer.style.backgroundColor="rgb(236, 248, 219)"
        copyright.style.color="black"
        content.style.backgroundColor="rgb(65, 29, 29)"
}

if(localStorage['clicked'].length>=20){
/*local storage value will keep in memory with max 20 characters.If character length
passes 20 when you reload page and wrote localStorage['clicked'].length,you will see
that character length reset to 0*/
    localStorage['clicked']=""
}

for(i=0;i<article.length;i++) /*This for loop will set all article elements color as black 
in both case if localStorage['clicked'].length%2==0 or 1.This way article elements'
description will be always visible.*/
article[i].style.color="black"