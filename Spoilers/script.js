const refs ={
    spoilerBody: document.querySelector('.block'),
}

function onTitleClick(event){
    const title = event.currentTarget;
    const isActive = title.classList.contains('active')
    if(isActive){
        title.classList.remove('active')
    } else{
        title.classList.add('active')
    }
}

refs.spoilerBody.querySelectorAll('.block__item').forEach((item) =>{
    const title = item.querySelector('.block__title')
    title.addEventListener('click',onTitleClick)
})