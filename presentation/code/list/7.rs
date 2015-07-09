fn main() {
    let list =
        Cons(0, Box::new(
            Cons(1, Box::new(
                Cons(2, Box::new(Nil))))));

    for i in list.iter().map(|i| i * 2) {
        println!("{}", i);
    }
}

// 0
// 2
// 4
