const apiKey = "1213f19772msha8236f6e8356a42p1f62d3jsndb481029ea07";
//API KEY, pls no bully the key

let SearchWord = document.querySelector(".word"); // Word to be searched
let theWord = document.querySelector(".TheWord") // Thesaurus word
let definitions = document.querySelector(".definitions"); //Returned definitions
let thesaurus = document.querySelector(".syn-ant"); //Returned thesaurus results

const button = document.querySelector(".button"); //First button
const button2 = document.querySelector(".button2");//second button

//--------------RANDOM WORD FUNCTION-------------
const wordDay = async () => {
  let wotd = document.querySelector(".wotd"); //wordoftheday
  let wotdInfo = document.querySelector(".wotd-info"); //textinwotd

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
  }); // Code block base code from RapidAPI + WordAPI documentation params

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
    } // Code block base code from RapidAPI + WordAPI documentation
  });
  let word = response.data.word;
  
  SearchWord.innerHTML = word;
  console.log(response);

  definitions.innerHTML = ""; //This allows the search function to be used more than once
  let title = document.createElement("h2");
  title.innerHTML = "Definitions";
  title.className = "title";
  
  definitions.appendChild(title);
  
  for (i = 0; i < response.data.definitions.length; i++){
    let item = document.createElement("div");
    item.className = "defines";
    item.innerHTML = `${i+1}) ` + response.data.definitions[i].definition;
    definitions.appendChild(item);
  // shows definitions along with numbered list, for clarity
  }
  



});
//----------------------------THESAURUS--------------------------------------//
button2.addEventListener("click", async () => {
  const input = document.querySelector(".thesaurus-search").value;
  console.log(input);

  const response = await axios({
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${input}/synonyms`,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "1213f19772msha8236f6e8356a42p1f62d3jsndb481029ea07"
    } ,
    params: {
      hasDetails: "synonyms"
    }
  }); // Code block base code from RapidAPI + WordAPI documentation param
  let word = response.data.word;
  
  theWord.innerHTML = word;
  console.log(response);

  thesaurus.innerHTML = ""; //This allows the search function to be used more than once
  let title = document.createElement("h2");
  title.innerHTML = "Synonyms";
  title.className = "title";
  
  thesaurus.appendChild(title);
  
  for (i = 0; i < response.data.synonyms.length; i++){
    let item = document.createElement("div");
    item.className = "syns";
    item.innerHTML =  response.data.synonyms[i];
    thesaurus.appendChild(item);
  // shows definitions along with numbered list, for clarity
  }
  
});
