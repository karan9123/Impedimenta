let sections = document.getElementsByClassName('content')
let masks = document.getElementsByClassName("mask")
let border1 = document.getElementsByClassName("border-section-1")[0]
let graphic = document.getElementsByClassName("graphic")[0]
let homeText = document.getElementsByClassName("home-text")[0]
let border2 = document.getElementsByClassName("border-section-2")[0]
let priceFree = document.getElementsByClassName("pricing-free")[0]
let pricePlus = document.getElementsByClassName("pricing-plus")[0]

border1.style.position = 'Absolute'
border1.style.borderStyle = 'solid';
border1.style.borderRadius = '30px';
border1.style.borderColor = '#9fa195';
border1.style.padding = '20px';
border1.style.borderWidth = '3px';

border2.style.position = 'Absolute'
border2.style.borderStyle = 'solid';
border2.style.borderRadius = '30px';
border2.style.borderColor = '#9fa195';
border2.style.padding = '20px';
border2.style.borderWidth = '3px';

for(let i = 0; i < masks.length; i++)
{
    let topValue = -sections[i].offsetHeight
    masks[i].style.top = topValue + 'px'
}

let filler = document.getElementsByClassName('filler')

let clipHeight = document.getElementById('clip-3').clientHeight

border1.style.height = (graphic.offsetTop + graphic.offsetHeight - homeText.offsetTop - 60) + 'px'
border1.style.width = (graphic.offsetLeft + graphic.offsetWidth - homeText.offsetLeft) + 'px'
border1.style.top = (homeText.offsetTop + 30) + 'px'
border1.style.left = (homeText.offsetLeft - 30) + 'px'

border2.style.height = (pricePlus.offsetTop + pricePlus.offsetHeight - priceFree.offsetTop) + 'px'
border2.style.width = (pricePlus.offsetLeft + pricePlus.offsetWidth - priceFree.offsetLeft) + 'px'

border2.style.top = (priceFree.offsetTop - 30) + 'px'
border2.style.left = (priceFree.offsetLeft - 30) + 'px'

console.log(priceFree.offsetWidth + pricePlus.offsetWidth) 

for(let i = 0; i < filler.length; i++)
{
    filler[i].style.height = clipHeight + 'px';
}

for(let i = 0; i < masks.length; i++)
{
    let topValue = -sections[i].offsetHeight
    masks[i].style.top = topValue + 'px'
}

onresize = (event) =>{
    clipHeight = document.getElementById('clip-3').clientHeight

    border1.style.height = (graphic.offsetTop + graphic.offsetHeight - homeText.offsetTop - 60) + 'px'
    border1.style.width = (graphic.offsetLeft + graphic.offsetWidth - homeText.offsetLeft) + 'px'
    border1.style.top = (homeText.offsetTop + 30) + 'px'
    border1.style.left = (homeText.offsetLeft - 30) + 'px'

    border2.style.height = (pricePlus.offsetTop + pricePlus.offsetHeight - priceFree.offsetTop) + 'px'
    border2.style.width = (pricePlus.offsetLeft + pricePlus.offsetWidth - priceFree.offsetLeft) + 'px'
    
    border2.style.top = (priceFree.offsetTop - 30) + 'px'
    border2.style.left = (priceFree.offsetLeft - 30) + 'px'
    

    console.log(priceFree.offsetWidth + pricePlus.offsetWidth) 

    for(let i = 0; i < filler.length; i++)
    {
        filler[i].style.height = clipHeight + 'px';
    }

    for(let i = 0; i < masks.length; i++)
    {
        let topValue = -sections[i].offsetHeight
        masks[i].style.top = topValue + 'px'
    }
}
