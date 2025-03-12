let more=document.querySelector("#left-more")
let account=document.querySelector("#account")
let options=document.querySelector(".more-options")
let AccountOptions=document.querySelector(".more-account")
let music=[
    {name:"Rehan Deyan", src:"./songs/Rehan-Deyan.mp3",img:"./songs/Rehan deyan.jpg"},
    {name:"Majhail Anthem", src:"./songs/Majhail Anthem.mp3",img:"./songs/MAjhail.jpg"},
    {name:"Jhol", src:"./songs/Jhol.mp3",img:"./songs/Jhol.jpg"},
    {name:"Rukh", src:"./songs/Rukh.mp3",img:"./songs/Rukh.jpg"},

]
music.forEach(e=>{
    console.log(e.img);
    
})
let mm =new Audio("./songs/Rehan-Deyan.mp3")
mm.play()
let flag=0
let flag2=0
more.addEventListener("click",()=>{
    if(flag==0){
        options.style.display="block"
flag=1
    }
    else{
        options.style.display="none"
flag=0
    }
    
})
account.addEventListener("click",()=>{
    if(flag2==0){
        AccountOptions.style.display="block"
flag2=1
    }
    else{
      AccountOptions.style.display="none"
flag2=0
    }
    
})