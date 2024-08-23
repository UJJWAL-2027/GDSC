document.addEventListener('DOMContentLoaded', function() {
    const countdownScreen = document.getElementById('countdown-screen');
    const cakeScreen = document.getElementById('cake-screen');
    const mainContent = document.getElementById('main-content');
    const cutCakeBtn = document.getElementById('cut-cake-btn');
    const countdownTimer = document.getElementById('countdown-timer');
    
    let timeLeft = 5; 

    
    const countdown = setInterval(function() {
        countdownTimer.textContent = timeLeft;
        timeLeft -= 1;
        if (timeLeft < 0) {
            clearInterval(countdown);
            countdownScreen.style.opacity = '0';
            setTimeout(() => {
                countdownScreen.classList.add('hidden');
                cakeScreen.classList.remove('hidden');
            }, 1000);
        }
    }, 1000);

    
    cutCakeBtn.addEventListener('click', function() {
        cakeScreen.style.opacity = '0';
        setTimeout(() => {
            cakeScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
        }, 1000);
    });

    
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseContent = document.getElementById('surprise-content');

    surpriseBtn.addEventListener('click', function() {
        surpriseContent.classList.toggle('hidden');
    });
});
