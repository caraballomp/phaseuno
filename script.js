document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

 const API = 'http://localhost:3000/posts'

 fetch(API)
  .then((res) => res.json())
  .then(renderDogs)
  .catch(console.err);

  function renderDogs (data) {
      console.log(data)
  }