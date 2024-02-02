import { populateStoriesBox } from "./populateStoriesBox";

export function populateCharacterBox(resultsArray: any){
    
    const characterBoxElement = document.getElementById("charactersBox");
    const characterTemplate = document.querySelector("#characterTemplate")

    if (!characterTemplate) {
        console.error("Character template not found");
        return;
    }

    if (!(characterTemplate instanceof HTMLTemplateElement)) {
        console.error("Invalid character template");
        return;
    }

    let character = null;

    const charactersDOM = resultsArray.map((character: any, index : Number) => {
        console.log(character, index)
        console.log("Filling new character")
        const characterClone = (characterTemplate.content.cloneNode(true) as DocumentFragment);

        const characterCloneContainer = characterClone.querySelector(".exampleCharacter") as HTMLDivElement
        const characterCloneName = characterClone.querySelector(".characterName")
        const characterCloneButton = characterClone.querySelector(".buttonStories") as HTMLDivElement
        const characterCloneStoryLink = characterClone.querySelector(".storyLink")

        if (characterCloneName) {
            characterCloneName.textContent = character.name;
        }

        const {path, extension} = character.thumbnail;

        if (path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && path != "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"){
            if (characterCloneContainer){
                characterCloneContainer.style.backgroundImage = `url(${path}.${extension})`
            }
        }
        else{
            if (characterCloneContainer){
                characterCloneContainer.style.backgroundImage = `url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png)`
            }
        }

        

        const buttonID = character.stories.collectionURI
        characterCloneButton.setAttribute("expanded", "false")
        characterCloneButton.setAttribute("loadedChildren", "false")
        characterCloneButton.addEventListener("click", ()=> {populateStoriesBox(buttonID)})

        if(characterCloneStoryLink){
            characterCloneStoryLink.setAttribute("href", `/stories.html?id=${character.id}`)
        }



        return characterClone;
    })

    console.log(charactersDOM)
    if (characterBoxElement){
        characterBoxElement.append(...charactersDOM)
    }

 
    
}    
