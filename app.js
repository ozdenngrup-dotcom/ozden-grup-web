const menuButton=document.querySelector('.menu-button');
menuButton?.addEventListener('click',()=>{const nav=document.querySelector('.nav');const opened=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(opened));});
const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dot')];let current=0;
function showSlide(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>{slide.classList.toggle('active',i===current);slide.setAttribute('aria-hidden',String(i!==current));slide.querySelectorAll('a,button').forEach(a=>a.tabIndex=i===current?0:-1);});dots.forEach((dot,i)=>{dot.classList.toggle('active',i===current);dot.setAttribute('aria-pressed',String(i===current));});}
dots.forEach((dot,i)=>dot.addEventListener('click',()=>showSlide(i)));
document.querySelector('.previous')?.addEventListener('click',()=>showSlide(current-1));document.querySelector('.next')?.addEventListener('click',()=>showSlide(current+1));

if(slides.length)showSlide(0);
