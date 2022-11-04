import axios from "axios";

type chuckJoke = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}; // from https://api.chucknorris.io/

function generateJoke() {
  axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
    const jokeData: chuckJoke = res.data;
    document.getElementById('joke')!.innerHTML = res.data.value;
  });
}

export default generateJoke;
