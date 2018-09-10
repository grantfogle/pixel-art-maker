document.addEventListener('DOMContentLoaded', function () {
    //select .pixel elements, creates our canvas
    var canvas = document.getElementsByClassName("canvas");
    var pixel = document.getElementsByClassName("pixel");
    var clientWidth = canvas[0].clientWidth;
    var clientHeight = canvas[0].clientHeight;
    var clientArea = clientWidth * clientHeight;
    var divArea = 0;

    while (clientArea > divArea) {
        var div = document.createElement("DIV");
        div.classList.add("pixel");
        canvas[0].append(div);
        divArea += 175;
    }


    //when clicking a paint-brush box, change class to certain color
    var brushColor = "red";
    // var currentColor = document.getElementByID("current-color-box").style.backgroundColor;

    var brush = document.getElementsByClassName("brush");
    console.log(canvas);
    console.log(pixel);



    for (let i = 0; i < brush.length; i++) {
        brush[i].addEventListener("click", function (event) {
            brushColor = event.target.id;
            document.getElementById("current-color-box").style.backgroundColor = brushColor;
        })
    }

    //change color when clicked
    //add brush functionality function -- This works!
    // for (let i = 0; i < pixel.length; i++) {
    //     pixel[i].addEventListener("mousedown", function () {
    //         event.target.style.backgroundColor = brushColor;
    //     });
    // }

    //change functionality of brush
    //mousedown
    var brushFunction = "click";
    var fill = document.getElementById("flood");

    //make it so all of the pixels are flooded with that color
    fill.addEventListener("click", function () {
        for (let i = 0; i < pixel.length; i++) {
            pixel[i].style.backgroundColor = brushColor;
        }
    });

    //while mousedown is clicked = true
    //change colors on mouseenter function 
    //mouse up is clicked  false

    var isClicked = false;

    //inside a pixel for loop
    for (let i = 0; i < pixel.length; i++) {
        // if (mousedown == true) {
        // pixel[i].addEventListener(
        document.addEventListener("mousedown", function () {
            isClicked = true;
            pixel[i].addEventListener("mouseover", function () {
                if (isClicked) {
                    event.target.style.backgroundColor = brushColor;
                }
            });
        });
        isClicked = false;

        //on mouseup, isclicked is false
        document.addEventListener("mouseup", function () {
            isClicked = false;
        })

        pixel[i].addEventListener("click", function () {
            event.target.style.backgroundColor = brushColor;
        });


    }
    // if 

    // mouseup, mousenter, change
    //create a grid layout

    // var row = 

    // div.classList.add("pixel")

    // while ()

    // var h1Span = document.querySelector("h1 span");
    // var countText = h1Span.textContent.slice(1, -1)
    // var countNum = parseInt(countText)

})
