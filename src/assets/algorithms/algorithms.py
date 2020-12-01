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

def merge_sort(array: list):
  if len(array) == 1:
    return array # sorted
  
  half = floor(len(array)/2)

  # Sort each part
  left = merge_sort(array[0:half])
  right = merge_sort(array[half:])

  tmp, l, r, lenl, lenr = [], 0, 0, len(left), len(right)

  # Merge the two parts
  while l < lenl or r < lenr:
    if l != lenl and (r == lenr or left[l] < right[r]):
      tmp.append(left[l])
      l += 1
    else:
      tmp.append(right[r])
      r += 1 

  for i in range(len(array)):
    array[i] = tmp[i]

  return array


array = [4, 3, 1, 6, 2, 0, 5]
# array = [2, 3]
merge_sort(array)
print(array)
