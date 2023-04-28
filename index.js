const onda1 = document.getElementById("onda1")
const onda2 = document.getElementById("onda2")
const onda3 = document.getElementById("onda3")
const onda4 = document.getElementById("onda4")

window.addEventListener("scroll" ,() =>{
    const rolValue = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolValue * 4 + 'px'
    onda2.style.backgroundPositionX = 300 + rolValue * -3 + 'px'
    onda3.style.backgroundPositionX = 200 + rolValue * 2 + 'px'
    onda4.style.backgroundPositionX = 100 + rolValue * 1 + 'px'
})


// card on

// buttons
const buttonImg1 = document.getElementById("card-img1")
const buttonImg2 = document.getElementById("card-img2")
const buttonImg3 = document.getElementById("card-img3")

//divs
const divCard1 = document.getElementById("card-div1")
const divCard2 = document.getElementById("card-div2")
const divCard3 = document.getElementById("card-div3")

//eventos

buttonImg1.addEventListener("click" , ()=>{
    divCard1.classList.toggle("div-card1-on")
})

buttonImg2.addEventListener("click" , ()=>{
    divCard2.classList.toggle("div-card2-on")
})

buttonImg3.addEventListener("click" , ()=>{
    divCard3.classList.toggle("div-card3-on")
})

// slide

let count = 1
document.getElementById("radio1").checked = true

setInterval(()=>{
    next()
}, 5000)

function next (){
    count++
    if(count>10){
        count=1
    }

    document.getElementById("radio" + count).checked = true
}

//slide on

const btnSecOn = document.getElementById("btn-sec-on")
const secOff = document.getElementById("sec-off")
btnSecOn.addEventListener("click", ()=>{
    secOff.classList.toggle('sec-slide-on')
})