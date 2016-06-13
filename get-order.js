// This function gets the amount of times it takes to fully unravel a function.

f=(x,y=0)=>x?f(x(),y+1):y
