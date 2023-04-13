let rover = "perseverance";
const headline = document.getElementById('headline');
function loadImages(camera) {
    headline.innerHTML = "Images from the " + rover[0].toUpperCase() + rover.slice(1) + " Mars rover";
    let sol = document.getElementById("sol").value;
    if (sol.length === 0) sol = 1;
    fetch(getUrl() + "photos?sol=" + sol + "&camera=" + camera)
    .then(response => response.json())
    .then(json => showImages(json.photos))
    .catch(error => console.error(error));
}

function setRover(_rover) {
    if (_rover != "perseverance") {
        document.getElementById("cameraDropdown").style.display = "none"
    } else {
        document.getElementById("cameraDropdown").style.display = "block"
    }
    rover = _rover;
    loadLatestImages();
}

function loadLatestImages() {
    headline.innerHTML = "Latest Images from the " + rover[0].toUpperCase() + rover.slice(1) + " Mars rover"
    fetch(getUrl() + "latest_photos?page=1")
    .then(response => response.json())
    .then(json => showImages(json.latest_photos))
    .catch(error => console.error(error));
}

function getUrl() {
    return "https://mars-photos.herokuapp.com/api/v1/rovers/" + rover + "/";
}

function showImages(data) {
    console.log(data);
    let html = '';
    data.forEach(image => {
        html += (`<img src='${image.img_src}' />`)
    });
    document.getElementById("gallery").innerHTML = html;
}

loadLatestImages();