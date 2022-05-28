document.addEventListener('mousemove' , function(e){
    let body = document.querySelector('body');
    let heart = document.createElement('gabi');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size+'px';
    heart.style.height = 20 + size+'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate('+ transformValue +'deg)';

    body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },1000)
})


let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    
  
}



let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
   
    navbar.classList.remove('active');
   
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    
}
