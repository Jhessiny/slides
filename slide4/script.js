const manualBtns = document.querySelectorAll(".manual-btn");
const btnInputs = document.querySelectorAll("[name=radio-btn]");
const slide = document.querySelector(".slide");
let timer;

const max = 4;

function changeBtn(input) {
  if (document.querySelector(".checked"))
    document.querySelector(".checked").classList.remove("checked");
  if (input.checked) {
    const checkedBtn = [...manualBtns].filter((btn) => {
      return btn.htmlFor === input.id;
    });
    checkedBtn[0].classList.add("checked");
  }
}

function changeSlide() {
  const checked = [...btnInputs]
    .map((btn, index) => {
      return { btn: btn, index: index };
    })
    .filter((btn) => btn.btn.checked);

  if (checked[0].index >= max - 1) {
    const next = btnInputs[0];
    next.checked = "true";
    changeBtn(next);
    return;
  }

  checked[0].btn.checked = "false";
  const next = btnInputs[checked[0].index + 1];
  next.checked = "true";
  changeBtn(next);
}

function start() {
  timer = setInterval(() => {
    changeSlide();
  }, 2000);
}

btnInputs.forEach((input) => {
  input.addEventListener("change", () => {
    changeBtn(input);
  });
  input.addEventListener("click", () => {
    clearInterval(timer);
    start();
  });
});

start();
