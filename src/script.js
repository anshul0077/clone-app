let more = document.querySelector("#left-more")
let account = document.querySelector("#account")
let options = document.querySelector(".more-options")
let AccountOptions = document.querySelector(".more-account")
let songDiv = document.querySelector(".main-content")
let endTime = document.querySelector("#end-time")
let initalTime = document.querySelector("#inital-time")
let audioduration = 0;
let platBtn= document.querySelector("#play")
let pauseBtn= document.querySelector("#pause")
let seekTime
let playtime = 0;
let count = 0;
let music = [
    { id: 0, name: "Rehan Deyan", src: "./songs/Rehan-Deyan.mp3", img: "./songs/Rehan-deyan.jpg", artist: 'Navaan sandhu' },
    { id: 1, name: "Majhail Anthem", src: "./songs/Majhail.mp3", img: "./songs/Majh.jpg", artist: 'Karan Randhawa' },
    { id: 2, name: "Jhol", src: "./songs/Jhol.mp3", img: "./songs/Jhol.jpg", artist: 'Mannu, Annural Khalid' },
    { id: 3, name: "Rukh", src: "./songs/Rukh.mp3", img: "./songs/Rukh.jpg ", artist: 'Navaan sandhu' },

]
let clutter = ""
music.forEach(e => {
    clutter += `<div class="box overflow-hidden  group h-12 rounded-md bg-gray-700 m-3 w-[90%] flex items-center justify-start gap-4"> <div class="left  flex items-center justify-start w-[78%] gap-4"><div class="img h-full rounded-md  w-14"> <img  class="rounded-md h-full w-[95%] " src=${e.img} alt=""></div> <p>${e.name}</p> </div>   <i data-id=${e.id} class="play-btn ri-play-mini-fill  transform transition-all mt-24 group-hover:mt-0   p-1  px-2 text-2xl  flex items-center justify-center text-black bg-green-500 rounded-full  "></i>  </div>
`

    songDiv.innerHTML = clutter
})
let flag = 0
let flag2 = 0

more.addEventListener("click", () => {
    if (flag == 0) {
        options.style.display = "block"
        flag = 1
    }
    else {
        options.style.display = "none"
        flag = 0
    }

})
account.addEventListener("click", () => {
    if (flag2 == 0) {
        AccountOptions.style.display = "block"
        flag2 = 1
    }
    else {
        AccountOptions.style.display = "none"
        flag2 = 0
    }

})


let currentAudio = null; 
songDiv.addEventListener('click',()=>{
    seekupdater()
    currentAudio.play()
    platBtn.style.display="none"
    pauseBtn.style.display="block"
})

songDiv.addEventListener('click', (e) => {
    if (e.target.tagName === "I") {
        
        let id = parseInt(e.target.getAttribute("data-id"));
        let musicSrc = music[id].src;
        
        
        if (currentAudio && currentAudio.src.includes(musicSrc)) {
            if (currentAudio.paused) {
                currentAudio.play();
            } else {
                currentAudio.pause();
            }
        } else {
            
            if (currentAudio) {
                currentAudio.pause();
                
            }
        

            currentAudio = new Audio(musicSrc);
            currentAudio.play();
         
        }
        clearInterval(seekTime)
        playtime=0
        
seekupdater()
        playbackSongs(id);
    }

    function aduration() {
        currentAudio.addEventListener('loadedmetadata', () => {
            audioduration = currentAudio.duration; 
            // console.log(audioduration);

            let minutes = Math.floor(currentAudio.duration / 60);
            let remainingSeconds = Math.floor(currentAudio.duration % 60);
            // console.log(`minutes ${minutes} seconds ${remainingSeconds}`);
            endTime.innerHTML = minutes + ":" + remainingSeconds;
        });
    }

    
    aduration();

 
    currentAudio.addEventListener('loadedmetadata', () => {
        // console.log(`The audio duration is available for use: ${audioduration} seconds`);
        seekupdater()
    });




});


let leftplayback = document.querySelector(".left-playback")
function playbackSongs(id) {
    let showcase = music[id].img
    let artistName = music[id].artist
    let songname = music[id].name
    // console.log(showcase);

    let clutter = ''
    clutter += `    <div class="img h-24 w-24 bg-red-500 rounded-md">
               <img class="h-[100%] rounded-md w-[100%]" src=${showcase}>
                </div>
                <div class="content">
                    <p class="font-semibold ">${songname}</p>
                    <p class="text-gray-300">${artistName}</p>
                </div>
            <i class="ri-checkbox-circle-fill  hidden"></i>
                <i data-set=${id} class="ri-add-circle-line transform transition-all duration-300 text-gray-300 hover:text-white  hover:scale-105 w-10 h-10  text-xl flex items-center justify-center rounded-full"></i>`


    leftplayback.innerHTML = clutter


}
let volumeRocker = document.querySelector("#volume-rocker")


volumeRocker.addEventListener('input', () => {
    currentAudio.volume = volumeRocker.value
    // console.log(currentAudio.volume);
    

})


function seekupdater() {
  let seek = document.querySelector("#seek");
 clearInterval(seekTime)


 seekTime = setInterval(() => {
 
    let time = Math.floor((currentAudio.currentTime / currentAudio.duration) * 100);
    // console.log("time",time);
    
    seek.value = time;


    playtime++;
    if (playtime === 60) {
      playtime = 0;
      count++;
    }


    if (playtime.toString().length === 2) {
      initalTime.innerHTML = `${count}:${playtime}`;
    } else {
      initalTime.innerHTML = `${count}:0${playtime}`;
    }

    // console.log("Seek Value:", seek.value);
    // console.log("Current Playtime:", playtime, "Minutes:", count);

  }, 1000); 

  setTimeout(() => {
    clearInterval(seekTime);
    // console.log("Audio completed. Timer stopped.");
  }, currentAudio.duration * 1000); 
}

pauseBtn.addEventListener('click',()=>{
currentAudio.pause()
clearInterval( seekTime)
platBtn.style.display="block"
pauseBtn.style.display="none"

})
platBtn.addEventListener('click',()=>{

   seekupdater()
    currentAudio.play()
    platBtn.style.display="none"
    pauseBtn.style.display="block"
    
    })

    // liked songs
    likesongs()
    let arr=[];
function likesongs(){

    leftplayback.addEventListener('click',(e)=>{

        if(e.target.tagName==="I"){
            
           arr.push(music[ e.target.getAttribute("data-set")])            
        }
        console.log(arr);
    })
}

seek.addEventListener("input",(e)=>{

//   currentAudio.currentTime+=seek.value
console.log(currentAudio.currentTime);
console.log(currentAudio.duration);
console.log(seek.value);
console.log();
currentAudio.currentTime=((currentAudio.duration* seek.value)/100)




  
  seekupdater()
  
})

