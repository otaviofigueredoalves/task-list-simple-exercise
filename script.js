const input = document.querySelector('input') //get input
const button = document.querySelector('button') //get button
const ul = document.querySelector('ul'); //get ul

// ADICIONAR LISTA
const adicionar = () =>{
    const newLi = document.createElement('li'); //create new li element
    newLi.innerHTML = input.value; //put content in new li element
    ul.appendChild(newLi); // put new li element in ul element
}
input.addEventListener("keydown",(e) =>{
    if(e.key === 'Enter' && input.value != ""){ // execute program just if the user press Enter and the input.value with input unlike null
        adicionar(); // call the function
        input.value = ''; // reset input.value
    }

})
// LIMPAR LISTA
const limpar = () =>{
    while (ul.firstChild){ //while ul have first-childs
        ul.removeChild(ul.firstChild); //remove all first-childs in ul
    }
}
button.addEventListener('click',limpar) //click action execute call the function



// ERRO QUE EU ENFRENTEI ANTES DE CONSEGUIR

// const ul = document.querySelector('ul');
// const newLi = document.createElement('li');
// const adicionar= () =>{
   
//     newLi.innerHTML = input.value;
//     ul.appendChild(newLi);
// }

// NÃO ERA POSSÍVEL ADICIONAR UM QUARTO LI, TODA VEZ QUE EU TENTAVA ATUALIZAVA O TERCEIRO LI ADICIONADO. ISSO ACONTECEU, POIS TODA VEZ QUE EU CHAMAVA A FUNÇÃO, ELA SEMPRE ENVIAVA O ELEMENTO CRIADO PARA A MESMA POSIÇÃO DENTRO DA LISTA. PARA CORRIGIR ISSO, COLOQUEI A CONST UL E NEWLI DENTRO DA FUNÇÃO ANÔNIMA ADICIONAR, DESSA FORMA, O ELEMENTO É CRIADO, RECEBE UM VALOR INTERNO E É ENVIADO PARA A LISTA


