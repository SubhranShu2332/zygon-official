const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const totalCards = document.querySelectorAll('.cards label').length;
let currentIndex = 1;
function updateSlider(index) {
    if (index < 1) {
        currentIndex = totalCards;
    } else if (index > totalCards) {
        currentIndex = 1; 
    } else {
        currentIndex = index;
    }
    document.getElementById(`s${currentIndex}`).checked = true;
}

prevButton.addEventListener('click', () => {
    updateSlider(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    updateSlider(currentIndex + 1);
});
updateSlider(currentIndex);
