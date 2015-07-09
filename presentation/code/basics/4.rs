let y = OptionInt::Some(1);

match y {
    OptionInt::Some(i) if i > 5 => 1,
    OptionInt::Some(..) => 2,
    OptionInt::None => 3,
}
