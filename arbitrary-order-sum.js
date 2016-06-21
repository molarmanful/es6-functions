// This function can take an arbitrary amount of curried arguments and return their sums.
// Usage:
//  sum(1)(1)()
//  > 2
//  sum(5)(3)(8)(1)(2)(603)()
//  > 622

sum=x=>y=>y||y==0?sum(x+y):x
