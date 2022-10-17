
function onScroll(event){
    const scrollTop = document.documentElement.scrollTop;
    const pageWidth = document.body.clientWidth;
    const contentHeight = document.querySelector('.content').clientHeight;
    const parallaxHeight = document.querySelector('.parallax').clientHeight;
    const p = scrollTop/contentHeight * 100;
    const p_b = scrollTop/parallaxHeight * 100;
    const o = 1 - 1/100 * p_b;

    const z_1 = 1 + (pageWidth / 10000 * p_b);

    const fog = document.querySelector('.parallax__fog')
    fog.style.transform = 'scale('+z_1+')';
    fog.style.opacity = o;

    const z_2 = 1 + (pageWidth / 5000000* p);
    const mountain_1 = document.querySelector('.parallax__mountain_1');
    mountain_1.style.transform = 'scale('+z_2+')';
    
    const hr_1 = pageWidth/2000 * p_b;
    const z_3 = 1 + (pageWidth*0.000005 * p_b)
    const mountain_2 = document.querySelector('.parallax__mountain_2');
    mountain_2.style.transform = 'translate3d('+hr_1+'px,0,0) scale('+z_3+')'

    const hr_2 = pageWidth/1500 * p_b; 
    const z_4 = 1 + (pageWidth*0.00001*p_b);
    const mountain_3 = document.querySelector('.parallax__mountain_3');
    mountain_3.style.transform = 'translate3d('+hr_2+'px,0,0) scale('+z_4+')'
}

document.addEventListener('scroll',onScroll)