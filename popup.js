let button = document.getElementById('go'),
    inputs = document.getElementById('inputs'),
    separator = document.getElementById('separator'),
    reception = document.getElementById('reception');

button.onclick = function(element) {
    reception.value = "";
    var separated = inputs.value.split(separator.value);
    var d = document;
    separated.forEach(element => {
        reception.value += element.trim();
        if(separated[separated.length - 1] !== element)
        reception.value += '\r\n';
    });
    reception.select();
    reception.setSelectionRange(0, 9999999999); //Used for mobile selection
    d.execCommand("copy");
}