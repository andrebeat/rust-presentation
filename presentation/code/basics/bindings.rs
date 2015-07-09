let x = 5;              // types are inferred
let mut y = 3;          // immutable by default

fn foo(x: u32) -> u32 {
    if x % 2 == 0 {     // expression-oriented
        x * 3
    } else {
        0
    }                   // implicit return
}
