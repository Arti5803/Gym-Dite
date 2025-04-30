document.getElementById('protein-calculator').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const weight = parseFloat(document.getElementById('weight').value);
  const activityLevel = document.getElementById('activity-level').value;

  let proteinMultiplier;

  // Determine protein needs based on activity level
  switch (activityLevel) {
      case 'sedentary':
          proteinMultiplier = 0.8; // grams of protein per kg of body weight
          break;
      case 'light':
          proteinMultiplier = 1.0;
          break;
      case 'moderate':
          proteinMultiplier = 1.2;
          break;
      case 'active':
          proteinMultiplier = 1.5;
          break;
      default:
          proteinMultiplier = 0.8;
  }

  const proteinNeeds = (weight * proteinMultiplier).toFixed(2);
  document.getElementById('protein-result').innerText = `You need approximately ${proteinNeeds} grams of protein per day.`;
});