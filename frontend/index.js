const a = document.getElementById('a');
const b = document.getElementById('b');
const sum = document.getElementById('sum');

// Function to calculate the sum by sending the numbers to the backend
function calculateSum() {
    const num1 = a.value;
    const num2 = b.value;

    // Ensure both input values are provided
    if (!num1 || !num2) {
        sum.textContent = 'Please enter both numbers';
        return;
    }

   
    fetch(`http://localhost:8080/sum?a=${num1}&b=${num2}`)
        .then(response => response.json())  
        .then(data => {
            // Display the sum in the result element
            if (data.sum !== undefined) {
                sum.textContent = data.sum;
            } else {
                sum.textContent = 'Error calculating sum';
            }
           
        })
        .catch(error => {
            console.error('Error:', error);
            sum.textContent = 'Error connecting to backend';
        });
}

a.addEventListener('input', calculateSum);
b.addEventListener('input', calculateSum);