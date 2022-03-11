const imageContainer = document.querySelector(".image-container");
const dogDetail = document.getElementById('dogs-detail');
const dogsDetailImage = document.querySelector('#dogs-detail-image');
const dogName = document.querySelector('#name');
const dogAge = document.querySelector('#age');
const dogBreed = document.querySelector('#breed');
const daysInShelter = document.querySelector('#days');

document.addEventListener("DOMContentLoaded", function() {
    // console.log("The DOM has loaded");
  });

let API = 'http://localhost:3000/posts';


 fetch(API)
    .then((res) => res.json())
    .then(renderDogs)
    .catch(console.err);
 
    function renderDogs(dogArray){
     dogArray.forEach(addDogImageToThePage)
    }

    number = 0;

    function addDogImageToThePage(dog) {
      number ++;
      const dogImage = document.createElement('img')
      dogImage.src = dog.image;
      dogImage.setAttribute("id", "image-"+number);
      imageContainer.append(dogImage)
      dogImage.addEventListener('click', function () {
        // console.log(this.id)
      // console.log(dog)
      dogsDetailImage.src = dog.image;
      dogName.textContent = `Name : ${dog.name}`;
      dogAge.textContent = `Age : ${dog.age}`;
      dogBreed.innerText = `Breed : ${dog.breed}`;
      daysInShelter.innerText = `Days in Shelter : ${dog.daysinshelter}`;
    })
    }

    



