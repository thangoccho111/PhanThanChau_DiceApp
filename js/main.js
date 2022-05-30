function TaoSoNgauNhien() {
  let a = Math.floor(Math.random() * (7 - 1)) + 1;
  let b = Math.floor(Math.random() * (7 - 1)) + 1;
  document.getElementById("dice-1").src = "./img/dice" + [a] + ".png";
  document.getElementById("dice-2").src = "./img/dice" + [b] + ".png";
  console.log(a, b);
}
