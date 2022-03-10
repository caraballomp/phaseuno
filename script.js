const imageContainer = document.querySelector(".image-container");

document.addEventListener("DOMContentLoaded", function() {
    // console.log("The DOM has loaded");
  });

 const API = 'http://localhost:3000/posts'

//  fetch(API, {mode:'no-cors'})
//   .then((res) => {
//       console.log(res)
//       res.json()
//     console.log(res.json())
// })

//   .then(renderDogs)
//   .catch(console.err);

const dogs = async () => {
    const response = await fetch(API)
    const json = await response.json()
    console.log(json)
    return json;
}
// dogs();

const allPosts = async () =>{
    const data = await dogs()
    renderDogs(data)
}
allPosts();

  function renderDogs (data) {
    data.forEach(element => {
        // console.log(element.image)
    imageElement = document.createElement('div');
    imageTag = document.createElement('img');
    imageTag.src = element.image;
    imageContainer.append(imageElement);
    imageElement.append(imageTag);
    });

  }