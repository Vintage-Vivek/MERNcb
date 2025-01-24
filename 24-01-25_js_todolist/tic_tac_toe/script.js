const boxes = document.querySelectorAll('.box');

let currentPlayer; 

let gameInfo;

let winPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

console.log(boxes);

if (gameInfo[index]!==''){
    function initgame(){
        currentPlayer ='X'
        gameInfo = ['','','','','','','','','']
    
        boxes.forEach((box,index) => {
            box.addEventListener('click', () => {
                box.textContent = currentPlayer;
                gameInfo[index] = currentPlayer;
                if(currentPlayer == 'X'){
                    currentPlayer = 'O'
                }else{
                    currentPlayer = 'X'
                }
    
                winCheck();
            });
        })
    }
}



function winCheck(index){
    winPosition.forEach((position)=>{
        if((gameInfo [position[0]] !== '' && gameInfo[position[1]] !== '' && gameInfo[position[2]] !== '') && gameInfo [position[0]] === '' && gameInfo[position[1]] !== '' && gameInfo[position[2]] !== '')
    })


    for(let i=0; i<winPosition.length; i++){
        let [a,b,c] = winPosition[i];
        if(gameInfo[a] == gameInfo[b] && gameInfo[b] == gameInfo[c] && gameInfo[a]!= ''){
            alert(`${gameInfo[a]} wins!`);
            initgame();
            return;
        }
    }
}