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

function createleave(count){
    for(let i=0;i<count;i++){
       const container=document.getElementById("leafy");
       if(!container)return; 
       const leaf=document.createElement('span');
    
       leaf.classList.add('leaves');
       leaf.style.left=Math.random()*100+'vw';
       leaf.style.animationDuration=5+Math.random()*5+'s';
       leaf.style.animationDelay=Math.random()*5+'s';
       document.getElementById("leafy").appendChild(leaf);
       console.log("works?");
       setTimeout(()=>{
        leaf.remove();
    },10000);
    }   
    
}
setInterval(()=>{createleave(5)},300);

