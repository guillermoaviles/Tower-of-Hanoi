// Target disc elements.
const disc1 = document.querySelector('#one');
const disc2 = document.querySelector('#two');
const disc3 = document.querySelector('#three');

// Arrays to keep track of discs on each tower.
let towers = {
    tower1: [disc1, disc2, disc3],
    tower2: [],
    tower3: []
}

// Add event listener to top disc of tower.
Object.values(towers).forEach(tower => {
    tower[0].addEventListener('click', moveOptions);
});





function moveOptions() {

}