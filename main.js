let outputCode = document.getElementById("css-code");

let sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function (slider) {
    slider.addEventListener("input", createBox);
});


let color = document.querySelectorAll("input[type='color']"); {
    color.forEach(function (colors) {
        colors.addEventListener("change", createBox);
    });
}

function createBox() {
    let X = sliders[0].value;
    let Y = sliders[1].value;
    let blurRadius = sliders[2].value;
    let spreadRadius = sliders[3].value;

    let shadowcolor = color[0].value;

    let boxShadow = `${X}px ${Y}px ${blurRadius}px ${spreadRadius}px`;

    document.getElementById("box").style.cssText = `box-shadow: ${boxShadow} ${shadowcolor}`;

    outputCode.value = `box-shadow: ${boxShadow};`
}

let output = document.getElementById("css-code");
let btnCopy = document.getElementById("copy");

btnCopy.onclick = function () {
    output.select();
    document.execCommand("Copy");
    alert("Code Copied");
}

createBox();


