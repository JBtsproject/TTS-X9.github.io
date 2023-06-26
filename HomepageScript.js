document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector(".floating-text");
  const containerElement = document.querySelector(".container");
  
  const containerWidth = containerElement.clientWidth;
  const containerHeight = containerElement.clientHeight;
  const textWidth = textElement.clientWidth;
  const textHeight = textElement.clientHeight;

  let posX = containerWidth / 2 - textWidth / 2;
  let posY = containerHeight / 2 - textHeight / 2;
  let t = 0;

  function animateText() {
    t += 0.01;
    const offsetX = containerWidth / 2 - textWidth / 2;
    const offsetY = containerHeight / 2 - textHeight / 2;
    const radiusX = containerWidth / 4;
    const radiusY = containerHeight / 4;

    posX = offsetX + radiusX * Math.cos(t);
    posY = offsetY + radiusY * Math.sin(t);

    textElement.style.transform = `translate(${posX}px, ${posY}px)`;

    requestAnimationFrame(animateText);
  }

  animateText();
});

