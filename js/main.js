//   create category
document.getElementById("category-btn").onclick = function (e) {
  e.preventDefault();
  console.log("hello");
  const category = document.getElementById("category").value;

  firebase
    .firestore()
    .collection("categories")
    .doc()
    .set({
      category: category,
    })
    .then(() => {
      alert(category + " category created");
    })
    .catch((err) => console.log(err.message));
};

// load categories in dashboard

firebase
  .firestore()
  .collection("categories")
  .get()
  .then((querySnapshot) => {
    let content = "";
    querySnapshot.forEach((category) => {
      content += `<option value=${category.data().category}> ${
        category.data().category
      }  </option>`;
    });

    $("#category-items").append(content);
  });

