fn example() {
    let mut vector = Vec::new();
    let elem = &vector[0];
    vector.push(0);
}

// error: cannot borrow `vector` as mutable
//        because it is also borrowed as immutable
// vector.push(0);
// ^~~~~~
// note: previous borrow of `vector` occurs here;
//       ...
// let elem = &vector[0];
//             ^~~~~~
