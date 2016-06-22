// This function takes a function and returns its curried form.
// Usage:
//  curry((x,y,z)=>x+y+z)(1)(2)(3)
//  > 6

curry=f=>(g=(...x)=>x.length<f.length?g.bind(0,...x):f(...x))()
