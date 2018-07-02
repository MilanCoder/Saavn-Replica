


window.addEventListener("load",initEvent);
var audio;
var songName;
var songImage;
var musicTime;
var endTime;
var slider;
var resume;
var randomized;
var repcondition;
var doRepeat;
function initEvent(){
  doRepeat=false;
    repcondition="repeat";
    isplaying=false;
    musicminute=0;
    randomized=false;
    allowdisplay=document.getElementById("music-player");
    document.getElementById("previous").addEventListener("click",previoussong);
    restart=document.getElementById("restart");
    resume=document.getElementById("resume");
    resume.addEventListener("click",resumesong);
    document.getElementById("next").addEventListener("click",nextsong);
    volumebar=document.getElementById("volume-progress-bar");
    volumeslider=document.getElementById("setVolume");
    volumeslider.addEventListener("change",setVolume)
    slider=document.getElementById("myRange");
    progressbar=document.getElementById("music-progress-bar");
   slider.addEventListener("change",seekSong);
    restart.addEventListener("click",iconchange);
    document.getElementById("random-song-button").addEventListener("click",randomiconchange);
    var musicseconds =document.getElementById("time-start").innerHTML;
    audio = document.getElementById("audio");
    songTag=document.getElementsByClassName("song-name");
    for(var i=0;i<songTag.length;i++)
   { songTag[i].addEventListener("click",setsong);
   }
 
}

function seekSong(){
  audio.currentTime=slider.value;
}
function iconchange(){

  if(repcondition=="repeat")
 { 
   document.getElementById("restart").style.background="url('/Projects/assets/spritesheet/sprite-saavn.png') no-repeat -4px -291px";
   doRepeat=true;
  repcondition="single-repeat";
  
}
  else if(repcondition=="no-repeat"){
    restart.style.background="url('/Projects/assets/spritesheet/sprite-saavn.png') no-repeat -4px -269px";
     repcondition="repeat"; 
     doRepeat=false;
    
    }

  else if(repcondition=="single-repeat")
  {restart.style.background="url('/Projects/assets/spritesheet/sprite-saavn.png') no-repeat -23px -291px";
  restart.style.width="17px";
  restart.style.height="14px";
  restart.style.padding="3px 5px 5px 5px";
  repcondition="no-repeat";
  doRepeat=true;
}

}

function randomiconchange(){
 if(randomized==false)
 { document.getElementById("random-song-button").style.background="url('/Projects/assets/spritesheet/sprite-saavn.png') no-repeat -47px -291px";
  randomized=true;
}
  else{
    document.getElementById("random-song-button").style.background="url('/Projects/assets/spritesheet/sprite-saavn.png') no-repeat -47px -269px";
    randomized=false;
}
}
function setsong(){
allowdisplay.style.display="flex";
songName=event.srcElement.innerHTML.trim();
console.log(songName);
audio.src='assets/songs/'+songName+'.mp3';
setSongImage();
setSongName();

setInterval(function(){
  slider.max=audio.duration;
  audioseconds=parseInt(audio.currentTime);
  musicminute=parseInt(audioseconds/60);
   audioseconds=audio.currentTime-(musicminute*60)
  musicseconddigit=parseInt(audioseconds/10);
  musicseconds=parseInt(audioseconds%10);
 
  musicTime=musicminute+":"+musicseconddigit+musicseconds;
  document.getElementById("time-start").innerHTML=musicTime
 //slider value change
  slider.value=audio.currentTime;
  progressbar.style.width=((slider.value/(slider.max))*100)+"%";
  if(audio.currentTime==audio.duration){
    if(doRepeat==true)
  {
    previoussong();
    resumesong();
  }
  }
},1000);
setTimeout(function(){
  
  endTime = parseInt(audio.duration);
  endmusicminute=parseInt(endTime/60);
  endTime=audio.duration-(endmusicminute*60)
  endmusicseconddigit=parseInt(endTime/10);
    endmusicseconds=parseInt(endTime%10);
  musicendTime=endmusicminute+":"+endmusicseconddigit+endmusicseconds;
  document.getElementById("time-end").innerHTML=musicendTime;
 
 
},1000);

}


function setSongName(){
    songName=event.srcElement.innerHTML.trim();
    movieName=event.srcElement.nextElementSibling.innerHTML.trim();
    document.getElementById("song_name_place").innerHTML=songName;
    document.getElementById("movie-name-place").innerHTML="- "+movieName;
     
  

}

function setSongImage(){
songName=event.srcElement.innerHTML.trim();
document.getElementById("songImage").src='assets/Images/'+songName+'.jpg';

}

function setVolume(){
audio.volume=(volumeslider.value)/100;
volumebar.style.width=volumeslider.value+"px";
}
 
function resumesong(){
if(isplaying==false)
  {
    resume.style.background="url('/Projects/assets/spritesheet/sprite-saavn.png') no-repeat -63px -177px";
    resume.style.width="19px";
    resume.style.height="30px";
      audio.play() ;
      isplaying=true; }   
      else{
   audio.pause();
   isplaying=false;
   resume.style.background=" url('/Projects/assets/spritesheet/sprite-saavn.png') no-repeat -15px -177px";
   resume.width="24px";
     resume.height="30px";
 }
}

function previoussong(){
  audio.currentTime=0;
  isplaying=false;
}


function nextsong(){
  audio.currentTime=0;
  isplaying=false;
}