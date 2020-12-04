def bubble_sort(array: list):
  swaps = -1

  while swaps != 0:
    swaps = 0
    for i in range(len(array) - 1):
      if array[i] > array[i + 1]:
        tmp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = tmp
        swaps += 1

def selection_sort(array: list):
  for i in range(len(array)):
    minimum = i

    for j in range(i, len(array)):
      if array[j] < array[minimum]:
        minimum = j
    
    tmp = array[minimum]
    array[minimum] = array[i]
    array[i] =  tmp

def insertion_sort(array: list):
  for i in range(1, len(array)):
    # Swap the firt unsorted element until it finds it's place
    for j in reversed(range(i)):
      if array[j + 1] < array[j]:
        tmp = array[j + 1]
        array[j + 1] = array[j]
        array[i] = tmp
      else:
        break


from math import floor

def merge_sort(array: list, start: int = 0, end: int = None):
  if end is None:
    end = len(array)
    
  if start == end - 1: return # sorted
  
  middle = floor((start + end)/2)

  # Sort each part
  merge_sort(array, start, middle)
  merge_sort(array, middle, end)

  tmp, l, r = [], start, middle

  # Merge the two parts
  while l < middle and r < end:
    if array[r] < array[l]:
      tmp.append(array[r])
      r += 1
    else:
      tmp.append(array[l])
      l += 1 

  while l < middle:
    tmp.append(array[l])
    l += 1

  while r < end:
    tmp.append(array[r])
    r += 1

  for i in range(len(tmp)):
    array[start + i] = tmp[i]


array = [4, 3, 1, 6, 2, 0, 5]
merge_sort(array)
print(array)
