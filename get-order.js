// This function gets the amount of times it takes to fully unravel a function, stopping at 2**53-1 if the function does not fully unravel.

f=(x,y=0)=>x&&y<2**53?f(x(),y+1):y
