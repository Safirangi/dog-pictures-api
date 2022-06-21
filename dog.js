const url = "https://dog.ceo/api/breeds/image/random";
//let image = document.querySelector("button").addEventListener("click", picture);

//function picture() {
fetch(url)
  .then((res) => res.json()) //parse response as JSON
  .then((data) => {
    console.log(data.message); //object is sent as a response
    document.querySelector("img").src = data.message;
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
//}
