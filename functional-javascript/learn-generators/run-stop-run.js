'use strict';

function *range(from, to) {
  while (from <= to) {
    yield from;
    from++;
  }
};

for (let i of range(5, 10)) {
  console.log(i);
};