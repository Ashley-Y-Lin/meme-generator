document.addEventListener("DOMContentLoaded", function(){
  console.log("Document ready!")

  document.querySelector(".btn-primary").addEventListener("click", function(event){
    event.preventDefault()
    console.log("Add meme button clicked!")

    var url = document.querySelector(".img-url").value;
    var textOnTop = document.querySelector(".img-text-top").value;
    var textOnBottom = document.querySelector(".img-text-bottom").value;

    var newMemeDiv = document.createElement("div");
    newMemeDiv.classList.add('memeDiv');

    var newMeme = document.createElement("img");
    newMeme.classList.add('memeImg');
    newMeme.setAttribute("src", url);
    newMeme.setAttribute("alt", "A new meme!");

    var topText = document.createElement("p");
    topText.classList.add('memeTopText');
    topText.textContent = textOnTop

    var bottomText = document.createElement("p");
    bottomText.classList.add('memeBottomText');
    bottomText.textContent = textOnBottom

    newMemeDiv.appendChild(newMeme)
    newMemeDiv.appendChild(topText)
    newMemeDiv.appendChild(bottomText)

    document.querySelector("#memeArea").appendChild(newMemeDiv);

    document.querySelector(".img-url").value = "";
    document.querySelector(".img-text-top").value = "";
    document.querySelector(".img-text-bottom").value = "";

    newMemeDiv.addEventListener("mouseenter", function(event){
      console.log("Mouse entered the meme div")
      console.log(event.target)
      event.preventDefault()
      const img = event.target.querySelector(".memeImg")
      const topText = event.target.querySelector(".memeTopText")
      const bottomText = event.target.querySelector(".memeBottomText")
      img.style.filter = 'brightness(30%)';
      topText.style.filter = 'brightness(30%)';
      bottomText.style.filter = 'brightness(30%)';

      var deleteX = document.createElement("p");
      deleteX.classList.add('deleteX');
      deleteX.textContent = "remove"
      event.target.appendChild(deleteX)
    })

    newMemeDiv.addEventListener("mouseleave", function(event){
      console.log("Mouse left the meme div")
      console.log(event.target)
      event.preventDefault()
      const img = event.target.querySelector(".memeImg")
      const topText = event.target.querySelector(".memeTopText")
      const bottomText = event.target.querySelector(".memeBottomText")
      img.style.filter = 'brightness(100%)';
      topText.style.filter = 'brightness(100%)';
      bottomText.style.filter = 'brightness(100%)';

      var deleteX = event.target.querySelector(".deleteX");
      event.target.removeChild(deleteX)
    })

    newMemeDiv.addEventListener("click", function(event){
      console.log("Mouse clicked the meme div")
      event.preventDefault()
      const entireMeme = event.target.closest(".memeDiv")
      entireMeme.remove()
    })
  })
})