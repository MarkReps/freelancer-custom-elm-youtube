const refs ={
    form: document.querySelector('form'),
    checkBoxs: document.querySelectorAll('.checkbox'),
    radiobtns: document.querySelector('.radiobuttons'),
}

function onCheckboxClick (event){
    
    const element = event.currentTarget;
    const isActive = element.classList.contains('active')
    refs.checkBoxs.forEach((div) =>{
    
        const checkInput = div.querySelector('input');
        checkInput.checked = false;
        
        if(div === element) checkInput.checked = true;
    })
    if(isActive){
        element.classList.remove('active')
    } else{
        element.classList.add('active')
    }
}

refs.checkBoxs.forEach((div)=>{
    const checkbox = div.querySelector('input')

    if(checkbox && checkbox.checked){
        div.classList.add('active')
    }

    div.addEventListener("click",onCheckboxClick)
})

function onRadiobtnClick (event){

    const radioItems = refs.radiobtns.querySelectorAll('.radiobuttons__item')
    radioItems.forEach((div) =>{

        div.classList.remove('active')
        div.querySelector('input').checked = false;
        if(div === event.currentTarget){
            div.classList.add('active')
            div.querySelector('input').checked = true;
        }

    })
}

refs.radiobtns.querySelectorAll('.radiobuttons__item').forEach((div) =>{

    const radioInput = div.querySelector('input')

    if(radioInput.checked){
        div.classList.add('active')
    }

    div.addEventListener('click',onRadiobtnClick)
})