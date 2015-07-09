let y: &i32;

{
    let x = 5;
    y = &x;
}

println!("{}", y);

// error: `x` does not live long enough
//     y = &x;
//          ^
