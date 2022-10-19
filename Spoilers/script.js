const refs ={
    spoilerBody: document.querySelector('.block'),
}

function onTitleClick(event){
    const title = event.currentTarget;
    const spoilerBlock = refs.spoilerBody
    const isOne = spoilerBlock.classList.contains('one')
    if(isOne){
        spoilerBlock.querySelectorAll('.block__item').forEach((item) =>{
            const itemTitle = item.querySelector('.block__title')
            if(itemTitle !== title){
                itemTitle.classList.remove('active')
            }
        })
    }
    
    title.classList.toggle('active')
}

refs.spoilerBody.querySelectorAll('.block__item').forEach((item) =>{
    const title = item.querySelector('.block__title')
    title.addEventListener('click',onTitleClick)
})