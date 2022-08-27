let stop = true;

let answer = prompt("Please enter name of the shape");

function areCalc(shape) {
    let result;
    switch (shape) {
        case "circle":
            let radius = Number(prompt(`Please enter the radius of ${shape}`));
            result = (radius * radius) * Math.PI;
            break;
        case "triangle":
            let base = Number(prompt(`Please enter the base of  ${shape}`));
            let height = Number(prompt(`Please enter the height of ${shape}`));
            result = 0.5 * base * height;
            break;
        case "square":
            let length = Number(prompt(`Please enter the length of side of ${shape}`));
            result = (length * length);
            break;
        case "rectangle":
            let l = Number(prompt(`Please enter the length of  ${shape}`));
            let width = Number(prompt(`Please enter the width of ${shape}`));
            result = l * width;
            break;
        case "parallelogram":
            let b = Number(prompt(`Please enter the base of  ${shape}`));
            let h = Number(prompt(`Please enter the vertical height of ${shape}`));
            result = b * h;
            break;
        case "trapezium":
            let side1 = Number(prompt(`Please enter the first side of  ${shape}`));
            let side2 = Number(prompt(`Please enter the second side of ${shape}`));
            let heigh = Number(prompt(`Please enter the height of ${shape}`));
            result = 0.5 * (side1 + side2) * heigh;
            break;
        case "ellipse":
            let minor_axis1 = Number(prompt(`Please enter the minor axis of ${shape}`));
            let minor_axis2 = Number(prompt(`Please enter the minor axis of ${shape}`));
            result = (Math.PI * minor_axis1 * minor_axis2) / 2;
            break;

        case null:
            alert("You don't choose any chape");
            result = "undefined";
            break;
        default:
            alert("Please choose one of this shapes (circle, triangle, square, rectangle, parallelogram, trapezium, ellipse)");
    }

    if (result == "undefined") {
        return alert(`Thank You!`);
    }

    return alert(`The result is: ${result}`);

}

areCalc(answer);