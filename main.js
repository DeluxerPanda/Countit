const numer_Plus = document.getElementById("numer_Plus");
const numer_Minus = document.getElementById("numer_Minus");
const numer_Reset = document.getElementById("numer_Reset");
const numer_Text = document.getElementById("numer_Text");
let numer = 0;

function plus() {
    numer++;
    numer_Text.innerText = numer;
}

function minus() {
    if (numer > 0) {
        numer--;
    }
    numer_Text.innerText = numer;
}

function reset() {
    numer = 0;
    numer_Text.innerText = numer;
}

