let startEl = document.getElementById('start');

let innerContainerEl = document.getElementById('inner-container');


startEl.addEventListener('click', function(){

    for(let i = 1 ; i <= 100 ; i++){

        let squareEl = document.createElement('div');
        squareEl.classList.add('square');
        squareEl.innerHTML = i;
        innerContainerEl.append(squareEl);
        innerContainerEl.style.display = 'flex';
    }
    
})