// This function returns one of 2 functions depending on whether the amount of function calls is even or odd.
// Usage:
//   f()
//   > x=>f
//   f()()
//   > x=>g

f=x=>g
g=x=>f
