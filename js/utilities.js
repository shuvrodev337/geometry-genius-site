// common functions

// Getting text based element value by ID
function getTextElementValueByID(elementID) {
    const element = document.getElementById(elementID);
    return element.innerText;
  }
  // Getting input element value by ID
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
  
  // Adding calculation to the calculation card table
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
  
  //  Changing Eelement background to a random color
  
  function changeBackground(elementID) {
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexValues.length)
      hexCode += hexValues[index];
    }
    document.getElementById(elementID).style.backgroundColor=hexCode
  }
  