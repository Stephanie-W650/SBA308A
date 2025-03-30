export async function secOne() {
    try {
        const response = await fetch("https://api.thedogapi.com/v1/images/search?limit=10")
        if (!response.ok) throw new Error ("failed to fetch images")

            const data = await response.json()
            return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

//secOne();

export async function secTwo() {
    const catURL = "https://api.thecatapi.com/v1/images/search?limit=10"
 try {
    const response = await fetch(catURL);
    const data = await response.json();
    return data;
 } catch (error) {
    console.log(error);
    throw error;
 }

}

//secTwo();