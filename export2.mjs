export function displayDog(dogImages) {
    const container1 = document.getElementById('container1')
    container1.innerHTML = "";
    dogImages.forEach(image => {
const imgItem = document.createElement('img')
imgItem.src= image.url;
imgItem.alt='Dog Image'
container1.appendChild(imgItem)
    })

}

export function displayCat(catImages) {
    const container2 = document.getElementById('container2')
    container2.innerHTML = '';

    catImages.forEach(image => {
        //https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = 'cat Image'
        container2.appendChild(imgElement);
    })
}