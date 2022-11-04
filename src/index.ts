import generateJoke from "./generateJoke";
import "./styles/main.scss";
import chuckImg from "./assets/chuck.png";

const laughImg: HTMLImageElement = document.getElementById(
  "laughImg"
) as HTMLImageElement;
laughImg.src = chuckImg;

generateJoke();

const anotherJokeBtn = document.getElementById("jokeBtn") as HTMLButtonElement;

anotherJokeBtn.addEventListener("click", generateJoke);
