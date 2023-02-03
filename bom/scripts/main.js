const input = document.getElementById('favchap');
const button = document.getElementById('but');
const listOfItems = document.getElementById('list');

function add(chapter) {
  if (chapter) {
    
    const liElement = document.createElement('li');
    liElement.innerHTML = chapter;
    const deleteButton = document.createElement('button');
    deleteButton.className ='bts';
    deleteButton.innerHTML = '❌';
    deleteButton.addEventListener('click', function() {
      liElement.remove();
      input.focus();
      input.value = '';
    });

    liElement.appendChild(deleteButton);
    listOfItems.appendChild(liElement);
  }
}

button.addEventListener('click', function() {
  add(input.value);
  input.value = '';
  input.placeholder = 'Happy Study';
});




