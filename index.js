const contactModal= document.getElementById("modalcontactme");
const overlay=document.getElementById("overlay");
let openmodalBtn= document.getElementById('modal');

function openmodal(){
    console.log('clicked!!!!');
    document.getElementById('modal').classList.remove("hidden");
        // overlay.classList.remove("hidden");

    // openmodalBtn.addEventListener("click", openModal)
}

function removeModal(){
    console.log('clicked!!!!');
    document.getElementById('modal').classList.add("hidden");
        // overlay.classList.remove("hidden");

    // openmodalBtn.addEventListener("click", openModal)
}