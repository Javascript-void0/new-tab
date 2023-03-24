const date = document.getElementById('date');
date.textContent = new Date().toLocaleDateString();

const time = document.getElementById('time');
time.textContent = new Date().toLocaleTimeString();;
setInterval(()=>{
    time.textContent = new Date().toLocaleTimeString();;
}, 1000);

const face = document.getElementById('face');
const ears = document.getElementById('ears');
const ex = document.getElementById('ex');
const qu = document.getElementById('qu');

let i = 0;

setInterval(()=>{
    
    if (i % 10 == 0) {
        qu.style.visibility = '';
    } else if (i % 5 == 0) {
        ex.style.visibility = '';
    } else {
        ex.style.visibility = 'hidden';
        qu.style.visibility = 'hidden';
    }
    
    if (i % 2 == 0) {
        face.innerHTML = '._.&nbsp';
        ears.innerHTML = '&nbsp&nbsp(\\/)';
    } else {
        face.innerHTML = '&nbsp._.';
        ears.innerHTML = '(\\/)&nbsp&nbsp';
    }
    
    i++;

}, 2236);