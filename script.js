// Target disc elements.
const disc1 = document.querySelector('#one');
const disc2 = document.querySelector('#two');
const disc3 = document.querySelector('#three');
const tower1 = document.querySelector('#tower-one');
const tower2 = document.querySelector('#tower-two');
const tower3 = document.querySelector('#tower-three');

// Arrays to keep track of discs on each tower.
let towers = [
    {hasDiscs: [disc1, disc2, disc3],
     towerNumber: 1},
    {hasDiscs: [],
     towerNumber: 2},
    {hasDiscs: [],
     towerNumber: 3}
]

// Add event listener to top disc of tower.
towers.forEach(tower => {
    if (tower['hasDiscs'].length !== 0) {
        tower['hasDiscs'][0].addEventListener('click', moveOptions)
    }
});

// Manage options available for a player based 
// on where discs are currently placed.
function moveOptions() {
    const thisDisc = parseInt(this.getAttribute('data-disc-number'))
    let availableOptions = [];
    towers.forEach(tower => {
        if (tower['hasDiscs'].length !== 0) {
                if (thisDisc < parseInt(tower['hasDiscs'][0].getAttribute('data-disc-number'))) {
                    availableOptions.push(tower.towerNumber)
                }
        }
        else if (tower['hasDiscs'].length === 0) {
            availableOptions.push(tower.towerNumber)
        }
    });
    console.log(availableOptions);
    // Call modal.
}

