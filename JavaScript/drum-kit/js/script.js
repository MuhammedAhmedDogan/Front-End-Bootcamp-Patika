document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.getElementsByClassName("btn");
    Array.from(buttons).forEach(button => {
        button.addEventListener("mousedown", eventCatch);
    });

    document.body.addEventListener("keydown", eventCatch);

    document.body.addEventListener("keyup", function (event) {
        const key = event.key.toLowerCase();
        const buttonId = "key-" + key;
        const button = document.getElementById(buttonId);

        if (button) {
            button.classList.remove("active");
        }
    });

    document.body.addEventListener("mouseup", function () {
        const buttons = document.getElementsByClassName("btn");
        Array.from(buttons).forEach(button => {
            button.classList.remove("active");
        });
    });

    function eventCatch(event) {
        if (event.repeat) return;

        if (event.type == "mousedown") {
            var buttonId = event.currentTarget.id;
            var button = document.getElementById(buttonId);
        }

        if (event.type == "keydown") {
            var buttonId = "key-" + event.key.toLocaleLowerCase();
            var button = document.getElementById(buttonId);
        }

        if (button) {
            button.classList.add("active");

            switch (buttonId) {
                case "key-a":
                    const boom = new Audio("assets/boom.wav");
                    boom.play();
                    break;
                case "key-s":
                    const clap = new Audio("assets/clap.wav");
                    clap.play();
                    break;
                case "key-d":
                    const hihat = new Audio("assets/hihat.wav");
                    hihat.play();
                    break;
                case "key-f":
                    const kick = new Audio("assets/kick.wav");
                    kick.play();
                    break;
                case "key-g":
                    const openhat = new Audio("assets/openhat.wav");
                    openhat.play();
                    break;
                case "key-h":
                    const ride = new Audio("assets/ride.wav");
                    ride.play();
                    break;
                case "key-j":
                    const snare = new Audio("assets/snare.wav");
                    snare.play();
                    break;
                case "key-k":
                    const tink = new Audio("assets/tink.wav");
                    tink.play();
                    break;
                case "key-l":
                    const tom = new Audio("assets/tom.wav");
                    tom.play();
                    break;
                default:
                    break;
            }
        }
    }

});
