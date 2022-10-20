//Business Interface Logic
function imgType(character) {
  const image = document.querySelector('img');
  if (character === 'human') {
    image.src = 'img/human.jpeg';
  } else if (character === 'animal') {
    image.src = 'img/animal.jpeg';
  } else if (character === 'extraterrestrial') {
    image.src = 'img/alien.jpeg';
  }
}

//User Interface Logic
function handleSubmission(event) {
  event.preventDefault();
  const name = document.querySelector('input#name').value;
  const hat = document.querySelector('select#hat').value;
  const charType = document.querySelector("input[name='charType']:checked").value;
  const color = document.getElementById("color").value;
  
  imgType(charType);
  document.getElementById('nameChoice').innerText = name;
  document.getElementById('hatChoice').innerText = hat;
  document.getElementById('typeChoice').innerText = charType;
  document.getElementById('colorChoice').innerText = color;
  document.querySelector('div.display').removeAttribute('class');
}

window.addEventListener('load', function() {
  const form = document.getElementById('character');
  form.addEventListener('submit', handleSubmission);
});