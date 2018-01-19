const myVideo = document.getElementById("video");

let imagem = document.getElementById("turtle");

imagem.addEventListener('click', invertcolor);

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

function invertcolor() {
    const body = document.getElementById("gorila");
		if(body.style.filter == "invert(100%)"){
			body.style.filter = "";
		} else {
			body.style.filter = "invert(100%)";
		};
}
