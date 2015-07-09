struct Foo(u32);
fn blackhole(f: Foo) {}

let x = Foo(3);
let y = x; // moved ownership;
           // cannot access x anymore

blackhole(y); // moved ownership;
              // cannot access y anymore

{
    let z = Foo(7);
} // z is destroyed at the end of this scope
