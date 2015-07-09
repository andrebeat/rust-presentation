pub enum List<T> {
    Nil,
    Cons(T, Box<List<T>>)
}

impl<T> List<T> {
    fn empty() -> List<T> {
        Nil
    }

    fn is_empty(&self) -> bool {
        match *self {
            Nil => true,
            _ => false
        }
    }
}

let list: List<u32> = List::empty();
println!("{}", list.is_empty());

// true
