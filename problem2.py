## 2. Candies
# Given the list `candies` and the integer `extra_candies`, where `candies[i]` represents the number of candies that the `ith` kid has.
# For each kid, check if there is a way to distribute the `extra_candies` amount to the kids such that they can have the greatest numhber of candies among them. Notice that multiple kids can have the greatest number of candies.
# ```python
# candies = [2,3,5,1,3]
# extra_candies = 3
# expected output: [True,True,True,False,True]
# ```

candies = [2,3,5,1,3]
extra_candies = 3


def algo2():
    output = []
    max_candies = max(candies)
    for kid in candies:
        if kid + extra_candies >= max_candies:
            output.append(True)
        else:
            output.append(False)
    print(output)




algo2()