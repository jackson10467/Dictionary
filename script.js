const apiKey = "1213f19772msha8236f6e8356a42p1f62d3jsndb481029ea07";
//API KEY, pls no bully the key, i only have 2500 requests a day

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
  // this searches for a random word that has a definition
  // Many words in the words API actually don't have a definition or are random words

  let word = wotdData.data.word;
  wotd.innerHTML = word + ":"; //Shows the word 

  let wordData = wotdData.data.results[0].definition;

  wotdInfo.innerHTML = wordData;//Shows the definition of the word 
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


  definitions.innerHTML = ""; //This allows the search function to be used more than once
  
  let title = document.createElement("h2");//---
  title.innerHTML = "Definitions";
  title.className = "title"; //----- this block adds the title "Definitions to the 
  
  
  definitions.appendChild(title);
  
  for (i = 0; i < response.data.definitions.length; i++){
    let item = document.createElement("div");
    item.className = "defines";
    item.innerHTML = `${i+1}) ` + response.data.definitions[i].definition;
    definitions.appendChild(item);
    // creates a div, gives it a class,
    // shows definitions along with numbered list, for clarity
    // Appends that div to the page
  }
  



});
//----------------------------THESAURUS--------------------------------------//
button2.addEventListener("click", async () => {
  const input = document.querySelector(".thesaurus-search").value;
  //gets input from the input box with thesaurus  

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
  // returns the word
  theWord.innerHTML = word;
  //shows the word

  thesaurus.innerHTML = ""; //This allows the search function to be used more than once
  let title = document.createElement("h2");
  title.innerHTML = "Synonyms";
  title.className = "title";
  // Shows "Synonyms" on the page

  thesaurus.appendChild(title);
  
  for (i = 0; i < response.data.synonyms.length; i++){
    let item = document.createElement("div");
    item.className = "syns";
    item.innerHTML =  response.data.synonyms[i];
    thesaurus.appendChild(item);
  // shows definitions along with numbered list, for clarity
    // Creates divs similar to previous function
  }
  
});
