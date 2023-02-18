


//------------ Blog page redirection----------//
document.getElementById("blog-btn").addEventListener("click",function () {
  window.location.href = "blog.html";
})


//---------- calculation from cards-------------------//
let calculationCount = 0;

// Triangle area calculation
document.getElementById("btn-triangleArea-calc").addEventListener("click", function () {
    const triangleBase = getInputValueByID("triangle-b-field");
    if (triangleBase=== false) {
      return
    }
    const triangleHeight = getInputValueByID("triangle-h-field");
    if (triangleHeight=== false) {
      return
    }
    const triangleArea = (0.5 * triangleBase * triangleHeight).toFixed(2);

    calculationCount++;
    addToCalculationField(calculationCount, "Triangle", triangleArea);
  });

// Rectangle area calculation
document
  .getElementById("btn-rectangleArea-calc")
  .addEventListener("click", function () {
    const rectangleWidth=getInputValueByID("rectangle-w-field")
    if (rectangleWidth=== false) {
      return
    }
    const rectangleLength=getInputValueByID("rectagle-l-field")
    if (rectangleLength=== false) {
      return
    }
    const rectangleArea=(rectangleWidth * rectangleLength).toFixed(2)

    calculationCount++
    addToCalculationField(calculationCount,"Rectangle",rectangleArea)

  });

// Parallelogram area calculation
document
  .getElementById("btn-parallelogramArea-calc")
  .addEventListener("click", function () {
    const parallelogramBase=getInputValueByID("parallelogram-b-field")
    if (parallelogramBase=== false) {
      return
    }
    const parallelogramHeight=getInputValueByID("parallelogram-h-field")
    if (parallelogramHeight=== false) {
      return
    }
    const parallelogramArea=(parallelogramBase*parallelogramHeight).toFixed(2)
    calculationCount++
    addToCalculationField(calculationCount,"Parallelogram",parallelogramArea)
  });
// Rhombus area calculation
document
  .getElementById("btn-rhombusArea-calc")
  .addEventListener("click", function () {
    const rhombusD1=getInputValueByID("rhombus-d1-field")
    if (rhombusD1=== false) {
      return
    }
    const rhombusD2=getInputValueByID("rhombus-d2-field")
    if (rhombusD2=== false) {
      return
    }
    const rhombusArea=(0.5 * rhombusD1 * rhombusD2).toFixed(2)
    calculationCount++
    addToCalculationField(calculationCount,"Rhombus",rhombusArea)

  });
// Pentagon area calculation
document
  .getElementById("btn-pentagonArea-calc")
  .addEventListener("click", function () {
    const pentagonPerimeter=getInputValueByID("pentagon-p-field")
    if (pentagonPerimeter=== false) {
      return
    }
    const pentagonApothem=getInputValueByID("pentagon-b-field")
    if (pentagonApothem=== false) {
      return
    }
    const pentagonArea=(0.5 * pentagonPerimeter * pentagonApothem).toFixed(2)
    calculationCount++
    addToCalculationField(calculationCount,"Pentagon",pentagonArea)

  });
// Ellipse area calculation
document
  .getElementById("btn-ellipseArea-calc")
  .addEventListener("click", function () {
    const pi= 3.1416
    const ellipseAxisA=getInputValueByID("ellipse-a-field")
    if (ellipseAxisA=== false) {
      return
    }
    const ellipseAxisB=getInputValueByID("ellipse-b-field")
    if (ellipseAxisB=== false) {
      return
    }
    const ellipseArea= (pi * ellipseAxisA* ellipseAxisB).toFixed(2)
    calculationCount++
    addToCalculationField(calculationCount,"Ellipse",ellipseArea)
  });


  // Mouse hover part

  document.getElementById("triangle-card").addEventListener("mouseenter",function (event) {
changeBackground("triangle-card")
  })
  document.getElementById("rectangle-card").addEventListener("mouseenter",function (event) {
changeBackground("rectangle-card")
  })
  document.getElementById("parallelogram-card").addEventListener("mouseenter",function (event) {
changeBackground("parallelogram-card")
  })
  document.getElementById("rhombus-card").addEventListener("mouseenter",function (event) {
changeBackground("rhombus-card")
  })
  document.getElementById("pentagon-card").addEventListener("mouseenter",function (event) {
changeBackground("pentagon-card")
  })
  document.getElementById("ellipse-card").addEventListener("mouseenter",function (event) {
changeBackground("ellipse-card")
  })

  
  // remove calculation
  document.getElementById("table-container").addEventListener("click",function (event) {
    if (event.target.innerText==="X") { 
      event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
    }else if (event.target.innerText==="Convert to m2") {
      const areaElement=event.target.parentNode.previousElementSibling.previousElementSibling
      const areaInCm=parseFloat(areaElement.innerText)
      const areaInMeter=areaInCm/10000
      areaElement.innerText=areaInMeter

      // const cmSquare=event.target.parentNode.previousElementSibling.innerHTML
      event.target.parentNode.previousElementSibling.innerHTML="m<sup>2</sup>"

      // console.log(areaInMeter,cmSquare);
    }
  })
  
  //