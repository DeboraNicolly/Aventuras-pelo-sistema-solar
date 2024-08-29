//Arquivo exclusivo para a criação de todos os botões do projeto

//Tela dos planetas (11-18 e do sol[19]).
telaAstros = [11, 12, 13, 14, 15, 16, 17, 18, 19]

function mousePressed() {
  if(tela == 1){ //Botões do menu.
    
//botão "iniciar aventura", o qual vai para a tela 2.
    if(225 <= mouseX && mouseX <= 475 && 275 <= mouseY && mouseY <= 345){
      tela = 2;
    }
      
    
//botão "Manual do Explorador", o qual vai para a tela 3
    else if(225 <= mouseX && mouseX <= 475 && 375 <= mouseY && mouseY <= 445) {
        tela = 3;
    }
      
//botão "Créditos", o qual vai para a tela 4
  else if(225 <= mouseX && mouseX <= 475 && 475 <= mouseY && mouseY <= 545) {
        tela = 4;
  }
}
  
  
  
  
  
  else if (tela == 2) { //Botões do sistema solar.
    //Mecanismo que vai abrir a página de cada planeta.
      for (let i = 0; i < planetas.length; i++) {
      
      //Especificando a posição que estará cada planeta.
      let planeta = planetas[i];
      let x = InicioX + cos(planeta.angulo) * planeta.raio;
      let y = InicioY + sin(planeta.angulo) * planeta.raio;
        
      //Definindo a distância entre o ponto clicado pelo usuário e o ponto onde está o sol.
      let distsol = dist(mouseX, mouseY, 350, 350);
        
      //Definindo a distância entre o ponto clicado pelo usuário e o ponto onde está o planeta específico.
      let distancia = dist(mouseX, mouseY, x, y);
        
      //Verifica se o usuário clicou dentro do raio do planeta.
      if (distancia < planeta.tamanho / 2) {
        if (planeta.nome == "Mercúrio"){
          tela = 11;
          
        } else if (planeta.nome == "Vênus") {
          tela = 12;
          
        } else if (planeta.nome == "Terra") {
          tela = 13;
          
        } else if (planeta.nome == "Marte") {
          tela = 14;
          
        } else if (planeta.nome == "Júpiter") {
          tela = 15;
          
        } else if (planeta.nome == "Saturno") {
          tela = 16;
          
        }else if (planeta.nome == "Urano") {
          tela = 17;
          
        }else if (planeta.nome == "Netuno") {
          tela = 18;
        }
      }
      
          //Mecanismo que vai abrir a página  do sol, ao clicar nele (verifica se o usuário clicou dentro do raio do sol).
        if (distsol < 35){
          tela = 19;
      }
        
        if(50 <= mouseX && mouseX <= 100 && 500 <= mouseY && mouseY <= 560){
        //Verifica se o icon home foi clicado, para voltar ao Menu.
        //(tela 2 -> Menu)
        tela = 1;
      }
        
        if(560 <= mouseX && mouseX <= 640 && 20 <= mouseY && mouseY <= 50)
          //Verifica se o botão "Saiba Mais!" foi apertado.
          //(tela 2 -> Saiba mais!)
          tela = 20;
    }
  }
  
  
  else if (tela == 3){//Botões da tela "Manual Do explorador".
    //Botão de home para voltar à tela "Menu principal".
    //("Manual do explorador" -> "Menu principal").
    if(50 <= mouseX && mouseX <= 100 && 500 <= mouseY && mouseY <= 560){
        tela = 1;
    }
    
  } 
  
  else if (tela == 4){//Botões da tela "Créditos".
    //Botão de home para voltar à tela "Menu principal".
    //("Créditos" -> "Menu principal").
      if(50 <= mouseX && mouseX <= 100 && 500 <= mouseY && mouseY <= 560){
        tela = 1;
    }
  }
  
  else if (telaAstros.includes(tela)){
//Botão que serve para ir da página do planeta, ou do sol, para o Sistema solar.
//(tela do Astro -> Sistema Solar).
    if(50 <= mouseX && mouseX <= 100 && 500 <= mouseY && mouseY <= 560){
        tela = 2;
      }
  }
  
  else if (tela == 20){ //Botões da primeira página da seção "Saiba mais"
        if(50 <= mouseX && mouseX <= 100 && 500 <= mouseY && mouseY <= 560){ 
        //Verifica se a seta que aponta para a esquerda foi clicada, retornando ao sistema solar
        tela = 2;
      }
        if(560 <= mouseX && mouseX <= 610 && 500 <= mouseY && mouseY <= 560){ 
          //Verifica se a seta que aponta para a direita foi clicada, indo para a 2° tela da seção "Saiba mais"
        tela = 21;
      }
    
  }  
  
  else if (tela == 21){//Botões da segunda página da seção "Saiba mais"
        if(50 <= mouseX && mouseX <= 100 && 500 <= mouseY && mouseY <= 560){//Verifica se a seta que aponta para a esquerda foi clicada, retornando à primeira tela da seção "Saiba mais"
        tela = 20;
      }
  }
  
  
}