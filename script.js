const imageContainer = document.querySelector(".image-container");

document.addEventListener("DOMContentLoaded", function() {
    // console.log("The DOM has loaded");
  });

const renderDogs = async () => {
let API = 'http://localhost:3000/posts';
// const response = await fetch(API);{
//         method : "GET",
//         mode: 'no-cors',
//         headers: {}
//     })
    // const posts = await response.json()
    // console.log(json)
    // return json;
    const res = await fetch(API);
    const posts = await res.json();
    console.log(post)
    // return json;
}
// dogs();

// const posts = async () =>{
//     const data = await renderDogs()
//     renderDogs(data)
// }
// posts();

  function dogs (posts) {
    posts.forEach(element => {
        console.log(element.image)
    imageElement = document.createElement('div');
    imageTag = document.createElement('img');
    imageTag.src = element.image;
    imageContainer.append(imageElement);
    imageElement.append(imageTag);
    });
// imageContainer.innerHTML = dogs;
  }