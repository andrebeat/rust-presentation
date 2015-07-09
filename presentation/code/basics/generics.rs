enum Option<T> {
    Some(T),
    None,
}

let x = Some(5);

fn explode<T>(x: Option<T>) -> T {
    x.unwrap()
}
