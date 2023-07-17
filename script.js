      // Obtenir le contexte du canvas
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