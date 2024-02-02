import { fetchStoriesFromCharacter } from "../services/fetchStoriesFromCharacters";

export async function populateStoriesBox(storiesCollectionURI: string): Promise<void> {
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
