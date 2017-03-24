TinyTurtle.apply(window);

// forward(40);
// right(65);
// forward(40);
// right(45);
// forward(45);
// right(65);
// forward(42);
// right(95);
// forward(210);
// right(180);
// forward(270)
// left(180);
// forward(60);
// right(87);
// forward(42);
// left(88);
// forward(79);
// stamp();


function square (x) {
    forward(x);
    right(90);
    forward(x);
    right(90);
    forward(x);
    right(90);
    forward(x);
    right(90);
    forward(x);
}

// square(20);

function hexagon (x) {
    left(70);
    forward(x);
    right(70);
    forward(x);
    right(70);
    forward(x);
    right(40);
    forward(x);
    right(70);
    forward(x);
    right(70);
    forward(x);
}

hexagon(25);

function square (x) {
    left(70);
    forward(x);
    right(90);
    forward(x);
    right(90);
    forward(x);
    right(90);
    forward(x);
}

square(19);

function triangle (x) {
    right(25);
    forward(x);
    left(90);
    forward(x);
    left(135);
    forward(x);
}

triangle(19);