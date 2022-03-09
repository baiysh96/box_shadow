let horizontalShadow = document.querySelector('.h-shadow')
let verticalShadow = document.querySelector('.v-shadow')
let blurRadius = document.querySelector('.b-radius')
let spreadRadius = document.querySelector('.s-radius')
let shadowColor = document.querySelector('.sh-color')
let block = document.querySelector('.block')
let out = document.querySelector('.out')
let copy = document.querySelector('.copy')
let inset = document.querySelector('.check__box')
let opacityColor = document.querySelector('.op-color')

let allTools = [horizontalShadow,verticalShadow,blurRadius,spreadRadius,shadowColor,inset,opacityColor,
               out,block]
allTools.forEach(oneTool => {
    oneTool.addEventListener('input', generator)
})

function generator() {
    let insetValue = ""
    if(inset.checked) {
        insetValue = 'inset'
    }
    block.style.boxShadow =`${horizontalShadow.value}px ${verticalShadow.value}px ${blurRadius.value}px 
    ${spreadRadius.value}px ${shadowColor.value}${opacityColor.value} ${insetValue}`
    out.textContent = `box-shadow: ${horizontalShadow.value}px ${verticalShadow.value}px ${blurRadius.value}px
     ${spreadRadius.value}px ${shadowColor.value}${opacityColor.value}${insetValue}`
}

copy.onclick = function () {
    let text = out.textContent
    window.navigator.clipboard.writeText('text')
    alert('Copied')

}


