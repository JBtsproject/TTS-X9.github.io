const floatingText = document.querySelector('.floating-text');

function getRandomCoordinate() {
  return `${Math.random() * 100 - 50}vw`;
}

floatingText.style.setProperty('--random-x1', getRandomCoordinate());
floatingText.style.setProperty('--random-y1', getRandomCoordinate());
floatingText.style.setProperty('--random-x2', getRandomCoordinate());
floatingText.style.setProperty('--random-y2', getRandomCoordinate());
floatingText.style.setProperty('--random-x3', getRandomCoordinate());
floatingText.style.setProperty('--random-y3', getRandomCoordinate());
