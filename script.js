function centerPage(){
    document.getElementById("rating-state").classList.add("centered");
    document.getElementById("ending-state").classList.add("centered");
}

centerPage()

let button = document.getElementsByName("submit")[0];
button.addEventListener("click", ()=>{
    document.getElementById("rating-state").classList.toggle("hide");
    document.getElementById("ending-state").classList.toggle("hide");
})

const buttons = document.querySelectorAll('.button-list button');
const ratingState = document.getElementById("rating-state");
buttons.forEach(button => {
    button.addEventListener('click', () => {

        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        let value = button.value;
        let oldContent = document.getElementById("ending-state").textContent;
        let newContent = oldContent.replace(".rating.", value);
        document.getElementById("ending-state").textContent = newContent;
    });
});