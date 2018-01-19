const myVideo = document.getElementById("video");

function playPause(){
	if(myVideo.paused){
		myVideo.play();
	}
	else{
		myVideo.pause();
	}
}

function makeBig() {
	myVideo.width = 550;
}

function makeSmall() {
	myVideo.width = 320;
}

function makeNormal() {
	myVideo.width = 420;
}