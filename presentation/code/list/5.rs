use List::{Nil, Cons};

struct ListIterator<'a, T: 'a> {
    cur: &'a List<T>
}

impl<'a, T> Iterator for ListIterator<'a, T> {
    type Item = &'a T;

    fn next(&mut self) -> Option<&'a T> {
        match *self.cur {
            Nil => None,
            Cons(ref t, ref tail) => {
                self.cur = tail;
                Some(t)
            }
        }
    }
}
