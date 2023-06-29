document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var selectedOptions = document.querySelectorAll('input[name="platform"]:checked');
    var percentages = calculatePercentages(selectedOptions);
    displayResults(percentages);
  });
  
  function calculatePercentages(selectedOptions) {
    var totalVotes = selectedOptions.length;
    var percentages = {};
  
    selectedOptions.forEach(function(option) {
      var value = option.value;
      if (!percentages[value]) {
        percentages[value] = 0;
      }
      percentages[value]++;
    });
  
    for (var key in percentages) {
      percentages[key] = ((percentages[key] / totalVotes) * 100).toFixed(2) + '%';
    }
  
    return percentages;
  }
  
  function displayResults(percentages) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    for (var key in percentages) {
      var result = document.createElement('p');
      result.textContent = key + ': ' + percentages[key];
      resultsDiv.appendChild(result);
    }
  }
  