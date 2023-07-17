
let lecteurAudio = document.getElementById('lecteur-audio');
let auto =document.querySelector("#auto");

let prixautoclicker=100;
let pricedyeing=100;
let gysahls = 0;
let gils = 0;

function Bakegysahl() {
    lecteurAudio.play();
    gysahls ++;
    document.getElementById('gysahl-text').innerHTML = "Gysahls: " + gysahls;
    gils += 5;
    document.getElementById('gils-text').innerHTML = "Gils: " + gils;

    startCanvas();
}

function startCanvas() {
    // Code pour démarrer le canvas
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");




         // Définir les coordonnées de départ de la pièce
         let x = canvas.width = 1300;
         let y = canvas.height / 2;
   
         // Définir la vitesse initiale de la pièce
         let vx = -2;
         let vy = 0;
   
         // Définir l'accélération due à la gravité
         let gravity = 0.1;
   
         function drawPiece() {
             ctx.clearRect(0, 0, canvas.width, canvas.height);
   
             // Dessiner la pièce
             ctx.beginPath();
             ctx.arc(x, y, 10, 0, Math.PI * 2);
             ctx.fillStyle = "yellow";
             ctx.fill();
             ctx.closePath();
   
             // Mettre à jour la position de la pièce en fonction de la vitesse et de la gravité
             x += vx;
             vy += gravity;
             y += vy;
   
             // Arrêter la pièce lorsque elle atteint le sol
             if (y + 10 > canvas.height) {
                 vy = -vy * 0.6; // Rebondir légèrement
                 y = canvas.height - 10;
             }
   
             requestAnimationFrame(drawPiece);
         }
   
         drawPiece();
}

function autoclick() {
    if (gils >= prixautoclicker){

        gils=gils  - prixautoclicker;

        setInterval(() => {
            gysahls++;
            document.getElementById('gysahl-text').innerHTML = "Gysahls: " + gysahls;
            gils += 5;
            document.getElementById('gils-text').innerHTML = "Gils: " + gils;
        }, 1000);

    } 

    
}


//audio

let master = document.getElementById('master');
let iconeOff = document.getElementById('icone-off');

function muted() {
    if (lecteurAudio.volume > 0) {
        lecteurAudio.volume = 0;
        master.src = "asset/of.png";
    } else {
        lecteurAudio.volume = 1;
        master.src = "asset/on.png";
    }
}
    

//bouton_dyeing

//quand j'appuie sur le bouton teinture verte, le chocobo devient vert et 100g s'enlève

let dyeing = document.getElementById('dyeing');

function green(){
    
}
console.log(green)







auto.addEventListener("click", autoclick);

