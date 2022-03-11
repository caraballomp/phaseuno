const imageContainer = document.querySelector(".image-container");


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

    function addDogImageToThePage(dog) {
      const dogImage = document.createElement('img')
      dogImage.src = dog.image;

      imageContainer.append(dogImage)}


    



//   function dogs (posts) {
//     posts.forEach(element => {
//         console.log(element.image)
//     imageElement = document.createElement('div');
//     imageTag = document.createElement('img');
//     imageTag.src = element.image;
//     imageContainer.append(imageElement);
//     imageElement.append(imageTag);
//     });
// // imageContainer.innerHTML = dogs;});
