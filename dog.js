const url = "https://dog.ceo/api/breeds/image/random";      //API url, through which requests are sent to the server.

//let image = document.querySelector("button").addEventListener("click", picture);    //Event Listener added to button for a click event.

//function picture() {
fetch(url)
  .then((res) => res.json()) //parse response as JSON
  .then((data) => {
    console.log(data.message); //object is sent as a response
  
  //Image URL is set to 'src' attribute of the 'img' tag
    document.querySelector("img").src = data.message;
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
//}
