let songIndex = 0;
let audioElement = new Audio('0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Tu Ayi Nai(pagalWorld)", filepath: "0.mp3", coverPath: "1.jpg" },
    { songName: "Bewafa (Pagal-World.Com.In)", filepath: "1.mp3", coverPath: "2.jpg" },
    { songName: "Papa Meri-Jaan(Animal)", filepath: "2.mp3", coverPath: "3.jpg" },
    { songName: "Saari Duniya(PagalWorld.com)", filepath: "3.mp3", coverPath: "4.jpg" },
    { songName: "O Mahi(PagalWorld.com)", filepath: "4.mp3", coverPath: "5.jpg" },
    { songName: "Kahani Suno(PagalWorld.com.sb) ", filepath: "5.mp3", coverPath: "6.jpg" },
    { songName: "Let-Me-Love-You(Pagal-World.Com.In) ", filepath: "6.mp3", coverPath: "7.jpg" },
    { songName: "dil me ho tum ", filepath: "3.mp3", coverPath: "8.jpg" },
    { songName: "dil nahi maangta   ", filepath: "3.mp3", coverPath: "9.jpg" },
    { songName: "dil hai zinda ", filepath: "3.mp3", coverPath: "4.jpg" },
]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');

    })
}




const playAudio = () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-pause-circle');
    }

}








// listen to Events 
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${index}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');

    })

})



        
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        index = 0;
    }
    else{
        songIndex +=1;
    }    
    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }    
    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})