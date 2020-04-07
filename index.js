var slider = document.getElementById("dogs");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

$(".dogForm").submit(function(event) {
  event.preventDefault();
  console.log(slider.value);
  getDogImage(slider.value);
});

function getDogImage(numberOfDogs) {
  fetch('https://dog.ceo/api/breeds/image/random/' + numberOfDogs)
    .then(response => response.json())
    .then(responseJson => 
        showDogs(responseJson))
    .catch(error => alert('You broke it!'));
  }

function showDogs(responseJson) {
  responseJson.message.forEach(thisDog => {
   
    $("p.insertDogs").append(`<img src="${thisDog}">`);
  });
  $('p.hidden').toggleClass('hidden');
  }