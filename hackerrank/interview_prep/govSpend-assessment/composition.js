var compose = (...functions) => x => functions.reduceRight((y, f) => f(y), x)


// Do not modify anything below this line
var f = x => x + 5
var g = x => x + 7
var h = x => x + 10

var fgh = compose(f, g, h)
var fg = compose(f, g)

fgh(5) == 27 && fg(15) == 27


