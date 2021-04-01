console.log("\n \n olá eu sou o Robô Covid... \n \n ");
console.log(" E está é um medida de Segurança... \n \n");
console.log(" farei algumas perguntas para saber seu atual estado de saúde... \n \n");
console.log(" baseado nos seus resultados, será decido se você poderá entrar ou não no local... \n \n");
console.log(" vamos começar?");


// insira sua informações abaixo:
// obs: use true para sim ;
// obs: use false para não;



const seu_nome = "Diego";
const seu_idade = 90;
const sua_temperatura = 35;
const está_tossindo = true;
const está_vacinado = true;
const tem_usado_álcool_em_gel= true;
const está_usando_mascara = true;




































































let processo1= true;
let processo2= true;
let processo3= true;

let acesso1= false;
let acesso2= false;
let acesso3= false;


console.log(" vamos lá " + seu_nome + " começarei o processo de scanner \n \n");
console.log(" scanned... \n \n");
console.log(" scanned... \n \n");
console.log(" verificando resultados... \n \n");

if(seu_idade < 70 && sua_temperatura < 37.8){
    console.log(" primeiro processo: esta OK!!! \n \n") 
    processo1=true;
}
else if (está_usando_mascara == true && tem_usado_álcool_em_gel == true && sua_temperatura < 37.8 ){
        console.log(" primeiro processo: esta OK!!! \n \n")
        processo1=true;
}
else {console.log(" !!!!ACESSO NEGADO 1!!!!\n \n " + seu_nome + " você não se enquadra nos requisitos necessários \n \n")
     processo1=false;
     acesso1= true
     
 }




if(está_tossindo == false && está_vacinado == true && processo1 == true){
    console.log(" segundo processo: esta OK!!! \n \n") 
    processo2=true;
}
else if (está_usando_mascara == true && tem_usado_álcool_em_gel == true &&  está_vacinado == true ){
        console.log(" segundo processo: esta OK !!! \n \n")
        processo2=true;
}
else if (acesso1== false ){console.log(" !!!!ACESSO NEGADO 2!!!!\n \n " + seu_nome + " você não se enquadra nos requisitos necessários \n \n")
        processo2=false; 
        acesso2= true;
}



if(está_usando_mascara == true && tem_usado_álcool_em_gel ==  true && processo1 ==true && processo2==true){
    console.log(" último processo: esta OK !!! \n \n Acesso Concedido, pode entrar " + seu_nome) 
}
else if (acesso1 == false && acesso2 == false){console.log(" !!!!ACESSO NEGADO 3!!!!\n \n " + seu_nome + " você não se enquadra nos requisitos necessários \n \n")}

