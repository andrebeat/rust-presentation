struct Point {
    x: i32,
    y: i32,
}

let origin = Point { x: 0, y: 0 };

enum OptionInt {
    Some(i32),
    None,
}

let y = OptionInt::Some(1);
