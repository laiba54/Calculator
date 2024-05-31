function appendToOutput(value) {
    const output = document.getElementById('output');
    if (output.innerText === '0') {
        output.innerText = value;
    } else {
        output.innerText += value;
    }
}

function clearOutput() {
    document.getElementById('output').innerText = '0';
}

function calculate() {
    try {
        const result = eval(document.getElementById('output').innerText);
        document.getElementById('output').innerText = result;
    } catch (error) {
        document.getElementById('output').innerText = 'Error';
    }
}