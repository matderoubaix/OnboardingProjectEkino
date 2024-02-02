import { fetchCharacterFromIdAndReplaceHeaderImage } from "./services/fetchCharacterFromIdAndReplaceHeaderImage";
import { populateStoriesBox } from "./vue/populateStoriesBox";

// Get the URL parameter "id"
const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('id');

if (characterId) {
    // Load the stories of the corresponding character
    fetchCharacterFromIdAndReplaceHeaderImage(characterId);
    populateStoriesBox(characterId);
} else {
    console.error("Character ID not found in the URL.");
}

/*

async function fetchStoriesFromCharacter(characterCollectionURI: string): Promise<any[]> {
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
*/

/*
async function populateStoriesBox(storiesCollectionURI: string): Promise<void> {
    const storiesArrayToDisplay = await fetchStoriesFromCharacter(storiesCollectionURI);
    const storiesBoxToPopulate = document.getElementById("storiesBox") as HTMLElement;
    const storiesTemplate = document.querySelector("#storiesTemplate") as HTMLTemplateElement;

    const storiesDOM = storiesArrayToDisplay.map((story, index) => {
        //console.log(story, index)
        console.log("Filling new story");
        const storyClone = storiesTemplate.content.cloneNode(true) as DocumentFragment;

        const storyCloneName = storyClone.querySelector(".storyTitle") as HTMLElement;
        const storyCloneTextContent = storyClone.querySelector(".storyTextContent") as HTMLElement;

        storyCloneName.textContent = story.title;
        storyCloneTextContent.textContent = story.description;

        return storyClone;
    });

    // console.log(storiesDOM)

    storiesBoxToPopulate.append(...storiesDOM);
}

*/

