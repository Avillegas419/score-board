export default class ScoreboardView {
  constructor(root, TeamOneName, TeamtwoName, onControlButtonClick) {
    this.root = root;
    this.root.innerHTML `
    <div class="scoreboard">
    <div class="scoreboard__name scoreboard__name--one">${TeamOneName}</div>
    <div class="scoreboard__name scoreboard__name--two">${TeamOneName}</div>
    <div class="scoreboard__score" data-for-Team="one">0</div>
    <div class="scoreboard__score" data-for-Team="two">0</div>
    <div class="scoreboard__controls" data-for-Team="one">
      <button class="scoreboard__control-button">-</button>
      <button class="scoreboard__control-button">+</button>
    </div>
    <div class="scoreboard__controls" data-for-Team="two">
      <button class="scoreboard__control-button">-</button>
      <button class="scoreboard__control-button">+</button>
    </div>
  </div>
    `;

  this.root.querySelectorAll("scoreboard__control-button").forEach(controlButton => {
    controlButton.addEventListener("click", () => {
      const direction = controlButton.textContent === "-" ? "minus" : "plus";
      const player = controlButton.closest(".scoreboard__controls").dataset.forPlayer;
     });
   });
  }
}