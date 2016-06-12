// This function takes 1 argument n and returns a function that takes n function calls to fully unravel.
// usage: 
//   f(2)()
//   > x=>y
//   f(2)()()
//   > x=>x

f=(x,y=x=>x)=>x?f(x-1,x=>y):y
