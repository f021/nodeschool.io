'use strict';

function *factorial(n) {
  let acc = 1;
  for (let i = 1; i <= n; i++) {
    yield acc *= i;
  }
};

for (let i of factorial(5)) {
  console.log(i);
};