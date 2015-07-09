struct Foo(u32);
fn whitehole(f: &Foo) {}

let mut x = Foo(3);
let y = &x;
let z = &x;
whitehole(y);
whitehole(z);

let w = &mut x;

// error: cannot borrow `x` as mutable because it is also
//        borrowed as immutable
//        let w = &mut x;
//                     ^
// note: previous borrow of `x` occurs here;
//       the immutable borrow prevents subsequent moves or
//       mutable borrows of `x` until the borrow ends
//       let y = &x;
//                ^
