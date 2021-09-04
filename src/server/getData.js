
const url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b84f0bb757b28ebfc93d153cb980b89d&hash=a2c004ddfea0c4a6ca6a76d3bf467fde";
export async function getCharData() {
    let link = url;    

    let result = await fetch(link);
    let jsonResult = await result.json();
    return jsonResult;
}

export async function getSearchData(text) {
  let link = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${text}&ts=1&apikey=b84f0bb757b28ebfc93d153cb980b89d&hash=a2c004ddfea0c4a6ca6a76d3bf467fde`;

  let result = await fetch(link);
  let jsonResult = await result.json();
  console.log('hello')
  return jsonResult;
}








//"http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b84f0bb757b28ebfc93d153cb980b89d&hash=a2c004ddfea0c4a6ca6a76d3bf467fde"













/*
const url = 'https://randomuser.me/api/?results=50'

export const getUserData = () => {
    return fetch(url)
    .then(response => {
        return response.json()
    })
    .then(listUsers => {
        return listUsers.results.map(user => {
        return {
            name: user.name.first,
            email: user.email,
            dob: user.dob.date,
            picture1: user.picture.thumbnail,
            picture2: user.picture.large,
            id: user.id.value
        }
    })})
}

*/