document.addEventListener("DOMContentLoaded", function() {
    const professions = ["Front-end Developer", "UI/UX Designer", "Freelancer"];
    let currentProfessionIndex = 0;
    let currentCharIndex = 0;
    const typingSpeed = 100; // Adjust typing speed here
    const erasingSpeed = 50; // Adjust erasing speed here

    function typeProfession() {
        const professionElement = document.querySelector(".profession");
        professionElement.textContent = professions[currentProfessionIndex].substring(0, currentCharIndex);
        currentCharIndex++;

        if (currentCharIndex <= professions[currentProfessionIndex].length) {
            setTimeout(typeProfession, typingSpeed);
        } else {
            setTimeout(eraseProfession, 2000); // Pause before erasing
        }
    }

    function eraseProfession() {
        const professionElement = document.querySelector(".profession");
        professionElement.textContent = professions[currentProfessionIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex > 0) {
            setTimeout(eraseProfession, erasingSpeed);
        } else {
            currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
            setTimeout(typeProfession, 500); // Pause before typing next profession
        }
    }

    typeProfession();
});




// Add this to your app.js file
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();
});




document.addEventListener('DOMContentLoaded', () => {
    // Loading screen code
    const loadingScreen = document.getElementById('loading-screen');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 1000); // Adjust the delay time for hiding the loading screen
        }, 0); // Adjust the delay time for changing the opacity (e.g., 2000 for 2 seconds)
    });
});



