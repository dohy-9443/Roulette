const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const RandomNumber = () => {
  return Math.floor(Math.random() * 360) + 13;
};

const tlqdl = (result) => {
  if (1 <= result && result <= 60) {
    alert("6이 당첨");
  } else if (61 <= result && result <= 120) {
    alert("5이 당첨");
  } else if (121 <= result && result <= 180) {
    alert("4이 당첨");
  } else if (181 <= result && result <= 240) {
    alert("3이 당첨");
  } else if (241 <= result && result <= 300) {
    alert("2이 당첨");
  } else if (301 <= result && result <= 360) {
    alert("1이 당첨");
  }
};

const ClickEvent = (e) => {
  let result = RandomNumber();
  let target = e.currentTarget;
  target.disabled = true;
  const spinning = [
    { transform: "rotate(0)" },
    { transform: `rotate(${result + 1080}deg)` },
  ];

  const setting = {
    duration: 5000,
    iterations: 1,
    easing: "cubic-bezier(.68,0,.46,.99)",
  };

  container.animate(spinning, setting);

  setTimeout(() => {
    container.style.transform = `rotate(${result}deg)`;
  }, 4500);

  setTimeout(() => {
    tlqdl(result);
    // luck();

    target.disabled = false;
  }, 5500);
};

btn.addEventListener("click", ClickEvent);
