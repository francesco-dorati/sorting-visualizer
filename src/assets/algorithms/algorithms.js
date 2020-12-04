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

const mergeSort = (array, start = 0, end = array.length /* exclusive */) => {
  if (start === end - 1) return; // sorted

  const middle = Math.floor((start + end) / 2);

  // Sort each part
  mergeSort(array, start, middle);
  mergeSort(array, middle, end);

  const tmp = [];
  let l = start, r = middle;

  // Merge the two parts
  while (l < middle && r < end) {
    if (array[r] < array[l]) {
      tmp.push(array[r++]);
    } else {
      tmp.push(array[l++]);
    }
  }

  while (l < middle) tmp.push(array[l++]);
  while (r < end) tmp.push(array[r++]);

  array.splice(start, tmp.length, ...tmp);
}

const array = [4, 3, 1, 2, 0, 5];
console.log('before ', array);
mergeSort(array);
console.log('after ', array);
