int& y = ...;

{
    int x = 5;
    y = x;
}

std::cout << y << std::endl; // use after free
