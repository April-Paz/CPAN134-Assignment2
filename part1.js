//Part 1 Javascript Basics

//While Loop will test the conditions of input. The input must be a positive number.
function calculateArea(width, height) {
    while (width <= 0) { 
        width = prompt("Must be a positive number. Enter width: ");
    }

    while (height <= 0) {
        height = prompt("Must be a positive number. Enter height:");
    }

    const area = width * height;
    console.log(`Area of rectangle: ${area}`);
    return area;
}

//Call the methods
calculateArea(5, 3);
calculateArea(10, 7); 