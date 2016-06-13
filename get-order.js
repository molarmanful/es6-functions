// This function gets the amount of times it takes to fully unravel a function.
// Usage:
// f(x=>x)
// > 1
// f(x=>x=>x)
// > 2
// f(x=>x=>x=>x)
// > 3

f=(x,y=0)=>x?f(x(),y+1):y
