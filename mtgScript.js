document.addEventListener("DOMContentLoaded", function(){
    const cardLinks = document.querySelectorAll('.cardLink');
    const cardImage = document.getElementById('cardImage');

    cardLinks.forEach(card =>{
        card.addEventListener('click', function(e) {
            e.preventDefault();

            const imagePath = this.getAttribute('data-image');
            cardImage.src = imagePath;

        });
    });
});