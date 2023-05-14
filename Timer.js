const countToDate =new Date().setHours(new Date().getHours()+ 24) 
let previousTimeBetweenDates  

setInterval(() => {
    const currentDate = new Date()
    const previousTimeBetweenDates = math.cell((countToDate - currentDate)/ 1000)
    if(previousTimeBetweenDates !== previousTimeBetweenDates){
        flipAllCards(timeBetweenDates)
    }
}, 1000);

function flipAllCards(time){
 const seconds = time % 60
 const minutes =  Math.floor(time/60)%60
 const hours =Math.floor(time/3600)
 console.log (hours, minutes, seconds) 

}