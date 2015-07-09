impl<'a, T> List<T> {
    fn iter(&'a self) -> ListIterator<'a, T> {
        ListIterator { cur: self }
    }
}
