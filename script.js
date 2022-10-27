// Target disc elements.
const disc1 = document.querySelector('#one');
const disc2 = document.querySelector('#two');
const disc3 = document.querySelector('#three');
const towers = document.querySelectorAll('.towers')
const tower1 = document.querySelector('#tower-one');
const tower2 = document.querySelector('#tower-two');
const tower3 = document.querySelector('#tower-three');
const modal = document.querySelector("#movesAvailable");
const modalContent = document.querySelector('#buttons');
const gameWonModal = document.querySelector('#game-won');
const span = document.querySelector("#close");
const closeGameWonModal = document.querySelector('#close-game-won-modal')
const gameSet =  document.querySelector('#game-set');
gameSet.addEventListener('click', moveOptions);

// Target the Reset button and add event listener.
let reload = document.querySelector('#reset');
reload.addEventListener('click', refresh);

// Target the New Game button and add event listener.
let newGame = document.querySelector('#play-again');
newGame.addEventListener('click', refresh);

// Function to reset game.
function refresh() {
    window.location.reload();
}


// Upon clicking on the topmost disc, presents the user with alternatives to move the dics to.
function moveOptions(event) {
    modalContent.innerHTML = '';
    const clickedDisc = event.target;
    const thisDisc = parseInt(event.target.getAttribute('data-disc-number'))
    let availableOptions = [];
    const parentTower = event.target.parentNode;
    if (thisDisc !== parseInt(parentTower.firstElementChild.getAttribute('data-disc-number'))) {
        return
    };
    for (let i = 0; i < towers.length; i++) {
        if (towers[i].childElementCount !== 0) {
            const topDisc = towers[i].firstElementChild;
                if (thisDisc < parseInt(topDisc.getAttribute('data-disc-number'))) {
                    availableOptions.push(parseInt(towers[i].getAttribute('data-tower-number')));
                }
        }
        else if (towers[i].childElementCount === 0) {
            availableOptions.push(parseInt(towers[i].getAttribute('data-tower-number')));
        }
    };

    // Add move options to modal.
    for (let i = 0; i < availableOptions.length; i++) {
        if (availableOptions[i] === 1) {
            const option = document.createElement('button');
            option.innerHTML = `Tower 1`;
            option.classList.add('button');
            option.addEventListener('click', () => {
                tower1.prepend(clickedDisc);
                modal.style.display = "none";
            });
            modalContent.appendChild(option);    
        } else if (availableOptions[i] === 2) {
            const option = document.createElement('button');
            option.innerHTML = `Tower 2`;
            option.classList.add('button');
            option.addEventListener('click', () => {
                tower2.prepend(clickedDisc);
                modal.style.display = "none";
            });
            modalContent.appendChild(option);
        } else if (availableOptions[i] === 3) {
            const option = document.createElement('button');
            option.innerHTML = `Tower 3`;
            option.classList.add('button');
            option.addEventListener('click', () => {
            tower3.prepend(clickedDisc);
            modal.style.display = "none";
            if (tower3.childElementCount === 3) {
                gameWonModal.style.display = "block";
                closeGameWonModal.addEventListener('click', () => {
                    gameWonModal.style.display = "none";
                    });
                };
            })
            modalContent.appendChild(option);
        }
    };
    // Call modal with available moves.
    modal.style.display = "block";
    span.addEventListener('click', () => {
        modal.style.display = "none";
    });
}


