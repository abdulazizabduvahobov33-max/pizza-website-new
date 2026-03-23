 
const filterButtons = document.querySelectorAll('.filter-btn');
const pizzaCards = document.querySelectorAll('.pizza-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.textContent.trim().toLowerCase();
    pizzaCards.forEach(card => {
      const cardCategory = card.dataset.category.toLowerCase();
      if (category === 'show all' || cardCategory === category) {
        card.style.display = 'block';
        card.classList.add('animate-fadeIn');
      } else {
        card.style.display = 'none';
      }
    });
  });
});

 
const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');

plusButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const countElem = btn.parentElement.querySelector('.count');
    let count = parseInt(countElem.textContent);
    countElem.textContent = count + 1;
  });
});

minusButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const countElem = btn.parentElement.querySelector('.count');
    let count = parseInt(countElem.textContent);
    if (count > 1) countElem.textContent = count - 1;
  });
});