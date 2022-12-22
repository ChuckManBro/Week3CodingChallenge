function square(n) {
  return n * n;
}

console.log(square(5));

function powerOf(x, y) {
  let answer = x;
  for (let i = 1; i < y; i++) {
    answer *= x;
  }
  return answer;
}

console.log(powerOf(2, 8));
