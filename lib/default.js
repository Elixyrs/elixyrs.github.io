function picker(idx) {
        var answers = [
                ["Déjà barré.", "Disparu.", "Plus là, là là là.", "404 Not Found.", "Sur la butte Chaumont.", "En weekend de 15 jours.", "Congés: mange des donuts.", "Pause café de trois jours."],
                ["Non.", "Non, mais y pense.", "Non, probablement sur Reddit.", "Non, probablement entrain de mater des memes de piètre qualité.", "Non, lit la Conv'."],
                ["Bientôt.", "S'y prépare.", "Le temps de finir son kebab.", "Après avoir terminé son SEO.", "Fait des git log.", "En pause."],
                ["Très bientôt.", "Juste le temps de poser ses RTT.", "Sur la route.", "Attend le message de François.", "Fais des ls pour passer les dernières minutes."],
                ["Oui!", "Met son manteau.", "Attend le bus.", "Attend François.", "Déjà à sa troisième bière.", "Rentré chez Maman.", "J'suis dans l'ascenseur.", "Je pisse et j'arrive."]
        ];
        var picked = Math.random() * 100.0 + 10;

        return (answers[idx][Math.floor(picked) % answers[idx].length]);
}

document.addEventListener("DOMContentLoaded", function(){
        var now = new Date();
        var seed = "" + now.getDate() + now.getMonth() + now.getFullYear();
        var idx = 0;
        var elem = document.getElementById("msg");

        Math.seedrandom(seed);

        if (now.getDay() != 6 && now.getDay() != 0 && now.getHours() < 18) {
                idx++;
                if (now.getHours() > 11) {
                        idx++;
                }
                if (now.getHours() > 15) {
                        idx++;
                }
                if (now.getHours() > 16) {
                        idx++;
                }
        }

        elem.innerHTML = picker(idx);
});
