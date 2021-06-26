# Algos
## 1. Bubble Sort
# Write a program to sort a list of numbers in ascending order, comparing and swapping two numbers at a time.
# ```python
# [3,1,4,2]
# [1,3,4,2]
# [1,3,2,4]
# [1,2,3,4]
# ```


list = [24, 1, 3, 7, 5]
n = len(list)

def bubble_sort(list):
    for index in range(n-1): #01234
        for num in range(n-index-1): #0123
            if list[num] > list[num+1]:
                list[num], list[num+1] = list[num+1], list[num]
                print(list)
  

bubble_sort(list)





