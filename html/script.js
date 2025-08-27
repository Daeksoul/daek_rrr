const chamberLayout = [
    { id: 1, top: -172, left: 16 },
    { id: 2, top: -147, left: 60 },
    { id: 3, top: -95,  left: 60 },
    { id: 4, top: -67,  left: 15 },
    { id: 5, top: -95,  left: -32 },
    { id: 6, top: -147, left: -30 }
];

function createChambers() {
    const container = document.getElementById("chambers");
    chamberLayout.forEach(pos => {
        const chamber = document.createElement("div");
        chamber.classList.add("chamber");
        chamber.id = `chamber-${pos.id}`;
        chamber.style.top = `${pos.top}px`;
        chamber.style.left = `${pos.left}px`;
        container.appendChild(chamber);
    });
}

window.addEventListener('DOMContentLoaded', createChambers);

window.addEventListener('message', function(event) {
    if (event.data.type === "showRoll") {
        document.body.classList.add("active");

        const cylinder = document.getElementById("cylinder");
        const result = document.getElementById("result");
        const diceValue = document.getElementById("dice-value");
        const vignette = document.getElementById("blood-vignette");

        document.querySelectorAll('.chamber').forEach(chamber => {
            chamber.classList.remove('active');
        });

        cylinder.classList.add("spin");

        const audio = new Audio("revolver_spin.mp3");
        audio.play();

        diceValue.textContent = "";
        result.classList.add("hidden");
        vignette.classList.remove("visible");

        const suspenseDelay = 3000;

        setTimeout(() => {
            const rollValue = Number(event.data.value);
            diceValue.textContent = rollValue === 1
                ? "Bang. You're dead."
                : `You rolled a ${rollValue}. Lucky...`;
            result.classList.remove("hidden");

            const chamber = document.getElementById(`chamber-${rollValue}`);
            if (chamber) chamber.classList.add('active');

            const fireAudio = new Audio("revolver_fire.mp3");
            fireAudio.play();

            const smoke = document.getElementById("smoke");
            smoke.classList.add("visible");

            cylinder.classList.remove("spin");

            if (rollValue === 1) {
                vignette.classList.add("visible");
            }

            setTimeout(() => {
                smoke.classList.remove("visible");
            }, 1500);
        }, suspenseDelay);
    }
        if (data.type === "hideUI") {
        document.getElementById("container").classList.add("hidden");
    }

    if (event.data.type === "hideRoll") {
        document.body.classList.remove("active");
        document.getElementById("result").classList.add("hidden");
        document.querySelectorAll('.chamber').forEach(chamber => {
            chamber.classList.remove('active');
        });
        document.getElementById("smoke").classList.remove("visible");
        document.getElementById("blood-vignette").classList.remove("visible");
    }
});
