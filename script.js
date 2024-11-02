let buttonSubmit = document.getElementsByName("submit")[0];
buttonSubmit.addEventListener("click", ()=>{
    document.getElementById("rating-state").classList.toggle("hide");
    document.getElementById("ending-state").classList.toggle("hide");
})

const buttons = document.querySelectorAll(".button-list button");
const ratingState = document.getElementById("rating-state");
buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");

        let value = button.value;
        let oldContent = document.getElementById("ending-state").textContent;
        let newContent = oldContent.replace(".rating.", value);
        document.getElementById("ending-state").textContent = newContent;
    });
});

document.getElementById("question").classList.add("fontTextQuestion")
document.getElementById("text-1").classList.add("fontText-1");