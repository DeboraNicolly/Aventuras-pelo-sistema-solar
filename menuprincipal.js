function telaMenu(){
  background(fundoCeu); //Cor de fundo do menu
  textFont('Honk'); //Fonte do título do menu
  textSize(80);  //Tamanho da letra do título do menu
  text("Aventuras pelo" +"\n"+ " sistema solar", 70, 140); //Texto do título do menu
  
  //Cria o botão (retângulo e estilo) e o texto dentro do botão "Iniciar Aventura"
  criarBotao(225, 275);
  criarTexto("Iniciar Aventura", 234, 320);
  
  //Criar o botão (retângulo e estilo) e o texto dentro do botão "Manual do explorador"
  criarBotao(225, 375);
  criarTexto("          Manual" + "\n" + "do Explorador", 245, 401);
  
    //Criar o botão (retângulo e estilo) e o texto dentro do botão "Créditos"
  criarBotao(225, 475);
  criarTexto("Créditos", 290, 520);
  
function criarBotao(x, y){
  stroke(0)
  fill("#FFA500")
  rect(x, y, 250,70, 10);
  //Função criada para auxiliar na criação dos botões
}


function criarTexto(a, x, y){
    noStroke()
    textFont('Matemasie')
    textSize(27)
    fill("#4B0082")
    text(a, x, y)
  //Função criada para auxiliar na criação dos textos
  }
    
}