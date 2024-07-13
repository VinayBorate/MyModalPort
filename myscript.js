let modal = document.querySelector(".modal");
let overlay=document.querySelector(".overlay");

//Modal open function
const openmodal = ()=>{
    console.log("In modal");
    modal.classList.add("active");
    overlay.classList.add("overlayActive");
}
const closemodal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
}
// openmodal();
// console.log(modal);