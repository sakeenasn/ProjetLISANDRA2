function relancerAnimation() {
    const livres = document.querySelectorAll(".livre");
    livres.forEach(livre => {
        livre.style.animation = "none";
        void livre.offsetWidth; // reset
        livre.style.animation = "";
    });
}

setInterval(relancerAnimation, 5000);
