const key = "WudrVHAaj6ffzif8iJws6D21DHY9NRzcZp3MCIaH";

function loadImage(date) {
    formattedDate = date.toISOString().split('T')[0]
    fetch("https://api.nasa.gov/planetary/apod?api_key=" + key + "&date=" + formattedDate)
    .then(response => response.json())
    .then(json => showImage(json))
    .catch(error => console.error(error));
}

function showImage(data) {
    console.table(data);
    document.getElementById('title').innerHTML = data.title
    document.getElementById("image").innerHTML = `<img src='${data.url}' />`
    document.getElementById('explanation').innerHTML = data.explanation;
}

const datePicker = document.getElementById('datePicker');
datePicker.valueAsDate = new Date();
datePicker.max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
datePicker.addEventListener('change', () => loadImage(datePicker.valueAsDate))
loadImage(new Date());