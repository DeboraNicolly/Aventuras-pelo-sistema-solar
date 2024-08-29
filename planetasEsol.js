function mercurio(){
  //Função que cria a tela do planeta Mercúrio
  criarPlaneta(mercurioPlaneta, "Mercúrio", 440, 310, 35, 350);
  text("    Mercúrio é o planeta mais próximo do Sol e"+"\n"+"o menor do sistema solar. Ele é rochoso, cheio"+"\n"+"de crateras e não possui nenhuma lua. No"+"\n"+"passado, Mercúrio foi alvo frequente de"+"\n"+"asteroides e cometas devido à ausência de"+"\n"+"uma atmosfera, embora hoje possua uma fina"+"\n"+"camada atmosférica composta de hélio e"+"\n"+"sódio. Com um diâmetro de 4.880 km,"+"\n"+"Mercúrio completa sua órbita em 88 dias."+"\n"+"A temperatura em sua superfície varia de"+"\n"+"-180°C a 420°C. ", 35, 45)
  
  text("  O nome Mercúrio foi ", 200, 350);
  text("atribuído pelos romanos em referência ao"+"\n"+"mensageiro dos deuses, conhecido por sua"+"\n"+"rapidez, assim como o planeta que se move"+"\n"+"mais depressa do que os outros.", 35, 372.5)
}

function venus(){
    //Função que cria a tela do planeta Vênus
  criarPlaneta(venusPlaneta, "Vênus", 465, 310, 34, 320);
  textSize(19)
  text("    Vênus é o segundo planeta a partir do Sol."+"\n"+"Ele é um planeta rochoso, com uma superfície"+"\n"+"composta por vales, altas montanhas e vulcões."+"\n"+"Vênus não possui luas e tem uma atmosfera"+"\n"+"densa, composta principalmente de dióxido de"+"\n"+"carbono, com quase nenhum vapor de água e"+"\n"+"pouco oxigênio. Sua translação dura 225 dias, e"+"\n"+"sua rotação ocorre no sentido anti-horário. Ele é"+"\n"+"o planeta mais quente do sistema solar, com"+"\n"+"temperaturas que podem atingir até 460°C.", 30, 50);
  text("Dependendo da época,", 205, 318)
  text('ele aparece logo após o pôr-do-sol ou pouco'+'\n'+'antes de ele nascer, ou seja, sempre na alvorada'+'\n'+'do dia, ou alva, o que levou ao nome de'+'\n'+'"estrela da alva". ', 30, 342)
}

function terra(){
    //Função que cria a tela do planeta Terra
  criarPlaneta(terraPlaneta, "Terra", 465, 310, 35, 340);
  text("    A Terra é o quinto maior planeta do sistema"+"\n"+"solar e o terceiro a partir do Sol. Ele é"+"\n"+"um planeta rochoso, o único conhecido que"+"\n"+"possui água em sua superfície e uma"+"\n"+"atmosfera capaz de sustentar a vida. A"+"\n"+"atmosfera terrestre é composta por 78% de"+"\n"+"nitrogênio, 21% de oxigênio e 1% de outros"+"\n"+"componentes. A Terra possui apenas um"+"\n"+"satélite natural, a Lua. Sua translação ao redor"+"\n"+"do Sol dura 365 dias, e a temperatura média é"+"\n"+"de 14°C.", 30, 50)
  text("A Terra é o único planeta", 210, 338)
  text("do sistema solar com placas tectônicas ativas.", 34, 365)
}

