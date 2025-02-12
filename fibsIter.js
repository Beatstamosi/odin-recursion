console.log(fibs(19));

function fibs(n) {
  let sequence = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      sequence.push(i);
    } else {
      let num = sequence[i - 2] + sequence[i - 1];
      sequence.push(num);
    }
  }

  return sequence;
}
