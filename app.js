import ScoreboardView from "./scoreboard/ScoreboardView.js";

let teamOneScore = 0;
let teamTwoScore = 0;

const root = document.querySelector("#app");
const view = new ScoreboardView(root, "Team One", "Team Two");