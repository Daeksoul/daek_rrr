window.addEventListener('message', function(event) {
    if (event.data.type === "showRoll") {
        document.body.classList.add("active");

        const cylinder = document.getElementById("cylinder");
        const result = document.getElementById("result");
        const diceValue = document.getElementById("dice-value");

        resetUI();

        cylinder.classList.add("spin");
        playAudio("revolver_spin.mp3");

        diceValue.textContent = "";
        result.classList.add("hidden");

        const suspenseDelay = 3000;

        setTimeout(() => {
            const rollValue = Number(event.data.value);
            revealRollResult(rollValue);
            cylinder.classList.remove("spin");
        }, suspenseDelay);
    }

    if (event.data.type === "hideRoll") {
        document.body.classList.remove("active");
        document.body.classList.remove("blood-effect");
        document.getElementById("result").classList.add("hidden");
        document.querySelectorAll('.chamber').forEach(chamber => {
            chamber.classList.remove('active');
        });
        document.getElementById("smoke").classList.remove("visible");
    }
});

function resetUI() {
    document.querySelectorAll('.chamber').forEach(chamber => {
        chamber.classList.remove('active');
    });
    document.getElementById("smoke").classList.remove("visible");
    document.body.classList.remove("blood-effect");
}

function revealRollResult(rollValue) {
    const diceValue = document.getElementById("dice-value");
    const result = document.getElementById("result");
    const chamberId = `chamber-${rollValue}`;
    const chamber = document.getElementById(chamberId);
    const smoke = document.getElementById("smoke");

    diceValue.textContent = rollValue === 1
        ? "Bang - You're dead!"
        : `You rolled a ${rollValue}. Lucky...`;
    result.classList.remove("hidden");

    if (chamber) chamber.classList.add('active');

    playAudio("revolver_fire.mp3");

    smoke.classList.add("visible");

    if (rollValue === 1) {
        document.body.classList.add("blood-effect");
    }

    setTimeout(() => {
        smoke.classList.remove("visible");
        document.body.classList.remove("blood-effect");
    }, 1500);
}

function playAudio(src) {
    const audio = new Audio(src);
    audio.play();
}
