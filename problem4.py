## 4. Primes
# Write a program that returns a list of all prime numbers up to a given max(inclusive).
# A prime is a number that only has two factors; itself and 1.
# ```python


n=12
import math

def is_prime(n):
    for i in range(2, int(math.sqrt(n))+1):
        if n % 1 == 0:
            return False
    return True

def primes():
    for num in range(2,n):
        if is_prime(num):
            print(num)
    


        

primes()