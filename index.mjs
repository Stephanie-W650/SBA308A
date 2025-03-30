import {secOne, secTwo} from './export1.mjs';
import {displayDog, displayCat} from './export2.mjs';

document.getElementById('searchBtn').addEventListener('click', clickSearch)
async function clickSearch() {
    const searchTerm = document.getElementById('searchImage').value.toLowerCase().trim();

    if (searchTerm === 'dog') {
       try {
        const dogImges = await secOne();
        displayDog(dogImges);

        } catch (error) {
            console.log("error: fetch dog Images")
        }
    } else if (searchTerm === 'cat') {
        try {
            const catImages = await secTwo();
            displayCat(catImages);
        } catch (error) {
            console.log("Error: Fetch cat Images")
        }
    } 
   
}



document.getElementById('showMore').addEventListener('click', clickShowMore)

async function clickShowMore() {
    try{
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json();
        //displayDog(data.message);
        displayDog([{ url: data.message }])
     
    } catch(error) {
        console.log("error")
    }
    
}
//clickShowMore()
        


//https://dog.ceo/api/breeds/image/random



