# 1. Reverse a string
# Given a string of letters, return the reverse of that string. Complete this without using any special built in methods.

# "Hello World"

# "dlroW olleH"

inputString = "Hello World"

def reverseString (inputString): 
    newstring = ""
    for character in inputString:
        newstring = character + newstring 
    print(newstring)


reverseString(inputString)