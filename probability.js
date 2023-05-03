// Binomial Distribution Calculation
function calculateBinomial() {
    const n = parseInt(document.getElementById("binomialN").value);
    const p = parseFloat(document.getElementById("binomialP").value);
    const x = parseInt(document.getElementById("binomialX").value);
  
    const result = binomialDistribution(n, p, x);
  
    document.getElementById("binomialResult").innerHTML = result;
  }
  
  // Poisson's Distribution Calculation
  function calculatePoisson() {
    const lambda = parseFloat(document.getElementById("poissonLambda").value);
    const x = parseInt(document.getElementById("poissonX").value);
  
    const result = poissonDistribution(lambda, x);
  
    document.getElementById("poissonResult").innerHTML = result;
  }
  
  // Normal Distribution Calculation
  function calculateNormal() {
    const mean = parseFloat(document.getElementById("normalMean").value);
    const stdDev = parseFloat(document.getElementById("normalStdDev").value);
    const x = parseFloat(document.getElementById("normalX").value);
  
    const result = normalDistribution(mean, stdDev, x);
  
    document.getElementById("normalResult").innerHTML = result;
  }
  
  // Event listener for drop-down menu selection
  document.getElementById("distributionMethod").addEventListener("change", function() {
    const selectedMethod = this.value;
  
    // Hide all tables and results
    document.getElementById("binomialTable").style.display = "none";
    document.getElementById("binomialResult").style.display = "none";
    document.getElementById("poissonTable").style.display = "none";
    document.getElementById("poissonResult").style.display = "none";
    document.getElementById("normalTable").style.display = "none";
    document.getElementById("normalResult").style.display = "none";
  
    // Show the selected table and result
    if (selectedMethod === "binomial") {
      document.getElementById("binomialTable").style.display = "table";
      document.getElementById("binomialResult").style.display = "block";
    } else if (selectedMethod === "poisson") {
      document.getElementById("poissonTable").style.display = "table";
      document.getElementById("poissonResult").style.display = "block";
    } else if (selectedMethod === "normal") {
      document.getElementById("normalTable").style.display = "table";
      document.getElementById("normalResult").style.display = "block";
    }
  });
  