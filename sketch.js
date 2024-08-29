var tela = 1;
function setup() {
  createCanvas(700, 700);
}

function draw() {
  if(tela==1){
    //Se a tela for igual a 1, irá desenhar o Menu Principal.
    telaMenu()
    
  } else if (tela==2){
    //Se a tela for igual a 2, irá desenhar o Sistema Solar.
   telaSistemaSolar()
    
  } else if (tela==3){
    //Se a tela for igual a 3, irá desenhar o Manual do Explorador.
    telaExplorador()
    
  } else if (tela==4){
    //Se a tela for igual a 4, irá desenhar os créditos.
    telaCreditos()
    
  } else if (tela==11){
    //Se a tela for igual a 11, irá desenhar a tela de Mercúrio.
    mercurio()
    
  } else if (tela==12){
    //Se a tela for igual a 12, irá desenhar a tela de Vênus.
    venus()
    
  } else if (tela==13){
    //Se a tela for igual a 13, irá desenhar a tela da Terra.
    terra()
    
  }else if (tela==14){
    //Se a tela for igual a 14, irá desenhar a tela de Marte.
    marte()
    
  }else if (tela==15){
    //Se a tela for igual a 15, irá desenhar a tela de Júpiter.
    jupiter()
    
  }else if (tela==16){
    //Se a tela for igual a 16, irá desenhar a tela de Saturno.
    saturno()
    
  }else if (tela==17){
    //Se a tela for igual a 17, irá desenhar a tela de Urano.
    urano()
    
  }else if (tela==18){
    //Se a tela for igual a 18, irá desenhar a tela de Netuno.
    netuno()
    
  }else if (tela==19){
    //Se a tela for igual a 19, irá desenhar a tela do Sol.
    sol()
    
  }else if (tela==20){
    //Se a tela for igual a 20, irá desenhar a primeira tela do Saiba Mais.
    telaSaibaMais1()
    
  }else if (tela==21){
        //Se a tela for igual a 21, irá desenhar a segunda tela do Saiba Mais.
    telaSaibaMais2()
  }
  
}