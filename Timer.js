const countToDate =new Date().setHours(new Date().getHours()+ 24) 
let previousTimeBetweenDates  

setInterval(() => {
    const currentDate = new Date()
    const previousTimeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
    if(previousTimeBetweenDates !== previousTimeBetweenDates){
        flipAllCards(timeBetweenDates)
    }
}, 250);

function flipAllCards(time){
 const seconds = time % 60
 const minutes = Math.floor(time/60)%60
 const hours = Math.floor(time/3600)
 console.log (hours, minutes, seconds) 



flip(document.querySelector("[data-hours-tens]"), Math.floor(hours/10))
flip(document.querySelector("[data-hours-ones]"), hours/10)
flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes/10))
flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds/10))
flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}
function flip(flipCard , newNumber){
  const topHalf = flipCard.querySelector(".top")

const startNumber = parseInt(topHalf.textContext)
if(newNumber === startNumber)
return
const  bottomHalf =flipCard.querySelector(".bottom")
const topFlip =document.createElement("div")
topFlip .classList.add("top-flip")
const bottomFlip =document.createElement("div")
bottomFlip.classList.add("botton=flip")


top.textContext- startNumber
bottomHalf.textContext = startNumber

flipCard.dataset.currentNumber = startNumber
flipCard.dataset.nextNumber = startNumber - 1
flipCard.addEventListner("animationend", e=>{
    topHalf.textContext = startNumber -1;
}) 
flipCard.addEventListner("animationed",e=>{
    bottomHalf.textContent = startNumber -1
})
flipCard.classList.add("flip")
}