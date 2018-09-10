document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementsByClassName("canvas");
    var pixel = document.getElementsByClassName("pixel");
    var canvasWidth = canvas[0].clientWidth;
    var canvasHeight = canvas[0].clientHeight;
    var canvasArea = canvasWidth * canvasHeight;

    var table = document.getElementsByClassName("canvas-table");
    let tableHeight = table[0].clientHeight;
    let tableWidth = table[0].clientWidth;
    let tableArea = tableHeight * tableWidth;

    for (let i = 0; i < table.length; i++) {
        for (let k = 0; k < canvasHeight; k += 40) {
            var tr = document.createElement("TR");
            for (let j = 0; j < canvasWidth; j += 30) {
                var td = document.createElement("TD");
                td.classList.add("pixel");
                tr.appendChild(td);
            }
            table[i].appendChild(tr);
        }
    }

    var brushColor = "firebrick";
    var brush = document.getElementsByClassName("brush");

    for (let i = 0; i < brush.length; i++) {
        brush[i].addEventListener("click", function (event) {
            brushColor = event.target.id;
            document.getElementById("current-color-box").style.backgroundColor = brushColor;
        })
    }


    var fill = document.getElementById("flood");

    fill.addEventListener("click", function () {
        for (let i = 0; i < pixel.length; i++) {
            pixel[i].style.backgroundColor = brushColor;
        }
    });


    var isClicked = false;

    for (let i = 0; i < pixel.length; i++) {
        document.addEventListener("mousedown", function () {
            isClicked = true;
            pixel[i].addEventListener("mouseover", function () {
                if (isClicked) {
                    event.target.style.backgroundColor = brushColor;
                }
            });
        });
        isClicked = false;

        document.addEventListener("mouseup", function () {
            isClicked = false;
        })

        pixel[i].addEventListener("click", function () {
            event.target.style.backgroundColor = brushColor;
        });


    }

})
