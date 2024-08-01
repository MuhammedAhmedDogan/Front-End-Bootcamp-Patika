document.body.addEventListener("keydown", function (event) {
    if (event.repeat) return;

    const key = event.key.toLocaleLowerCase();
    const buttonId = "key-" + key;
    const button = document.getElementById(buttonId);
    
    if (button) {
        button.classList.add("active");

        switch (key) {
            case "a":
                const boom = new Audio("../assets/boom.wav");
                boom.play();
                break;
            case "s":
                const clap = new Audio("../assets/clap.wav");
                clap.play();
                break;
            case "d":
                const hihat = new Audio("../assets/hihat.wav");
                hihat.play();
                break;
            case "f":
                const kick = new Audio("../assets/kick.wav");
                kick.play();
                break;
            case "g":
                const openhat = new Audio("../assets/openhat.wav");
                openhat.play();
                break;
            case "h":
                const ride = new Audio("../assets/ride.wav");
                ride.play();
                break;
            case "j":
                const snare = new Audio("../assets/snare.wav");
                snare.play();
                break;
            case "k":
                const tink = new Audio("../assets/tink.wav");
                tink.play();
                break;
            case "l":
                const tom = new Audio("../assets/tom.wav");
                tom.play();
                break;
            default:
                break;
        }
    }
});

document.body.addEventListener("keyup", function (event) {
    const key = event.key.toLowerCase();
    const buttonId = "key-" + key;
    const button = document.getElementById(buttonId);

    if (button) {
        button.classList.remove("active");
    }
});