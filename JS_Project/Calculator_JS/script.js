function clr() {
    document.getElementById('textarea').value = '';
}
function display(value) {
    document.getElementById('textarea').value += value;
}

function calculate() {
    let value = document.getElementById('textarea').value;
    //console.log(value);

    let answer = eval(value);

    document.getElementById('textarea').value = answer;
}