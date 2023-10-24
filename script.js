const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'rgb(30, 30, 30)';
        body.style.transition = '2s';
    }else{
        body.style.background = 'rgb(30, 30, 30)';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})