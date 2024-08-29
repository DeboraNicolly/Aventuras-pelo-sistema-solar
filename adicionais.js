//Arquivo com as telas "manual do explorador", "créditos" e "Saiba Mais!".

//Além disso, deixei a função de carregar todas as imagens nesse arquivo para facilitar a adição ou retirada de alguma imagem.

var foto; //Foto minha para os créditos.
var home; //Icon de home.
var fundoCeu; //Background de Céu de todas as telas.
var seta; //Icon de seta apontando para a esquerda.
var mercurioPlaneta; //Desenho de Mercúrio.
var venusPlaneta; //Desenho de Vênus.
var terraPlaneta; //Desenho da Terra.
var martePlaneta;  //Desenho de Marte.
var solEstrela;  //Desenho do Sol.
var jupiterPlaneta; //Desenho de Júpiter.
var saturnoPlaneta; //Desenho de Saturno.
var uranoPlaneta; //Desenho de Mercúrio.
var netunoPlaneta; //Desenho de Netuno.
var plutaoPlaneta; //Desenho de Plutão.
var setaEspelhada;  //Icon de seta apontando para a direita.
var meteoro; //Desenho do Meteoro.
var cometa; //Desenho do Cometa.
var asteroide; //Desenho do Asteroide.


function preload(){
  foto = loadImage("imagens/eu.jpeg");
  home = loadImage("imagens/home.png");
  fundoCeu = loadImage("imagens/ceu.jpg");
  seta = loadImage("imagens/seta.png")
  mercurioPlaneta = loadImage("imagens/mercurio.png")
  venusPlaneta = loadImage("imagens/venus.png")
  terraPlaneta = loadImage("imagens/terra.png")
  martePlaneta = loadImage("imagens/marte.png")
  solEstrela = loadImage("imagens/sol.png")
  jupiterPlaneta = loadImage("imagens/jupiter.png")
  saturnoPlaneta = loadImage("imagens/saturno.png")
  uranoPlaneta = loadImage("imagens/urano.png")
  netunoPlaneta = loadImage("imagens/netuno.png")
  plutaoPlaneta = loadImage("imagens/plutao.png")
  setaEspelhada = loadImage("imagens/setaespelhada.png")
  meteoroPedra = loadImage("imagens/meteoro.png")
  cometaPedra = loadImage("imagens/cometa.png")
  asteroidePedra = loadImage("imagens/asteroide.png")
  
    //Função que carrega as imagens.
}

//Função que desenha a tela do "Manual do Explorador"(tela 3).
function telaExplorador(){
  background(fundoCeu); //Fundo da tela 3.
  
  //Retângulo que ficará o texto do manual.
  fill("#a1c6ea");
  rect(30, 15, 600, 480);
  
  //Estilo e texto do título.
  fill("#2E558D");
  stroke(0);
  textFont("Matemasie");
  textSize(40);
  text("Inicio da jornada.", 120, 70); //Título
  
  //Estilo e texto do corpo do manual.
  fill("#023047")
  textFont("Anek Devanagari");
  textSize(19);
  
  //Início do corpo
  text("    Primeiro, você deve estar pensando: o que é esse tal de sistema solar"+"\n"+"no qual eu vou me aventurar?", 50, 100);
  
  //
  text("    O sistema solar é um vasto e fascinante conjunto de corpos celestes "+"\n"+"que orbitam ao redor de uma estrela central, a qual chamamos de Sol."+"\n"+"Essa estrela é o coração do nosso sistema, atraindo todos os outros"+"\n"+"corpos com a sua gravidade, incluindo planetas (como a Terra!), satélites"+"\n"+"naturais, asteroides, meteoros e cometas. Mas o sistema solar é apenas"+"\n"+"uma pequena parte de algo muito maior. Ele está localizado na Via"+"\n"+"Láctea, nossa galáxia, que, por sua vez, é apenas uma entre bilhões no"+"\n"+"universo – um universo imenso e cheio de mistérios.", 50, 154);
  text("    Nesta jornada, você vai explorar o Sol e os planetas que o cercam,"+"\n"+"descobrindo as maravilhas que existem em nossa vizinhança.", 50, 350);
  text("Vamos nessa?", 50, 402);
  //Fim do corpo
  
  image(home, 50, 500); //Icon de home para voltar ao Menu Principal.
}


//Função que desenha a tela do "Créditos" (tela 4).
function telaCreditos(){
  
  background(fundoCeu); //Fundo da tela 4.
  
  //Cria o título da tela "Créditos".
  fill("#f5bd1f");
  textFont('Matemasie');
  textSize(80); 
  text("Créditos", 140, 100);
  
  //Cria o  estilo e texto corpo do texto da tela "Créditos".
  fill("#ffe863");
  textFont("Anek Devanagari");
  stroke(0);
  textSize(48); //Tamanho do meu nome.
  textStyle(BOLDITALIC);
  text("DÉBORA NICOLLY", 280, 200);
  textStyle(NORMAL);
  textSize(25); //Tamanho do resto do texto.
  text("Estudante de Engenharia de "+"\n"+"Computação pela Universidade "+"\n"+"federal do Rio Grande do norte"+"\n"+"- UFRN. Aluna da turma 4D de "+"\n"+"Lógica de programação"+"\n"+"do semestre 2024.1."+"\n"+"Docente: Idalmis Milian.", 295, 250);
  image(home, 50, 500); //Icon para voltar para o Menu Principal.
  image(foto, 50, 160); //Foto minha.
}

