export async function fetchCharacterFromIdAndReplaceHeaderImage(characterId: string): Promise<any> {
    const secureURL = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=8b473e56697da1f5d1e72cd57da7b03e&hash=9848df2124d8299adacc27d125de7461`;

    try {
        const response = await fetch(secureURL, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        const character = await response.json();
        console.log(character);

        const headerImage = document.getElementById("characterImageStories") as HTMLImageElement;
        const headerName = document.getElementById("characterNameStories") as HTMLElement;

        headerImage.src = character.data.results[0].thumbnail.path + "." + character.data.results[0].thumbnail.extension;
        headerName.textContent = character.data.results[0].name;

        return character;
    } catch (e) {
        console.error(e);
    }
}