function marte(){
    //Função que cria a tela do planeta Marte
  criarPlaneta(martePlaneta, "Marte", 465, 310, 35, 300);
  text("    Marte é o quarto planeta a partir do Sol e o"+"\n"+"segundo menor do sistema solar. É um planeta"+"\n"+"rochoso com uma atmosfera que contém"+"\n"+"pouco ar respirável. Marte possui dois satélites"+"\n"+"naturais: Fobos e Deimos. No passado, Marte"+"\n"+"era semelhante à Terra, mas mudanças"+"\n"+"climáticas o transformaram. Sua translação"+"\n"+"dura 687 dias, e a temperatura média é de"+"\n"+"-60°C.", 28, 50)
  
  text("Marte é essencial para", 210, 297)
  text("contribuir com a exploração espacial e com os"+"\n"+"estudos humanos sobre o universo, uma vez"+"\n"+"que o astro se encontra próximo da Terra e já"+"\n"+"recebeu algumas sondas exploratórias.", 35, 320)
}

function sol(){
    //Função que cria a tela do Sol
  criarPlaneta(solEstrela, "Sol", 494, 310, 35, 390)
  text("    O Sol é a estrela central do sistema solar,"+"\n"+"atraindo todos os corpos ao seu redor. É uma"+"\n"+"anã amarela, o que significa que é uma estrela"+"\n"+"de tamanho médio. As temperaturas na"+"\n"+"superfície do Sol atingem até 5500°C,"+"\n"+"enquanto seu núcleo pode chegar a"+"\n"+"impressionantes 15 milhões de °C. A"+"\n"+"composição do Sol é de 78,5% de hidrogênio"+"\n"+"e 19,7% de hélio, com o restante composto"+"\n"+"principalmente por oxigênio, carbono e ferro."+"\n"+"Toda a energia do Sol é gerada pelo processo"+"\n"+"de fusão nuclear de hidrogênio, que produz"+"\n"+"núcleos de hélio.", 30, 50)
  text("A luz do Sol leva cerca de", 210, 388)
  text("8 minutos para chegar à Terra.", 35, 410)
}

function jupiter(){
    //Função que cria a tela do planeta Júpiter
  criarPlaneta(jupiterPlaneta, "Júpiter", 465, 330, 35, 320)
  text("    Júpiter é o maior planeta do sistema solar e"+"\n"+"o quinto a partir do Sol, é um gigante gasoso"+"\n"+"com uma massa superior ao dobro de todos os"+"\n"+"outros planetas combinados. Sua translação"+"\n"+"ao redor do Sol leva 12 anos. Júpiter tem uma"+"\n"+"rotação muito rápida, com um dia durando"+"\n"+"apenas 10 horas. Ele possui 79 satélites"+"\n"+"naturais, sendo os mais conhecidos Io, Europa,"+"\n"+"Ganimedes e Calisto. A temperatura média em"+"\n"+"Júpiter é de -108°C.", 30, 50)
  text("A Grande Mancha", 210, 320)
  text("Vermelha, visível mesmo com telescópios"+"\n"+"amadores da Terra, é uma tempestade"+"\n"+"gigante semelhante a um furacão que já dura"+"\n"+"mais de 300 anos.", 35, 340)
}

function saturno(){
    //Função que cria a tela do planeta Saturno
  criarPlaneta(saturnoPlaneta, "Saturno", 450, 280, 35, 300)
  text('Saturno é o sexto planeta a partir do sol e'+'\n'+'possui uma translação de 30 anos. É um'+'\n'+'planeta gasoso e é o que possui mais anéis,'+'\n'+'compostos principalmente de gelo, poeira e'+'\n'+'rochas. O "planeta dos anéis" é o mais distante'+'\n'+'que ainda pode ser visto a olho nu. Saturno'+'\n'+'possui 145 satélites naturais, sendo o mais'+'\n'+'famoso Titã. Sua temperatura média é de'+'\n'+'-140°C.', 30, 50)
  text("Apesar de ser um", 210, 297)
  text("gigante gasoso, Saturno é notável por sua"+"\n"+"baixa densidade. Se você pudesse encontrar"+"\n"+"um oceano grande o suficiente para Saturno,"+"\n"+"o planeta flutuaria nele, pois a densidade"+"\n"+"média de Saturno é menor que a da água.", 35, 322)
}