function telaSaibaMais1(){
  background(fundoCeu); //Fundo da tela 20.
  
  //Retângulo que ficará o corpo do texto.
  fill("#ddfdfe");
  rect(30, 15, 600, 480);
  
  //Definindo o estilo do texto "Plutão".
  fill("#36213e");
  textSize(60);
  textFont("Jersey 10");
  stroke("#ddfdfe");
  text("Plutão", 420, 285);
  
  
  //Estilo e texto do título.
  stroke(0);
  fill("#36213e");
  textFont("Matemasie");
  textSize(40);
  text("Saiba Mais!", 200, 60);
  
  //Estilo e texto do corpo do Saiba mais.
  fill("#023047")
  textFont("Anek Devanagari");
  textSize(18);
  
  //Início do texto
  text("    No sistema solar além do sol"+"\n"+"e dos planetas temos outros"+"\n"+"corpos celestes como os planetas"+"\n"+"anões, os meteoros, cometas e"+"\n"+"asteroides.", 50, 100);
  text('    Planetas anões são corpos celestes que'+'\n'+'orbitam o Sol e têm forma esférica, mas são'+'\n'+'menores que os planetas principais e não'+'\n'+'conseguem "limpar" sua órbita de outros'+'\n'+'objetos. Eles são uma categoria distinta no sistema solar, com exemplos'+'\n'+'como Plutão. ', 50, 230);
  text('    Plutão é um planeta anão no Cinturão de Kuiper, distante do Sol. Antes'+'\n'+'considerado o nono planeta do sistema solar, foi reclassificado em 2006,'+'\n'+'porque, apesar de ser esférico e orbitar o Sol, ele não "limpa" sua órbita de'+'\n'+'outros objetos, o que é um dos critérios para ser considerado um planeta,'+'\n'+'segundo a definição da União Astronômica Internacional (IAU). Por isso, ele'+'\n'+'passou a ser classificado como um planeta anão.', 50, 370);
  //Final do Texto

  image(plutaoPlaneta, 400, 80); //Desenho de Plutão.
  image(seta, 50, 500);//Icon para voltar ao Sistema solar.
  image(setaEspelhada, 560, 500); //Icon para ir à 2° tela do "Saiba mais".
  
}

function telaSaibaMais2(){
  background(fundoCeu); //Fundo da tela 21.
  
  //Retângulo que ficará o corpo do texto.
  fill("#ddfdfe");
  rect(30, 15, 600, 480);
  
  //
  fill("#36213e");
  textSize(35);
  textFont("Jersey 10");
  stroke("#ddfdfe");
  text("Asteroides", 150, 40);
  text("Cometas", 150, 180);
  text("Meteoros", 150, 335);
  
  
  //Estilo e texto do corpo do manual. (A cor se mantém a do título).
  stroke(0)
  fill("#023047");
  textFont("Anek Devanagari");
  textSize(18);
  text("    São grandes pedras espaciais, rochosas e compostas por"+"\n"+"metais e minerais. Não têm um formato definido e podem"+"\n"+"ter centenas de quilómetros de largura, mas na maioria dos"+"\n"+"casos são pequenos, com poucos metros de largura.", 40, 65);
  
  text("    São grandes bolas de gelo, formadas pela junção de vários gases."+"\n"+"São compostos de gelo e poeira e produzem uma cauda de gases"+"\n"+"à medida que se aproximam do Sol. O gelo e a poeira vaporizados"+"\n"+"tornam-se a cauda do cometa, que pode ser vista mesmo"+"\n"+"quando os cometas estão muito distantes da Terra.", 40, 205);
  
  text("    São pequenas rochas que entram na atmosfera da Terra."+"\n"+"Quando uma pequena rocha se aproxima da Terra, é chamada"+"\n"+" de meteoroide. Quando entra na atmosfera, é meteoro. Se"+"\n"+"sobreviver à veloz entrada na atmosfera e cair no solo, é"+"\n"+"meteorito. Quanto maior o objeto, mais luminoso será o"+"\n"+"meteoro.", 40, 360);
  //

  image(seta, 50, 500);//Icon para voltar para o Menu Principal.
  image(asteroidePedra, 500, 50); //Imagem do Asteroide
  image(cometaPedra, 500, 150); //Imagem do Cometa
  image(meteoroPedra, 500, 375); //Imagem do Meteoro
  
}