struct Point {
    x: f64,
    y: f64,
}

let stack_point = Point { x: 0.0, y: 0.0 };
let heap_point = Box::new(Point { x: 0.0, y: 0.0 });

fn print_point(p: Point) {
  println!("{} - {}", p.x, p.y);
}

print_point(stack_point);
print_point(*heap_point);
