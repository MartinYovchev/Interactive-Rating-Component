let buttonSubmit = document.getElementsByName("submit")[0];
buttonSubmit.addEventListener("click", () => {
    ratingState.classList.add("hide");
    endingState.classList.remove("hide");
});

const buttons = document.querySelectorAll(".button-list button");
const ratingState = document.getElementById("rating-state");
const endingState = document.getElementById("ending-state");
const ratingDisplay = document.getElementById("rating");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");

        let value = button.value;
        ratingDisplay.textContent = `You selected ${value} out of 5.`; 
    });
});

ratingState.classList.add("rating-state");
document.getElementById("question").classList.add("fontTextQuestion");
document.getElementById("text-1").classList.add("fontText-1");
buttonSubmit.classList.add("submitClass");


endingState.classList.add("hide");
