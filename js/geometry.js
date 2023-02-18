// common functions

function getTextElementValueByID(elementID) {
  const element = document.getElementById(elementID);
  return element.innerText;
}
function getInputValueByID(elementID) {
  const inputElement = document.getElementById(elementID);
  const inputElementString = inputElement.value;
  const inputValue = parseFloat(inputElementString);
  if (inputElementString === "") {
    alert("Error!!! Please provide value in every field!");
    return false;
  } else if (isNaN(inputElementString)) {
    alert("Error!!! Please type numbers!");
    return false;
  } else if (inputValue <0) {
    alert("Error!!! Any figure with negative unit area is not possible!!");
    return false;
  } else if (inputValue === 0) {
    alert("Error!!! Any figure with zero unit area is not possible!");
    return false;
  }
  return inputValue;
}

function addToCalculationField(serial, shapeName, area) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${serial}.</td>
      <td>${shapeName}</td>
      <td>${area} cm<sup>2</sup></td>

      <td>
      <button class="btn bg-blue-500 btn-sm rounded px-4 py-2">Convert to m<sup>2</sup></button>
      </td>
      
    `;
  container.appendChild(tr);
}


// -----------------------------------------------//
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
  function changeHex(elementID) {
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexValues.length)
      hexCode += hexValues[index];
    }
    document.getElementById(elementID).style.backgroundColor=hexCode
  }

  document.getElementById("triangle-card").addEventListener("mouseenter",function (event) {
changeHex("triangle-card")
  })
  document.getElementById("rectangle-card").addEventListener("mouseenter",function (event) {
changeHex("rectangle-card")
  })
  document.getElementById("parallelogram-card").addEventListener("mouseenter",function (event) {
changeHex("parallelogram-card")
  })
  document.getElementById("rhombus-card").addEventListener("mouseenter",function (event) {
changeHex("rhombus-card")
  })
  document.getElementById("pentagon-card").addEventListener("mouseenter",function (event) {
changeHex("pentagon-card")
  })
  document.getElementById("ellipse-card").addEventListener("mouseenter",function (event) {
changeHex("ellipse-card")
  })