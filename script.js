const img = document.getElementById("imageOfBear");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const data = document.getElementById("content");
const taddyBearContent = document.getElementById("taddyBearContent");
const canvas = document.querySelector("#celibrate")

const jsConfetti = new JSConfetti()


yesBtn.addEventListener("click", () => {
  data.style.display = "none";
  console.log((img.src = "./love.gif"));
  taddyBearContent.style.display = "inherit";

  jsConfetti.addConfetti({
    emojis:["😍0","💛","😍","🎉","💛","😍0","💛","😍","🎉","💛"]
  })
  jsConfetti.addConfetti()
  


});

const arrData = [
  "Are you sure?",
  "Really sure!",
  "Think again?",
  "Last chance!",
  "Surely not?",
  "Give it another thought!",
  "This could be a mistake?",
  "Dont be so cold!",
  "Chance of heart?",
  "Is that your final answer!",
  "yes?",
];
let currentIndex = 0;
let = noBtnFontSize = 26;
let = yesBtnFontSize = 35;
i = 0;
noBtn.addEventListener("click", () => {
  if (i < arrData.length) {
    noBtn.innerHTML = `${arrData[i]}`;
  } else {
    return;
  }
  i++;
  noBtn.style.fontSize = noBtnFontSize + "px";
  yesBtn.style.fontSize = yesBtnFontSize + "px";
  if (noBtnFontSize < 6) {
    console.log(noBtnFontSize);
  } else {
    noBtnFontSize -= 2;
  }
  yesBtnFontSize += 10;
});
