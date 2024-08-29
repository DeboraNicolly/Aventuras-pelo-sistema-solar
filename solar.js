const planetas = [
  { nome: "Mercúrio", cor: "#808080", tamanho: 15, raio: 50, velocidade: 0.04, angulo: 0 },
  { nome: "Vênus", cor: "#FFFFCC", tamanho: 22, raio: 78, velocidade: 0.02, angulo: 0.5 },
  { nome: "Terra", cor: "#0080FF", tamanho: 22, raio: 110, velocidade: 0.01, angulo: 1 },
  { nome: "Marte", cor: "#FF6347", tamanho: 19, raio: 140, velocidade: 0.005, angulo: 1.5 },
  { nome: "Júpiter", cor: "#F0E68C", tamanho: 37, raio: 175, velocidade: 0.005, angulo: 2 },
  { nome: "Saturno", cor: "#D2B48C", tamanho: 30, raio: 217, velocidade: 0.006, angulo: 2.5 },
  { nome: "Urano", cor: "#ADD8E6", tamanho: 24, raio: 255, velocidade: 0.004, angulo: 3 },
  { nome: "Netuno", cor: "#000080", tamanho: 24, raio: 290, velocidade: 0.002, angulo: 3.5 }
];

/*  
Nome: Nome do planeta.
Cor: Cor do planeta. 
Tamanho: Diametro do planeta.
raio: Distância do sol até o planeta.
velocidade: Velocidade de cada planeta ao redor do sol.
angulo: Angulo de cada planeta para calcular a posição posteriormente.
  */

const InicioX = 350; // Posição X do sol.
const InicioY = 350;   // Posição Y do sol.

function telaSistemaSolar() {
  background(fundoCeu); // Fundo do Sistema Solar.
  stroke(0); // Contorna os planetas e o sol.

  // Criando o sol.
  fill("#FFFF00");
  circle(InicioX, InicioY, 70);

  // Criando os planetas em órbita.
  for (let i = 0; i < planetas.length; i++) {
    let planeta = planetas[i];
    
    //calcula a posição dos planetas em órbita
    let x = InicioX + cos(planeta.angulo) * planeta.raio;
    let y = InicioY + sin(planeta.angulo) * planeta.raio;

    //desenha os planetas em órbita
    fill(planeta.cor);
    circle(x, y, planeta.tamanho);

    //Faz os planetas se moverem em orbita, no sentido anti-horário.
    planeta.angulo -= planeta.velocidade;
  }
  
    //Adiciona o icon de home
    image(home, 40, 500);
  
    //Cria o botão "Saiba mais!"
    stroke("#ddfdfe");
    fill("#36213e");
    rect(560, 20, 80, 30, 10);
  
    //Cria o texto "Saiba mais!"
    stroke(0);
    textFont('Anek Devanagari');
    textStyle(BOLD);
    textSize(14);
    fill("#b8f3ff");
    text("Saiba mais!", 565, 40);
    textStyle(NORMAL);
}