const category = (document.getElementById("category-items").onchange = (
  event
) => {
  // prevent default
  document.getElementById("submit-btn").onclick = function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;

    //   firebase collection
    firebase
      .firestore()
      .collection("products")
      .doc()
      .set({
        name,
        description,
        price,
        category: event.target.value,
        images: filesuploaded,
      })
      .then(() => {
        // alert("document added successfully");
        window.location.reload();
      })
      .catch((err) => console.log(err.message));
  };
});

const uploader = new Uploader({
  // Get production API keys from Upload.io
  apiKey: "free",
});
const filesuploaded = [];
function uploadFiles(e) {
  uploader.open({ multi: true }).then((files) => {
    files.map((x) => filesuploaded.push(x.fileUrl));
  });
  (error) => alert(error);
}
filesuploaded.length === 0
  ? (document.getElementById("uploadText").innerHTML = "zero files selected")
  : "";


  