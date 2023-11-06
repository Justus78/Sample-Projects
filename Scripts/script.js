
const input = document.getElementById('userInput');
var exp = '';
function press(item){
    exp += item;
    input.value = exp;
}

function equals(){
    input.value = eval(exp);
    exp = '';
}

function erase(){
    exp = '';
    input.value = '';
}

