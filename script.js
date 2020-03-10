const apiKey = "1213f19772msha8236f6e8356a42p1f62d3jsndb481029ea07";

let div = document.querySelector(".word");
const button = document.querySelector(".button");


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

const wordDay = async () => {
  let wotd = document.querySelector(".wotd");
  let wotdInfo = document.querySelector(".wotd-info")
  
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
  let word = (wotdData.data.word);
  wotd.innerHTML = word + ":";
  
  let wordData = (wotdData.data.results[0].definition);
  console.log(wotdData);
  
  wotdInfo.innerHTML = wordData;
};

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

  console.log(response);
});
