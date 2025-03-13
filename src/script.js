let more=document.querySelector("#left-more")
let account=document.querySelector("#account")
let options=document.querySelector(".more-options")
let AccountOptions=document.querySelector(".more-account")
let songDiv= document.querySelector(".main-content")
let music=[
    {id:0, name:"Rehan Deyan", src:"./songs/Rehan-Deyan.mp3",img:"./songs/Rehan-deyan.jpg"},
    {id:1, name:"Majhail Anthem", src:"./songs/Majhail Anthem.mp3",img:"./songs/MAjhail.jpg"},
    {id:2, name:"Jhol", src:"./songs/Jhol.mp3",img:"./songs/Jhol.jpg"},
    {id:3, name:"Rukh", src:"./songs/Rukh.mp3",img:"./songs/Rukh.jpg"},

]
let clutter=""
music.forEach(e=>{
clutter+=`<div class="box h-12 rounded-md bg-gray-700 m-3 w-[90%] flex items-center justify-start gap-4"> <div class="left  flex items-center justify-start w-[78%] gap-4"><div class="img h-full rounded-md  w-14"> <img  class="rounded-md h-full w-[95%] " src=${e.img} alt=""></div> <p>${e.name}</p> </div>   <i data-id=${e.id} class="play-btn ri-play-mini-fill  p-1 px-2 text-2xl  flex items-center justify-center text-black bg-green-500 rounded-full  "></i>  </div>
`

songDiv.innerHTML=clutter
})
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

songDiv.addEventListener('click',(e)=>{
    let    audio = new Audio ("")
    console.log(audio);
    
    if(e.target.tagName==="I"){
        let id=parseInt((e.target.getAttribute("data-id")))
        let musicSrc=(music[id].src)
        
     audio = new Audio (musicSrc)
    
audio.play()
console.log(audio);

}
})