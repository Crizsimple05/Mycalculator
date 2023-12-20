function appendToExpression(value) {
    document.getElementById('expression').value += value;
}

function clearExpression() {
    document.getElementById('expression').value = '';
}

function calculateResult() {
    const expression = document.getElementById('expression').value;

    // Make an asynchronous POST request to calculator.php
    fetch('calculator.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'expression=' + encodeURIComponent(expression),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('expression').value = data.result;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('expression').value = 'Syntax Error';
    });
}
