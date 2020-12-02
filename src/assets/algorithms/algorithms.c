#include <stdio.h>
#include <stdlib.h>

void bubbleSort(int n, int array[]);
void selectionSort(int n, int array[]);
void insertionSort(int n, int array[]);
void mergeSort(int n, int array[]);

int main(void) {
  int array[7] = {4, 3, 1, 6, 2, 0, 5}; 
  // printf("%i\n", arr[i]);
  mergeSort(7, array);
  
  for (int i = 0; i < 7; i++) {
    printf("%i ", array[i]);
  }
  printf("\n");
  return 0;
}

void bubbleSort(int n, int array[]) {
  int swaps = -1;

  while (swaps != 0) {
    swaps = 0;
    for (int i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        int tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        swaps++;
      }
    }
  }
}

void selectionSort(int n, int array[]) {
  for (int i = 0; i < n; i++) {
    int min = i;

    for (int j = i; j < 6; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    int tmp = array[min];
    array[min] = array[i];
    array[i] = tmp;
  }
}
// {4, 3, 1, 6, 2, 0, 5} i1 
// {3, 4, 1, 6, 2, 0, 5} i2
void insertionSort(int n, int array[]) {
  
  for (int i = 1; i < n; i++) {
    // Swap the firt unsorted element until it finds it's place
    for (int j = i - 1; j >= 0 || array[j + 1] > array[j]; j--) {
      int tmp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = tmp; 
    }
  }
}

void mergeSort(int n, int array[]) {
  if (n == 1) return; // sorted 
  
  int n1 = n/2;
  int n2 = n - n1;

  // Sort each part
  mergeSort(n1, array);
  mergeSort(n2, array + n1);

  int *tmp = (int *) malloc(n * 4);

  // Merge the two parts
  for (int i = 0, j = 0, k = n1; j <= n1 && k <= n; i++) {
    if ((k == n || array[j] < array[k]) && j != n1) {
      tmp[i] = array[j];
      j++;
    } else {
      tmp[i] = array[k];
      k++;
    }
  }
  
  for (int i = 0; i < n; i++) {
    array[i] = tmp[i];
  }

  free(tmp);
}