const refs ={
    headerBurgerBtn: document.querySelector('.header__burger'),
    headerMenu: document.querySelector('.header__menu'),
    documentBody: document.querySelector('body'),
}

function onBurgerMenuClick(event){
    const isActive = refs.headerBurgerBtn.classList.contains('active')
    if(isActive){
        refs.headerBurgerBtn.classList.remove('active')
        refs.headerMenu.classList.remove('active')
        refs.documentBody.classList.remove('lock')
    } else{    
        refs.headerBurgerBtn.classList.add('active')
        refs.headerMenu.classList.add('active')
        refs.documentBody.classList.add('lock')
    }
}

refs.headerBurgerBtn.addEventListener('click',onBurgerMenuClick)