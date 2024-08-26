var countrySelector = document.getElementById("country");

function  handleCountrySelector() {
  console.log(countrySelector.value)
}


countrySelector.addEventListener('change', handleCountrySelector);
