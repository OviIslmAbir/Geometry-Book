// Triangle 
document.getElementById("triangle-btn").addEventListener("click", function(){
    const triangleBaseValue = getInputFieldById("triangle-b")
    const triangleHeightValue = getInputFieldById("triangle-h")
    if (isNaN(triangleBaseValue, triangleHeightValue) || (triangleBaseValue, triangleHeightValue) <= 0){
        alert("Please provide a positive number")
        return;
    }
    const triangleArea = parseFloat((0.5 * triangleBaseValue * triangleHeightValue).toFixed(2))

    // areaCalculation 
    serial += 1;
    areaCalculation("Triangle", triangleArea)
})
// Rectangle
document.getElementById("rectangle-btn").addEventListener("click", function(){
    const rectangleWidthValue = getInputFieldById("rectangle-w")
    const rectangleLengthValue = getInputFieldById("rectangle-l")
    if (isNaN(rectangleWidthValue, rectangleLengthValue) || (rectangleWidthValue, rectangleLengthValue) <= 0){
        alert("Please provide a positive number")
        return;
    }
    const rectangleArea =  parseFloat((rectangleLengthValue * rectangleWidthValue).toFixed(2))

    // areaCalculation
    serial += 1;
    areaCalculation("Rectangle", rectangleArea)
})
// Parallelogram
document.getElementById("parallelogram-btn").addEventListener("click", function(){
    const parallelogramBaseValue = getInputFieldById("parallelogram-b")
    const parallelogramHeightValue = getInputFieldById("parallelogram-h")
    if (isNaN(parallelogramBaseValue, parallelogramHeightValue) || (parallelogramBaseValue, parallelogramHeightValue) <= 0){
        alert("Please provide a positive number")
        return;
    }
    const parallelogramArea =  parseFloat((parallelogramHeightValue * parallelogramBaseValue).toFixed(2))

    // areaCalculation
    serial += 1;
    areaCalculation("Parallelogram", parallelogramArea)
})
// Rhombus 
document.getElementById("rhombus-btn").addEventListener("click", function(){
    const rhombusDiagonal1Value = getInputFieldById("rhombus-d1")
    const rhombusDiagonal2Value = getInputFieldById("rhombus-d2")
    if (isNaN(rhombusDiagonal1Value, rhombusDiagonal2Value) || (rhombusDiagonal1Value, rhombusDiagonal2Value) <= 0){
        alert("Please provide a positive number")
        return;
    }
    const rhombusArea = parseFloat((0.5 * rhombusDiagonal2Value * rhombusDiagonal1Value).toFixed(2))

    serial += 1;
    areaCalculation("Rhombus", rhombusArea)

})
// Pentagon 
document.getElementById("pentagon-btn").addEventListener("click", function(){
    const pentagonPValue = getInputFieldById("pentagon-p")
    const pentagonBValue = getInputFieldById("pentagon-b")
    if (isNaN(pentagonPValue, pentagonBValue) || (pentagonPValue, pentagonBValue) <= 0){
        alert("Please provide a positive number")
        return;
    }
    const pentagonArea = parseFloat((0.5 * pentagonBValue * pentagonPValue).toFixed(2))

    // areaCalculation
    serial += 1;
    areaCalculation("Pentagon", pentagonArea)
})
// Ellipse 
document.getElementById("ellipse-btn").addEventListener("click", function(){
    const ellipseAAxisValue = getInputFieldById("ellipse-a-axis")
    const ellipseBAxisValue = getInputFieldById("ellipse-b-axis")
    if (isNaN(ellipseAAxisValue, ellipseBAxisValue) || (ellipseAAxisValue, ellipseBAxisValue) <= 0){
        alert("Please provide a positive number")
        return;
    }
    const ellipseArea = parseFloat((3.14 * ellipseBAxisValue * ellipseAAxisValue).toFixed(2))

    // areaCalculation
    serial += 1;
    areaCalculation("Ellipse", ellipseArea)
})



