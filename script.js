let val1=document.getElementById('val1')
let val2=document.getElementById('val2')
let val3=document.getElementById('val3')
let inp1=document.getElementById('inp1')
let btn=document.getElementById('btn')
let values=[
    '🐱‍🏍','🐱‍🐉','🐱‍🚀','🐱‍👓','🐱‍👤','🐱‍💻','🤖'
]

function getRandomValue() {
    return values[Math.floor(Math.random() * Math.floor(7))];
}

 let animationId;
// function updateAnimation(newspeed){
//     if(animationId) clearInterval(animationId)
//     setInterval(()=>{
//         val1.innerText=getRandomValue()
//         val2.innerText=getRandomValue()
//         val3.innerText=getRandomValue() 
//     },1000/newspeed)
// }

// inp1.onchange=(ev)=>{
//     document.documentElement.style.setProperty('--speed',ev.target.value)
//     updateAnimation(ev.target.value)
// }
let speedy=getComputedStyle(document.documentElement).getPropertyValue('--speed')
let slot=document.getElementsByClassName('value')
btn.onclick=()=>{

    slot[0].classList.add('animate')
    slot[1].classList.add('animate')
    slot[2].classList.add('animate')

    
    animationId=setInterval(()=>{
        val1.innerText=getRandomValue()
        val2.innerText=getRandomValue()
        val3.innerText=getRandomValue()
        speedy=speedy-1
        if(speedy===0){
            if(val1.innerText===val2.innerText){
               inp1.value=1
            }
            clearInterval(animationId)
            
        }
        console.log(speedy)
        document.documentElement.style.setProperty('--speed',speedy);
    },1000/speedy)
}