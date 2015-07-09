for x in 0..10 {
    println!("{}", x);
}

let mut i = 0;
while i < 10 {
    ...

    i += 1;
}

let sum = (0..100)
    .filter(|x| x % 3 == 0)
    .map(|x| x * 7)
    .fold(0, |sum, x| sum + x);
