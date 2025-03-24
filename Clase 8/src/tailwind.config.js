const card = document.getElementById('card');
        
card.addEventListener('click', function() {
    this.classList.toggle('flipped');
});

setInterval(() => {
    card.classList.toggle('flipped');
}, 5000);