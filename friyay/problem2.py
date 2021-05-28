# 2. Remove Duplicates
# Given a string of letters and / or numbers, remove all duplicates and return the new string. Study the example carefully. Please avoid any special built in methods or operators (Set).

# "Loops are cool!!"

# "Lops are cl!"

def removeDuplicates(inputString):
    newString = ""
    for character in inputString:
        if character not in newString or character == ' ':
            newString = newString + character
            print(newString)
        else:
            pass

removeDuplicates('Loops are cool!')