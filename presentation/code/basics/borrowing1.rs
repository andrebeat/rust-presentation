struct Foo(u32);
fn whitehole(f: &Foo) {}

let mut x = Foo(3);
let y = &x;
let z = &x;
whitehole(y);
whitehole(z);
