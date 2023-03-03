let startEl = document.getElementById('start');

let innerContainerEl = document.getElementById('inner-container');



startEl.addEventListener('click', function(){
    
    let difficultEl = document.getElementById('difficult').value;
    
    if(difficultEl == 'easy'){

        createAndColorToggleSquare(1,100,innerContainerEl,10,10)

    }else if(difficultEl == 'medium'){

        createAndColorToggleSquare(1,81,innerContainerEl,9,9)

    }else{

        createAndColorToggleSquare(1,49,innerContainerEl,7,7)

    }
   
    
    
})

















// ---------------------------FUNCTION------------------------------------

function createAndColorToggleSquare (numMin,numMax,container,numRow,numCol){

    for(let i = numMin ; i <= numMax ; i++){

        let squareEl = document.createElement('div');

        squareEl.classList.add('square');
        squareEl.style.width = `calc(100% / ${numRow})`
        squareEl.style.height = `calc(100% / ${numCol})`

        
        squareEl.innerHTML = i;
        
        squareEl.addEventListener('click', function(){

            squareEl.classList.toggle('active')
        })

        container.append(squareEl);

        container.style.display = 'flex';
    }
}