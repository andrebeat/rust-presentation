pub enum List<T> {
    Nil,
    Cons(T, List<T>)
}

// error: illegal recursive enum type;
//        wrap the inner value in a box
//        to make it representable [E0072]
