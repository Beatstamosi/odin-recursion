function mergeSort(array) {
  if (array.length == 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let arraySorted = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j] || left[i] === right[j]) {
      arraySorted.push(left[i]);
      i++;
    } else if (right[j] < left[i]) {
      arraySorted.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    arraySorted.push(left[i]);
    i++;
  }

  while (j < right.length) {
    arraySorted.push(right[j]);
    j++;
  }

  return arraySorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
