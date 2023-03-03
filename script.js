let startEl = document.getElementById('start');

let innerContainerEl = document.getElementById('inner-container');


startEl.addEventListener('click', function(){

    createSquare(1,100,innerContainerEl)
    
    
})

















// ---------------------------FUNCTION------------------------------------

function createSquare (numMin,numMax,container){

    for(let i = numMin ; i <= numMax ; i++){

        let squareEl = document.createElement('div');

        squareEl.classList.add('square');

        squareEl.innerHTML = i;
        
        squareEl.addEventListener('click', function(){

            squareEl.classList.toggle('active')
        })

        container.append(squareEl);
        
        container.style.display = 'flex';
    }
}