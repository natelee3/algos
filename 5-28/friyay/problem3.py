# 3. Is this an Anagram?
# Given two strings, check if they are anagrams, and return a boolean.

# "god" "dog" ✅

# "rat" "cat" 🚫

def checkAnagram(input1, input2):
    if len(input1) != len(input2):
        print(False)
        return
    else:
        inputlist1 = []
        inputlist2 = []
        for character in input1:
            inputlist1.append(character)
        for character in input2:
            inputlist2.append(character)
        for listItem in inputlist1:
            if listItem not in inputlist2:
                print(False)
                return
            else:
                pass
        print(True)

checkAnagram('gotd', 'doge')
checkAnagram('rat', 'cat')
