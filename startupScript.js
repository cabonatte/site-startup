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

<<<<<<< HEAD
function feminino() {
	const fundo = document.getElementById("fundo")
	fundo.style.backgroundColor = "#DB7093"
	
}

function masculino() {
	const fundo = document.getElementById("fundo")
	fundo.style.backgroundColor = "#4682B4"
	
}

function outro() {
	const fundo = document.getElementById("fundo")
	fundo.style.backgroundColor = "#312b2f"
	
}
=======
function invertcolor() {
    const body = document.getElementById("gorila");
		if(body.style.filter == "invert(100%)"){
			body.style.filter = "";
		} else {
			body.style.filter = "invert(100%)";
		};
}
>>>>>>> 381b323a0a1ae5d823f6694485e31c5a591fd5ac
