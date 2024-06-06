const container = document.getElementById('fizzbuzz-container');

for (let i = 1 , isPrime = true; i <= 100; i++ , isPrime = true) {
    const newDiv = document.createElement('div');

    if(i % 3 === 0) {
        newDiv.classList.add('fizz');
        newDiv.append('Fizz');
        isPrime = false;
    }
    
    if(i % 5 === 0) {
        newDiv.classList.add('buzz');
        newDiv.append('Buzz');
        isPrime = false;
    }

    // If boolean is unchanged i is not a multiple
    isPrime ? newDiv.append(i): null;

    container.append(newDiv);
}