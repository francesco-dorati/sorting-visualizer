/* eslint-disable */

const bubbleSort = (array) => {
  let swaps = -1;

  while (swaps !== 0) {
    swaps = 0;
    array.map((el, i) => {
      if (el > array[i + 1]) {
        array.splice(i, 2, array[i + 1], el);
        swaps++;
      }
    })
  }
};


const selectionSort = (array) => {
  for (const i in array) {
    const min = array
      .slice(i)
      .reduce((min, el) => el < array[min] ? array.indexOf(el) : min, i)

    const tmp = array[min];
    array[min] = array[i];
    array[i] = tmp;
  }
};

const insertionSort = (array) => {
  array
    .slice(1)
    .map((_, i) => { 
      for (let j = i - 1; j >= 0; j--) {
        if (array[j + 1] < array[j]) {
          array.splice(j, 2, array[j + 1], array[j]);
        } else {
          break
        }
      }
    })
};

const mergeSort = (array) => {
  if (array.length == 1) return array;

  const half = Math.floor(array.length/2);

  // Sort each part
  const left = mergeSort(array.slice(0, half));
  const right = mergeSort(array.slice(half));

  const tmp = [];
  let l = 0, r = 0;

  // Merge the two parts
  while (l < left.length || r < right.length) {
    if (l !== left.length && (r === right.length || left[l] < right[r])) {
      tmp.push(left[l++]);
    } else {
      tmp.push(right[r++]);
    }
  }

  for (i in tmp) {
    array[i] = tmp[i];
  }

  return array;
}

const array = [4, 3, 1, 2, 0, 5];
console.log('before ', array);
mergeSort(array);
console.log('after ', array);
