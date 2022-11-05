import generateJoke from "./generateJoke";
import "./styles/main.scss";
import chuckImg from "./assets/chuck.png";
import gitHubIcon from "./assets/github.svg";

const laughImg: HTMLImageElement = document.getElementById(
  "laughImg"
) as HTMLImageElement;
laughImg.src = chuckImg;

const gitHubImg: HTMLImageElement = document.querySelector('.github-link__img') as HTMLImageElement;
gitHubImg.src = gitHubIcon;

generateJoke();

const anotherJokeBtn = document.getElementById("jokeBtn") as HTMLButtonElement;

anotherJokeBtn.addEventListener("click", generateJoke);
