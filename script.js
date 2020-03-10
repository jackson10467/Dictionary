const apiKey = "1213f19772msha8236f6e8356a42p1f62d3jsndb481029ea07";

let SearchWord = document.querySelector(".word");
let definitions = document.querySelector(".definitions");
const button = document.querySelector(".button");

//------TEST CODE DELETE LATER----------
// button.addEventListener("click", async () => {
//   const response = await axios({
//     "method": "GET",
//     "url": "https://wordsapiv1.p.rapidapi.com/words/",
//     "headers": {
//       "content-type": "application/octet-stream",
//       "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
//       "x-rapidapi-key": "1213f19772msha8236f6e8356a42p1f62d3jsndb481029ea07"
//     },
//     "params": {
//       "random": "true",
//       "lettersMax": "4"
//     }
//   })
//     // how would i translate this back to the simple "axios.get(URL, {header}"?
//     console.log(response);
// })//RapidAPI gave me this code block ) =

//--------------RANDOM WORD FUNCTION-------------
const wordDay = async () => {
  let wotd = document.querySelector(".wotd");
  let wotdInfo = document.querySelector(".wotd-info");

  let wotdData = await axios({
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "1213f19772msha8236f6e8356a42p1f62d3jsndb481029ea07"
    },
    params: {
      random: "true",
      hasDetails: "definitions"
    }
  });

  let word = wotdData.data.word;
  wotd.innerHTML = word + ":";

  let wordData = wotdData.data.results[0].definition;
  console.log(wotdData);

  wotdInfo.innerHTML = wordData;
};
//------------UNCOMMENT OUT WHEN READY, SAVES API CALLS----------------------

//-------------------SEARCH FUNCTION---------------------
button.addEventListener("click", async () => {
  const input = document.querySelector("input").value;
  console.log(input);

  const response = await axios({
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${input}/definitions`,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "1213f19772msha8236f6e8356a42p1f62d3jsndb481029ea07"
    }
  });
  let word = response.data.word;
  
  SearchWord.innerHTML = word;
  console.log(response);

  definitions.innerHTML = ""; //This allows the search function to be used more than once
  let title = document.createElement("h2");
  title.innerHTML = "Definitions";
  title.className = "title";
  
  definitions.appendChild(title);
  
  for (i = 0; i <= response.data.definitions.length; i++){
    let item = document.createElement("div");
    item.className = "defines";
    item.innerHTML = `${i+1}) ` + response.data.definitions[i].definition;
    definitions.appendChild(item);
  // shows definitions along with numbered list, for clarity
  }
  



});
//------------------------------------------------------------------//


/// Code to get list
// - list ConvolverNod
// hound
// 