const a = "Rock";
const b = "Paper";
const c = "Scissors";
const d = "Winner: User";
const e = "Winner: Computer";

const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissors = document.querySelector("#s");
var result = document.querySelector("#result-user-stat");
var result1 = document.querySelector("#result-comp-stat");
var result2 = document.querySelector("#result-final-stat");
var userResult = document.querySelector("#userScoreVal");
var compResult = document.querySelector("#compScoreVal");

const com = [a, b, c];
var com1;
const comResult = () => {
  com1 = com[Math.floor(Math.random() * 3)];
  result1.innerHTML = `Computer: ${com1}`;
};

const logic1 = (val1, val2) => {
  if (val1 == a && val2 == a) {
    result2.innerHTML = "Tie";
  } else if (val1 == a && val2 == b) {
    result2.innerHTML = "Winner: Computer";
  } else {
    result2.innerHTML = "Winner: User";
  }
};

const logic2 = (val1, val2) => {
  if (val1 == b && val2 == b) {
    result2.innerHTML = "Tie";
  } else if (val1 == b && val2 == c) {
    result2.innerHTML = "Winner: Computer";
  } else {
    result2.innerHTML = "Winner: User";
  }
};

const logic3 = (val1, val2) => {
  if (val1 == c && val2 == c) {
    result2.innerHTML = "Tie";
  } else if (val1 == c && val2 == a) {
    result2.innerHTML = "Winner: Computer";
  } else {
    result2.innerHTML = "Winner: User";
  }
};

rock.addEventListener("click", () => {
  result.innerHTML = `User: ${a}`;
  comResult();
  logic1(a, com1);
  count();
  userResult.innerHTML = userWinCount.length;
  compResult.innerHTML = computerWinCount.length;
});

paper.addEventListener("click", () => {
  result.innerHTML = `User: ${b}`;
  comResult();
  logic2(b, com1);
  count();
  userResult.innerHTML = userWinCount.length;
  compResult.innerHTML = computerWinCount.length;
});

scissors.addEventListener("click", () => {
  result.innerHTML = `User: ${c}`;
  comResult();
  logic3(c, com1);
  count();
  userResult.innerHTML = userWinCount.length;
  compResult.innerHTML = computerWinCount.length;
});

const userWinCount = [];
const computerWinCount = [];

const count = () => {
  if (result2.innerHTML == d) {
    userWinCount.push(result2.innerHTML);
  } else if (result2.innerHTML == e) {
    computerWinCount.push(result2.innerHTML);
  }
};
