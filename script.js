var prompt = require('prompt-sync')();

// variaveis ultilizadas

let user = [];
let userArmz = [];
let cpuArmz = [];

let userGanhou = '';
let cpuGanhou = '';
let empate = '';

let rodadas = '';

let jogadasUser = [];
let jogadasCPU = [];



function iniciar2(){
    console.log('_______GAME JOKEIPO________')
    rodadas = +prompt('Quantas rodadas irá jogar: ');
}


function iniciar(){

        for (let qr = 0; qr < rodadas; qr++){
                while (true){
                        user = prompt('Pedra, Papel ou Tesoura: ')
                                        
                            if (
                                user.trim().toLowerCase() == "pedra" ||
                                user.trim().toLowerCase() == "papel" ||
                                user.trim().toLowerCase() == "tesoura"
                                ) {
                                break;
                                }
                                console.log(" Digite: Pedra, Papel ou tesoura");
                                } 
                                          
                                
                                // adicionando respostas em numericas, detro array para serem reutilizadas.
                                if  (user == 'pedra'){
                                    userArmz.push(1);
                                    cpuArmz.push(Math.floor(Math.random() * 3 + 1))
                                    }
                            
                                else if (user == 'papel'){
                                userArmz.push(2);
                                cpuArmz.push(Math.floor(Math.random() * 3 + 1))
                                }

                                else if (user == 'tesoura'){
                                        userArmz.push(3);
                                        cpuArmz.push(Math.floor(Math.random() * 3 + 1))
                                    }
                                }

             // rodadas dos usuarios e armazenando quantidades de vezes ganhas

            for (let quanT = 0; quanT < rodadas; quanT++){
                    if ( userArmz[quanT] == cpuArmz[quanT]){
                        empate++
                        console.log('empate')
                    }
                    else if( userArmz[quanT] == 1 && cpuArmz[quanT] == 2 ){
                            cpuGanhou++
                           console.log('Computador ganhou ')
                    }

                    else if ( userArmz[quanT] == 1 && cpuArmz[quanT] == 3 ){
                        userGanhou++
                        console.log('usuario ganhou ');
                    }
                
                    else if ( userArmz[quanT] == 1 && cpuArmz[quanT] == 2 ){
                        cpuGanhou++
                        console.log('Computador ganhou');
                    }
                    
                    else if ( userArmz[quanT] == 2 && cpuArmz[quanT] == 1){
                        userGanhou++
                        console.log('Usuario ganhou')
                }

                    else if ( userArmz[quanT] == 2 && cpuArmz[quanT] == 3){
                        cpuGanhou++
                        console.log('Computador ganhou')
                    }

                    else if ( userArmz[quanT] == 3 && cpuArmz[quanT] == 1){
                        userGanhou++
                        console.log('Usuario ganhou')
                    }
                    else if ( userArmz[quanT] == 3 && cpuArmz[quanT] == 2){
                        userGanhou++
                        console.log('Usuario ganhou')
                    }                
                }
                
                
                // armazenando respostas dentro do Array jogadorUser
                for (let quanTdois = 0; quanTdois <= rodadas; quanTdois++){
                    
                    
                    
                    if ( userArmz[quanTdois] == 1){
                        jogadasUser.push('pedra');
                    }
                    else if ( userArmz[quanTdois] == 2){
                        jogadasUser.push('papel');
                    }
                    else if ( userArmz[quanTdois] == 3){
                        jogadasUser.push('tesoura');
                    }
            
                }

                // armazenando respostas dentro do Array jogadasCPU
                for (let quanTtres = 0; quanTtres <= rodadas; quanTtres++){
            
                if( cpuArmz[quanTtres] == 1){
                    jogadasCPU.push('Pedra');
                }
                else if ( cpuArmz[quanTtres] == 2){
                    jogadasCPU.push('papel');
                }
                else if ( cpuArmz[quanTtres] == 3){
                    jogadasCPU.push('tesoura');
                }
                
            }
               
               
               
                console.log("\n"+'Jogas do Usuario:    '+ jogadasUser);
                console.log('Jogas do Computador: '+ jogadasCPU+"\n");

                
                
                if(userGanhou > cpuGanhou){
                    console.log("\n"+'Usuário é o vencedor'+"\n")
                }
                else if(userGanhou < cpuGanhou){
                    console.log("\n"+'Computador é o vencedor'+"\n")
                }
                else if(userGanhou == cpuGanhou){
                    console.log("\n"+'Empate de Ambos'+"\n")
                }
                else if(userGanhou == cpuGanhou == empate){
                    console.log("\n"+'Empate de Ambos'+"\n")
                }
                
                
                
                console.log('Usuario ganhou: '+userGanhou);
                console.log('Computador ganhou: '+cpuGanhou);
                console.log('Empate : '+empate);



           
               let jogarn = '';

                while(true){
                      jogarn = prompt('Deseja jogar novamente ? digite S para SIM, N para NÃO: ')
                
                    if (jogarn.trim().toLowerCase() == 's' ||
                        jogarn.trim().toLowerCase() == 'n'
                    ){
                        break;
                    }
                    console.log("Digite S para SIM ou N para NÃO: ");
                    }


                
                    if ( jogarn == 's'){
                       

                        // retornando variaveis vazias 
                       
                        user = [];
                        userArmz = [];
                        cpuArmz = [];
                
                        userGanhou = '';
                        cpuGanhou = '';
                        empate = '';
                
                        rodadas = '';
                        
                        jogadasUser = [];
                        jogadasCPU = [];
                       
                        iniciar2();
                        iniciar();
                        
                        
                    }
                    else if( jogarn == 'n'){

                    }
}
                
iniciar2();
iniciar();