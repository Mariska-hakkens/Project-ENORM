document.addEventListener("DOMContentLoaded", function () {
    let naam = "EnoRm";
    console.log(naam);

    const hoverText = document.getElementById("hoverText");
    const hond = document.getElementById("hond");
    const blikje = document.getElementById("blikje");
    const burpText = document.getElementById("burpText"); // Het tekstwolkje voor de boer

    let klikTeller = 0; // Aantal keer geklikt
    let hovered = false; // Var om bij te houden of de tekst is gehoverd
    let isDrinkenVoltooid = false; // Var om bij te houden of het drinken voltooid is

    if (!hoverText || !hond || !blikje || !burpText) {
        console.error("Eén of meer elementen niet gevonden!");
        return;
    }

    // Hond verschijnt bij hover
    hoverText.addEventListener("mouseenter", function () {
        hond.style.display = "block";
        hovered = true; // Zet de var op true wanneer er over de tekst wordt gehoverd
    });

    // Klikjes
    document.addEventListener("click", function (event) {
        if (!hovered) {
            return; // Als de tekst niet is gehoverd, doe dan niets
        }

        klikTeller++;
        console.log("Aantal keer geklikt:", klikTeller);

        if (klikTeller === 1) {
            blikje.style.display = "block";
        } 
        
        else if (klikTeller === 3 && !isDrinkenVoltooid) {         
            // Hondje begint met drinken, maar langzamer
            blikje.style.animation = "blikjeNaarMond 5s ease-in-out forwards"; // Blikje naar mond, duurt langer
            hond.style.animation = "drinken 5s ease-in-out infinite"; // Hondje drinkt, duurt langer

            // Na 3 seconden boert het hondje en spuugt het blikje
            setTimeout(function () {
                isDrinkenVoltooid = true; // Het drinken is voltooid, nu kan de boer beginnen
            }, 3000); // Na 3 seconden drinkt de hond het blikje op
        }
        
        // Als op de hond wordt geklikt nadat het drinken voltooid is, voer dan de boer uit
        if (isDrinkenVoltooid && hond === event.target) {
            hond.style.animation = "boer 4s forwards"; // Hondje boert het blikje uit, duurt langer
            blikje.style.animation = "blikjeSpugen 5s ease-in-out forwards"; // Blikje wordt naar FightClub gespuugd, duurt langer

            // Het tekstwolkje met "Burp!" verschijnt wanneer de boer begint
            burpText.style.display = "block"; // Maak het tekstwolkje zichtbaar

            setTimeout(() => {
                console.log("Doorschakelen naar Balletje Balletje...");
                window.location.href = "spel.html";
            }, 6000);
            
        }
    });
});
