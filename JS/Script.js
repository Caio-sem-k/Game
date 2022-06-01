var jump = false

function jump1(){
    var mario = document.getElementById("mario")
    var pipe = document.getElementById("pipe")

    if (mario.className != "jump"){
        mario.classList.add("jump")
        jump=true
        setTimeout(()=>{
            mario.classList.remove("jump")
            jump=false
        }, 700)

        function morte(){
           var pipe=parseInt(window.getComputedStyle(pipe).getPropertyValue("left")) 

           if (pipe > 20 && jump == false){
               alert("game over")
           }
        }
      setInterval(morte, 20)     
    }
}

const loop = setInterval(() => {
  
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition < 120 && pipePosition > 0  && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
       
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'IMG/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

    }

}, 10) 
