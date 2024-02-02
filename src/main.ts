import { fetchCharacters } from "./services/fetchCharacters.ts";
import { populateCharacterBox } from "./vue/populateCharactersBox.ts";

console.log("Entered file");

(async ()=> {
const LIMIT: number = 20;

console.log("Made it to fetchCharacters");
const resultsCharacter = await fetchCharacters(LIMIT, 0);
populateCharacterBox(resultsCharacter);

let isLoading: boolean = false;
let offset: number = 0;

let options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 1.0,
};

let observer = new IntersectionObserver(async () => {
    console.log("isNear");
    console.log("isLoading : " + isLoading);
    if (!isLoading) {
        console.log("Viewport near the spinner");
        offset += LIMIT;
        console.log(offset);
        isLoading = true;

        const resultsCharacter = await fetchCharacters(LIMIT, offset);

        if (resultsCharacter.length === 0) {
            const spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.style.display = 'none';
            }
        } else {
            populateCharacterBox(resultsCharacter);
        }

        isLoading = false;
    }

}, options);

const spinnerElement = document.querySelector("#spinner");
if (spinnerElement) {
    observer.observe(spinnerElement);
}
}
)();