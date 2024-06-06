const container = document.getElementById('fizzbuzz-container');

for (let i = 1 , isPrime = true , primeNmbs = []; i <= 100; i++ , isPrime = true) {
    const newDiv = document.createElement('div');
    const currentNumber = document.createElement('span');
    currentNumber.append(i);
    currentNumber.classList.add('current-number');
    newDiv.append(currentNumber);

    // I check for every prime number (primeNmbs) already found if some of them divide the number currently cheacking (i)
    for (let j = 0 ; j < primeNmbs.length ; j++) {
        if (i % primeNmbs[j] === 0) {
            const divisor = document.createElement('span');
            divisor.append(primeNmbs[j]);
            newDiv.append(divisor);
            newDiv.classList.add('multiple-of-' + primeNmbs[j]);
            isPrime = false;
        }
    }

    // Special case handler
    if (i === 1) {
        const universalDivisor = document.createElement('span');
        universalDivisor.append('UNIVERSAL DIVISOR');
        newDiv.append(universalDivisor);
        newDiv.classList.add('universal-divisor');
        isPrime = false;
    }

    // If boolean is unchanged the number currently cheacking (i) is a prime number
    if (isPrime === true) {
        const primeNumber = document.createElement('span');
        primeNumber.append('PRIME NUMBER');
        newDiv.append(primeNumber);
        newDiv.classList.add('prime');
        primeNmbs.push(i);
    }

    container.append(newDiv);
}