let heroi = "Homem de ferro";
let xpVida = 89500;

if (xpVida < 1000) {
  xpVida = "ferro";
} else if (xpVida >= 1001 && xpVida <= 2000) {
  xpVida = "Bronze";
} else if (xpVida >= 2001 && xpVida <= 5000) {
  xpVida = "Prata";
} else if (xpVida >= 5001 && xpVida <= 7000) {
  xpVida = "Ouro";
} else if (xpVida >= 7001 && xpVida <= 8000) {
  xpVida = "Platina";
} else if (xpVida >= 8001 && xpVida <= 9000) {
  xpVida = "Ascendente";
} else if (xpVida >= 9001 && xpVida <= 10000) {
  xpVida = "Imortal";
} else if (xpVida >= 10001) {
  xpVida = "Radiante";
}

console.log(`O herói de nome ${heroi} está no nível de ${xpVida}`);