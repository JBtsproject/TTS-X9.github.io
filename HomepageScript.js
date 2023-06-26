document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector(".floating-text");
  const containerElement = document.querySelector(".container");
  
  const containerWidth = containerElement.clientWidth;
  const containerHeight = containerElement.clientHeight;
  const textWidth = textElement.clientWidth;
  const textHeight = textElement.clientHeight;

  let posX = Math.random() * (containerWidth - textWidth);
  let posY = Math.random() * (containerHeight - textHeight);
  let dx = 2;
  let dy = 2;

  function animateText() {
    posX += dx;
    posY += dy;
    
    if (posX + textWidth >= containerWidth || posX <= 0) {
      dx = -dx;
    }

    if (posY + textHeight >= containerHeight || posY <= 0) {
      dy = -dy;
    }

    textElement.style.transform = `translate(${posX}px, ${posY}px)`;

    requestAnimationFrame(animateText);
  }

  animateText();
});

