document.addEventListener("DOMContentLoaded", function () {
    let naam = "EnoRm";
    console.log(naam);

    const hoverText = document.getElementById("hoverText");
    const hond = document.getElementById("hond");
    const blikje = document.getElementById("blikje");

    // Hond verschijnt bij hover en blijft zichtbaar
    hoverText.addEventListener("mouseenter", function () {
        hond.style.display = "block";
    });

    // Blikje verschijnt bij klik
    document.addEventListener("click", function () {
        blikje.style.display = "block";

        setTimeout(function () {
            alert("De hond drinkt het blikje EnoRm leeg");
            window.location.href = "https://fightclub.nl";
        }, 2000);
    });
});
