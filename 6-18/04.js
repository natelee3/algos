// 4. Fibonnaci
// How do you get the nth number of a fibonnaci sequence? The Fibonacci Sequence is the series of numbers:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// The next number is found by adding up the two numbers before it

function fibonnaci(n){
    let a = 0;
    let b = 1;
    let list = [0,1]
    for (let i=1; i < n-1; i++) {
        let next = a + b
        list.push(next)
        a = b 
        b = next
    }
    
   console.log(list[list.length-1])

};
fibonnaci(9);
//expected outcome 34

