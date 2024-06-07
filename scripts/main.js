const container = document.getElementById('fizzbuzz-container');
 
// Examines numbers from 1 to 100
for (let i = 1 , isPrime = true; i <= 100; i++ , isPrime = true) {
    const newDiv = document.createElement('div');

    // Check if the number currently under examination (i) is a multiple of 3
    if(i % 3 === 0) {
        newDiv.classList.add('fizz');
        newDiv.append('Fizz');
        isPrime = false;
    }
    
    // Check if the number currently under examination (i) is a multiple of 5
    if(i % 5 === 0) {
        newDiv.classList.add('buzz');
        newDiv.append('Buzz');
        isPrime = false;
    }

    // If boolean is unchanged the number currently under examination (i) is not a multiple of 3 or 5
    isPrime ? newDiv.append(i): null;

    container.append(newDiv);
}