function urano(){
    //Função que cria a tela do planeta Urano
  criarPlaneta(uranoPlaneta, "Urano", 470, 310, 35, 360)
  text("Urano é o sétimo planeta a partir do Sol e o"+"\n"+"mais gelado do sistema solar, com uma"+"\n"+"temperatura média de -225°C. Sua translação"+"\n"+"ao redor do Sol leva cerca de 84 anos. Urano"+"\n"+"não é visível a olho nu e possui uma inclinação"+"\n"+"axial extrema, orbitando o Sol essencialmente"+"\n"+"de lado com um eixo de rotação quase paralelo"+"\n"+"ao plano de sua órbita, com um ângulo de 98°."+"\n"+"É um dos únicos planetas com rotação"+"\n"+"anti-horária, juntamente com Vênus."+"\n"+"Urano tem 27 satélites naturais conhecidos,"+"\n"+"com Oberon e Titânia sendo os maiores.", 30, 50)
  text("O planeta é", 205, 360)
  text('frequentemente chamado de'+'\n'+'"gigante de gelo", pois cerca de 80% de sua'+'\n'+'massa é composta por uma mistura fluida de'+'\n'+'gelo, metano e amônia.', 35, 380)
}

function netuno(){
    //Função que cria a tela do planeta Netuno
  criarPlaneta(netunoPlaneta, "Netuno", 460, 310, 35, 334)
  text("Netuno é o oitavo planeta a partir do Sol e um"+"\n"+"gigante gasoso. É o planeta mais distante do"+"\n"+"sistema solar, situado a, aproximadamente,"+"\n"+"4,5 bilhões de quilômetros do Sol. Sua"+"\n"+"translação ao redor do Sol leva cerca de 165"+"\n"+"anos, e sua temperatura média é de -220°C."+"\n"+"Netuno é conhecido por seus ventos extremos,"+"\n"+"que podem alcançar até 2400 km/h, o mais"+"\n"+"rápido registrado no sistema solar. O planeta"+"\n"+"possui 14 luas conhecidas, sendo Tritão a"+"\n"+"maior delas.", 30, 50)
  textSize(18)
  text("Netuno foi descoberto com", 205, 332)
  text("base em observações na órbita de Urano, que não"+"\n"+" correspondia aos modelos teóricos. A discrepância"+"\n"+"levou os astrônomos a deduzir a presença de um"+"\n"+"corpo desconhecido influenciando a órbita de"+"\n"+"Urano, resultando na identificação de Netuno há"+"\n"+"178 anos atrás.", 35, 354)
}

function criarPlaneta(imagem, astro, Xnome, Ynome, XC, YC){
  /*Função criada para auxiliar na criação das páginas dos planetas e do Sol.
  
  ° imagem = É o parâmetro que inclui o desenho do astro
  ° Astro = É o parâmetro que inclui o nome do astro
  ° Xnome = É o que vai definir a posição do nome no eixo X
  ° Ynome = É o que vai definir a posição do nome no eixo Y
  ° XC = É o que vai definir a posição do texto "Curiosidade: " no eixo X
  ° YC = É o que vai definir a posição do texto "Curiosidade: " no eixo Y
  */
  
  background(fundoCeu); //Define o plano de fundo
  
  image(imagem, 450, 100) //Define a posição da imagem
  image(seta, 40, 500) //Define a posição da seta
  
  //Constrói o retângulo no qual os textos ficarão
  fill("#a1c6ea")
  rect(20, 20, 400, 450, 10)
  
  //Define o estilo do nome do astro
  fill("#fff")
  textSize(60)
  textFont("Jersey 10")
  text(astro, Xnome, Ynome)
  
  //Define o estilo de "Curiosidade: "
  stroke("#aed1e6")
  textFont("Matemasie")
  textSize(25)
  fill("#2E558D")
  text("Curiosidade: ", XC, YC)
  
  //Define o estilo do corpo do texto
  stroke(0)
  fill("#04080f")
  textFont("Anek Devanagari")
  textSize(20)
}