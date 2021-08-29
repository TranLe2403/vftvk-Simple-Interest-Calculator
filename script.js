function updateTextInput(val) {
    document.getElementById("textInput").innerHTML = val+'%';
    document.getElementById('textInput').value = val;

}

function compute() {
    const amount = document.getElementById("amount").value;
    const rate = document.getElementById("textInput").value;
    const years = document.getElementById("years").value;

    if( parseInt(amount) <= 0 ){
        window.alert('please enter a positive number');
        return;
    }

    const total = (parseInt(amount) * parseInt(rate) * parseInt(years) / 100)
    document.getElementById("amount-output").innerHTML = total;
    document.getElementById("rate-output").innerHTML = total;
    document.getElementById("year-output").innerHTML = total;
    document.getElementById("result").innerHTML = total;

}
