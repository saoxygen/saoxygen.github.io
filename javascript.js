
var songHowIBeen = document.getElementById("HowIBeen");
var songWhat_it_took = document.getElementById("What_it_took");
var songlame = document.getElementById("lame");
var songHold_on = document.getElementById("Hold_on");

var iconindex = document.getElementById("icon_index");
var iconabout = document.getElementById("icon_about");
var iconmusic = document.getElementById("icon_music");
var iconsocial = document.getElementById("icon_social");

iconindex.onclick = function(){
    
    if (songHowIBeen.paused){
        songHowIBeen.play();
        document.getElementById("icon_index").className="fa fa-volume-up";
    }
    else{
        songHowIBeen.pause();
        document.getElementById("icon_index").className="fa fa-volume-off";
    }
}
function about(){
    
    if (songHold_on.paused){
        songHold_on.play();
        document.getElementById("icon_about").className="fa fa-volume-up";
    }
    else{
        songHold_on.pause();
        document.getElementById("icon_about").className="fa fa-volume-off";
    }
}
function music(){
    
    if (songWhat_it_took.paused){
        songWhat_it_took.play();
        document.getElementById("icon_music").className="fa fa-volume-up";
    }
    else{
        songWhat_it_took.pause();
        document.getElementById("icon_music").className="fa fa-volume-off";
    }
}
function social(){
    
    if (songlame.paused){
        songlame.play();
        document.getElementById("icon_social").className="fa fa-volume-up";
    }
    else{
        songlame.pause();
        document.getElementById("icon_social").className="fa fa-volume-off";
    }
}


