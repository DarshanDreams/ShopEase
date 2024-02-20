const bar=document.getElementBYId('bar');
const close=document.getElementBYId('close');
const nav=document.getElementBYId('navbar');

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}