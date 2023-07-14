// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function sequence(range: i32): Array<usize> {
  const res = [];

  for(let i = 0; i < range; i++) {
   res.push(i);
  }

  return res;
}
