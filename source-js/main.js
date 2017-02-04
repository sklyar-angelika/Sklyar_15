//1 level

for (var i = 0; i < 2; i++){
    console.log(north('i = ', i));
}

//2 level

for (var i = 0; i < 16; i++){
    console.log(east('i = ', i));
}

//3 level

for (var i = 0; i < 7; i++){
    console.log (south('i = ', i)); (east('i = ', i));
}

//4 level

var i = 0;
while (i < 14) {
    if (south() == true) {
        south();
    } else {
        east();
    }
    i++;
}