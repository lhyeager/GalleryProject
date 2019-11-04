function display() 
{
    var input= document.getElementById("text").value;
    console.log(input)
    callApi(input)
}

function callApi(query) {
    fetch('https://pixabay.com/api/?key=14116409-2c848675894fadcf04449c63e&image_type=photo&q=' + query)
    .then(
        async function(response) {
            console.log(response)
            var photoSearchResponse = await response.json() 
            if(photoSearchResponse.hits == "False") {
                alert('oh shit!')
            }
            else {
                var photos = photoSearchResponse.hits
                console.log(photos)
                var e = document.getElementById("photoList");
                var child = e.lastElementChild;
                while (child) {
                    e.removeChild(child);
                    child = e.lastElementChild;
                }

                for (var i=0; i<photos.length; i++) {
                    console.log(photos[i])
                    var photoList = document.getElementById("photoList")
                    var uiCard = document.createElement("div")
                    var img = document.createElement("img")
                    img.src = photos[i].previewURL
                    var span = document.createElement("span")
                    var emptyDiv = document.createElement("div")
                    var icon = document.createElement("i")
                    icon.className = 'star icon'
                    icon.innerHTML = "Favorite"
                    icon.innerHTML.className = 'extra content'
                    uiCard.className = 'ui card'
                    span.className = 'left floated star'
                    img.className = 'image'
                    emptyDiv.className = 'bottom'
                    
                    // building
                    uiCard.appendChild(img)
                    uiCard.appendChild(emptyDiv)
                    emptyDiv.appendChild(span)
                    span.appendChild(icon)
                    photoList.appendChild(uiCard)
                    
                }
            }
        
        }
    )
}