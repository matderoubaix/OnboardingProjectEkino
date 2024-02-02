export async function fetchCharacters(limit : Number, offset : Number){

    const charactersArray : any[] = [];

    const reponse = await fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8b473e56697da1f5d1e72cd57da7b03e&hash=9848df2124d8299adacc27d125de7461' + '&limit=' + limit + '&offset=' + offset,
    {
        method: 'GET',
        headers : {
            "Accept": "application/json",
            "Content-Type" : "application/json"
        }
    })
    .then(r => {
        if (r.ok){
            return r.json()
        }
        else{
            console.error('Une erreur est survenue')
        }
    })
    .then(
        characters => {
            for (const index in characters.data.results){
                charactersArray.push(characters.data.results[index]);
            }
            console.log(charactersArray)
        }
    )
    .catch(e => {
        console.error('Une erreur est survenue', e)
    })

    return charactersArray
}

