var btn = document.getElementById('button');
var body = document.getElementById('body');
function changeThem() {
    if(btn.innerText === 'Night'){
        body.style.backgroundColor='black'
        btn.innerText='Day'
        btn.style.backgroundColor='white'
        btn.style.color='black'
    }
    else{
        body.style.backgroundColor='white';
        btn.innerText='Night'
        btn.style.backgroundColor='black'
        btn.style.color='white'
    }
}