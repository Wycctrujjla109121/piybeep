function clear() {
    let len = Array.from(document.querySelectorAll('.info__collumn > .info__collumn__text__hidden')).forEach((clear)=>{
        clear.classList.remove('info__collumn__text__visibility')
    })
}
const acords = document.querySelectorAll('.info__collumn > .info__collumn__text__hidden').forEach((acord)=>{
    acord.addEventListener('click', clickAcord)
})

function clickAcord(acord){
    currentAcord = acord.currentTarget;

    if (currentAcord.classList.contains('info__collumn__text__visibility'))
    {
        clear()
        currentAcord.classList.remove('info__collumn__text__visibility')
        currentAcord.querySelector('.text__label > img').src = 'image/icon/arrowDown.svg'
    }
    else
    {
        clear()
        currentAcord.classList.add('info__collumn__text__visibility')
        currentAcord.querySelector('.text__label > img').src = 'image/icon/arrowUp.svg'
    }
}
