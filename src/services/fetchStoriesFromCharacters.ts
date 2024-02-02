export async function fetchStoriesFromCharacter(characterCollectionURI: string): Promise<any[]> {
    const storiesArray: any[] = [];
    const limit = 10;
    const secureURL = `https://gateway.marvel.com/v1/public/characters/${characterCollectionURI}/stories?ts=1&apikey=8b473e56697da1f5d1e72cd57da7b03e&hash=9848df2124d8299adacc27d125de7461&limit=${limit}`;

    console.log(secureURL);

    try {
        const response = await fetch(secureURL, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        const stories = await response.json();

        for (const index in stories.data.results) {
            storiesArray.push(stories.data.results[index]);
        }
        //console.log(stories)
    } catch (e) {
        console.error(e);
    }

    return storiesArray;
}
