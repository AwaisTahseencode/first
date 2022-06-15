const header=document.querySelector(".header");
const button=document.querySelector(".icons");
const html =document.querySelector("html");
const navToggle=()=>{
    header.classList.toggle("active");
    if(header.classList.contains("active")){
        html.style.overflowY='hidden';
    }
    else{
        html.style.overflowY='visible';
    }
}
button.addEventListener("click",()=>navToggle())