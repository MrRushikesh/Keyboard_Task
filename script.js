let currentInput = '';


function display(){
    document.getElementById('result').value = currentInput;
}



function addChar(char){
    currentInput += char;
    display();
}


function clearDisplay(){
    currentInput = '';
    display();
}