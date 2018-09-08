document.addEventListener('DOMContentLoaded', function () {
    //select .pixel elements
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
        divArea += 50;
    }


    //when clicking a paint-brush box, change class to certain color
    var brushColor = "red";

    var brush = document.getElementsByClassName("brush");
    console.log(canvas);
    console.log(pixel);



    for (var i = 0; i < brush.length; i++) {
        brush[i].addEventListener("click", function (event) {
            brushColor = event.target.id;
        })
    }

    //change color when clicked

    for (var i = 0; i < pixel.length; i++) {
        pixel[i].addEventListener("mouseover", function () {
            event.target.style.backgroundColor = brushColor;
        });
    }


    //create a grid layout

    // var row = 

    // div.classList.add("pixel")

    // while ()

    // var h1Span = document.querySelector("h1 span");
    // var countText = h1Span.textContent.slice(1, -1)
    // var countNum = parseInt(countText)

})
