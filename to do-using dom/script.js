const text="Welcome to your To-do List";
let index=0;
let speed=100;
function typewriter(){
    const element=document.getElementById("wc-txt");
    if(index<text.length){
        element.textContent+=text.charAt(index);
        index++;
        setTimeout(typewriter,speed);
    }
    else{
        document.getElementById("dots").style.opacity="1";
    }

}
    window.onload=typewriter;
