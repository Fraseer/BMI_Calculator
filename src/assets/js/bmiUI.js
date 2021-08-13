function calculateBMI() {
  let weightInput = document.getElementById("weight");
  let heightInput = document.getElementById("height");

  let results = calculateMetricBMI(weightInput.value, heightInput.value);

  let displayResultsElement = document.getElementById("results");
  displayResultsElement.innerHTML = `<h2> Your BMI value is: ${results}</h2>`;
}

const button = document.getElementById("calculate");
button.addEventListener("click", calculateBMI);