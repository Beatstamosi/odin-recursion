function fibsRec(n) {
  if (n < 2) return n;

  return fibsRec(n - 1) + fibsRec(n - 2);
}

function getSequence(n) {
  let sequence = [];

  for (let i = 0; i < n; i++) {
    sequence.push(fibsRec(i));
  }

  return sequence;
}

console.log(getSequence(8));
