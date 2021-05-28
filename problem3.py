## 3. Shuffle
# Given a string `s` and an integer list of `indices` of the same length, shuffle the string such that the 
# character at the `ith` position moves to `incices[i]`.
# Return the shuffled string.
# ```python
# s = "odce"
# indices = [1,2,0,3]
# return "code"
# ```


s = "odce"
indices = [1,2,0,3]


def shuffle():
    new_str = ""
    n = len(indices)
    for i in range(n): 
        for j in range(n):
            if j == i:
                new_str = new_str + str(s[i])
    print(new_str)

shuffle()