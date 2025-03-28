document.addEventListener("DOMContentLoaded", function () {
    const blikjes = document.querySelectorAll(".blikje");
    const container = document.querySelector(".game-container");
    const message = document.getElementById("message");

    // Haal de breedte van de container op
    const containerWidth = container.offsetWidth;

    // Stel de breedte van een blikje in
    const blikjeWidth = 50;
    
    // Bereken de ruimte tussen de blikjes
    const spacing = (containerWidth - 3 * blikjeWidth) / 4; 
    
    const positions = [
        { left: spacing, top: 200 },  // Links
        { left: spacing + blikjeWidth + spacing, top: 200 },
        { left: spacing + 2 * (blikjeWidth + spacing), top: 200 }
    ];

    // Willekeurige positie voor de hond
    const randomBlikjeIndex = Math.floor(Math.random() * 3);
    let dogBlikje = blikjes[randomBlikjeIndex];

    // Hond toevoegen onder het willekeurige blikje
    const dog = document.createElement("div");
    dog.classList.add("dog");
    dog.style.left = positions[randomBlikjeIndex].left + "px"; 
    dog.style.top = positions[randomBlikjeIndex].top + "px";
    container.appendChild(dog);

    // Update de posities van de blikjes
    blikjes.forEach((blikje, index) => {
        blikje.style.left = `${positions[index].left}px`;
        blikje.style.top = `${positions[index].top}px`;

        blikje.addEventListener("click", function () {
            if (blikje === dogBlikje) {
                message.textContent = "Je hebt de hond gevonden!";
                setTimeout(() => {
                    window.location.href = "https://www.fightclub.nl"; 
                }, 5000); 
            } else {
                message.textContent = "Helaas, probeer het opnieuw!";
            }
        });
    });

    // Functie voor het wisselen van de posities van de blikjes
    function shuffle() {
        //Willekeurige volgorde van de blikjes
        positions.sort(() => Math.random() - 0.5);

        blikjes.forEach((blikje, index) => {
            blikje.style.transition = "left 0.3s ease-in-out, top 0.3s ease-in-out";
            blikje.style.left = `${positions[index].left}px`;
            blikje.style.top = `${positions[index].top}px`;
        });
    }

    // Snellere en langere shuffles
    let shuffleInterval = setInterval(shuffle, 500); 
    setTimeout(() => {
        clearInterval(shuffleInterval); 
    }, 4000);
});
