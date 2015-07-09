struct Foo(u32);
fn bar(f: Foo) {}

let x = Foo(3);
let y = &x;

bar(x);

// error: cannot move out of `x` because it is borrowed
//        bar(x);
//            ^
// note: borrow of `x` occurs here
//       let y = &x;
//                ^
