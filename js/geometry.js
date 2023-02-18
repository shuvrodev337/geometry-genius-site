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

function addCalculation(serial, shapeName, area) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${serial}.</td>
      <td>${shapeName}</td>
      <td>${area}cm(squared)</td>

      <td>
      <button class="btn bg-blue-500 btn-sm rounded px-4 py-2">Convert to m2</button>
      </td>
      
    `;
  container.appendChild(tr);
}


// -----------------------------------------------//
let calculationCount = 0;

// Triangle area calculation
document
  .getElementById("btn-triangleArea-calc")
  .addEventListener("click", function () {
    const triangleBase = getInputValueByID("triangle-b-field");
    if (triangleBase=== false) {
      return
    }
    const triangleHeight = getInputValueByID("triangle-h-field");
    if (triangleHeight=== false) {
      return
    }
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    const geometricalShape = "Triangle";

    calculationCount++;
    addCalculation(calculationCount, geometricalShape, triangleArea);
  });

// Rectangle area calculation
document
  .getElementById("btn-rectangleArea-calc")
  .addEventListener("click", function () {
    console.log("rectangle");
  });

// Parallelogram area calculation
document
  .getElementById("btn-parallelogramArea-calc")
  .addEventListener("click", function () {
    console.log("parallelogram");
  });
// Rhombus area calculation
document
  .getElementById("btn-rhombusArea-calc")
  .addEventListener("click", function () {
    console.log("rhombus");
  });
// Pentagon area calculation
document
  .getElementById("btn-pentagonArea-calc")
  .addEventListener("click", function () {
    console.log("pentagon");
  });
// Ellipse area calculation
document
  .getElementById("btn-ellipseArea-calc")
  .addEventListener("click", function () {
    console.log("ellipse");
  });
