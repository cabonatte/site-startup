const myVideo = document.getElementById("video");
let k = 0;

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
	myVideo.width = 800;
}

function makeSmall() {
	myVideo.width = 420;
}

function makeNormal() {
	myVideo.width = 550;
}


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

function invertcolor() {
    const body = document.getElementById("gorila");
		if(body.style.filter == "invert(100%)"){
			body.style.filter = "";
		} else {
			body.style.filter = "invert(100%)";
		};
}

const perfis = document.getElementsByClassName("persona")
function mexePersona(){
		alert("Veja me conhecer melhor!!!");
	};

// Parte Patricia

function virarbola1(){
     let imagem = document.getElementById("picfriends");
     k += 360;
     imagem.style.transform = "rotatey(" + k + "deg)";
     imagem.style.transitionDuration = "10s";
   }

   function virarimagem1(){
     virarbola1();
     let imagem = document.getElementById("picfriends");
     picfriends.className = 'divfilhaimg';
     picfriends.innerHTML = '<img class="divfilhaimg"src="img/conexao.gif" alt="">';
     console.log('oi');
     return true;
   }

   function virarimagem2(){
     virarbola1();
     let imagem = document.getElementById("picfriends");
     picfriends.className = 'divfilhaimg';
     picfriends.innerHTML = '<img class="divfilhaimg" src="img/friends.gif" alt="">';
     console.log('tchau');
     return true;
   }
