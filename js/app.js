// load categories in homepage
firebase
  .firestore()
  .collection("categories")
  .limit(5)
  .get()
  .then((querySnapshot) => {
    let content = "";
    querySnapshot.forEach((category) => {
      content += `<li class="list-group-item">${category.data().category}</li>`;
    });

    $("#category-left").append(content);
  });

// get data from a collection

firebase
  .firestore()
  .collection("products")

  .get()
  .then((dataSnapshot) => {
    let content = "";
    dataSnapshot.forEach((product) => {
      content += '<div class="col-md-4 mb-3">';
      content += '<div class="card">';
      content += `<img src=${
        product.data().images[0]
      } class='card-img-top'alt='images'/>`;
      content += '<div class="card-body">';
      content += '<h5 class="card-title">' + product.data().name + "</h5>";
      content += '<p class="card-text">' + product.data().description + "</p>";
      content +=
        '<button class="cart-btn "><i class="fa-solid fa-cart-shopping"></i>  Add To Cart</button>';
      content += "</div>";
      content += "</div>";
      content += "</div>";
    });
    $("#products").append(content);
  });

// load products in carousel

firebase
  .firestore()
  .collection("products")
  .limit(4)
  .get()
  .then((querySnapshot) => {
    let content = "";
    querySnapshot.forEach((product) => {
      content += '<div class="carousel-item " id="carouselItem">';
      content += " <img";
      content += ` src=${product.data().images[0]}`;
      content += '  class="d-block w-100';
      content += ' alt="Sunset Over the City';
      content += "    />";
      content += '  <div class="carousel-caption d-none d-md-block">';
      content += `   <h5 class="text-dark 5xl">${product.data().name}</h5>`;
      content += `  <p class="text-dark xl">${product.data().description}</p>`;
      content += "  </div>";
      content += "  </div>";
    });

    $("#carousel-wrapper").append(content);
  });

// remove active class from carousel item
window.document.querySelectorAll("#carouselItem").forEach((item) => {
  console.log(item);
});
console.log(document.querySelectorAll("#carouselItem"));
