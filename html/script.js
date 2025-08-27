window.addEventListener('message', function(event) {
    if (event.data.type === "showRoll") {
        document.body.classList.add("active");

        const cylinder = document.getElementById("cylinder");
        const result = document.getElementById("result");
        const diceValue = document.getElementById("dice-value");

        document.querySelectorAll('.chamber').forEach(chamber => {
            chamber.classList.remove('active');
        });

        cylinder.classList.add("spin");

        const audio = new Audio("revolver_spin.mp3");
        audio.play();

        diceValue.textContent = "";
        result.classList.add("hidden");

        const suspenseDelay = 3000;

        setTimeout(() => {
            const rollValue = Number(event.data.value);
            diceValue.textContent = rollValue === 1
                ? "Bang. You're dead."
                : `You rolled a ${rollValue}. Lucky...`;
            result.classList.remove("hidden");

            const chamberId = `chamber-${rollValue}`;
            const chamber = document.getElementById(chamberId);
            if (chamber) chamber.classList.add('active');

            const fireAudio = new Audio("revolver_fire.mp3");
            fireAudio.play();

            const smoke = document.getElementById("smoke");
            smoke.classList.add("visible");

            cylinder.classList.remove("spin");

            setTimeout(() => {
                smoke.classList.remove("visible");
            }, 1500);
        }, suspenseDelay);
    }

    if (event.data.type === "hideRoll") {
        document.body.classList.remove("active");
        document.getElementById("result").classList.add("hidden");
        document.querySelectorAll('.chamber').forEach(chamber => {
            chamber.classList.remove('active');
        });
        document.getElementById("smoke").classList.remove("visible");
    }
});
