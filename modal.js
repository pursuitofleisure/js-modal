const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

// Handler for when user clicks on the button
function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // Grab the image src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // populate modal with the new info
  modalInner.innerHTML = `
      <img src="${imgSrc.replace(
        '200',
        '500'
      )}" width="500" height="500" alt="${name}" />
      <p>${desc}</p>
   `;
  // show the modal
  modalOuter.classList.add('open');

}

// Close the modal
function closeModal() {
  modalOuter.classList.remove('open');
}

// Attach event handler for each button
cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

modalOuter.addEventListener('click', function(event) {
  // if finds modal inner, return false
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

// Also close the modeal if the user hits escape
window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
